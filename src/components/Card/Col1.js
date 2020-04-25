import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Col1({ data }) {
  console.log(data)
  return (
    <div>
    <Link to={`/character/1009610`}>
      <Container>
        <div className="imgContainer">
          <img
            src="http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b.jpg"
            alt="Spider-Man"
          />
        </div>
        <div className="nameContainer">
          <span>Spider-Man</span>
        </div>
      </Container>
    </Link>
    </div>
  );
}

Col1.prototype = {
  data: PropTypes.shape({
    thumbnail: PropTypes.shape({
      path: PropTypes.string,
      extension: PropTypes.string
    }),
    name: PropTypes.name,
    id: PropTypes.number
  })
};
