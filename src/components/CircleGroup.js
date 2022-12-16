import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import '../style/CircleGroup.css'
import Circle from './Circle'

/*<div className="remove-icon" onClick={() => removeConversion(id)}>
  <AiFillCloseCircle className = "converter-icon"/>
</div>*/

function CircleGroup({id, colors, name , selected, removeGroup}){

  if(colors){
    return(
    <>    
      <div className="not-pointer">  
        <h3>{name}</h3>
        <Circle isSelected={selected} color={colors[0]}/>  
        <Circle isSelected={selected} color={colors[1]}/>
        <Circle isSelected={selected} color={colors[2]}/>
        <Circle isSelected={selected} color={colors[3]}/>
        <Circle isSelected={selected} color={colors[4]}/>
        <AiFillCloseCircle onClick={() => removeGroup(id)}/>
      </div>
    </>
  )
  }
  
}

export default CircleGroup;