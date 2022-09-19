import React, { FC } from "react";
import { ICharacter } from "../../interfaces";
import { Link } from "react-router-dom";
import clsx from "clsx";
import styles from "./CharacterCard.module.scss";

interface IProps {
  data: ICharacter;
}

const CARD_STYLES = clsx(styles.card);
const CARD_LINK_STYLES = clsx(styles.card__link);
const CARD_IMAGE_STYLES = clsx(styles.card__image);
const CARD_CONTENT_STYLES = clsx(styles.card__content);
const CARD_TITLE_STYLES = clsx(styles.card__title);
const CARD_STATUS_STYLES = clsx(styles.card__status);
let cardStatusIconStyles;

export const CharacterCard: FC<IProps> = ({ data }) => {
  switch(data.status) {
    case 'Dead':
      cardStatusIconStyles = clsx(styles.status__icon, styles.red__icon);
      break;
  
    case 'Alive':
      cardStatusIconStyles = clsx(styles.status__icon, styles.green__icon);
      break;
  
    default:
      cardStatusIconStyles = clsx(styles.status__icon, styles.grey__icon);
      break;
  }

  return (
    <article className={CARD_STYLES}>
      <Link className={CARD_LINK_STYLES} to={`/character/${data.id}`}>
        <div className={CARD_IMAGE_STYLES}>
          <img src={data.image} alt={data.name} />
        </div>
        <div className={CARD_CONTENT_STYLES}>
          <div className={CARD_TITLE_STYLES}>{data.name}</div>
          <div className={CARD_STATUS_STYLES}>
            <span className={cardStatusIconStyles}></span>
            <p>{`${data.status} - ${data.gender}`}</p>
          </div>
        </div>
      </Link>
    </article>
  );
};
