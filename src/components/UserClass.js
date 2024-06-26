import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };

    // console.log("child constructor");
  }

  async componentDidMount() {
    // API call

    const data = await fetch("https://api.github.com/users/sansavvy");
    const user = await data.json();

    this.setState({
      userInfo: user,
    });

    // console.log(user);
  }

  componentDidUpdate() {
    // console.log("component did update");
  }

  componentWillUnmount() {
    // console.log("component will Unmount");
  }
  render() {
    const { name, location } = this.state.userInfo;

    return (
      <div className="m-4 p-4 w-[250px] bg-teal-100 rounded-lg">
        <img
          className="w-24 h-24 rounded-lg"
          src="https://avatars.githubusercontent.com/u/68282393?v=4"
        ></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: vishagasan3108@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
