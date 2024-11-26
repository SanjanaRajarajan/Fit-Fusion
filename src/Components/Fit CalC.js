import React, { useState } from 'react';
import './Fit CalC.css';

function CalorieCalculator() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('male');
    const [activity, setActivity] = useState('1.2');
    const [calories, setCalories] = useState(null);

    function calculateCalories() {
        if (weight && height && age) {
            const bmr = gender === 'male'
                ? 10 * weight + 6.25 * height - 5 * age + 5
                : 10 * weight + 6.25 * height - 5 * age - 161;
            const totalCalories = (bmr * parseFloat(activity)).toFixed(0);
            setCalories(totalCalories);

        }
    }

    function reset(){
        setAge('');
        setHeight('');
        setWeight('');
        setActivity('');
        setGender('Male');
        setCalories(null);
    }

    return (
        <><h2 id='calorie_calculator'>Calorie Intake Calculator</h2>
        <h2 id='define'>&nbsp;&nbsp;&nbsp;Want To Know Your Maintanance Calorie.. Let's Go 👇🏻</h2>
        <div id='calc_container'>
            <div id='cont2'>
            <p id='calorie_heading'></p>
            <form onSubmit={(e)=>{e.preventDefault()}} id='intake'>
            <label>WEIGHT</label><br></br>
            <input 
                type="number" 
                placeholder="&nbsp;Weight (kg)" 
                value={weight} 
                onChange={(e) => setWeight(e.target.value)} 
            /><br></br>
            <label>HEIGHT</label><br></br>
            <input 
                type="number" 
                placeholder="&nbsp;Height (cm)" 
                value={height} 
                onChange={(e) => setHeight(e.target.value)} 
            />
            <br></br>
            <label>AGE</label><br></br>
            <input 
                type="number" 
                placeholder="&nbsp;Age" 
                value={age} 
                onChange={(e) => setAge(e.target.value)} 
            /><br></br>
            <label>GENDER</label><br></br>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select><br></br>
            <label>ACTIVE FACTOR</label><br></br>
            <select value={activity} onChange={(e) => setActivity(e.target.value)}>
                <option value="1.2">Sedentary</option>
                <option value="1.375">Lightly Active</option>
                <option value="1.55">Moderately Active</option>
                <option value="1.725">Very Active</option>
            </select><br></br>
            <button id='calculate' onClick={calculateCalories}>Calculate </button>
            <button id='reset' onClick={reset}>Reset</button>
            {calories && <p id='result'>Your recommended daily calorie intake is : <strong><u>{calories} kcal</u></strong></p>}
            </form>
            </div>
        </div>
        </>
    );
}

export default CalorieCalculator;
