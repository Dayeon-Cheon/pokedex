import { Pokemon } from "@/types/pokemon";

export const fetchData = async (id: string): Promise<Pokemon | undefined> => {
  try {
    const apiUrl = "http://localhost:3000";
    const response = await fetch(`${apiUrl}/api/pokemons/${id}`);
    return response.json();
  } catch (error) {
    console.error(error);
  }
};
