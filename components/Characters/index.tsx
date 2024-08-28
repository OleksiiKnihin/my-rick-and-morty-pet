import React from "react";

import styles from "./characters.module.css";
import Item from "./Item";
import { Person } from "@/types/Character";

interface Props {
  characters: Person[];
}

const Characters: React.FC<Props> = ({ characters }) => {
  return (
    <div>
      <ul className={styles.characters}>
        {characters?.map((character) => (
          <Item character={character} key={character.id} />
        ))}
      </ul>
    </div>
  );
};

export default Characters;
