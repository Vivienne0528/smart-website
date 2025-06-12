import useFetch from "../hooks/useFetch";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { RiMenuFill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { Cherry_Bomb_One } from "next/font/google";
import { useEffect, useState, useContext } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { UseContext } from "../pages/utils/UseContextProvider";
import { useRefStore } from "../hooks/useRefStore";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

const cherry_bomb_one = Cherry_Bomb_One({
  weight: "400",
  subsets: ["latin"],
});

// type NavbarItem = {
//   id: number;
//   name: string;
//   link: string;
// };

const Navbar = () => {
  const [isHover, setIsHover] = useState(false);
  const [isMenuHover, setIsMenuHover] = useState(false);
  const [data, isLoading] = useFetch("/navbar.json");

  const {
    isScrolled,
    isMenuOpened,
    setIsScrolled,
    activeSection,
    scrollToSection,
  } = useContext(UseContext);
  const { heroRef } = useContext(useRefStore);
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <nav
      className={`fixed w-full top-0 right-0 h-20 left-1/2 -translate-x-1/2 z-50 transition duration-300 ease-in-out
      ${
        isScrolled && !isMenuOpened
          ? "bg-black/20 backdrop-blur-md shadow-lg border border-white/20"
          : "bg-transparent border-transparent"
      }`}
    >
      <section className="w-full relative px-2 sm:px-8 md:px-20 max-w-[1512px] min-w-[320px] m-auto  flex items-center justify-between h-20">
        <section className="flex items-center gap-2 font-bold text-4xl">
          <div className="lg:hidden block">
            <Button onClick={toggleDrawer(true)}>
              <RiMenuFill className="cursor-pointer" />
            </Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
              {data.map((item) => (
                <Link
                  key={item.id}
                  href={`/${item.name}/1`}
                  className="flex items-center p-1"
                >
                  <button className="cursor-pointer hover:underline decoration-[#ca4520] text-xl px-5 p2-6">
                    {item.name}
                  </button>
                </Link>
              ))}
              <div className="flex flex-col items-start text-xl px-6 py-1 gap-2">
                <button className="cursor-pointer hover:underline decoration-[#ca4520]">
                  Trending Now
                </button>
                <button className="cursor-pointer hover:underline decoration-[#ca4520]">
                  My List
                </button>
              </div>
            </Drawer>
          </div>
          <Link
            href="/"
            className={`cursor-pointer hover:scale-105 transition duration-200 ease-in-out text-transparent bg-clip-text bg-linear-to-r from-[#42CBA2] to-[#1C609E] ${cherry_bomb_one.className}`}
          >
            SMART
          </Link>
        </section>

        <section className="hidden lg:block">
          <div className="flex items-center text-xl gap-10">
            <Link
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              href="/"
              className="group flex items-center cursor-pointer"
            >
              <IoIosArrowDown />
              Home
            </Link>
            <Link
              href="/TrendingNow"
              className="cursor-pointer hover:underline decoration-[#ca4520]"
            >
              Trending Now
            </Link>
            <Link
              href="/MyList"
              className="cursor-pointer hover:underline decoration-[#ca4520]"
            >
              My List
            </Link>
          </div>

          <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className={`absolute bg-[#2E3341]  ${isHover ? "block" : "hidden"} `}
          >
            {data.map((item) => (
              <Link
                key={item.id}
                href={`/${item.link}/1`}
                className="flex items-center p-1"
              >
                <button className="cursor-pointer hover:underline decoration-[#ca4520] text-xl px-5 py-6;">
                  {item.name}
                </button>
              </Link>
            ))}
          </div>
        </section>

        <section className="flex gap-2">
          <div className="flex items-center border-1 px-3 py-1 rounded-full h-8 font-extralight bg-[#2E3341]">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search..."
              className="outline-0"
            />
            <IoSearch />
          </div>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Link
              href="/sign-in"
              className="text-lg cursor-pointer font-semibold border-[#FBFCFF] border-1 px-4 rounded-full h-8 bg-linear-to-r from-[#42CBA2] to-[#1C609E]"
            >
              SIGN IN
            </Link>
          </SignedOut>
        </section>
      </section>
    </nav>
  );
};

export default Navbar;
