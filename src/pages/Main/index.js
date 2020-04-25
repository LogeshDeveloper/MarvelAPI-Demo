import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Col1 from '../../components/Card/Col1';
import Col2 from '../../components/Card/Col2';
import Col3 from '../../components/Card/Col3';
import CardLoading from '../../components/CardLoading';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import NotEmpty from '../../components/NotEmpty';
import allActions from '../../store/actions';
import { Container } from './styles';
import Charts from '../../components/Charts'


export default function Main() {
  const [data, setData] = useState({});
  const { dataMarvel } = useSelector(state => ({
    dataMarvel: state.character
  }));
  dataMarvel.then(response => setData(response));

  const dispatch = useDispatch();

  useEffect(() => {
    const getDataMarvel = () => {
      dispatch(allActions.characterActions.requestGetMarvel());
    };
    getDataMarvel();
  }, []);

  return (
    <>
      <Header showSearch />
      <Container>
        {data?.loading && (
          <>
            <CardLoading /> <CardLoading /> <CardLoading />
            <CardLoading /> <CardLoading /> <CardLoading />
            <CardLoading /> <CardLoading /> <CardLoading />
            <CardLoading /> <CardLoading /> <CardLoading />
            <CardLoading /> <CardLoading /> <CardLoading />
          </>
        )}
       <Col1/><Col2/><Col3/>
      </Container>
      <Footer />
    </>
  );
}
