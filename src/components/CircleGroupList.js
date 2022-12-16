import React, {useState} from "react";
import CircleGroup from "./CircleGroup";
import '../style/CircleGroupList.css'


function CircleGroupList() {
  const [circleGroup, setCircleGroup] = useState([])
  
  const removeGroup = id => {   
    const actCircleGroup = circleGroup.filter(circles => circles.id !== id);
    setCircleGroup(actCircleGroup);
    localStorage.removeItem(id);
  }

  return(
    <>
      <div className="circle-group-list-contenedor">
        {
          Object.entries(window.localStorage).map(([k,v]) => 
          <CircleGroup 
            key = {k}
            id = {k}
            colors = {JSON.parse(v).colors}
            name = {JSON.parse(v).name}
            selected = {JSON.parse(v).selected}
            removeGroup = {removeGroup}/>)
        }
      </div>
    </>
    );
}

export default CircleGroupList;