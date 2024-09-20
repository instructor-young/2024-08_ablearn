import React, { useEffect, useState } from "react";

type DogAPIData<T> = {
  message: T;
  status: "success" | "error";
};

function Dogs() {
  const [dogs, setDogs] = useState<string[]>([]);
  const [selectedDog, setSelectedDog] = useState<string | null>(null);
  const [dogImageUrl, setDogImageUrl] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://dog.ceo/api/breeds/list/all");
      const data = (await response.json()) as DogAPIData<
        Record<string, string[]>
      >;

      const dogs = Object.keys(data.message);
      setDogs(dogs);
    })();
  }, []);

  useEffect(() => {
    if (selectedDog === null) return;

    fetch(`https://dog.ceo/api/breed/${selectedDog}/images`)
      .then((response) => response.json())
      .then((data: DogAPIData<string[]>) => setDogImageUrl(data.message[0]));
  }, [selectedDog]);

  return (
    <div>
      <h1>Dogs</h1>
      {selectedDog && <h2>현재 선택 받은 강아지는 {selectedDog}입니다</h2>}
      {dogImageUrl && <img alt={selectedDog!} src={dogImageUrl} />}
      <hr />
      <ul>
        {dogs.map((dog) => (
          <li key={dog}>
            <button onClick={() => setSelectedDog(dog)}>{dog}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dogs;
