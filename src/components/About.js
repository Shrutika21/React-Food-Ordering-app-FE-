import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <p> Welcome to the Food-Mood 🚀</p>
      <Outlet></Outlet>
    </div>
  );
};

export default About;
