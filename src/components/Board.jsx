import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";
import List from "./List";
import { addList } from "../store/slice/BoardSlice";
import styled from "styled-components";
import Images from "../assets/images/Bg.jpg";

const Board = () => {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.board.lists);
  const [isAddingList, setIsAddingList] = useState(false);
  const [newListTitle, setNewListTitle] = useState(
    localStorage.getItem("newListTitle") || ""
  );

  useEffect(() => {
    localStorage.setItem("newListTitle", newListTitle);
  }, [newListTitle]);

  const handleAddList = () => {
    if (newListTitle.trim()) {
      dispatch(addList({ id: Date.now(), title: newListTitle, cards: [] }));
      setNewListTitle("");
      setIsAddingList(false);
      localStorage.removeItem("newListTitle");
    }
  };

  return (
    <BoardContainer>
      <ListsContainer>
        {lists.map((list) => (
          <List key={list.id} list={list} />
        ))}

        {!isAddingList ? (
          <AddNewListButton onClick={() => setIsAddingList(true)}>
            <FaPlus /> Добавить список
          </AddNewListButton>
        ) : (
          <NewListContainer>
            <Input
              type="text"
              value={newListTitle}
              onChange={(e) => setNewListTitle(e.target.value)}
              placeholder="Введите название списка"
            />
            <ButtonsWrapper>
              <Button onClick={handleAddList}>Добавить</Button>
              <CancelButton
                onClick={() => {
                  setIsAddingList(false);
                  setNewListTitle("");
                  localStorage.removeItem("newListTitle");
                }}
              >
                Отмена
              </CancelButton>
            </ButtonsWrapper>
          </NewListContainer>
        )}
      </ListsContainer>
    </BoardContainer>
  );
};

export default Board;

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 60px;
  margin: 0 auto;
  background-image: url(${Images});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
`;
const ListsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: flex-start;
  min-height: fit-content;
`;

const AddNewListButton = styled.button`
  background: rgba(255, 255, 255, 0.3);
  border: none;
  color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  border-radius: 8px;
  font-size: 1.2rem;
  transition: background 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }

  svg {
    margin-right: 8px;
  }
`;

const NewListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: rgba(255, 255, 255, 0.2);
  padding: 16px;
  border-radius: 8px;
`;

const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #fff;
  background: #f7f7f7;
  color: #333;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  background: #ff4e50;
  color: white;
  border: none;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #e44c3d;
  }
`;

const CancelButton = styled.button`
  background: gray;
  color: white;
  border: none;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: darkgray;
  }
`;
