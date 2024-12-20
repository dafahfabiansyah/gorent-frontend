import { useEffect, useState } from "react";
import OfficeCard from "./OfficeCard";
import { Office } from "../types/type";
import { Loading } from "../utils/utils";
import { Link } from "react-router-dom";
import apiService from "../services/apiService";

const RecomendOfficeSection = () => {
  const [offices, setOffices] = useState<Office[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<String | null>(null);

  useEffect(() => {
    apiService
      .get(`/api/offices`)
      .then((response) => {
        setOffices(response.data.data);
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
      id="Fresh-Space"
      className="flex flex-col gap-[30px] w-full max-w-[1130px] mx-auto mt-[100px] mb-[120px]"
    >
      <h2 className="font-bold text-[32px] leading-[48px] text-nowrap text-center">
        Browse Our Fresh Space.
        <br />
        For Your Better Productivity.
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-[30px]">
        {offices.map((office) => (
          <Link key={office.id} to={`/office/${office.slug}`}>
            <OfficeCard key={office.id} office={office} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RecomendOfficeSection;
