import React from "react";



export default function Palindrom(){
    let word = "aabrorbaa";
    word =Array.from(word); 
    let pali = {}
    let paliArray_one = [];
    let centerLetter
    for(let i =0 ; i< word.length;i++){
     
      pali[word[i]] = pali[word[i]] === undefined ?  1 : pali[word[i]]+1 
    }
  
    for(let key in pali){
     let noOfOccurnce = pali[key]
        for(let i =1 ; i <= noOfOccurnce ; i++){
          if(noOfOccurnce === 1 ){
            centerLetter = key
          }
          if(i%2 ===0 &&  noOfOccurnce%2 === 0  ){
            paliArray_one.push(key)
          }
        }
    }
    const pallindromeString = paliArray_one.toString()+centerLetter+paliArray_one.toString();
   return(
       <div>
       <h1>HUJ</h1>
       <div className="item">{pallindromeString.replace(/[,]/g,"")}</div>
       </div>

   )
}