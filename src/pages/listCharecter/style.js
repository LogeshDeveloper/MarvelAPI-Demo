import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 20px 100px;
  overflow-x: hidden;
  overflow-y: scroll;
  margin:0;
  font-size: 18px;

  .charecterList {
     border: 2px solid red;
     border-radius: 8px;
     width: 15vw;
     height: 85vh;
     background: black;
     color: white;
     overflow: scroll;
     border: 1px solid #ccc;
     img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 50%;
      margin-top: 1em;
      height: 70px;
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

  .characterInfo1 , .characterInfo2 , .characterInfo3{
   margin-left: 2em;
   border: 2px solid red;
   border-radius: 8px;
   width: 30vw;
   height: 85vh;
   background: black;
   color: white;
   img {
    width: 105%;
    height: 110px;
    margin: 2em;
   }
   overflow-x: hidden;
  overflow-y: scroll;
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
  .characterName {
    text-align: center;
    background-color: black;
    color: white;
    padding: 0.5em;
    width: 100%;
  }
  
  .selectedCharacter{
    border : 2px solid red;
  }
  .row-content {
    dispaly: grid;
    grid-template-rows: inherit;
  }
  .profileIntro {
    display: grid;
    grid-template-columns : 30% 50%;
    grid-gap : 4rem;
  }
  .description {
   margin-top: 2em;
   p {
     color: white;
     text-align: left;
     font-size: 14px;
     padding-top: 1rem;
    }
  }
  .comic-holder {
    text-align: center;
  }
  .collapsible-head{
    background: #191919;
    text-align: center;
    margin-top: 1em;
  }
  .collapsible-content {
    background: black;
    margin-top: 1em;
    color: white;
    li {
      color: white;
      padding: 1rem;
    }
  }
`;
