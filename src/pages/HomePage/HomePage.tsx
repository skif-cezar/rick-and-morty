import React from "react";
import { useGetAllCharactersQuery } from "../../store/api/characters";
import { CharacterCard } from "../../components/CharacterCard/CharacterCard";
import clsx from "clsx";
import styles from "./HomePage.module.scss";

const CONTAINER_STYLES = clsx(styles.container);

export const HomePage = () => {
  const { data: allCharacters, isLoading, error } = useGetAllCharactersQuery();

  if (isLoading) {
    <h1>Загрузка...</h1>;
  }

  if (error) {
    <h1>Не удалось получить данные.</h1>;
  }

  return (
    <section className={CONTAINER_STYLES}>
      {allCharacters?.results.map((characterData) => (
        <CharacterCard key={characterData.id} data={characterData} />
      ))}
    </section>
  );
};
