


const NavBar= () =>{
  return (
    <nav className="px-2 bg-slate-50 border-gray-200 dark:bg-deep-dark dark:bg-deep-dark">
    <div className="container flex flex-wrap justify-between items-center mx-auto">
      <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500" aria-controls="navbar-multi-level" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
      </button>
      <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
        <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-slate-50 dark:bg-gray-800 md:dark:bg-deep-dark dark:border-gray-700">
          <li>
            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-300 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Dashboard</a>
          </li>
          <li>
              <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-300 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Polls <svg className="ml-1 w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
              
              {/*POLLS DROP DOWN MENU */}
              {/*I FIGURED POLLS WOULD BE BEST SUITED IN A DROPDOWN TO SAVE ON SPACE. CREATE POLL, VIEW POLL, ECT.  */}
              <div id="dropdownNavbar" className="hidden z-10 w-44 font-normal bg-slate-50 rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">

                {/*DROP DOWN LIST*/}
                  <ul className="py-1 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                    
                    {/*VIEW POLL*/}
                    <li>
                      <a href="#" className="block py-2 px-4">View Polls</a>
                    </li>

                    {/*CREATE NEW POLL*/}
                    <li>
                    <a href="#" className="block py-2 px-4">Create New Poll</a>
                  </li>

                  {/*DELETE POLL....ECT */}
                  <li>
                    <a href="#" className="block py-2 px-4">Delete Poll</a>
                  </li>
                </ul>
            </div>
        </li>

        {/*Link 1*/}
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-300 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Link</a>
        </li>

        {/*Link 2*/}
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-300 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Link</a>
        </li>

        {/*Link 3*/}
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-300 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Link</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}
export default NavBar;