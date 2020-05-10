import React, { useState, useEffect , useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import allActions from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container } from './style';
import CardLoading from '../../components/CardLoading';

export default function ChartDemo() {
  const reference = useRef();
  const [data, setData] = useState({});
  const [selectedId,] = useState(0);
  const [draggedContent, setDraggedContent] = useState(null)
  const { dataMarvel } = useSelector(state => ({
    dataMarvel: state.character
  }));
  const [index, setIndex] = useState(0);
  dataMarvel.then(response => setData(response));

  const dispatch = useDispatch();

  useEffect(() => {
    const getDataMarvel = () => {
      dispatch(allActions.characterActions.requestGetMarvel());
    };
    getDataMarvel();
  }, []);


  const dragStart = (index) => {
    setDraggedContent(index);
  }

  const captureDrag = (e) => {
    e.preventDefault();
    selectCharacter(draggedContent);
  }

  const dragOver = (e) => {
    e.preventDefault();
  }

  const selectCharacter = index => {
    setIndex(index);
  };
  const handleData = index => {
    let mainData = data.data[index];
    let prevData =
      index > 0 ? data.data[index - 1] : data.data[data.data.length - 1];
    let nextData = data.data[index + 1];
    let ad = [
      [prevData.comics.items.length, prevData.series.items.length],
      [mainData.comics.items.length, mainData.series.items.length],
      [nextData.comics.items.length, nextData.series.items.length]
    ];
    return [
      {
        label: 'Events',
        data: ad[0],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1
      },
      {
        label: 'Series',
        data: ad[1],
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
        borderWidth: 1
      }
    ];
  };
  const handleLabel = index => {
    let mainData = data.data[index];
    let prevData =
      index > 0 ? data.data[index - 1] : data.data[data.data.length - 1];
    let nextData = data.data[index + 1];
    return [prevData.name, mainData.name, nextData.name];
  };
  return (
    <>
      <Header />
      <Container>
        <div className="listContainer">
          <div className="charecterList">
          {data?.loading && (
              <>
                <CardLoading /> <CardLoading /> <CardLoading />
                <CardLoading /> <CardLoading /> <CardLoading />
                <CardLoading /> <CardLoading /> <CardLoading />
                <CardLoading />
              </>
            )}
            {data?.data && 
              data.data.map((item, ind) => (
                <div ref={reference} onDragStart={() => dragStart(ind)} draggable={true} key={ind} >
                <div onClick={() => selectCharacter(ind)} key={ind}>
                  <div>
                  <img className={index === selectedId ? 'selectedCharacter' : ''} ref={reference} onClick={() => selectCharacter(ind)} alt='' src={`${item.thumbnail.path}.${item.thumbnail.extension}`} />
                  </div>
                  <div className="characterName">{item.name}</div>
                </div>
                </div>
              ))}
          </div>
        </div>
        <div onDrop={captureDrag} onDragOver={dragOver}  className="chartContainer">
          {data?.data && data.data[0] && (
            <Bar
              height={450}
              width={700}
              data={{
                labels: handleLabel(index),
                datasets: handleData(index),
                options: {
                  responsive: true,
                  animation: {},
                  scales: {
                    yAxes: [
                      {
                        ticks: {
                          beginAtZero: true
                        }
                      }
                    ]
                  }
                }
              }}
            />
          )}
        </div>
      </Container>
      <Footer />
    </>
  );
}
