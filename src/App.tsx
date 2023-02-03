import React, { useState } from 'react';
import Data from "./Component/Accordion/content.json"
import Accordian from './Component/Accordion';
import './App.css';


function App() {
  const [activeList] = useState<Array<string>>(["0"])
  return (
    <div>
      <div className="accordion">
    
  {
    Data.map((ele,key)=>(
      <>
      {activeList.includes(`${key}`)?
      <Accordian key={`${key}`} title={ele.title} 
        content={ele.content} 
        activePanel={true}
      />:<Accordian key={`${key}`} title={ele.title} 
      content={<h1>hhsjsj</h1>} 
      activePanel={false}
    />}

</>
    ))
  }
      
    </div>
    </div>
    
  );
}

export default App;
