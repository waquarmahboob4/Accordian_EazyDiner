export const Accordion = ({
  children,
  id,
  title,
  setActiveList,
  activeList,
}: any) => {
  const changeActivePanel = () => {
    activeList.includes(`${id}`) ? setActiveList([]) : setActiveList([`${id}`]);
  };

  return (
    <div id={id} className="accordion-item">
      <div className="accordion-title" onClick={changeActivePanel}>
        <div>{title}</div>
        <div>{activeList.includes(`${id}`) ? "^" : "⌄"}</div>
      </div>
      {children}
    </div>
  );
};
export default Accordion;
