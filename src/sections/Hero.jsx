import { words } from "../Constants";
function Hero() {
  return (
    <section id="hero" className="relative overflow-hiddne">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>
      <div className="hero-layout">
        {/* left : hero section */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shapping
                <sapn className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span key={index} className="flex items-center mp:gap-3 gap-1 pb-2">
                        <img src={word.imgPath} alt={word.text} className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"/>
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </sapn>
              </h1>
              <h1>Into Real Project</h1>
              <h1>That Deliver Results</h1>
            </div>
          </div>
        </header>
        {/* right : hero section */}
      </div>
    </section>
  );
}
export default Hero;
