import React from "react"
import data from "./data.json"
import {useParams} from "react-router-dom"
import "./css/about.css"

export default function ServicePage(){
  const {id} = useParams();
  const Data = data[id];
  function type(a,heading,para,list,image){
    if(a == "h-para"){
      return(
        <div className="h-para">
            <h1>{heading}</h1>
            <p className="para">{para}</p>
        </div>
      )
    }else if(a == "h-para sub-head"){
      return(<div className="h-para sub-head">
            <h1>{heading}</h1>
            <p className="para">{para}</p>
        </div>)
    }else if(a == "para"){
      return(
          <p className="para">{para}</p>

      )
    }else if(a == "h-list"){
      return(
          <div  className="h-list">
            <h1>{heading}</h1>
            <ul className="simplelist">
             {
              list.map(item => <li>{item}</li>)
            } 
            </ul>
          </div>
  
      )
    }else if(a == "simplelist"){
      return(
          <ul className="simplelist">
            {
              list.map(item => <li>{item}</li>)
            }
          </ul>

      )
    }else if(a == "h-list sub-list"){
      return(
          <div  className="h-list sub-list">
            <h1>{heading}</h1>
            <ul className="simplelist">
             {
              list.map(item => <li>{item}</li>)
            } 
            </ul>
          </div>
  
      )
    }else if(a == "image-para"){
      return(
          <div className="image-para">
            <div className="h-para">
              <h1>{heading}</h1>
              <p className="para">{para}</p>
            </div>
            <img src={image} alt="images" />
          </div>
      )
    }
    return null;
  }

  return(
    <main>
      <section className="container-wrapper">
        {
          Data?(
          Data.map(item =>
              type(item.class,item.heading,item.para,item.list,item.image)
          )):(<h1 className="para">Data not found error</h1>)
        }
      </section>
    </main>
  )
}
