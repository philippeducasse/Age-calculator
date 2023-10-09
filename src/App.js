
import './App.css';
import { Results } from './components/Results';
import { BirthdayForm } from './components/Birthday-form';
import { useState } from 'react';

function App() {
  

  const [age, setAge] = useState( {
    yearsOld : "--",
    monthsOld : "--",
    daysOld : "--"
  })

  const addDate = (date) => {
    let todaysDate = new Date().toLocaleDateString();
    
    todaysDate = todaysDate.split('/');
    let todaysDateInDays = ((todaysDate[2] * 365.2425) + (todaysDate[1] * 30.41666 ) + todaysDate[0]*1)
    let birthDateInDays = (date.year * 365.2425) + (date.month * 30.4166) + (date.day *1)
    let ageInDays = Math.floor(todaysDateInDays - birthDateInDays)
    let years = Math.floor(ageInDays/365.2425)
    let months = Math.floor((ageInDays%365.2425)/30.41666)
    let days = Math.floor((ageInDays%365.2425)%30.41666)

    setAge({yearsOld: years, monthsOld: months, daysOld: days})
  }

    return (
      <div className="App">
        <BirthdayForm   addDate={addDate}  />
        <Results age = {age} />
      </div>
    );
  }

export default App;
