import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Modal = ({ onClose }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/signup");
    onClose();
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <p>Вы точно хотите выйти?</p>
        <ButtonContainer>
          <CloseButton onClick={onClose}>нет</CloseButton>
          <SignUpButton onClick={handleNavigate}>да</SignUpButton>
        </ButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  animation: fadeIn 0.3s ease-in-out;
`;

const ModalContent = styled.div`
  background-color: white;

  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: 300px;
  position: relative;
  animation: slideUp 0.3s ease-out;

  p {
    margin-bottom: 20px;
    font-size: 16px;
    color: #333;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const CloseButton = styled.button`
  display: flex;
  background-color: #737373;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  cursor: pointer;
  margin-top: 10px;
  text-align: center;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 1px 3px 0 black;
    background-color: #ff0000a4;
  }
`;

const SignUpButton = styled.button`
  display: flex;
  text-align: center;

  background-color: #238636;
  color: white;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  cursor: pointer;
  margin-top: 10px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 1px 3px 0 black;
  }
`;
