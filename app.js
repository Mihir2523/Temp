require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/install', (req, res) => {
    const { dependencies } = req.body;

    const depsArray = dependencies.split(',').map(dep => dep.trim()).filter(dep => dep);

    if (depsArray.length === 0) {
        return res.json({ message: 'No dependencies provided.' });
    }

    const requirementsPath = path.join(__dirname, 'requirements.txt');
    fs.writeFileSync(requirementsPath, depsArray.join('\n'));

    exec(`sudo apt install python3-${requirementsPath}`, { encoding: 'utf8' }, (error, stdout, stderr) => {
        if (error) {
            return res.json({ message: `Error installing dependencies: ${stderr}` });
        }
        res.json({ message: `Successfully installed dependencies: ${stdout}` });
    });
});

app.post('/run', (req, res) => {
    const { code } = req.body;

    const filePath = path.join(__dirname, 'temp.py');
    fs.writeFileSync(filePath, code);

    exec(`python ${filePath}`, { encoding: 'utf8' }, (error, stdout, stderr) => {
        if (error) {
            return res.json({ output: stderr });
        }

        const imagePath = path.join(__dirname, 'output.png');
        if (fs.existsSync(imagePath)) {
            const image = fs.readFileSync(imagePath).toString('base64');
            res.json({ output: stdout, image });
        } else {
            res.json({ output: stdout });
        }
        if(fs.existsSync(imagePath)){
            fs.unlink(imagePath,(err)=>{
                if(err){
                    console.log("Error While Deleting The Graph");
                }
            });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});