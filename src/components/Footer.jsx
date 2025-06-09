import useFetch from "@/utils/useFetch";
import Link from "next/link";
import { Cherry_Bomb_One } from "next/font/google";

const cherry_bomb_one = Cherry_Bomb_One({
  weight: "400",
  subsets: ["latin"], // 加上 subsets 是更规范的做法
});
// type NavbarItem = {
//   id: number;
//   name: string;
//   link: string;
// };

const Footer = () => {
  const [data, isLoading] = useFetch("/navbar.json");
  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <section className="flex flex-col gap-3 pt-10 ">
      <div className="h-px w-full bg-[#FBFCFF] " />
      <section className="flex md:flex-row flex-col justify-between gap-5">
        <section className="flex flex-col gap-2 items-center">
          <button
            className={`cursor-pointer font-semibold text-4xl text-transparent bg-clip-text bg-linear-to-r from-[#42CBA2] to-[#1C609E] ${cherry_bomb_one.className}`}
          >
            SMART
          </button>
          <p>Watch Smarter, Not Harder.</p>
        </section>
        <section className="flex flex-col items-center gap-1">
          <span className="text-2xl font-medium">Categories</span>
          <div className="flex flex-col items-center">
            <Link
              href="/TrendingNow"
              className="cursor-pointer hover:underline decoration-[#ca4520]"
            >
              Trending Now
            </Link>
            {data.map((item) => (
              <Link
                key={item.id}
                href={`/${item.name}`}
                className="flex items-center p-1"
              >
                <button className="cursor-pointer hover:underline decoration-[#ca4520] py-3;">
                  {item.name}
                </button>
              </Link>
            ))}
            <Link
              href="/MyList"
              className="cursor-pointer hover:underline decoration-[#ca4520]"
            >
              My List
            </Link>
          </div>
        </section>
        <section className="flex flex-col justify-start gap-6">
          <div className="flex flex-col gap-2 items-center">
            <span className="text-2xl font-medium">Phone Number</span>
            <span>+61 456 789</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <span className="text-2xl font-medium">My mailbox</span>
            <span>vivienne0528.gu@gmail.com</span>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Footer;
