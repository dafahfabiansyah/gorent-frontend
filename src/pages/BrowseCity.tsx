import { useEffect, useState } from "react";
import { Loading } from "../utils/utils";
import Navbar from "../components/Navbar";
import { City } from "../types/type";
import CityCard from "../components/CityCard";
import apiService from "../services/apiService";
import HeroBanner from "../components/HeroBanner";

const BrowseCity = () => {
  const [Cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
    return <p>Failed to load data: {error}</p>;
  }

  return (
    <>
      <Navbar />
      <HeroBanner />
      <section
        id="All-Office-Spaces"
        className="flex flex-col gap-[30px] w-full max-w-[1130px] mx-auto mt-[70px] mb-[120px]"
      >
        <h2 className="font-bold text-[32px] leading-[48px] text-nowrap">
          Browse all office spaces
        </h2>
        <div className="grid grid-cols-3 gap-[30px]">
          {Cities.map((city) => (
            <CityCard city={city} key={city.id} />
          ))}
        </div>
      </section>
    </>
  );
};

export default BrowseCity;
