/*import React, { useState } from 'react'
import './MortgageCalculate.css';

const MortgageCalculate = () => {

  const [mortgageAmount,setMortgageAmount]=useState();
  const [mortgageTeam,setMortgageTeam]=useState();
  const [interestRate,setInterestRate]=useState();
  const [mortgageType,setMortgageType]=useState();
  const [result,setResult]=useState();
  const [errors, setErrors] = useState({
    mortgageAmount: false,
    mortgageTeam: false,
    interestRate: false,
    mortgageType:false,
  });


 
  const inputStyle={
    width:'435px',
    height:'30px',
    borderRadius:'5px',
    marginTop:'10px'
    
  }
  const btnStyle={
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px',
    borderRadius:'15px',
    marginTop:'10px',
   }

   

   
   const handleSubmit = (event) => {
    event.preventDefault();

   const result= calculatePayment = (mortgageAmount, interestRate,mortgageTeam);
   console.log(result);


    
    // Validate each field
    const newErrors = {
      mortgageAmount: !mortgageAmount,
      mortgageTeam: !mortgageTeam,
      mortgageType: !mortgageType,
      interestRate: !interestRate,
      
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(error => error);
    
    if (!hasErrors) {
      const payment = calculatePayment(mortgageAmount, interestRate,mortgageTeam);
      setResult(payment);
    }
  };

  const calculatePayment = (mortgageAmount, interestRate,mortgageTeam) => {
    
  const monthlyInterestRate = interestRate / 100 / 12;
  const numberOfPayments = mortgageTeam * 12;
  const monthlyPayment = mortgageAmount * monthlyInterestRate * (1 + monthlyInterestRate) ** numberOfPayments / ((1 + monthlyInterestRate) ** numberOfPayments - 1);
  return monthlyPayment;
    

  }

   
 return (  
  <div className='container'>
  
     <div className='row' style={{display: 'flex'}}>
       <div className='col' style={{backgroundColor:'gray', height:'525px', width:'700px', paddingTop:'10px', paddingLeft:'20px' ,fontSize:'20px', borderBottomLeftRadius:'10px' , marginTop:'50px'}}>
         <form onSubmit={handleSubmit}>
          <div style={{display:'flex'}}>
          <h1>Mortgage Calculator</h1>
          <button id='reset' type='reset' style={{marginLeft:'70px', height:'40px',marginTop:'30px'}}>Clear All</button>
          </div>
          <div>
          <label  htmlFor='Mortgage Amount'> Mortgage Amount:</label>
          <input  style={inputStyle}  type="number"  name='mortgageAmount' value={mortgageAmount} onChange={(event)=> setMortgageAmount(event.target.value)}/>
          {errors.mortgageAmount && (<p style={{color:'red', marginTop:'1px', fontSize:'small'}}>This field is required</p>)}

          </div>
          <div>
          <label  htmlFor='Mortgage Team'> Mortgage Team:</label>
          <input style={{ width:'455px',height:'30px', borderRadius:'5px', marginTop:'10px'}} type="number" name='mortgageTeam' value={mortgageTeam} onChange={(event)=> mortgageTeam(event.target.value)} />
          {errors.mortgageTeam && (<p style={{color:'red', marginTop:'1px', fontSize:'small'}}>This field is required</p>)}</div>
          <div>
          <label  htmlFor='Iterest Rate'> Interest Rate:</label>
          <input style={{ width:'480px',height:'30px', borderRadius:'5px',marginTop:'10px'}} type="number"  name='interestRate' value={interestRate} onChange={(event)=> interestRate(event.target.value)}/> 
          {errors.interestRate && (<p style={{color:'red', marginTop:'1px', fontSize:'small'}}>This field is required</p>)}
          </div>
          <div>
          <label  htmlFor='Mortgage Type'> Mortgage Type:</label><br/>
          <input type="radio" id="repayment" name="repayment_type" value="repayment"/>
          <label htmlFor="repayment">Repayment</label>
          <input type="radio" id="interest_only" name="repayment_type" value="interest_only"/>
          <label htmlFor="interest_only">Interest Only</label>

          {errors.mortgageType && (  <p style={{color:'red', marginTop:'1px' , fontSize:'small'}}>This field is required</p>)}
          </div>
          <button type='submit' style={btnStyle}>Calculate Repayment</button>
         </form>
       </div>
       <div className='col-5' style={{width:'700px',height:'535px', backgroundColor:'black', marginTop:'50px',  borderBottomLeftRadius:'10px'}}>
        <h1 style={{color:'white',textAlign:'center'}} onChange={result}>Results Show Here</h1>
        <p style={{color:'white', textAlign:'justify', textAlignLast:'center'}}>Complete the form and click " Calculate repaymenets"</p>
        <p style={{color:'white', textAlignLast:'center'}}>to see what your monthly repayments would be.</p>
       </div>
      </div>
  </div>
  
       
          
)
}


export default MortgageCalculate;*/


import React, { useState } from 'react'
import './MortgageCalculate.css';

const MortgageCalculate = () => {

  const [mortgageAmount,setMortgageAmount]=useState();
  const [mortgageTeam,setMortgageTeam]=useState();
  const [interestRate,setInterestRate]=useState();
  const [mortgageType,setMortgageType]=useState();
  const [result,setResult]=useState("");
  const [errors, setErrors] = useState({
    mortgageAmount: '',
    mortgageTeam: '',
    interestRate:  '',
    mortgageType: '',
  });


 
  const inputStyle={
    width:'435px',
    height:'30px',
    borderRadius:'5px',
    marginTop:'10px'
    
  }
  const btnStyle={
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px',
    borderRadius:'15px',
    marginTop:'10px',
   }

   
  /*const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
   
    setErrors(prev => ({ ...prev, [name]: false }));
  };*/
   
   const handleSubmit = (event) => {
    event.preventDefault();

    
     

    
    // Validate each field
    const newErrors = {
      mortgageAmount: !mortgageAmount,
      mortgageTeam: !mortgageTeam,
      mortgageType: !mortgageType,
      interestRate: !interestRate,
   
    };
  

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(error => error);
      if (!hasErrors) {
    const payment = calculatePayment(mortgageAmount, interestRate, mortgageType,mortgageTeam);
    setResult(payment);
    }
  };

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

    setResult({
      monthlyPayment,
      totalRepayment
    });
    setHasCalculated(true);

      const clearAll = () => {
      setFormData({
        amount: '',
        term: '',
        rate: '',
        type: 'repayment'
      });
      setHasCalculated(false);
    }
  };

  



   
 return (  
  <div className='container'>
  
     <div className='row' style={{display: 'flex'}}>
       <div className='col' style={{backgroundColor:'gray', height:'525px', width:'700px', paddingTop:'10px', paddingLeft:'20px' ,fontSize:'20px', borderBottomLeftRadius:'10px' , marginTop:'50px'}}>
         <form>
          <h1>Mortgage Calculator</h1>
          <button  > Clear All</button>
          <div>
          <label  htmlFor='Mortgage Amount'> Mortgage Amount:</label>
          <input style={inputStyle} type="number"  name='mortgageAmount' value={mortgageAmount} onChange={(event)=> mortgageAmount(event.target.value)}/>
          {errors.mortgageAmount && (<p style={{color:'red', marginTop:'1px', fontSize:'small'}}>This field is required</p>)}
          
          </div>
          <div>
          <label  htmlFor='Mortgage Team'> Mortgage Team:</label>
          <input style={{ width:'455px',height:'30px', borderRadius:'5px', marginTop:'10px'}} type="number" name='mortgageTeam' value={mortgageTeam} onChange={(event)=>mortgageTeam(event.target.value)}/>
          {errors.mortgageTeam && (<p style={{color:'red', marginTop:'1px', fontSize:'small'}}>This field is required</p>)}</div>
          <div>
          <label  htmlFor='Iterest Rate'> Interest Rate:</label>
          <input style={{ width:'480px',height:'30px', borderRadius:'5px',marginTop:'10px'}} type="number"  name='interestRate' value={interestRate} onChange={(event)=>interestRate(event.target.value)}/> 
          {errors.interestRate && (<p style={{color:'red', marginTop:'1px', fontSize:'small'}}>This field is required</p>)}
          </div>
          <div>
          <label  htmlFor='Mortgage Type'> Mortgage Type:</label><br/>
          <input type="radio" id="repayment" name="repayment_type" value="repayment"/>
          <label htmlFor="repayment">Repayment</label>
          <input type="radio" id="interest_only" name="repayment_type" value="interest_only"/>
          <label htmlFor="interest_only">Interest Only</label>
          {errors.mortgageType && (  <p style={{color:'red', marginTop:'1px' , fontSize:'small'}}>This field is required</p>)}
          </div>
          <button type='submit' onClick={calculateMortgage} style={btnStyle}>Calculate Repayment</button>
         </form>
       </div>


       
       <div className='col-5' style={{width:'700px',height:'515px', backgroundColor:'black', marginTop:'50px',  borderBottomLeftRadius:'10px'}}>
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
          ):(
        
        <div>
        <h1 style={{color:'white',textAlign:'center'}} onChange={result}>Results Show Here</h1>
        <p style={{color:'white', textAlign:'justify', textAlignLast:'center'}}>Complete the form and click " Calculate repaymenets"</p>
        <p style={{color:'white', textAlignLast:'center'}}>to see what your monthly repayments would be.</p>
        </div>
          )};
       </div>
    </div> 
  </div>
  
      )
      }   
          


export default MortgageCalculate;

