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
  const [d0, setD0] = useState(null);
  const [d1, setD1] = useState(null);
  const [d2, setD2] = useState(null);
  const [d3, setD3] = useState(null);

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


  const captureDrag = (boxIndex, e) => {
    e.preventDefault();
    setSelectedId(draggedContent);

    console.log(boxIndex);
    switch(boxIndex)
    {
      case 0:
        setD0(data.data[draggedContent]);        
        break;
      case 1:
        setD1(data.data[draggedContent]);        
        break;
      case 2:
        setD2(data.data[draggedContent]); 
      case 3:
        setD3(data.data[draggedContent]);   
    }
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
        <div onDrop={captureDrag.bind(this, 0)} onDragOver={dragOver} className='characterInfo1'>

          {
            data?.data && data.data.length && d0 &&
            <div className='row-content'>
              <div className='profileIntro' >
                <div>
                  <img className='infoImage' src={`${d0.thumbnail.path}.${d0.thumbnail.extension}`} />
                </div>
                <div className='description' >
                  <h2>{d0.name}</h2>
                  <p>{d0.description}</p>
                </div>
              </div>
              <CollapsibleComponent>
                <>
                  <div className='comic-holder'>

                    <CollapsibleHead className='collapsible-head' ><h3>Comics</h3></CollapsibleHead>
                    <CollapsibleContent className='collapsible-content' >

                      {d0.comics.available > 0 ?
                        d0.comics.items.map((item, index) =>
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
                      {d0.series.available > 0 ?
                        d0.series.items.map((item, index) =>
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

        <div onDrop={captureDrag.bind(this, 1)} onDragOver={dragOver} className='characterInfo2'>

{
  data?.data && data.data.length && d1 &&
  <div className='row-content'>
    <div className='profileIntro' >
      <div>
        <img className='infoImage' src={`${d1.thumbnail.path}.${d1.thumbnail.extension}`} />
      </div>
      <div className='description' >
        <h2>{d1.name}</h2>
        <p>{d1.description}</p>
      </div>
    </div>
    <CollapsibleComponent>
      <>
        <div className='comic-holder'>

          <CollapsibleHead className='collapsible-head' ><h3>Comics</h3></CollapsibleHead>
          <CollapsibleContent className='collapsible-content' >

            {d1.comics.available > 0 ?
              d1.comics.items.map((item, index) =>
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
            {d1.series.available > 0 ?
              d1.series.items.map((item, index) =>
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
<div onDrop={captureDrag.bind(this, 2)} onDragOver={dragOver} className='characterInfo3'>

{
  data?.data && data.data.length && d2 &&
  <div className='row-content'>
    <div className='profileIntro' >
      <div>
        <img className='infoImage' src={`${d2.thumbnail.path}.${d2.thumbnail.extension}`} />
      </div>
      <div className='description' >
        <h2>{d2.name}</h2>
        <p>{d2.description}</p>
      </div>
    </div>
    <CollapsibleComponent>
      <>
        <div className='comic-holder'>

          <CollapsibleHead className='collapsible-head' ><h3>Comics</h3></CollapsibleHead>
          <CollapsibleContent className='collapsible-content' >

            {d2.comics.available > 0 ?
              d2.comics.items.map((item, index) =>
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
            {d2.series.available > 0 ?
              d2.series.items.map((item, index) =>
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