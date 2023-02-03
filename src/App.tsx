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
      <Accordian key={`0`} title={'S1'} 
        content={
          <>
            <h1>Hello</h1>
            {
              Array(4).fill(4).map(() => {
                return(
                  <img src='https://source.unsplash.com/random/?Cryptocurrency&1' alt='r'/>
                )
              })
            }
          </>
        } 
        activePanel={true}
      />

    <Accordian key={`1`} title={'S2'} 
        content={
          <>
            <h1>Hello</h1>
            {
              Array(4).fill(4).map(() => {
                return(
                  <img src='https://source.unsplash.com/random/?Cryptocurrency&1' alt='r'/>
                )
              })
            }
          </>
        } 
        activePanel={false}
      />
      
    </div>
    </div>
    
  );
}

export default App;
