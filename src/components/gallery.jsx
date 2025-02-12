import React from "react"
import "./css/gallery.css"
export default function Gallery(){
  const [img,setImg] = React.useState([]);
  React.useEffect(()=>{
    let temp = []
    for(let i=0;i<19;i++){
      temp = [...temp,{src:`${i+3}.jpg`,text:"Image"}]
    }
    setImg(temp)
  },[])
  return(
    <main>
    <section className="mainhero">
    <h1>Our Service Gallery</h1>
      <section className="hero heroaddon">
          {
            img.map(img => (
              <section className="bigcard">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                />
              </section>
            ))

          }
      </section>
      </section>
    </main>
  )
}