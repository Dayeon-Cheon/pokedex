import { fetchData } from "@/apis/pokemon";
import Link from "next/link";
import Image from "next/image";
import { Pokemon } from "@/types/pokemon";

const PokemonDetailPage = async ({ params }: { params: { id: string } }) => {
  try {
    const pokemon: Pokemon | undefined = await fetchData(params.id);

    if (!pokemon) {
      throw new Error("포켓몬 데이터를 불러오지 못했습니다.");
    }

    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        <div className="w-full max-w-xl bg-white rounded-lg shadow-md p-6 mt-10 mb-10">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold">{pokemon.korean_name}</h2>
            <p className="text-gray-600">No. {pokemon.id}</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={pokemon.sprites.front_default}
              alt={pokemon.korean_name}
              width={200}
              height={200}
              className="rounded-full"
            />
            <p className="mt-4 text-xl font-semibold">
              이름: {pokemon.korean_name}
            </p>
            <div className="mt-4 text-lg flex space-x-4">
              <p>키: {pokemon.height / 10}m</p>
              <p>무게: {pokemon.weight / 10}kg</p>
            </div>
            <div className="mt-6 w-full">
              <p className="text-xl font-semibold text-center">기술:</p>
              <div className="grid grid-cols-2 gap-4 mt-2">
                {pokemon.moves.map((move) => (
                  <div
                    key={move.move.name}
                    className="bg-gray-200 p-2 rounded text-center"
                  >
                    {move.move.korean_name}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/" className="text-blue-500 hover:underline">
              뒤로 가기
            </Link>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        <div className="w-full max-w-xl bg-white rounded-lg shadow-md p-6 mt-10 text-center">
          <p className="text-red-500">포켓몬 데이터를 불러오지 못했습니다.</p>
          <div className="mt-8">
            <Link href="/" className="text-blue-500 hover:underline">
              뒤로 가기
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default PokemonDetailPage;
