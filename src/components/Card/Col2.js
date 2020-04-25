import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Col2({ data }) {
  console.log(data)
  return (
    <div>
    <Link to={`/character/1009726`}>
      <Container>
        <div className="imgContainer">
          <img
            src="http://i.annihil.us/u/prod/marvel/i/mg/8/03/510c08f345938.jpg"
            alt="X-Men"
          />
        </div>
        <div className="nameContainer">
          <span>X-Men</span>
        </div>
      </Container>
    </Link>
    </div>
  );
}

Col2.prototype = {
  data: PropTypes.shape({
    thumbnail: PropTypes.shape({
      path: PropTypes.string,
      extension: PropTypes.string
    }),
    name: PropTypes.name,
    id: PropTypes.number
  })
};
