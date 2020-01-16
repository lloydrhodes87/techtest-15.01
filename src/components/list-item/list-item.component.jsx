import React, { useState } from "react";
import Avatar from "avataaars";
import avatarMapper from "../../utils/avatarMappers";
import "./list-item.styles.scss";
import Modal from "react-modal";
import FilmsModal from "../films-modal/films-modal.component";

const ListItem = person => {
  const [modalOpen, setModalOpen] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      width: "500px",
      height: "500px",
      transform: "translate(-50%, -50%)",
      backgroundColor: "black",
      border: "5px solid yellow",
      display: "flex"
    }
  };

  Modal.setAppElement("#root");

  const {
    name,
    hair_color,
    skin_color,
    birth_year,
    gender,
    films
  } = person.person;
  const { hairMapper, genderMapper, skinMapper } = avatarMapper;
  const hair = hairMapper(hair_color);
  const skin = skinMapper(skin_color);
  const top = hair === "NoHair" ? hair : genderMapper(gender);

  const handleCancelModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="list-info">
      <p>Name: {name}</p>
      <p>DOB: {birth_year}</p>
      <Avatar topType={top} hairColor={hair} skinColor={skin} />
      <div>
        <button onClick={() => setModalOpen(true)}>Show Films</button>
        <div className="films-modal-container">
          <Modal isOpen={modalOpen} style={customStyles}>
            <FilmsModal films={films} handleCancelModal={handleCancelModal} />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
