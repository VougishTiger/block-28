import {Link} from "react-router-dom";

const Nav=() =>{
  return (
    <nav>
      <a><Link to="/">Home!</Link></a>
      <a><Link to="/blue">Blue!</Link></a>
      <a><Link to="/Red">Red!</Link></a>
    </nav>
  )
}
export default Nav