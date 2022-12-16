import React from "react";
import '../style/Circle.css';
import {useState} from "react";
import { SketchPicker } from 'react-color';

function Circle({id, isSelected, color, sendColor}) {


  const [select, setSelect] = useState('false');
  const[circleColor, setCircleColor] = useState(color);

  const changeState = () =>{    
    if(isSelected){
      setSelect(!select);
    }        
  };

  const takeColor = e => {
    if(!select){
      setCircleColor(e.hex);
    } 
  };

  return(    
      <div className='circle-container'>
        <button style={{backgroundColor: `${circleColor}`}} className={select ? 'average-circle':'bigger-circle'} onClick={()=> {changeState(); sendColor(id, circleColor); }}>
        </button> 
         <div className={!select ? 'shows': 'not-shows'}>
          <SketchPicker className="picker-container" onChange={takeColor}/> 
        </div>    
      </div> 
  );
}

export default Circle;
