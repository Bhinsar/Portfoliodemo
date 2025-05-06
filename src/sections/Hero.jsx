function Hero() {
  return (
    <section id="hero" className="relative overflow-hiddne">
      <div  className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt='background'/>
      </div>
      <div>
        {/* left : hero section */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
            <div className="flex flex-col gap-7"></div>
        </header>
        {/* right : hero section */}
      </div>
    </section>
  );
}
export default Hero;
