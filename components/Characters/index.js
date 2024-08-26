import React from "react";

import styles from "./characters.module.css";
import Item from "./Item";

const Characters = ({ characters }) => {
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
