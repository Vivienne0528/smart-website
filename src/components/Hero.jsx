const Hero = () => {
  return (
    <section className="top-20 relative h-160 flex items-center justify-start overflow-hidden px-15">
      <div className="absolute inset-0 flex flex-col justify-center bg-[url('/img/hero-bg.png')] bg-cover bg-center opacity-15 z-1"></div>
      <div className="relative z-10 flex flex-col  gap-30">
        <p className=" text-4xl font-extrabold">
          Unlimited movies, TV shows and more
        </p>
        <section className="">
          <div className="flex flex-col gap-6">
            <p className="text-2xl font-bold">
              Starts at $7.99. Cancel at any time.
            </p>
            <p className="text-xl">
              Ready to watch Netflix? Enter your email to create or restart your
              membership.
            </p>
            <div className="flex gap-3">
              <input
                type="text"
                name="email address"
                id="email address"
                placeholder="Email Address"
                className="w-60 border-1 px-3 py-1 rounded-full h-8 bg-[#2E3341]"
              />
              <button className="w-30 cursor-pointer border-1 px-3 py-1 rounded-full h-8 bg-linear-to-r from-[#42CBA2] to-[#1C609E]">
                Get Started
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;
