import React from "react";

const BenefitsSection = () => {
  return (
    <section
      id="Benefits"
      className="flex items-center justify-center w-full max-w-[1130px] mx-auto gap-[100px] mt-[100px] flex-wrap"
    >
      <h2 className="font-bold text-[32px] leading-[48px] text-nowrap w-full text-center">
        We Might Good <br />
        For Your Business
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[30px] w-full">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center shrink-0 w-[70px] h-[70px] rounded-[23px] bg-white overflow-hidden">
            <img
              src="/assets/images/icons/security-user.svg"
              className="w-[34px] h-[34px]"
              alt="icon"
            />
          </div>
          <div className="flex flex-col gap-[5px]">
            <p className="font-bold text-lg leading-[27px]">
              Privacy-First Design
            </p>
            <p className="text-sm leading-[24px]">
              Desain mengutamakan privasi bagi pengguna.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center shrink-0 w-[70px] h-[70px] rounded-[23px] bg-white overflow-hidden">
            <img
              src="/assets/images/icons/group.svg"
              className="w-[34px] h-[34px]"
              alt="icon"
            />
          </div>
          <div className="flex flex-col gap-[5px]">
            <p className="font-bold text-lg leading-[27px]">Easy Move Access</p>
            <p className="text-sm leading-[24px]">
              Akses mudah untuk pindah dan mobilitas.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center shrink-0 w-[70px] h-[70px] rounded-[23px] bg-white overflow-hidden">
            <img
              src="/assets/images/icons/3dcube.svg"
              className="w-[34px] h-[34px]"
              alt="icon"
            />
          </div>
          <div className="flex flex-col gap-[5px]">
            <p className="font-bold text-lg leading-[27px]">
              Flexibility Spaces
            </p>
            <p className="text-sm leading-[24px]">
              Ruang fleksibel yang dapat disesuaikan kebutuhan.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center shrink-0 w-[70px] h-[70px] rounded-[23px] bg-white overflow-hidden">
            <img
              src="/assets/images/icons/cup.svg"
              className="w-[34px] h-[34px]"
              alt="icon"
            />
          </div>
          <div className="flex flex-col gap-[5px]">
            <p className="font-bold text-lg leading-[27px]">Top-Rated Office</p>
            <p className="text-sm leading-[24px]">
              Kantor dengan rating terbaik dan fasilitas unggul.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center shrink-0 w-[70px] h-[70px] rounded-[23px] bg-white overflow-hidden">
            <img
              src="/assets/images/icons/coffee.svg"
              className="w-[34px] h-[34px]"
              alt="icon"
            />
          </div>
          <div className="flex flex-col gap-[5px]">
            <p className="font-bold text-lg leading-[27px]">
              Extra Snacks Available
            </p>
            <p className="text-sm leading-[24px]">
              Tersedia camilan tambahan untuk pengguna.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center shrink-0 w-[70px] h-[70px] rounded-[23px] bg-white overflow-hidden">
            <img
              src="/assets/images/icons/home-trend-up.svg"
              className="w-[34px] h-[34px]"
              alt="icon"
            />
          </div>
          <div className="flex flex-col gap-[5px]">
            <p className="font-bold text-lg leading-[27px]">
              Sustain for Business
            </p>
            <p className="text-sm leading-[24px]">
              Berkelanjutan dan cocok untuk bisnis jangka panjang.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
