import CarouselCitySection from "../components/CarouselCitySection";
import BenefitsSection from "../components/BenefitsSection";
import Navbar from "../components/Navbar";
import RecomendOfficeSection from "../components/RecomendOfficeSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <header className="flex flex-col w-full">
        <section
          id="Hero-Banner"
          className="relative flex flex-col md:flex-row h-[500px] md:h-[720px] -mb-[93px]"
        >
          <div
            id="Hero-Text"
            className="relative flex flex-col w-full max-w-full md:max-w-[650px] h-fit rounded-[20px] md:rounded-[30px] border border-[#E0DEF7] p-6 md:p-10 gap-[20px] md:gap-[30px] bg-white mt-[20px] md:mt-[70px] mx-4 md:ml-[calc((100%-1130px)/2)] z-10"
          >
            <div className="flex items-center w-fit rounded-full py-2 px-4 gap-[10px] bg-[#000929]">
              <img
                src="/assets/images/icons/crown-white.svg"
                className="w-5 h-5"
                alt="icon"
              />
              <span className="font-semibold text-white text-sm md:text-base">
                We’ve won top productivity 500 fortunes
              </span>
            </div>
            <h1 className="font-extrabold text-[30px] md:text-[50px] leading-[40px] md:leading-[60px]">
              All Great Offices.
              <br />
              Grow Your Business.
            </h1>
            <p className="text-sm md:text-lg leading-6 md:leading-8 text-[#000929]">
              Kantor yang tepat dapat memberikan impact pekerjaan menjadi lebih
              baik dan sehat dalam tumbuhkan karir.
            </p>
            <div className="flex flex-row items-center gap-3 md:gap-5">
              <a
                href="#Fresh-Space"
                className="flex items-center rounded-full p-3 md:p-[20px_26px] gap-3 bg-[#0D903A]"
              >
                <img
                  src="/assets/images/icons/slider-horizontal-white.svg"
                  className="w-5 h-5 md:w-[30px] md:h-[30px]"
                  alt="icon"
                />
                <span className="font-bold text-base md:text-xl text-[#F7F7FD]">
                  Explore Now
                </span>
              </a>
              <a
                href="#"
                className="flex items-center rounded-full border border-[#000929] p-3 md:p-[20px_26px] gap-3 bg-white"
              >
                <img
                  src="/assets/images/icons/video-octagon.svg"
                  className="w-5 h-5 md:w-[30px] md:h-[30px]"
                  alt="icon"
                />
                <span className="font-semibold text-base md:text-xl">
                  Watch Story
                </span>
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div
            id="Hero-Image"
            className="absolute right-0 top-0 w-full h-[200px] md:w-[calc(100%-((100%-1130px)/2)-305px)] md:h-[720px] rounded-bl-[20px] md:rounded-bl-[40px] overflow-hidden mt-5 md:mt-0"
          >
            <img
              src="/assets/images/backgrounds/banner.png"
              className="w-full h-full object-cover"
              alt="hero background"
            />
          </div>
        </section>

        {/* Logo Container */}
        <div className="flex flex-col pt-10 md:pt-[150px] pb-6 md:pb-10 px-6 md:px-[120px] gap-6 md:gap-10 bg-[#0D903A]">
          <div className="logo-container overflow-hidden h-[38px] w-full mx-auto flex items-center justify-start relative">
            <div className="flex items-center animate-scroll gap-[60px]">
              <img
                src="/assets/images/logos/TESLA.svg"
                alt="clients logo"
                className="h-full"
              />
              <img
                src="/assets/images/logos/Libra 2.svg"
                alt="clients logo"
                className="h-full"
              />
              <img
                src="/assets/images/logos/Binance logo.svg"
                alt="clients logo"
                className="h-full"
              />
              <img
                src="/assets/images/logos/Facebook 7.svg"
                alt="clients logo"
                className="h-full"
              />
              <img
                src="/assets/images/logos/Microsoft 6.svg"
                alt="clients logo"
                className="h-full"
              />
              <img
                src="/assets/images/logos/TESLA.svg"
                alt="clients logo"
                className="h-full"
              />
              <img
                src="/assets/images/logos/Libra 2.svg"
                alt="clients logo"
                className="h-full"
              />
              <img
                src="/assets/images/logos/Binance logo.svg"
                alt="clients logo"
                className="h-full"
              />
              <img
                src="/assets/images/logos/Facebook 7.svg"
                alt="clients logo"
                className="h-full"
              />
              <img
                src="/assets/images/logos/Microsoft 6.svg"
                alt="clients logo"
                className="h-full"
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex flex-row justify-center gap-5 md:gap-[50px]">
            <div className="flex flex-col gap-[2px] text-center w-[120px] md:w-auto">
              <p className="text-base md:text-xl text-[#F7F7FD]">
                Comfortable Space
              </p>
              <p className="font-bold text-[24px] md:text-[38px] text-white">
                580M+
              </p>
            </div>
            <div className="flex flex-col gap-[2px] text-center w-[120px] md:w-auto">
              <p className="text-base md:text-xl text-[#F7F7FD]">
                Startups Succeed
              </p>
              <p className="font-bold text-[24px] md:text-[38px] text-white">
                98%
              </p>
            </div>
            {/* <div className="flex flex-col gap-[2px] text-center w-[120px] md:w-auto">
              <p className="text-base md:text-xl text-[#F7F7FD]">Countries</p>
              <p className="font-bold text-[24px] md:text-[38px] text-white">
                90+
              </p>
            </div> */}
            <div className="flex flex-col gap-[2px] text-center w-[120px] md:w-auto">
              <p className="text-base md:text-xl text-[#F7F7FD]">
                Supportive Events
              </p>
              <p className="font-bold text-[24px] md:text-[38px] text-white">
                139M+
              </p>
            </div>
          </div>
        </div>
      </header>
      <CarouselCitySection />
      <BenefitsSection />
      <RecomendOfficeSection />
    </>
  );
};

export default Home;
