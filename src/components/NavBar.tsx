import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { ToggleTheme } from "./ToggleTheme";
import { ENLACES } from "../assets/content";

const Navbar = () => {
  const [active, setActive] = useState(ENLACES.nav[0].name);
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isNavbarHidden, setIsNavbarHidden] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;
    let scrollTimeout: any;

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop != lastScrollTop) {
        setIsNavbarHidden(false);
      }
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      lastScrollTop = scrollTop;

      // Restablecer el estado de scrolling después de un tiempo sin scroll
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsNavbarHidden(true);
      }, 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      {toggle && <div onClick={() => setToggle(!toggle)}
        className={`z-50 backdrop-blur-md backdrop-saturate-150 bg-overlay/30 w-screen h-screen fixed inset-0`}></div>}
      <nav
        className={`font-Poppins sm:px-16 px-3 sm:px-6 w-full flex items-center fixed z-50 transition-all ease-in-out duration-300 
      ${scrolled ? "backdrop-blur-md backdrop-saturate-150 bg-overlay/30 py-2 sm:py-4 border-b border-border" : "bg-transparent py-3 sm:py-5"
          } ${!isNavbarHidden ? '-top-12' : 'top-0'}`}
      >
        <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
          <a
            href='/'
            className='flex items-center gap-2'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <p className={`text-textPrimary font-bold cursor-pointer flex text-lg`}>
              {"</Emanuel>"} &nbsp;
            </p>
          </a>

          <ul className='list-none hidden sm:flex flex-row gap-10'>
            <li><ToggleTheme /></li>
            {ENLACES.nav.map(( nav ) => (
              <li
                key={nav.name}
                onClick={() => setActive(nav.name)}
              >
                <a href={nav.href}
                  className={`${active === nav.name ? "text-textPrimary font-[600]" : "text-textSecondary font-[400]"
                    } cursor-pointer text-xl`}
                >{nav.name}</a>
              </li>
            ))}
          </ul>

          <div className='sm:hidden flex flex-1 justify-end items-center'>
            <Button isIconOnly aria-label="menu"
              className="rounded-full p-0 text-xl"
              onClick={() => setToggle(!toggle)}>
              <HiOutlineMenu />
            </Button>

            <div
              className={`${!toggle ? "-right-[290px]" : "-right-10"
                } transition-all duration-300 bg-primary border border-border absolute top-0 mx-4 my-2 w-[240px] h-[100vh] z-10 rounded-xl`}
            >
              <div className="p-2">
                <Button isIconOnly aria-label="menu"
                  className="rounded-full p-0 text-xl"
                  onClick={() => setToggle(!toggle)}>
                  <IoMdClose />
                </Button>
              </div>
              <ul className='list-none flex justify-start items-start flex-1 flex-col gap-4 mt-8 p-6'>

                {ENLACES.nav.map((nav) => (
                  <li
                    key={nav.name}
                    className={`cursor-pointer ${active === nav.name ? "text-textPrimary font-[600] text-xl" : "text-textSecondary font-[400] text-lg"
                      }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.name);
                    }}
                  >
                    <a href={nav.href}>{nav.name}</a>
                  </li>
                ))}
                <ToggleTheme />
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;