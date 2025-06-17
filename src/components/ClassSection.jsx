// src/components/ClassSection.jsx
import Link from "next/link";

const ClassSection = ({ data, index, clsData }) => {
  return (
    <section>
      {/* <Link href={`/${item.name}/1`}></Link> */}
      <h2 className="text-2xl font-semibold py-1">
        {data.class?.[index]?.type_name}
      </h2>
      <div className="carousel rounded-box gap-4">
        {clsData.list?.map((item) => (
          <Link
            key={item.vod_id}
            href={`/movies/${item.vod_id}`}
            className="carousel-item"
          >
            <img
              src={item.vod_pic}
              alt={item.vod_name}
              className="w-[200px] h-[280px] object-cover rounded-lg transform hover:scale-105 transition duration-300"
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ClassSection;
