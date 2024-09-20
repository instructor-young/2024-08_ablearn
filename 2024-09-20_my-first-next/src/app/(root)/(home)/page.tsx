/* eslint-disable @next/next/no-img-element */

import { Breeds } from "@/types/cats-api-types";
import Link from "next/link";

async function HomePage() {
  const response = await fetch("https://api.thecatapi.com/v1/breeds", {
    headers: {
      "x-api-key":
        "live_2c3ifk5TO4g2CAqWYGOAH6RchwhQFf3eaJQIDtvLaNLMAtsn6m1hqrD7Kn8hDYbg",
    },
  });

  const breeds = (await response.json()) as Breeds;

  return (
    <div>
      <ul>
        {breeds.map((breed) => (
          <li key={breed.id}>
            <article className="border">
              <h2 className="font-bold text-lg">
                <Link
                  className="text-blue-500 underline"
                  href={`/cats/${breed.id}`}
                >
                  {breed.name}
                </Link>
              </h2>
              <p className="text-sm">
                <a href={breed.wikipedia_url} target="_blank">
                  {breed.description}
                </a>
              </p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
