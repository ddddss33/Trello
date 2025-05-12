import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaPlus, FaEllipsisV, FaTimes } from "react-icons/fa";
import styled from "styled-components";
import Card from "./Cart";
import {
  addCard,
  duplicateList,
  editList,
  archivelist,
} from "../store/slice/BoardSlice";

const List = ({ list }) => {
  const dispatch = useDispatch();
  const [cardText, setCardText] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(list.title);

  const handleAddCard = () => {
    if (cardText.trim()) {
      dispatch(addCard({ listId: list.id, text: cardText }));
      setCardText("");
      setIsAdding(false);
    }
  };

  const handleArchive = () => {
    dispatch(archivelist({ listId: list.id }));
  };

  const handleDuplicate = () => {
    dispatch(duplicateList({ id: list.id }));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleSaveEdit = () => {
    if (newTitle.trim()) {
      dispatch(editList({ id: list.id, updates: { title: newTitle } }));
      setIsEditing(false);
    }
  };

  return (
    <ListContainer>
      <Header>
        {isEditing ? (
          <TitleEdit>
            <Input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              autoFocus
            />
            <FaTimes
              onClick={() => setIsEditing(false)}
              className="close-icon"
            />
            <Button onClick={handleSaveEdit}>Сохранить</Button>
          </TitleEdit>
        ) : (
          <h2>{list.title}</h2>
        )}
      </Header>
      <MenuContainer>
        <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
          <FaEllipsisV />
        </MenuButton>
        {menuOpen && (
          <Menu>
            <MenuItem onClick={handleEdit}>Изменить</MenuItem>
            <MenuItem onClick={handleDuplicate}>Дублировать</MenuItem>
            <MenuItem onClick={handleArchive}>Архивировать</MenuItem>
          </Menu>
        )}
      </MenuContainer>

      <CardsContainer>
        {Array.isArray(list.cards) &&
          list.cards.map((card) => (
            <Card key={card.id} card={card} listId={list.id} />
          ))}
      </CardsContainer>

      {!isAdding ? (
        <AddCardButton onClick={() => setIsAdding(true)}>
          <FaPlus /> Добавить карточку
        </AddCardButton>
      ) : (
        <AddCardContainer>
          <Input
            type="text"
            value={cardText}
            onChange={(e) => setCardText(e.target.value)}
            placeholder="Ввести заголовок для этой карточки"
          />
          <Button onClick={handleAddCard}>Добавить</Button>
          <FaTimes onClick={() => setIsAdding(false)} className="close-icon" />
        </AddCardContainer>
      )}
    </ListContainer>
  );
};

export default List;

const ListContainer = styled.div`
  background: linear-gradient(
    90deg,
    rgba(129, 135, 148, 1) 0%,
    rgba(74, 89, 83, 1) 50%,
    rgba(36, 36, 31, 1) 100%
  );
  padding: 16px;
  border-radius: 16px;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  margin-bottom: 20px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.3rem;
  color: #fff;
`;
const MenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
  position: relative;
`;
const MenuButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 1.5rem;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
`;
const Menu = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  background: #fff;
  color: #333;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  padding: 10px;
  z-index: 999;
`;
const MenuItem = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  color: #333;

  &:hover {
    background: #ddd;
  }
`;

const TitleEdit = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  .close-icon {
    font-size: 1.5rem;
    cursor: pointer;
    color: #f44336;
    transition: color 0.3s;
  }

  .close-icon:hover {
    color: #d32f2f;
  }
`;

const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #fff;
  background: #f7f7f7;
  color: #333;
`;

const Button = styled.button`
  background-color: #e44c3d;
  color: white;
  border: none;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #e44c3d;
  }
`;

const AddCardButton = styled.button`
  background: rgba(255, 255, 255, 0.3);
  border: none;
  color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  border-radius: 8px;
  font-size: 1.1rem;
  transition: background 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;

const AddCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
  background-image: url(https://zastavki.gas-kvas.com/uploads/posts/2024-09/zastavki-gas-kvas-com-pj8p-p-zastavki-na-rabochii-stol-forsazh-1.jpg);
  padding: 10px;
  border-radius: 8px;
  position: relative;

  .close-icon {
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
    color: white;
  }
`;

const CardsContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
