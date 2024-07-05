"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Pokemon } from "@/types/pokemon";

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/pokemons");
        const data = await response.json();
        setPokemons(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        {pokemons.length === 0 ? (
          <div className="text-center">
            <p>로딩 중입니다.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {pokemons.map((pokemon) => (
              <div
                key={pokemon.id}
                className="bg-white rounded-lg shadow-md p-4"
              >
                <Link href={`/pokemon/${pokemon.id}`}>
                  <div className="flex flex-col items-center">
                    <Image
                      src={pokemon.sprites.front_default}
                      alt={pokemon.korean_name}
                      width={96}
                      height={96}
                      className="rounded-full"
                    />
                    <p className="mt-2 text-lg font-semibold">
                      {pokemon.korean_name}
                    </p>
                    <p className="text-gray-500">도감번호: {pokemon.id}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonList;
