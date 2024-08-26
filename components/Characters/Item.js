import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./characters.module.css";

const Item = ({ character }) => {
  return (
    <li className={styles.item}>
      <Link href="/character/[id]" as={`/character/${character.id.toString()}`}>
        <Image
          src={character.image}
          alt={character.name}
          width={300}
          height={300}
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
