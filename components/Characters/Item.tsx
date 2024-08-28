import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./characters.module.css";
import { Person } from "../../types/Character";

interface Props {
  character: Person;
}

const Item: React.FC<Props> = ({ character }) => {
  return (
    <li className={styles.item}>
      <Link href="/character/[id]" as={`/character/${character.id.toString()}`}>
        <Image
          src={character.image}
          width={300}
          height={300}
          alt={character.name}
          className={styles.itemImage}
        />
        <div className={styles.itemContent}>
          <h2>{character.name}</h2>
        </div>
      </Link>
    </li>
  );
};

export default Item;
