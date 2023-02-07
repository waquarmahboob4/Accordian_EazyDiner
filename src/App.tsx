import { useState } from "react";
import Data from "./Component/Accordion/content.json";
import Accordian from "./Component/Accordion/Accordian";
import { AccordionContent } from "./Component/Accordion/AccordianContent";
import "./App.css";

function App() {
  const [activeList, setActiveList] = useState<Array<string>>(["0"]);

  return (
    <div className="accordion">


      {Data.map((data, index) => (
        <Accordian
          key={index}
          id={`${index}`}
          title={data.title}
          setActiveList={setActiveList}
          activeList={activeList}
        >
          {activeList.includes(`${index}`) && (
            <AccordionContent id={`${index}`}>{data.content}</AccordionContent>
          )}
        </Accordian>
      ))}


      <Accordian
        id={`5`}
        title="Section 5"
        setActiveList={setActiveList}
        activeList={activeList}
      >
        {activeList.includes("5") && (
          <AccordionContent id={`5`}>
            <h1>Amazing</h1>
          </AccordionContent>
        )}
      </Accordian>


      <Accordian
        id={`6`}
        title="Section 6"
        setActiveList={setActiveList}
        activeList={activeList}
      >
        {activeList.includes("6") && (
          <AccordionContent id={`6`}>
            <img
              src="https://source.unsplash.com/random/?Cryptocurrency&1"
              alt="image1"
            />
          </AccordionContent>
        )}
      </Accordian>


    </div>
  );
}

export default App;
