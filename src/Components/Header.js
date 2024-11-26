import React from 'react'
import logo from "./Assets/logo.png";
import './Header.css'
import video_clip from "./Assets/video_clip.mp4";
import word_logo from './Assets/fitfusion.jpg';
import { useState, useEffect } from 'react';

function Header() {
  const [workouts, setWorkouts] = useState([]);
    const [type, setType] = useState('');
    const [duration, setDuration] = useState('');
    const [view, setView] = useState(false);

    // Load workouts from localStorage on component mount
    useEffect(() => {
        const storedWorkouts = JSON.parse(localStorage.getItem('workouts'));
        if (storedWorkouts) {
            setWorkouts(storedWorkouts);
        }
    }, []);

    // Save workouts to localStorage whenever the workouts array changes
    useEffect(() => {
        if (workouts.length > 0) {
            localStorage.setItem('workouts', JSON.stringify(workouts));
        }
    }, [workouts]);

    function addWorkout() {
        if (type && duration) {
            const newWorkout = {
                id: Date.now(),  // Use the current timestamp as a unique ID
                type,
                duration,
            };
            setWorkouts((prevWorkouts) => {
                const updatedWorkouts = [...prevWorkouts, newWorkout];
                localStorage.setItem('workouts', JSON.stringify(updatedWorkouts));
                return updatedWorkouts;
            });
            setType('');
            setDuration('');
        }
    }

    function deleteCheck(id) {
        setWorkouts((prevItems) => {
            const newList = prevItems.filter((item) => item.id !== id);
            localStorage.setItem('workouts', JSON.stringify(newList));
            return newList;
        });
    }
  return (
    <>
      <section id='header'>
      <img src={logo} alt='logo' id='logo'></img>
      <ul id='nav'>
        <li><a href="#header">Home</a></li>
        <li><a href="#workout_tracker_heading">Tracker</a></li>
        <li><a href="#schedule">Fit CalC</a></li>
        <li><a href="#schedule">Contact</a></li>
      </ul>
      </section>
      <div><section id='home'>
        <video
          src={video_clip}
          autoPlay
          loop
          muted
          playsInline
          className="fixed-top-left-video"
        >
        </video>
        <div id='well_container'><p id='welcome'>WELCOME TO <br></br><img id='word_logo' src={word_logo} alt='FitFusion'></img><br></br>WHERE FITNESS MEETS NUTRITION</p></div>
      </section>
      </div>
            <h2 id='workout_tracker_heading'>Workout Tracker</h2>
            <div id='container'>
                
                <div id='container1'><p id='task_scheduler'>Your Task Scheduler</p>
                <br />
                <>
                    <input
                        type="text"
                        placeholder="&nbsp;Workout Type (e.g., Running)"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    />
                    <br />
                    <input
                        type="number"
                        placeholder="&nbsp;Duration (mins)"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                    />
                    <br />
                    <button id='add' onClick={addWorkout}>Add Workout</button>
                    <button id='schedule' onClick={() => setView((prevView) => !prevView)}>
                        {view ? "Hide Schedule" : "Show Schedule"}
                    </button>
                    {view && workouts.length > 0 && (
                        <ul id='create_task'>
                            {workouts.map((workout) => (
                                <li key={workout.id}>&nbsp;&nbsp;
                                    {workout.type} - {workout.duration} mins
                                    <button id='delete' onClick={() => deleteCheck(workout.id)}>
                                        Delete
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                    {view && workouts.length === 0 && (
                        <p id='workout_length'>No workouts scheduled</p>
                    )}
                </>
            </div>
            </div>

    </>
  )
}

export default Header
