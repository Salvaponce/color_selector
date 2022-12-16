import { AiOutlineHeart } from "react-icons/ai";
import { useState } from 'react';
import Circle from './Circle';
import '../style/CircleForm.css'
const { v4: uuidv4 } = require('uuid');



function CircleForm(props) {

  const [colors, setColors] = useState(['', '', '', '', '']);  
  const [input, setInput] = useState('');

  const sendHandle = e => {
    e.preventDefault(); 
    const newGroup = {
      id: uuidv4(),
      colors: colors,
      name: input,
      selected: false,
    }
    setInput('');
    e.target.reset();
    props.onSubmit(newGroup);
  };

  const changeHandle = e => {
    setInput(e.target.value);
  };

  const sendColor = (id, c) => {
    let arr = colors;
    arr[id] = c;
    setColors(arr);
  };

    return(
        <form className="input-container" onSubmit={sendHandle}>

          <div>            
          <h3 className='name-container'>Name</h3>
            <input 
              className="conversion-input"
              type = 'text'
              name = 'texto'
              onChange={changeHandle}
            />
            <button type="submit" className="conversion-button"><AiOutlineHeart /></button>  
          </div>

          <div className="circle-container">            
            <Circle id={0} isSelected = {true} sendColor = {sendColor}/>
            <Circle id={1} isSelected = {true} sendColor = {sendColor}/>
            <Circle id={2} isSelected = {true} sendColor = {sendColor}/>
            <Circle id={3} isSelected = {true} sendColor = {sendColor}/>
            <Circle id={4} isSelected = {true} sendColor = {sendColor}/>
          </div>                    
        </form>
    );
}

export default CircleForm;