import React, { useState } from 'react'

export default function App() {
  
   var [text, setText] = useState('');
   var [wordsCount, setWordsCount] = useState(0);
   var [sentencesCount, setSentencesCount] = useState(0);
   var [charactersCount, setCharactersCount] = useState(0);
   var [paragraphsCount, setParagraphsCount] = useState(0);
   var [readingTime, setReadingTime] = useState('-');
   var [longestWord,setLongestword]=useState();
   var [pronouns,setPronouns]=useState(0);
  

    var textChangeHandler = (event) => {
    var newText = event.target.value;
    setText(newText);
    calculateReadingTime(newText);
    setWordsCount(newText.split(' ').length);
    setCharactersCount(newText.length);
    setSentencesCount(newText.split('.').length -1);
    setParagraphsCount(newText.split('\n\n').length);
    setLongestword(newText.split('').length);
   
    
    
  };
  const calculateReadingTime = (text) => {
    const words = text.trim().split(/\s+/).length;
    const readingTimeInMinutes = Math.ceil(words / 200); // 200 words per minute
    setReadingTime(`${readingTimeInMinutes} minute${readingTimeInMinutes > 1 ? 's' : ''}`);
  };

  return (
    <div className='w-full h-screen'>
      <div className='bg-gray-400 py-5 p-5 text-center'>Text Analysis</div>
      <div className='bg-zinc-900 mt-10 pt-5 mx-10 h-1/6 flex justify-around text-white'>
        <h1>words <br/>{wordsCount}</h1>
        <h1>Sentences <br/>{sentencesCount}</h1>
        <h1>Characters <br/>{charactersCount}</h1> 
        <h1>Paragraphs<br/> {paragraphsCount}</h1>
        <h1>Pronouns <br/> {pronouns}</h1>
   
      </div>
      <div className='bg-red-300 mt-10 mx-10 h-1/2'>
      <textarea  className='textarea' value={text} onChange={textChangeHandler} placeholder="Enter your text here..." />
      
      </div>
      

        <div className='bg-gray-400  mt-10 mx-10  py-10  h-1/6 flex justify-around '>
          <h1 >Average Reading Time:{readingTime} </h1>
          <h1>Longest word: {longestWord}</h1>
        </div>
        <div className='bg-zinc-500  mt-10  py-5 pl-15 flex jsutify-around'>
          <h1>Built By....</h1>
         
          <h1>About us | Contact Us</h1>
        </div>
      </div> 
     
    
  )
}




