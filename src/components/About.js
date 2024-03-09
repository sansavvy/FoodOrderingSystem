import { User } from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <User name={"Lakshmi fnc"} loc={"Chennai, Tamil Nadu"} />
      <UserClass name={"Lakshmi class"} loc={"Wayand, Kerala"} />
    </div>
  );
};

export default About;
