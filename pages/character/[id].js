import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "./character.module.css";

const Character = ({ character }) => {
  return (
    <div className={styles.character}>
      <Link href="/" className={styles.back}>
        {"<Back"}
      </Link>
      <h1 className={styles.name}>{character.name}</h1>
      <p className={styles.status}>{character.status}</p>
      <p className={styles.location}>From {character.location.name}</p>
      <Image
        src={character.image}
        width={300}
        height={300}
        alt="character"
        className={styles.image}
      />
    </div>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character/");
  const data = await res.json();
  const paths = data.results.map((character) => ({
    params: { id: character.id.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    "https://rickandmortyapi.com/api/character/" + params.id
  );
  const data = await res.json();
  return {
    props: {
      character: data,
    },
  };
};

export default Character;
