import React, { useState } from 'react';
import "./Form.css";

const Form = ({ onSubmit }) => {
  const [cardholder, setCardholder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expMonth, setExpMonth] = useState('');
  const [expYear, setExpYear] = useState('');
  const [cvc, setCVC] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (cardholder.trim() === '') {
      newErrors.cardholder = 'Cardholder name required.';
    } else if (!/^[A-Za-z\s]+$/.test(cardholder)) {
      newErrors.cardholder = 'Cardholder name should only contain letters and spaces.';
    }

    if (cardNumber.trim() === '') {
      newErrors.cardNumber = 'Card number required.';
    } else if (!/^\d{16}$/.test(cardNumber)) {
      newErrors.cardNumber = 'Card number should be 16 digits.';
    }

    if (expMonth.trim() === '' || expYear.trim() === '') {
      newErrors.expDate = 'Expiration date is required.';
    } else if (!/^\d{2}$/.test(expMonth) || !/^\d{2}$/.test(expYear)) {
      newErrors.expDate = 'Expiration date should be in MM/YY format.';
    }

    if (cvc.trim() === '') {
      newErrors.cvc = 'CVC is required.';
    } else if (!/^\d{3}$/.test(cvc)) {
      newErrors.cvc = 'CVC should be 3 digits.';
    }

    if (Object.keys(newErrors).length === 0) {
      onSubmit({ cardholder, cardNumber, expMonth, expYear, cvc });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>CARDHOLDER NAME</label><br/>
        <input
          placeholder="e.g. Jane Appleseed"
          type="text"
          value={cardholder}
          onChange={(e) => setCardholder(e.target.value)}
        />
        {errors.cardholder && <p className="error">{errors.cardholder}</p>}
      </div>
      <div>
        <label>CARD NUMBER</label><br/>
        <input
          placeholder='e.g. 1234 5678 9123 0000'
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        {errors.cardNumber && <p className="error">{errors.cardNumber}</p>}
      </div>
      
      <div className='exp-cvc'>
      <div>
        <label>EXP. DATE(MM/YY)</label><br/>
        <input className='exp'
          type="text"
          placeholder="MM"
          value={expMonth}
          onChange={(e) => setExpMonth(e.target.value)}
        />
        <input className='exp'
          type="text"
          placeholder="YY"
          value={expYear}
          onChange={(e) => setExpYear(e.target.value)}
        />
        {errors.expDate && <p className="error">{errors.expDate}</p>}
      </div>
      
      <div>
        <label>CVC</label><br/>
        <input
        placeholder='e.g. 123'
          type="text"
          value={cvc}
          onChange={(e) => setCVC(e.target.value)}
        />
        {errors.cvc && <p className="error">{errors.cvc}</p>}
      </div>
</div>
      <br/><button>Confirm</button>
    </form>
  );
};

export default Form;


// function Form() {
//     const [firstName, setFirstName] = useState('')
//     const [cardNumber, setCardNumber] = useState('')
//     const [month, setMonth] = useState('')
//     const [year, setYear] = useState('')
//     const [cvc, setCvc] = useState('')
//     const [error, setError] = useState(false)
  
//     const handleSubmit=(e)=>{
//       e.preventDefault();
//       // if(firstName.length===0){
//       //     setError(true)
//       // }
//       // if(firstName){
//       //     console.log("First Name: ",firstName
//       //     , "\nCard Number: ", cardNumber
//       //     , "\nMonth of Expiry: ", month
//       //     , "\nYear of Expiry: ", year
//       //     , "\nCVC: ", cvc)
//       // }
//       if(
//         firstName.trim() === '' ||
//         cardNumber.trim() === '' ||
//         month.trim() === '' ||
//         year.trim() === '' ||
//         cvc.trim() === '' ||
//       ) 
//       {
        
//       }

//     }
//       return (
//       <>
//           <form onSubmit={handleSubmit}>
//               <div>
//                   <label>CARDHOLDER NAME</label><br/>
//                   <input placeholder="e.g. Jane Appleseed" onChange={e=>setFirstName(e.target.value)}/>
//               </div>

//               {error&&firstName.length<=0?
//               <span>First Name cant be empty</span>:""}
              
//               <div>
//                 <label>CARD NUMBER</label>
//                 <input placeholder='e.g. 1234 5678 9123 0000' onChange={e=>setCardNumber(e.target.value)}/>
//               </div>

//             <div className='dateandcvc'>
//               <div className='left'>
//                 <label>EXP.DATE (MM/YY)</label>
//                 <input placeholder='MM' onChange={e=>setMonth(e.target.value)}/>
//                 <input placeholder='YY'onChange={e=>setYear(e.target.value)}/>
//               </div>
              
//               <div className='right'>
//                 <label>CVC</label>
//                 <input placeholder='e.g. 123' onChange={e=>setCvc(e.target.value)}/>
//               </div>
//             </div>

//               <div>
//                   <button>
//                       Confirm
//                   </button>
//               </div>
//           </form>
//       </>
//     )
//   }
  

// export default Form
