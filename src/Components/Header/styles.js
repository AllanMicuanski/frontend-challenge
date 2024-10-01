import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 54px 60px 24px 60px;
  font-family: 'Roboto', sans-serif;
`;

export const DateInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Day = styled.div`
  font-size: 60px;
  font-weight: 500;
  color: #848484;
  margin-right: 10px;
`;

export const MonthYear = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Month = styled.div`
  font-size: 24px;
  font-weight: 400;
  color: #848484;
`;

export const Year = styled.div`
  font-size: 24px;
  font-weight: 100;
  color: #848484;
  font-family: Roboto, Light;
`;

export const WeekDay = styled.div`
  font-size: 24px;
  color: #848484;
`;
