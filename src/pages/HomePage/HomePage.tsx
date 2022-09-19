import React from "react";
import { useGetAllCharactersQuery } from "../../store/api/characters";
import { CharacterCard } from "../../components/CharacterCard/CharacterCard";
import styles from "./HomePage.module.scss";

export const HomePage = () => {
  const { data: allCharacters, isLoading, error } = useGetAllCharactersQuery();

  if (isLoading) {
    <h1>Загрузка...</h1>;
  }

  if (error) {
    <h1>Не удалось получить данные.</h1>;
  }

  return (
    <div className={styles.container}>
      {allCharacters?.results.map((characterData) => (
        <CharacterCard key={characterData.id} data={characterData} />
      ))}
    </div>
  );
};
