import React, { useState, useEffect, useRef } from 'react';
import { Container } from './style';
import { useDispatch, useSelector } from 'react-redux';
import {
  CollapsibleComponent,
  CollapsibleHead,
  CollapsibleContent
} from "react-collapsible-component";
import allActions from '../../store/actions';
import Header from '../../components/Header';
import Footer from '../../components/Footer'


export default function ListCharacter() {
  const reference = useRef();
  const [data, setData] = useState();
  const [selectedId, setSelectedId] = useState(0);
  const [draggedContent, setDraggedContent] = useState(null)
  const { dataMarvel } = useSelector(state => ({
    dataMarvel: state.character
  }));
  dataMarvel.then(response => setData(response));

  const dispatch = useDispatch();
  const selectCharacter = (index) => {
    setSelectedId(index);
  }

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
    setSelectedId(draggedContent);
  }
  const dragOver = (e) => {
    e.preventDefault();
  }
  return (
    <>
      <Header />
      <Container>
        <div className='charecterList' >
          {
            data?.data &&

            data.data.map((item, index) =>
              <div ref={reference} onDragStart={() => dragStart(index)} draggable={true} key={index} >
                <div><img className={index === selectedId ? 'selectedCharacter' : ''} ref={reference} onClick={() => selectCharacter(index)} alt='' src={`${item.thumbnail.path}.${item.thumbnail.extension}`} /></div>
                <div className='characterName'>{item.name}</div>
              </div>)
          }


        </div>
        <div onDrop={captureDrag} onDragOver={dragOver} className='characterInfo'>

          {
            data?.data && data.data.length &&
            <div className='row-content'>
              <div className='profileIntro' >
                <div>
                  <img className='infoImage' src={`${data.data[selectedId].thumbnail.path}.${data.data[selectedId].thumbnail.extension}`} />
                </div>
                <div className='description' >
                  <h2>{data.data[selectedId].name}</h2>
                  <p>{data.data[selectedId].description}</p>
                </div>
              </div>
              <CollapsibleComponent>
                <>
                  <div className='comic-holder'>

                    <CollapsibleHead className='collapsible-head' ><h3>Comics</h3></CollapsibleHead>
                    <CollapsibleContent className='collapsible-content' >

                      {data.data[selectedId].comics.available > 0 ?
                        data.data[selectedId].comics.items.map((item, index) =>
                          <div key={index}>
                            <li>{item.name}</li>
                          </div>
                        )
                        : ''
                      }
                    </CollapsibleContent>

                  </div>
                  <div className='comic-holder'>

                    <CollapsibleHead className='collapsible-head' ><h3>series</h3> </CollapsibleHead>
                    <CollapsibleContent className='collapsible-content'>
                      {data.data[selectedId].series.available > 0 ?
                        data.data[selectedId].series.items.map((item, index) =>
                          <div key={index}>
                            <li>{item.name}</li>
                          </div>
                        )
                        : ''
                      }
                    </CollapsibleContent>


                  </div>
                </>
              </CollapsibleComponent>

            </div>

          }
        </div>


      </Container>
      <Footer />
    </>
  )

}