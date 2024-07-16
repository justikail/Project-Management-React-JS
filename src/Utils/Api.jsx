import { useEffect } from "react";
import { supabase } from "./createClient";

export const TablePortfolio = ({ dataProjects }) => {
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase.from("portfolio").select("*").order("id", { ascending: false });
        if (error) {
          console.error("Error fetching projects:", error);
        } else {
          dataProjects(data);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, [dataProjects]);

  return null;
};
