import { useEffect, useState } from "react";
import OfficeCard from "../components/OfficeCard";
import { Loading } from "../utils/utils";
import Navbar from "../components/Navbar";
import { Office } from "../types/type";
import apiService from "../services/apiService";
import OfficeCard from "../components/OfficeCard";
import HeroBanner from "../components/HeroBanner";

const BrowseOffice = () => {
  const [officeSpaces, setOfficeSpaces] = useState<Office[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    apiService
      .get(`/api/offices`)
      .then((response) => {
        setOfficeSpaces(response.data.data); // Sesuaikan dengan struktur data dari API
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
          {officeSpaces.map((office) => (
            <OfficeCard office={office} key={office.id} />
          ))}
        </div>
      </section>
    </>
  );
};

export default BrowseOffice;
