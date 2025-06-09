import useFetch from "@/utils/useFetch";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { RiMenuFill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { Cherry_Bomb_One } from "next/font/google";
import { useState } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
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
  const [isHover, setIshover] = useState(false);
  const [data, isLoading] = useFetch("/navbar.json");
  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <nav className=" ">
      <section className="flex items-center justify-between h-20">
        <section className="flex items-center gap-2 font-extrabold text-4xl">
          <RiMenuFill className="cursor-pointer lg:hidden block" />
          <Link
            href="/"
            className={`cursor-pointer text-transparent bg-clip-text bg-linear-to-r from-[#42CBA2] to-[#1C609E] ${cherry_bomb_one.className}`}
          >
            SMART
          </Link>
        </section>

        <section className="hidden lg:block">
          <div className="flex items-center text-xl gap-10">
            <Link
              onMouseEnter={() => setIshover(true)}
              onMouseLeave={() => setIshover(false)}
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
            onMouseEnter={() => setIshover(true)}
            onMouseLeave={() => setIshover(false)}
            className={`absolute bg-[#2E3341]  ${isHover ? "block" : "hidden"}`}
          >
            {data.map((item) => (
              // <Link
              //   key={item.id}
              //   href={`/${item.link}`}
              //   className="flex items-center p-1"
              // >
              //   <button className="cursor-pointer hover:underline decoration-[#ca4520] text-xl px-5 py-6;">
              //     {item.name}
              //   </button>
              // </Link>
              <button
                key={item.id}
                href={`/${item.link}`}
                className="flex items-center p-1"
              >
                <button className="cursor-pointer hover:underline decoration-[#ca4520] text-xl px-5 py-6;">
                  {item.name}
                </button>
              </button>
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
