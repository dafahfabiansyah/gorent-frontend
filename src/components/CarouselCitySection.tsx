import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CityCard from "./CityCard";
import { City } from "../types/type";
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
    <section
      id="Cities"
      className="flex flex-col gap-6 md:gap-[30px] mt-[50px] md:mt-[100px] px-4 md:px-0"
    >
      <div className="w-full max-w-full md:max-w-[1130px] justify-between mx-auto flex flex-row items-center md:justify-between gap-4 md:gap-0">
        <h2 className="font-bold text-[16px] md:text-[32px] leading-[32px] md:leading-[48px] text-center md:text-left whitespace-nowrap">
          Choose Our Favorite Cities
        </h2>
        <a
          href="/all-city"
          className="rounded-full py-2 px-4 md:py-3 md:px-5 hover:text-[#0D903A] transition-all bg-white font-bold text-sm md:text-base"
        >
          Explore All City
        </a>
      </div>
      <div className="swiper w-full">
        <div className="swiper-wrapper">
          <Swiper
            direction={"horizontal"}
            spaceBetween={20}
            slidesPerView={"auto"}
            slidesOffsetAfter={20}
            slidesOffsetBefore={20}
          >
            {cities.map((city) => (
              <SwiperSlide
                key={city.id}
                className="!w-fit first-of-type:pl-[10px] last-of-type:pr-[10px] md:first-of-type:pl-[calc((100%-1130px-60px)/2)] md:last-of-type:pr-[calc((100%-1130px-60px)/2)]"
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
