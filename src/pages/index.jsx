import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Classes from "@/components/Classes";
import Hero from "@/components/Hero";

export async function getServerSideProps() {
  const res = await fetch("https://api.wujinapi.me/api.php/provide/vod/");
  const data = await res.json();

  const actionRes = await fetch(
    "https://api.wujinapi.me/api.php/provide/vod/?ac=detail&pg=1&t=6",
  );
  const actionData = await actionRes.json();
  const comedyRes = await fetch(
    "https://api.wujinapi.me/api.php/provide/vod/?ac=detail&pg=1&t=7",
  );
  const comedyData = await comedyRes.json();

  const romanceRes = await fetch(
    "https://api.wujinapi.me/api.php/provide/vod/?ac=detail&pg=1&t=8",
  );
  const romanceData = await romanceRes.json();

  const scienceRes = await fetch(
    "https://api.wujinapi.me/api.php/provide/vod/?ac=detail&pg=1&t=9",
  );
  const scienceData = await scienceRes.json();

  const thrillerRes = await fetch(
    "https://api.wujinapi.me/api.php/provide/vod/?ac=detail&pg=1&t=10",
  );
  const thrillerData = await thrillerRes.json();

  const animeRes = await fetch(
    "https://api.wujinapi.me/api.php/provide/vod/?ac=detail&pg=1&t=33",
  );
  const animeData = await animeRes.json();

  const varietyShowRes = await fetch(
    "https://api.wujinapi.me/api.php/provide/vod/?ac=detail&pg=1&t=25",
  );
  const varietyShowData = await varietyShowRes.json();
  // const clsRes = await fetch(`https://api.wujinapi.me/api.php/provide/vod/${num}`);
  // const clsData = await res.json();

  //6, action 动作
  //7, comedy 喜剧
  //8, Romance 爱情
  //9, Science fiction 科幻
  //10, Thriller 恐怖
  //33,Anime 动画片
  //综艺 25国产,26日韩,27港台,28欧美

  // return { props: { classData: data.class, actionData, comedyData } };
  return {
    props: {
      data,
      actionData,
      comedyData,
      romanceData,
      scienceData,
      thrillerData,
      animeData,
      varietyShowData,
    },
  };
}

export default function Home({
  data,
  actionData,
  comedyData,
  romanceData,
  scienceData,
  thrillerData,
  animeData,
  varietyShowData,
}) {
  return (
    <section className="w-full px-2 sm:px-8 md:px-20 flex flex-col bg-[#1F2029] text-[#FBFCFF] max-w-[1512px] min-w-[320px] m-auto">
      <Navbar />
      <Hero />
      <Classes
        data={data}
        actionData={actionData}
        comedyData={comedyData}
        romanceData={romanceData}
        scienceData={scienceData}
        thrillerData={thrillerData}
        animeData={animeData}
        varietyShowData={varietyShowData}
      />
      <Footer />
    </section>
  );
}
