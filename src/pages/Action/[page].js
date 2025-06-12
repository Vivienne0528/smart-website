//src/pages/movies/[vod_id].js
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://api.wujinapi.me/api.php/provide/vod/?ac=detail&pg=${context.params.page}&t=6`,
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
export default function Action({ data}) {
    return (
      <section className="w-full pt-20 px-2 sm:px-8 md:px-20 flex flex-col bg-[#1F2029] text-[#FBFCFF] max-w-[1512px] min-w-[320px] m-auto">
        <Navbar />
        <section className="flex flex-col gap-4">
             <h2 className="text-xl font-semibold"> 动作片</h2>
             <div className="flex flex-wrap gap-4">
                 {data.list?.map((item) => (
                     <Link
                         key={item.vod_id}
                         href={{
                         pathname: `/movies/${item.vod_id}`,
                 }}
             >
                        <img
                            src={item.vod_pic}
                            alt={item.vod_name}
                            className="w-[200px] h-[280px] object-cover rounded-lg"
                        />
                    </Link>
                ))}
             </div>

            </section>

        <Footer />
      </section>
    );
  }
