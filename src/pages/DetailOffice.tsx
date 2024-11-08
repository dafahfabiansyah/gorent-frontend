import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Loading } from "../utils/utils";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Office } from "../types/type";

const DetailOffice = () => {
  const { slug } = useParams<{ slug: string }>();
  const [office, setOffice] = useState<Office | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/office-space/${slug}`, {
        headers: {
          "x-api-key": import.meta.env.VITE_API_KEY,
        },
      })
      .then((response) => {
        setOffice(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [slug]);  

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Failed to load data: {error}</p>;
  }

  if (!office) {
    return <p>category {office} not found</p>;
  }
  
  return (
    <>
      <Navbar />
      <section id="Gallery" className="-mb-[50px]">
        <div className="swiper w-full">
          <div className="swiper-wrapper">
            <Swiper
              direction={"horizontal"}
              spaceBetween={10}
              slidesPerView={"auto"}
              slidesOffsetAfter={10}
              slidesOffsetBefore={10}
            >
              {office.image.map((image) => (
                <SwiperSlide key={image.id} className="swiper-slide !w-fit">
                  <div className="w-[700px] h-[550px] overflow-hidden">
                    <img
                      src={`${import.meta.env.VITE_API_URL}/storage/${
                        image.image
                      }`}
                      className="w-full h-full object-cover"
                      alt={`${import.meta.env.VITE_API_URL}/storage/${
                        image.name}`}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      <section
        id="Details"
        className="relative flex max-w-[1130px] mx-auto gap-[30px] mb-20 z-10"
      >
        <div className="flex flex-col w-full rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white">
          <p className="w-fit rounded-full p-[6px_16px] bg-[#0D903A] font-bold text-sm leading-[21px] text-[#F7F7FD]">
            {/* Popular */}
            {`${office.is_available === 1 ? "Available" : "Unavailable"} | ${office.is_open === 1 ? "Open" : "Closed"}`}
          </p>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-extrabold text-[32px] leading-[44px]">
                {/* Angga Park Central <br /> Master Capitalize */}
                {office.name}
              </h1>
              <div className="flex items-center gap-[6px] mt-[10px]">
                <img
                  src="/assets/images/icons/location.svg"
                  className="w-6 h-6"
                  alt="icon"
                />
                <p className="font-semibold">{office.city.name}</p>
              </div>
            </div>
            <div className="flex flex-col gap-[6px]">
              <div className="flex items-center gap-1">
                <img
                  src="/assets/images/icons/Star 1.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <img
                  src="/assets/images/icons/Star 1.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <img
                  src="/assets/images/icons/Star 1.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <img
                  src="/assets/images/icons/Star 1.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <img
                  src="/assets/images/icons/Star 5.svg"
                  className="w-5 h-5"
                  alt="star"
                />
              </div>
              <p className="font-semibold text-right">4.5/5 (19,384)</p>
            </div>
          </div>
          <p className="leading-[30px]">
            {office.description}
          </p>
          <hr className="border-[#F6F5FD]" />
          <h2 className="font-bold">You Get What You Need Most</h2>
          <div className="grid grid-cols-3 gap-x-5 gap-y-[30px]">
            <div className="flex items-center gap-4">
              <img
                src="/assets/images/icons/security-user.svg"
                className="w-[34px] h-[34px]"
                alt="icon"
              />
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-lg leading-[24px]">Privacy</p>
                <p className="text-sm leading-[21px]">For Yourself</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="/assets/images/icons/cup.svg"
                className="w-[34px] h-[34px]"
                alt="icon"
              />
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-lg leading-[24px]">Global Event</p>
                <p className="text-sm leading-[21px]">Startup Contest</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="/assets/images/icons/home-trend-up.svg"
                className="w-[34px] h-[34px]"
                alt="icon"
              />
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-lg leading-[24px]">
                  Sustainbility
                </p>
                <p className="text-sm leading-[21px]">Long-term Goals</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="/assets/images/icons/coffee.svg"
                className="w-[34px] h-[34px]"
                alt="icon"
              />
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-lg leading-[24px]">Extra Snacks</p>
                <p className="text-sm leading-[21px]">Work-Life Balance</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="/assets/images/icons/3dcube.svg"
                className="w-[34px] h-[34px]"
                alt="icon"
              />
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-lg leading-[24px]">Compact</p>
                <p className="text-sm leading-[21px]">Good for Focus</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="/assets/images/icons/group.svg"
                className="w-[34px] h-[34px]"
                alt="icon"
              />
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-lg leading-[24px]">Free Move</p>
                <p className="text-sm leading-[21px]">Anytime 24/7</p>
              </div>
            </div>
          </div>
          <hr className="border-[#F6F5FD]" />
          <div className="flex flex-col gap-[6px]">
            <h2 className="font-bold">Office Address</h2>
            {/* <p>Angga Park Central Master Capitalize</p>
            <p>BLDG E16, 13 Xicheng District, Beijing, China, 100000</p> */}
            <p>{office.address}</p>
          </div>
          <div className="overflow-hidden w-full h-[280px]">
            <div
              id="my-map-display"
              className="h-full w-full max-w-[none] bg-none"
            >
              <iframe
                className="h-full w-full border-0"
                frameBorder={0}
                src={`https://www.google.com/maps/embed/v1/place?q=${office.address},&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
              />
            </div>
            <a
              className="from-embedmap-code"
              href="https://www.bootstrapskins.com/themes"
              id="enable-map-data"
            >
              premium bootstrap themes
            </a>
          </div>
        </div>
        <div className="w-[392px] flex flex-col shrink-0 gap-[30px]">
          <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white">
            <div>
              <p className="font-extrabold text-[32px] leading-[48px] text-[#0D903A]">
              {office.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
              </p>
              <p className="font-semibold mt-1">For {office.duration} days working</p>
            </div>
            <hr className="border-[#F6F5FD]" />
            <div className="flex flex-col gap-5">
              {office.benefits.map ((benefit) => (               
              <div className="flex items-center gap-3">
                <img
                  src="/assets/images/icons/verify.svg"
                  className="w-[30px] h-[30px]"
                  alt="icon"
                />
                <p className="font-semibold leading-[28px]">
                  {benefit.name}
                </p>
              </div>
              ))}
            </div>
            <hr className="border-[#F6F5FD]" />
            <div className="flex flex-col gap-[14px]">
              <Link to={`/office/${office.slug}/book`}  key={office.id}>
              <div
                className="flex items-center justify-center w-full rounded-full p-[16px_26px] gap-3 bg-[#0D903A] font-bold text-[#F7F7FD]"
              >
                <img
                  src="/assets/images/icons/slider-horizontal-white.svg"
                  className="w-6 h-6"
                  alt="icon"
                />
                <span>Book This Office</span>
              </div>
              </Link>
              <button className="flex items-center justify-center w-full rounded-full border border-[#000929] p-[16px_26px] gap-3 bg-white font-semibold">
                <img
                  src="/assets/images/icons/save-add.svg"
                  className="w-6 h-6"
                  alt="icon"
                />
                <span>Save for Later</span>
              </button>
            </div>
          </div>
          <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[20px] bg-white">
            <h2 className="font-bold">Contact Our Sales</h2>
            <div className="flex flex-col gap-[30px]">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-4">
                  <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
                    <img
                      src="/assets/images/photos/photo-1.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Masayoshi</p>
                    <p className="text-sm leading-[21px]">Sales Manager</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <a href="#">
                    <img
                      src="/assets/images/icons/call-green.svg"
                      className="w-10 h-10"
                      alt="icon"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="/assets/images/icons/chat-green.svg"
                      className="w-10 h-10"
                      alt="icon"
                    />
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-4">
                  <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
                    <img
                      src="/assets/images/photos/photo-2.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Fuji Ovina</p>
                    <p className="text-sm leading-[21px]">Sales Manager</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <a href="#">
                    <img
                      src="/assets/images/icons/call-green.svg"
                      className="w-10 h-10"
                      alt="icon"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="/assets/images/icons/chat-green.svg"
                      className="w-10 h-10"
                      alt="icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailOffice;
