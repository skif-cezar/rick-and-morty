import React, { FC } from "react";
import { ICharacter } from "../../interfaces";
import { Link } from "react-router-dom";
import styles from "./CharacterCard.module.scss";

interface IProps {
  data: ICharacter;
}

export const CharacterCard: FC<IProps> = ({ data }) => {
  return (
    <Link to={`/character/${data.id}`}>
      <div className={styles.card}>
        <img src={data.image} alt={data.name} />
        <div>{data.name}</div>
        <div>{data.gender}</div>
      </div>
    </Link>
  );
};
