import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent component did mount");
  }

  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About</h1>
        <p>This is a About Component</p>
        <UserClass name={"Lakshmi class"} loc={"Wayand, Kerala"} />
      </div>
    );
  }
}

export default About;
