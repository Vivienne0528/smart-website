import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function Action() {
  return (
    <section className="w-full pt-20 px-2 sm:px-8 md:px-20 flex flex-col bg-[#1F2029] text-[#FBFCFF] max-w-[1512px] min-w-[320px] m-auto">
      <Navbar />
      <section>action</section>
      <Footer />
    </section>
  );
}
