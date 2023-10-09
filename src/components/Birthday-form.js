import { useState } from 'react';
import './BirthdayForm.css';
import { iconArrow } from '../icon-arrow.svg';

export const BirthdayForm = ({ addDate }) => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [errors, setErrors] = useState({
    day: "",
    month: "",
    year: ""
  });

  const thisYear = new Date().getFullYear();

  const validate = ({ day, month, year }) => {
    const newErrors = {
      day: "",
      month: "",
      year: ""
    };

    if (!day || day > 31 || day <= 0) {
      newErrors.day = "Must be a valid day";
    }
    // this isn't working
    else {
      const monthsWith30Days = [4, 6, 9, 11];
      const isMonthWith30Days = monthsWith30Days.includes(Number(month));
      if (isMonthWith30Days && day === 31) {
        newErrors.day = "Invalid day for the selected month";
      }
    }

    if (!month || month > 12 || month <= 0) {
      newErrors.month = "Must be a valid month";
    }

    if (!year || year >= thisYear || year < 1900) {
      newErrors.year = "Must be a valid year";
    }
    // this isn't working
    if (month === 2 && day > 29) {
      newErrors.day = "Invalid day for given month"
    }

    setErrors(newErrors);
    console.log(errors)
    return Object.values(newErrors).every((errorMessage) => errorMessage.length === 0);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const isValid = validate({ day, month, year });

    if (isValid) {
      addDate({ day, month, year });
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className= "birthdayForm">
        <div >
          <label style = {{color : Object.values(errors).every((errorMessage) => errorMessage.length === 0)?'black':'red'}}> Day </label>
          <input
            type='number'
            placeholder='DD'
            value={day}
            onChange={(e) => { setDay(e.target.value) }}
          />
          <p>{errors.day}</p>
        </div>
        <div>
          <label style = {{color : Object.values(errors).every((errorMessage) => errorMessage.length === 0)?'black':'red'}}> Month </label>
          <input
            type='number'
            placeholder='MM'
            value={month}
            onChange={(e) => { setMonth(e.target.value) }}
          />
           <p>{errors.month}</p>
        </div>
        <div >
          <label style = {{color : Object.values(errors).every((errorMessage) => errorMessage.length === 0)?'black':'red'}}> Year</label>
          <input
            type='number'
            placeholder='YY'
            value={year}
            onChange={(e) => { setYear(e.target.value) }}
          />
          <p>{errors.year}</p>
        </div>
        <input
          type="submit"
          className='arrowIcon'
          onClick={onSubmit}
        ></input>
      </form>
    </div>
  )
}
