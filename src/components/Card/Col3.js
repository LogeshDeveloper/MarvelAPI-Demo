import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Col3({ data }) {
  console.log(data)
  return (
    <div>
    <Link to={`/character/1009368`}>
      <Container>
        <div className="imgContainer">
          <img
            src="http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55.jpg"
            alt="Iron Man"
          />
        </div>
        <div className="nameContainer">
          <span>Iron Man</span>
        </div>
      </Container>
    </Link>
    </div>
  );
}

Col3.prototype = {
  data: PropTypes.shape({
    thumbnail: PropTypes.shape({
      path: PropTypes.string,
      extension: PropTypes.string
    }),
    name: PropTypes.name,
    id: PropTypes.number
  })
};
