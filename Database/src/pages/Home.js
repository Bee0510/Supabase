import { useEffect, useState } from "react";
import { supabase } from "../Supabase/supaClient";
import SmoothieCard from "../Components/SmoothieCard";

const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [smooties, setFetchSmooties] = useState(null);

  useEffect(() => {
    const fetchSmooties = async () => {
      let { data, error } = await supabase.from("smoothiesTime").select("*");

      if (error) {
        setFetchError("could not fetch");
        setFetchSmooties(null);
        console.log(error);
      } else if (data) {
        setFetchSmooties(data);
        setFetchError(null);
      }
    };
    fetchSmooties();
  }, []);
  console.log(smooties);

  return (
    <div className="page home">
      {fetchError && <p>{fetchError}</p>}
      {smooties &&
        smooties.map((smootie) => (
          <SmoothieCard key={smootie.key} smootie={smootie} />
        ))}
    </div>
  );
};

export default Home;
