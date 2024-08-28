import React from "react";
import Characters from "../components/Characters";

import styles from "./index.module.css";
import { Person } from "../types/Character";

interface Props {
  data: Person[];
}

const Index: React.FC<Props> = ({ data }) => {
  return (
    <div className="">
      <h1 className={styles.title}>Rick and Morty</h1>
      <Characters characters={data} />
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();
  return {
    props: {
      data: data.results,
    },
  };
};

export default Index;
