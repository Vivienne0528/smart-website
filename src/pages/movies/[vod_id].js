//src/pages/movies/[vod_id].js
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://api.wujinapi.me/api.php/provide/vod/?ac=detail&ids=${context.params.vod_id}`,
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data }, // will be passed to the page component as props
  };
}
export default function MovieDetailPage({ data }) {
  const [isWatchVideo, setIsWatchVideo] = useState(false);
  const movie = data.list[0]; // 电影数据
  const fullUrl = movie.vod_play_url;
  const src = fullUrl.split("$")[1];
  console.log("播放链接：", src);
  return (
    <section className="w-full px-2 sm:px-8 md:px-20 flex flex-col bg-[#1F2029] text-[#FBFCFF] max-w-[1512px] min-w-[320px] m-auto">
      <Navbar/>
      <section className=" flex gap-6">
        <img
          src={movie.vod_pic}
          alt="movie poster"
          className="w-[325px] h-[406px]"
        />
        <section className="w-full flex flex-col justify-between">
          <p>{movie.vod_name}</p>
          <div>
            <div className="w-full flex justify-between">
              <span>{movie.vod_sub}</span>
              <span>{movie.type_name}</span>
            </div>
            <div className="h-px bg-[#F88A60] w-full" />
          </div>

          <div className="w-full flex justify-between">
            <span>{movie.vod_remarks}</span>
            <span>{movie.vod_time}</span>
          </div>
          <div className="w-full flex justify-between">
            <span>{movie.vod_class}</span>
            <span>{movie.vod_duration}</span>
          </div>
          {/* <div className="flex justify-end">{movie.vod_class}</div> */}
          <div className="w-full flex flex-col">
            <span>Actor: {movie.vod_actor}</span>
            <span>Director: {movie.vod_director}</span>
            <span>Content: {movie.vod_content}</span>
          </div>
          <button
            className="border-red-100 border-1 rounded-2xl w-50 cursor-pointer"
            onClick={() => {
              setIsWatchVideo(!isWatchVideo);
            }}
          >
            播放
          </button>
        </section>
      </section>
      <section>
        {isWatchVideo && (
          <video width="100%" controls preload="auto" autoPlay>
            <source src={src} type="application/x-mpegURL" />
            Your browser does not support the video tag.
          </video>
        )}
      </section>
      <Footer/>
    </section>
  );
}
