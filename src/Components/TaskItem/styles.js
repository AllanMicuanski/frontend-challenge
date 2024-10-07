import styled from 'styled-components';

export const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  position: relative;
`;

export const Tooltip = styled.div`
  position: absolute;
  background-color: #333;
  color: white;
  padding: 5px;
  border-radius: 5px;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`;

export const Button = styled.button`
  margin-left: 10px;
  padding: 5px;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 30px;
`;
