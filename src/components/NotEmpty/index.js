import React from 'react';

import NotEmptyImg from '../../assets/empty.svg';
import { Container } from './styles';

export default function NotEmpty({ text }) {
  return (
    <Container>
      <img src={NotEmptyImg} alt="Not Available" />
      <div>
        <h1>Sorry :(</h1>
        <span>{text}</span>
      </div>
    </Container>
  );
}
