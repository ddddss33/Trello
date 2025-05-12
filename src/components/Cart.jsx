import { useState } from "react";
import { FaEdit, FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { editList, archivelist } from "../store/slice/BoardSlice";

const Card = ({ card, listId }) => {
  const dispatch = useDispatch();
  const [showEdit, setShowEdit] = useState(false);
  const [newText, setNewText] = useState(card.text);

  const handleEditToggle = () => {
    setShowEdit(!showEdit);
  };

  const handleInputChange = (e) => {
    setNewText(e.target.value);
  };

  const handleSave = () => {
    dispatch(editList({ listId, cardId: card.id, text: newText }));
    setShowEdit(false);
  };

  const handleArchive = () => {
    dispatch(archivelist({ listId, cardId: card.id }));
    setShowEdit(false);
  };

  return (
    <CardContainer>
      {showEdit ? (
        <EditWrapper>
          <EditInput value={newText} onChange={handleInputChange} autoFocus />
          <ButtonWrapper>
            <Button onClick={handleSave}>Сохранить</Button>
            <Button onClick={handleArchive}>Архивировать</Button>
          </ButtonWrapper>
        </EditWrapper>
      ) : (
        <CardContent>{card.text}</CardContent>
      )}

      <MenuButton onClick={handleEditToggle}>
        {showEdit ? <FaTimes /> : <FaEdit />}
      </MenuButton>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 16px;
  margin: 8px 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
`;

const CardContent = styled.div`
  font-size: 1rem;
  color: #333;
  margin-bottom: 8px;
`;

const EditWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const EditInput = styled.input`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin-bottom: 12px;
  font-size: 1rem;
  color: #333;
  transition: border 0.3s;

  &:focus {
    border-color: #4a90e2;
    outline: none;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  background: #4a90e2;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #357ab7;
  }
`;

const MenuButton = styled.button`
  background: transparent;
  border: none;
  color: #333;
  font-size: 1.5rem;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;
