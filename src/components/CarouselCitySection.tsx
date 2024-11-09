import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CityCard from "./CityCard";
import { City } from "../types/type";
import axios from "axios";
import { Loading } from "../utils/utils";
import { Link } from "react-router-dom";
import apiService from "../services/apiService";

const CarouselCitySection = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<String | null>(null);

  useEffect(() => {
    apiService
      .get(`/api/cities`)
      .then((response) => {
        setCities(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p>Failed load data : {error}</p>;
  }

  return (
    <section id="Cities" className="flex flex-col gap-[30px] mt-[100px]">
      <div className="w-full max-w-[1130px] mx-auto flex items-center justify-between">
        <h2 className="font-bold text-[32px] leading-[48px] text-nowrap">
          You Can Choose <br />
          Our Favorite Cities
        </h2>
        <a
          href="/all-city"
          className="rounded-full rounded-full py-3 px-5 bg-white font-bold"
        >
          Explore All City
        </a>
      </div>
      <div className="swiper w-full">
        <div className="swiper-wrapper">
          <Swiper
            direction={"horizontal"}
            spaceBetween={30}
            slidesPerView={"auto"}
            slidesOffsetAfter={30}
            slidesOffsetBefore={30}
          >
            {cities.map((city) => (
              <SwiperSlide
                key={city.id}
                className="!w-fit first-of-type:pl-[calc((100%-1130px-60px)/2)] last-of-type:pr-[calc((100%-1130px-60px)/2)]"
              >
                <Link to={`/city/${city.slug}`}>
                  <CityCard city={city} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CarouselCitySection;
