import React from 'react';
import { format } from 'date-fns';
import {
  Container,
  DateInfo,
  Day,
  MonthYear,
  Month,
  Year,
  WeekDay,
} from './styles.js';

const Header = () => {
  const formattedDate = format(new Date(), 'dd-MMM-yyyy-EEEE');
  const [day, month, year, week] = formattedDate.split('-');

  return (
    <Container>
      <DateInfo>
        <Day>{day}</Day>
        <MonthYear>
          <Month>{month}</Month>
          <Year>{year}</Year>
        </MonthYear>
      </DateInfo>
      <WeekDay>{week}</WeekDay>
    </Container>
  );
};

export default Header;
