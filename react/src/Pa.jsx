/*import React, { useState } from 'react';

function TextCounter() {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    setWordCount(newText.split(' ').length);
    setSentenceCount(newText.split('.').length - 1);
    setCharacterCount(newText.length);
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Enter your text here..."
      />
      <p>
        <strong>Word Count:</strong> {wordCount}
      </p>
      <p>
        <strong>Sentence Count:</strong> {sentenceCount}
      </p>
      <p>
        <strong>Character Count:</strong> {characterCount}
      </p>
    </div>
  );
}

export default TextCounter;*/

 //task1 

/*import React, { useState } from 'react'

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
}*/


/*import React, { useState } from 'react'

export const Pa = () => {
  
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      age: ''
    });
  
    const [errors, setErrors] = useState({
      name: false,
      email: false,
      phone: false,
      age: false
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
      // Clear error when user starts typing
      setErrors(prev => ({ ...prev, [name]: false }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      // Validate each field
      const newErrors = {
        name: !formData.name,
        email: !formData.email,
        phone: !formData.phone,
        age: !formData.age
      };
  
      setErrors(newErrors);
  
      // Check if any errors exist
      const hasErrors = Object.values(newErrors).some(error => error);
      
      if (!hasErrors) {
        alert('Form submitted successfully!');
      }
    };
  
    return (
      <form 
        onSubmit={handleSubmit} 
        className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg"
      >
        
        <div className="relative mb-4">
          <div 
            className="absolute left-2 top-0 text-blue-500 font-bold"
            style={{ fontSize: '0.7rem' }}
          >
            Year
          </div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className={`w-full p-2 pl-10 border ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            } rounded`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">This field is required</p>
          )}
        </div>
  
      // Email Field 
        <div className="relative mb-4">
          <div 
            className="absolute left-2 top-0 text-blue-500 font-bold"
            style={{ fontSize: '0.7rem' }}
          >
            Year
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className={`w-full p-2 pl-10 border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } rounded`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">This field is required</p>
          )}
        </div>
  
        {/* Phone Field 
        <div className="relative mb-4">
          <div 
            className="absolute left-2 top-0 text-blue-500 font-bold"
            style={{ fontSize: '0.7rem' }}
          >
            Year
          </div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className={`w-full p-2 pl-10 border ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            } rounded`}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">This field is required</p>
          )}
        </div>
  
        {/* Age Field
        <div className="relative mb-4">
          <div 
            className="absolute left-2 top-0 text-blue-500 font-bold"
            style={{ fontSize: '0.7rem' }}
          >
            Year
          </div>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Age"
            className={`w-full p-2 pl-10 border ${
              errors.age ? 'border-red-500' : 'border-gray-300'
            } rounded`}
          />
          {errors.age && (
            <p className="text-red-500 text-xs mt-1">This field is required</p>
          )}
        </div>
  
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    );
  };
  


export default Pa;*/


import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

const MortgageCalculator = () => {
  const [formData, setFormData] = useState({
    amount: '300,000',
    term: '25',
    rate: '5.25',
    type: 'repayment'
  });

  const [hasCalculated, setHasCalculated] = useState(true);
  const [results, setResults] = useState({
    monthlyPayment: 1797.74,
    totalRepayment: 539322.94
  });

  const calculateMortgage = () => {
    const principal = Number(formData.amount.replace(/,/g, ''));
    const monthlyRate = Number(formData.rate) / 100 / 12;
    const numberOfPayments = Number(formData.term) * 12;

    let monthlyPayment;
    let totalRepayment;

    if (formData.type === 'repayment') {
      monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      totalRepayment = monthlyPayment * numberOfPayments;
    } else {
      monthlyPayment = principal * monthlyRate;
      totalRepayment = (monthlyPayment * numberOfPayments) + principal;
    }

    setResults({
      monthlyPayment,
      totalRepayment
    });
    setHasCalculated(true);
  };

  const clearAll = () => {
    setFormData({
      amount: '',
      term: '',
      rate: '',
      type: 'repayment'
    });
    setHasCalculated(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-sky-50">
      <div className="w-full max-w-4xl flex rounded-3xl overflow-hidden bg-white shadow-lg">
        {/* Left Side - Form */}
        <div className="flex-1 p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Mortgage Calculator</h2>
            <button 
              onClick={clearAll}
              className="text-gray-500 text-sm hover:underline cursor-pointer"
            >
              Clear All
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-gray-600 text-sm mb-2">Mortgage Amount</label>
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-10 bg-sky-50 flex items-center justify-center rounded-l-lg border-r">
                  <span className="text-gray-500">£</span>
                </div>
                <input
                  type="text"
                  value={formData.amount}
                  onChange={(e) => setFormData({...formData, amount: e.target.value})}
                  className="w-full pl-10 p-2 border rounded-lg cursor-pointer"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-gray-600 text-sm mb-2">Mortgage Term</label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.term}
                    onChange={(e) => setFormData({...formData, term: e.target.value})}
                    className="w-full p-2 pr-16 border rounded-lg cursor-pointer"
                  />
                  <span className="absolute right-0 top-0 h-full px-4 bg-sky-50 flex items-center rounded-r-lg text-gray-500 text-sm border-l">
                    years
                  </span>
                </div>
              </div>

              <div className="flex-1">
                <label className="block text-gray-600 text-sm mb-2">Interest Rate</label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.rate}
                    onChange={(e) => setFormData({...formData, rate: e.target.value})}
                    className="w-full p-2 pr-10 border rounded-lg cursor-pointer"
                  />
                  <span className="absolute right-0 top-0 h-full w-10 bg-sky-50 flex items-center justify-center rounded-r-lg text-gray-500 text-sm border-l">
                    %
                  </span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-gray-600 text-sm mb-2">Mortgage Type</label>
              <div className="space-y-2">
                <label className={`block p-3 rounded-lg border cursor-pointer ${
                  formData.type === 'repayment' ? 'bg-yellow-50 border-yellow-200' : ''
                }`}>
                  <input
                    type="radio"
                    name="mortgageType"
                    checked={formData.type === 'repayment'}
                    onChange={() => setFormData({...formData, type: 'repayment'})}
                    className="mr-2"
                  />
                  Repayment
                </label>
                <label className="block p-3 rounded-lg border cursor-pointer">
                  <input
                    type="radio"
                    name="mortgageType"
                    checked={formData.type === 'interest-only'}
                    onChange={() => setFormData({...formData, type: 'interest-only'})}
                    className="mr-2"
                  />
                  Interest Only
                </label>
              </div>
            </div>

            <button
              onClick={calculateMortgage}
              className="w-full py-3 px-4 bg-yellow-300 hover:bg-yellow-400 rounded-lg font-medium flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <Calculator className="w-5 h-5" />
              Calculate Repayments
            </button>
          </div>
        </div>

        {/* Right Side - Results */}
        <div className="flex-1 bg-gray-900 text-white p-8">
          {hasCalculated ? (
            <div>
              <h3 className="text-xl mb-2">Your results</h3>
              <p className="text-gray-400 text-sm mb-8">
                Your results are shown below based on the information you provided. 
                To adjust the results, edit the form and click "calculate repayments" again.
              </p>

              <div className="pt-4 border-t border-yellow-400/20">
                <p className="text-gray-400 text-sm mb-2">Your monthly repayments</p>
                <p className="text-4xl font-bold text-yellow-400 mb-8">
                  £{results.monthlyPayment.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>

                <p className="text-gray-400 text-sm mb-2">Total you'll repay over the term</p>
                <p className="text-2xl font-bold">
                  £{results.totalRepayment.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center h-full">
              <img
                src="/api/placeholder/120/120"
                alt="Calculator illustration"
                className="w-24 h-24 mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Results shown here</h3>
              <p className="text-gray-400 max-w-sm">
                Complete the form and click "calculate repayments" to see what your monthly repayments would be.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;