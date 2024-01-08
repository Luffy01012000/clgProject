"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {} from "react-icons/";
import styleMouse from "@/components/css/mouse.module.css";
import useMousePosition from "@/utils/useMousePosition";
import { AnimatePresence, motion } from "framer-motion";
import { CgProfile } from "react-icons/cg";
import { useCookies } from "react-cookie";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  LogOut,
  Settings,
  User,
 
} from "lucide-react";

// import {} from "@fortawesome/fontawesome-svg-core";
// import { BeakerIcon } from "@heroicons/react/24/solid";
// import { PiMagnifyingGlassThin } from "react-icons/pi";
// import gsap from "gsap";

export default function Navbar() {
  const [cookies, removeCookie] = useCookies(["uid"]);
  const [toggleMenu, setToggleMenu] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const followCursorRef = useRef<HTMLDivElement>(null);
  const { x, y } = useMousePosition();
  // const{x,y} = useMousePosition(cursorRef,followCursorRef,{});
  function HandleMenu() {
    setToggleMenu(!toggleMenu);
  }

  const checkCookie = (): boolean => {
    if (cookies.uid) return true;
    return false;
  };
  // const movecursor=(e:MouseEvent):void=>{
  //     gsap.to(cursorRef,{
  //       x:e.clientX,
  //       y:e.clientY
  //     });
  //     gsap.to(followCursorRef,{
  //       x:e.clientX,
  //       y:e.clientY
  //     })
  //   }
  // useEffect(()=>{
  //   gsap.set(cursorRef,{
  //     xPercent:0,
  //     yPercent:0,
  //   });
  //   gsap.set(followCursorRef,{
  //     xPercent:0,
  //     yPercent:0,
  //   });
  // });
  const menuVar = {
    intial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        delay: 0.1,
        // delayChildren: 0.2,
        duration: 0.9,
        ease: [0.12, 0, 0.3, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.8,
        duration: 0.9,
        ease: [0.12, 0, 0.3, 1],
      },
    },
  };
  const ulVar = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0, 0.55, 0.45, 1],
        delayChildren: 0.3,
      },
    },
  };
  const containerVar = {
    initial: {
      transition: {
        staggerChildren: 0.9,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };
  return (
    <>
      <nav className="bg-black text-white">
        <div className="custom-cursor hidden xl:flex overflow-hidden">
          <AnimatePresence>
            <motion.div
              ref={cursorRef}
              className={styleMouse.mouse}
              animate={{
                left: `${x}px`,
                top: `${y}px`,
              }}
              transition={{ type: "tween", ease: "backOut" }}
            ></motion.div>
            <motion.div
              ref={followCursorRef}
              className={styleMouse.cursorBlur}
              animate={{
                left: `${x - x / 4}px`,
                top: ` ${y - y / 6}px`,
              }}
              transition={{ type: "tween", ease: "backOut" }}
            ></motion.div>
          </AnimatePresence>
        </div>
        <div className="nav-container flex justify-between">
          <div className="left-container flex justify-between items-center">
            <div className="left-logo z-20">
              <Link href="/home">
                <Image
                  src="/img/logo-1-removebg-preview.png"
                  width={80}
                  height={80}
                  quality={100}
                  // placeholder="blur"
                  alt="Movieflex-logo"
                  id="Movieflex-logo"
                />
              </Link>
            </div>
            <div className="search-feild  items-center text-white mx-5 hidden sm:block">
              <label htmlFor="search-bar"></label>
              <input
                className="rounded-xl font-bold text-center text-black px-5 "
                type="text"
                id="search-bar"
                placeholder="search here.."
              />
            </div>
            <div className="search-icon gap-5 flex items-center mx-5 cursor-pointer active:scale-90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 "
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="right-container flex items-center gap-7 p-2 ">
            <div className="hidden lg:flex text-xl gap-3 cursor-pointer z-20 ">
              <Link
                className="hover:text-purple-500 hover:scale-105"
                href="/about"
              >
                About
              </Link>
              <Link className="hover:text-purple-500 hover:scale-105" href="#">
                Services
              </Link>
              <Link className="hover:text-purple-500 hover:scale-105" href="#">
                Help Resource{" "}
              </Link>
              <Link className="hover:text-purple-500 hover:scale-105" href="#">
                Contact
              </Link>
            </div>
            <div className="login-reg items-center text-2xl cursor-pointer">
              {checkCookie() ? (
                <DropdownMenu >
                  <DropdownMenuTrigger >
                    <CgProfile />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                      {/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link href="/auth">
                  <button
                    id="location.href='login-register-form-ux/'"
                    className="p-1 text-lg text-black font-medium rounded-lg bg-red-600 shadow-md hover:shadow-red-800 hover:drop-shadow-md active:transition-all duration-150 ease-in-out active:scale-95"
                  >
                    SignIn/SignUp
                  </button>
                </Link>
              )}
            </div>

            <div
              id="myNav"
              className=" p-1 lg:hidden cursor-pointer"
              onClick={HandleMenu}
            >
              {toggleMenu === true ? (
                <>
                  <button className="closebtn text-4xl p-0" id="closeNav()">
                    &times;
                  </button>
                </>
              ) : (
                <button className="text-3xl " id="openNav()">
                  &#9776;
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {toggleMenu ? (
          <motion.div
            variants={menuVar}
            initial="initial"
            animate="animate"
            exit="exit"
            className="menu_bar absolute z-20 w-full origin-top"
          >
            <motion.div
              variants={containerVar}
              initial="initial"
              animate="open"
              exit="initial"
              className={`flex min-h-screen min-w-full items-center justify-center ease-in-out  bg-[#000000ee] text-zinc-600 text-5xl`}
            >
              <ul className="flex flex-col gap-20 overflow-hidden">
                <motion.li
                  variants={ulVar}
                  // initial="initial"
                  // animate="open"
                  className="hover:text-white"
                >
                  <Link href="/about">About</Link>
                </motion.li>
                <motion.li
                  variants={ulVar}
                  // initial="initial"
                  // animate="open"
                  className="hover:text-white"
                >
                  <Link href="#">Services</Link>
                </motion.li>
                <motion.li
                  variants={ulVar}
                  // initial="initial"
                  // animate="open"
                  className="hover:text-white"
                >
                  <Link href="#">Help Resource </Link>
                </motion.li>
                <motion.li
                  variants={ulVar}
                  initial="initial"
                  animate="open"
                  className="hover:text-white"
                >
                  <Link href="#">Contact</Link>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
    </>
  );
}
