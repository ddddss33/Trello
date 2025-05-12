import React, { useState } from "react";
import styled from "styled-components";
import { BiChevronDown } from "react-icons/bi";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaTrello } from "react-icons/fa";
import { FiHelpCircle } from "react-icons/fi";
import { IoIosNotifications } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import Modal from "../Ui/Modal";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <HeaderContainer>
      <LeftSection>
        <Icon>
          <BsFillGrid3X3GapFill />
        </Icon>
        <Icon>
          <FaTrello />
        </Icon>
        <Title>Trello</Title>
        <MenuButton>
          Рабочие пространства <BiChevronDown />
        </MenuButton>
        <MenuButton>
          Недавние <BiChevronDown />
        </MenuButton>
        <MenuButton>
          В избранном <BiChevronDown />
        </MenuButton>
        <MenuButton>
          Шаблоны <BiChevronDown />
        </MenuButton>
        <CreateButton>Создать</CreateButton>
      </LeftSection>
      <RightSection>
        <SearchContainer>
          <CiSearch size={18} />
          <SearchInput type="text" placeholder="Поиск" />
        </SearchContainer>
        <IconButton>
          <IoIosNotifications />
        </IconButton>
        <IconButton>
          <FiHelpCircle />
        </IconButton>
        <ProfileIcon onClick={openModal} />{" "}
      </RightSection>

      {isModalOpen && <Modal onClose={closeModal} />}
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #161b22;
  padding: 8px 16px;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  height: 48px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Icon = styled.div`
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: white;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
`;

const MenuButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  gap: 4px;
  padding: 6px 8px;
  border-radius: 4px;
  transition: background 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #21262d;
  border-radius: 6px;
  padding: 4px 8px;
  width: 200px;
  border: 1px solid #30363d;

  &:focus-within {
    border-color: #58a6ff;
  }

  svg {
    color: #8b949e;
    cursor: pointer;
  }
`;

const SearchInput = styled.input`
  background: none;
  border: none;
  color: white;
  outline: none;
  padding-left: 6px;
  width: 100%;

  ::placeholder {
    color: #8b949e;
  }
`;

const IconButton = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  padding: 6px;
  border-radius: 6px;
  transition: background 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const ProfileIcon = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: wheat;
  cursor: pointer;
`;

const CreateButton = styled.button`
  background-color: #238636;
  color: white;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: #2ea043;
  }
`;
