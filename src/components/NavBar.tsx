import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { ToggleTheme } from "./ToggleTheme";
import { ToggleLang } from "./ToggleLang";
import { useLang } from "../context";

const Navbar = () => {
  const { content } = useLang();
  const nav = content.ui.nav;

  const [active, setActive] = useState(nav[0].name);
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

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsNavbarHidden(true);
      }, 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
              {"</jeanpitx>"} &nbsp;
            </p>
          </a>

          <ul className='list-none hidden sm:flex flex-row gap-6 items-center'>
            <li><ToggleTheme /></li>
            <li><ToggleLang /></li>
            {nav.map((item) => (
              <li
                key={item.name}
                onClick={() => setActive(item.name)}
              >
                <a href={item.href}
                  className={`${active === item.name ? "text-textPrimary font-[600]" : "text-textSecondary font-[400]"
                    } cursor-pointer text-xl`}
                >{item.name}</a>
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
                {nav.map((item) => (
                  <li
                    key={item.name}
                    className={`cursor-pointer ${active === item.name ? "text-textPrimary font-[600] text-xl" : "text-textSecondary font-[400] text-lg"
                      }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(item.name);
                    }}
                  >
                    <a href={item.href}>{item.name}</a>
                  </li>
                ))}
                <li className="flex gap-3 items-center">
                  <ToggleTheme />
                  <ToggleLang />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
