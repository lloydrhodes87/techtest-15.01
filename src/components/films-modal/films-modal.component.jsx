import React, { useState } from "react";
import filmMapper from "../../utils/filmMapper";
import { FaChevronCircleLeft } from "react-icons/fa";
import "./films-modal.styles.scss";

const FilmsModal = ({ films, handleCancelModal }) => {
  return (
    <div className="films-modal">
      <button onClick={handleCancelModal}>
        <FaChevronCircleLeft size="1.5em" />
      </button>
      <ul>
        {films.map((film, index) => {
          const fontSize = (index + 3) * 5;
          const margin = index + 2 * 3;
          return (
            <li key={film} style={{ fontSize, margin }}>
              {filmMapper(film)}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FilmsModal;
