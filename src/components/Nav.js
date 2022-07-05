import { FaGlobeAmericas } from "react-icons/fa";

const navBar = {
  backgroundColor: "#2cb493",
  color: "white",
  padding: 15,
  marginBottom: 80,
  width: "100%",
};
const title = {
  fontSize: 22,
  position: "relative",
  bottom: 3,
  fontWeight: "bold",
};
const Nav = () => {
  return (
    <nav style={navBar}>
      <center>
        <FaGlobeAmericas style={{ fontSize: 25, marginRight: 10 }} />
        <span style={title}>My Travel Journal</span>
      </center>
    </nav>
  );
};

export default Nav;
