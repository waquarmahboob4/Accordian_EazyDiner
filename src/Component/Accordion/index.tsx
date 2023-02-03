import React, { useState } from "react";
import { AccordionContent } from "./content";

export const Accordion = ({ key, title, content, activePanel }: any) => {
  const [isActive, setIsActive] = useState(activePanel);

  return (
    <div id={key} className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>

        <div>{isActive ? "^" : "⌄"}</div>
      </div>
      {isActive && (
        <AccordionContent>
            {content}
        </AccordionContent>
      )}
    </div>
  );
};
export default Accordion;
