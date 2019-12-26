import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Palindrom from "./palindrom";
function App() {
  const user = {
    firstName: 'Swaminathan',
    lastName: 'GUnasekaran'   
  };

  // let word = "aabrorbaa";
  // word =Array.from(word); 
  // let pali = {}
  // let paliArray_one = [];
  // let centerLetter
  // for(let i =0 ; i< word.length;i++){
   
  //   pali[word[i]] = pali[word[i]] === undefined ?  1 : pali[word[i]]+1 
  // }

  // for(let key in pali){
  //  let noOfOccurnce = pali[key]
  //     for(let i =1 ; i <= noOfOccurnce ; i++){
  //       if(noOfOccurnce === 1 ){
  //         centerLetter = key
  //       }
  //       if(i%2 ===0 &&  noOfOccurnce%2 === 0  ){
  //         paliArray_one.push(key)
  //       }
  //     }
  // }
  // const pallindromeString = paliArray_one.toString()+centerLetter+paliArray_one.toString();
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <div className="container">
        <h1>Form Palindrom</h1>
        <p>Centered div with position and form palindrom</p>
        <div className ="flex">
          <label>
            givenString
          </label>
          <input type="text" name="palindromString" ></input>
        </div>
        {/* <div className="item">{pallindromeString.replace(/[,]/g,"")}</div> */}
        <Palindrom></Palindrom>

      </div>
    </div>
  );
}

export default App;
