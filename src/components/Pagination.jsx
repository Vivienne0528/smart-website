import Link from "next/link";
const Pagination = ({ cls }) => {
  return (
    <section className="flex gap-4 items-center justify-center text-2xl">
      <button className=" w-30 rounded-2xl cursor-pointer hover:underline decoration-[#ca4520] hover:scale-105 transition duration-200 ease-in-out">
        previous
      </button>
      <button className="border-1 w-15 rounded-2xl bg-linear-to-r from-[#42CBA2] to-[#1C609E] cursor-pointer hover:underline decoration-[#ca4520]">
        1
      </button>
      <Link href={`/${cls}/pages/2`}>
        <button className=" w-15 rounded-2xl cursor-pointer hover:underline decoration-[#ca4520] hover:scale-105 transition duration-200 ease-in-out">
          2
        </button>
      </Link>

      <button className=" w-15 rounded-2xl cursor-pointer hover:underline decoration-[#ca4520] hover:scale-105 transition duration-200 ease-in-out">
        3
      </button>
      <button className=" w-15 rounded-2xl cursor-pointer hover:underline decoration-[#ca4520] hover:scale-105 transition duration-200 ease-in-out">
        4
      </button>
      <button className=" w-15 rounded-2xl cursor-pointer hover:underline decoration-[#ca4520] hover:scale-105 transition duration-200 ease-in-out">
        5
      </button>
      <button className=" w-15 rounded-2xl cursor-pointer hover:underline decoration-[#ca4520] hover:scale-105 transition duration-200 ease-in-out">
        6
      </button>
      <button className=" w-15 rounded-2xl cursor-pointer hover:underline decoration-[#ca4520] hover:scale-105 transition duration-200 ease-in-out">
        next
      </button>
    </section>
  );
};

export default Pagination;
