import {  Link } from "react-router-dom";


const NavBar= () =>{
  return (
  <div className="flex justify-center mt-">

    {/*BASIC NAVBAR SETUP*/}
    {/*LINKS will be updated, and names will change. */}
    <ul className="pr-7">
      <Link to="/">Dashboard</Link>
    </ul>
    <ul className="pr-7">
      <Link to="/create-new-poll">Create New Poll</Link>
    </ul>
    <ul className="pr-7">
      <Link to="/view-polls">View Polls</Link>
    </ul>
    <ul className="pr-7">
      <Link to="/friends-polls">Friends Polls</Link>
    </ul>
  </div>
  );
}
export default NavBar;