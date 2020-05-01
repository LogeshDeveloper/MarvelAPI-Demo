import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/all';
import { useDispatch } from 'react-redux';

import logo from '../../assets/logo.png';
import allActions from '../../store/actions';
import { Container } from './styles';
import { Link } from 'react-router-dom';

export default function Header({ showSearch }) {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    const getDataMarvel = () => {
      showSearch &&
        (search === ''
          ? dispatch(allActions.characterActions.requestGetMarvel())
          : dispatch(allActions.characterActions.requestSearchMarvel(search)));
    };
    getDataMarvel();
  }, [search]);

  return (
    <Container>
      <img src={logo} alt="Marvel App" />
      <Link to="/">
      <button className="btn">Home</button></Link>
      <Link to="/characterinfo">
          <button className="btn">Drag&Drop</button></Link>
          <Link to="/chart">
          <button className="btn">Charts</button></Link>
          {showSearch && (
        <div className="containerSearch">
          <input
            type="text"
            onChange={e => setSearch(e.target.value)}
            value={search}
          />
          <FaSearch />
        </div>
      )}
    </Container>
  );
}

Header.prototype = {
  showSearch: PropTypes.bool
};
