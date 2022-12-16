import './App.css';
import { BsPalette } from "react-icons/bs";
import CircleForm from './components/CircleForm';
import { useState } from 'react';
import CircleGroupList from './components/CircleGroupList';

function App() {
 
  const [groups, setGroups] = useState([]);  

  const submitHandle = group => {
    if(group.name.trim()){
      group.name = group.name.trim();
      const actGroup = [group, ...groups];
      setGroups(actGroup);
      
      localStorage.setItem(group.id, JSON.stringify(group));   
    }
  }

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <h1 className="title"><BsPalette /> Color palette generator</h1>
      </div>
      <div className='form-container'>
        <CircleForm onSubmit={submitHandle}/>
      </div>
      <div className='list-container'>
        
        <h3 className='second-title'>Saved</h3>
          <CircleGroupList />      
          
      </div>
    </div>
  );
}

export default App;
