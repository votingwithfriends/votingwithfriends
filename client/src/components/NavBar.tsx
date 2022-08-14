import {  Link } from "react-router-dom";


const NavBar= () =>{
  return (
  <div className="flex justify-center mt- translate-y-16">

    {/*WILL UPDATE - These links will change according to the pages. Dummy link names in for the mean time.*/}
    <ul class="pr-7">
      <Link to="/">Dashboard</Link>
    </ul>
    <ul class="pr-7">
      <Link to="/create-new-poll">Create New Poll</Link>
    </ul>
    <ul class="pr-7">
      <Link to="/view-polls">View Polls</Link>
    </ul>
    <ul class="pr-7">
      <Link to="/friends-polls">Friends Polls</Link>
    </ul>
  </div>
  );
}
export default NavBar;