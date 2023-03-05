import { useState } from "react";
import { Outlet } from "react-router-dom";
const Section = ({
  title,
  description,
  isVisible,
  setIsvisible,
  setInvisible,
}) => {
  return (
    <div className="bg-gray-100 border p-4 m-2 mx-10 my-2">
      <h3 className="font-bold text-orange-500">{title}</h3>
      {isVisible ? (
        <div>
          <p>{description}</p>
          <button className="underline" onClick={() => setInvisible()}>
            Hide
          </button>
        </div>
      ) : (
        <div>
          <button className="underline" onClick={() => setIsvisible()}>
            Show
          </button>
        </div>
      )}
    </div>
  );
};
const About = () => {
  const [visibleSection, SetVisibleSection] = useState("project");
  return (
    <div>
      <Section
        title={"Food-Mood Project"}
        description={
          "Food-Mood is the front-end application based on React. It is simple online food ordring app"
        }
        isVisible={visibleSection == "project"}
        setIsvisible={() => {
          SetVisibleSection("project");
        }}
        setInvisible={() => {
          SetVisibleSection("");
        }}
      ></Section>
      <Section
        title={"About Developer"}
        description={
          "Hello!!! I am Shrutika Kulkarni. Software Engineer experienced in building Web portals and backend development in Java & Spring framework.Demonstrated history of learning new technologies at a fairly good speed.Skilled in Java, Python, Spring, Angular, JavaScript, SQL, Oracle DB, Git, Agile methodology.Other known Tech:- Databases: Oracle, Mongo- UI : JS, Angular- Cloud : Openshift"
        }
        isVisible={visibleSection == "developer"}
        setIsvisible={() => {
          SetVisibleSection("developer");
        }}
        setInvisible={() => {
          SetVisibleSection("");
        }}
      ></Section>
      <Section
        title={"React"}
        description={
          "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.Build encapsulated components that manage their own state, then compose them to make complex UIs"
        }
        isVisible={visibleSection == "react"}
        setIsvisible={() => {
          SetVisibleSection("react");
        }}
        setInvisible={() => {
          SetVisibleSection("");
        }}
      ></Section>
    </div>
  );
};

export default About;
