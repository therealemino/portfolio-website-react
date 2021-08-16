import React, {useState} from 'react'

export default function Navbar(props) {
  const [navItems,setNavItems] = useState([
      {name: 'HOME', active:true, id:"1"},
      {name: 'ABOUT', active:false, id:"2"},
      {name: 'PORTFOLIO', active:false, id:"3"},
      {name: 'RESUME', active:false, id:"4"},
      {name: 'CONTACT', active:false, id:"5"}
  ]);

  const activeNavStyle = "bg-dark-blue dark:bg-light-brownish-purple text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xs md:text-sm font-medium cursor-pointer";
  const normalNavStyle = "text-navbar-brown dark:text-gray-300 hover:bg-medium-blue dark:hover:bg-brownish-purple hover:text-gray-300 px-3 py-2 rounded-md text-xs md:text-sm font-medium duration-300 cursor-pointer";

  const navList = navItems.map((item) =>
    <a href={item.href} className = {item.active ? activeNavStyle : normalNavStyle} key={item.id} id={item.id} onClick={toggleActive} >{item.name}</a>
  );

  const navListMobile = navItems.map((item) =>
    <a href={item.href} className = {`${item.active ? "bg-dark-green dark:bg-light-brownish-purple text-gray-300" : "text-navbar-brown"} " focus:outline-none duration-300 block dark:text-gray-300 font-medium hover:bg-medium-green hover:text-gray-300 dark:hover:bg-brownish-purple px-3 py-2 rounded-md text-xs md:text-sm font-medium cursor-pointer"`} key={item.id} id={item.id} onClick={toggleActive}>{item.name}</a>
  );

  function toggleActive (e) {
      // console.log(e.target.id);
    if (e.target.id === "1") {
        props.homeScroll();
    } else if (e.target.id === "2") {
      props.aboutScroll();
    } else if (e.target.id === "4") {
      props.resumeScroll();
    } else if (e.target.id === "3") {
      props.portfolioScroll();
    } else {
        props.contactScroll();
    }

      setNavItems(prevValues => {
        //   console.log(prevValues);
          const newNavList = prevValues.map (item => {
              if (item.id === e.target.id) {
                  return {
                      name : item.name,
                      active : true,
                      id : item.id
                  }

              } else {
                  return {
                      name : item.name,
                      active : false,
                      id : item.id
                  }
              }
          })
        //   console.log(newNavList);
          return newNavList
      });
      e.preventDefault();
  };

  const [isOpen,setIsOpen] = useState(false);

  function toggleNavList () {
    setIsOpen(!isOpen);
  }

    return (
        <header className="navbar w-full sticky top-0 z-50">
          <div className="">
            <nav className="bg-light-green md:bg-light-blue dark:bg-dark-brown duration-300">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="block md:hidden text-gray-800 dark:text-gray-300 font-display font-nunito text-2xl"><a href="/">therealemino</a></div>
                    <div className="hidden md:block"> {/* HIDE CONTENT (expanded nav-list) ON PHONES. SHOW FOR LAPTOPS AND TABLETS*/}
                      {navList}
                    </div>
                  </div>

                  <div className="flex"> {/*MOBILE TOGGLE BUTTON */}
                      <div className="ml-10 flex items-baseline space-x-4">
                          <button className="text-gray-800 dark:text-gray-300 focus:outline-none" onClick={props.toggleDarkMode}>{/*DARK MODE TOGGLE BUTTON */}
                              <span className={`${props.darkMode ? "fa-sun-o" : "fa-moon-o"} " fa p-2 text-2xl font-thin"`}></span>
                          </button>
                          <button className="text-gray-800 dark:text-gray-300 focus:outline-none md:hidden" onClick={toggleNavList}>{/*MOBILE TOGGLE BUTTON */}
                              <span className="fa fa-bars p-2 text-2xl font-thin"></span>
                          </button>
                      </div>
                  </div>
                </div>
                <div className={`${isOpen ? "block" : "hidden"} " md:hidden px-1 pt-2 pb-4 duration-300"`}>{/* SHOW CONTENT (expanded nav-list) ON PHONES. HIDE FOR LAPTOPS AND TABLETS*/}
                  {navListMobile}
                </div>
              </div>
            </nav>
          </div>

        </header>
    )
}
