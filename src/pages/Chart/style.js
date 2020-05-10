import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 20px 100px;
  overflow-x: hidden;
  overflow-y: scroll;

  height: calc(100% - 120px);
  width: 100%;
  font-size: 30px;

  .imgContainer {
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    width: 20%;
    flex: 1;
  }

  .characterName {
    text-align: center;
    background-color: black;
    color: white;
    padding: 0.5em;
    width: 100%;
    font-size: 15px
  }

  .listContainer {
    .charecterList {
      border: 2px solid red;
     border-radius: 8px;
     width: 10.5vw;
     height: 80vh;
     background: black;
     color: white;
     overflow: scroll;
     border: 1px solid #ccc;
     img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 60%;
      margin-top: 1em;
      height: 85px;
      cursor: pointer;
    }
     ::-webkit-scrollbar {
       width: 12px;
     }
     ::-webkit-scrollbar-thumb {
       -webkit-border-radius: 10px;
       border-radius: 50px;
       background-color: red;
       -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
     }
     ::-webkit-scrollbar-track {
       background: black;
     }
     
   }
  }
  .chartContainer {
    width : '60vw'
  }
  .selectedCharacter{
    border : 2px solid red;
  }
`;