import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Health.css'
import axios from 'axios';

const Health = () => {
    const [predictionResult, setPredictionResult] = useState(null);
    const [precautions, setPrecautions] = useState([]);
    const [diseaseData, setDiseaseData] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [weatherData, setWeatherData] = useState(null);
    const [healthFormData, setHealthFormData] = useState({
        Age: '',
        Gender: '',
        nausea: '',
        joint_pain: '',
        abdominal_pain: '',
        high_fever: '',
        chills: '',
        fatigue: '',
        runny_nose: '',
        pain_behind_the_eyes: '',
        dizziness: '',
        headache: '',
        chest_pain: '',
        vomiting: '',
        cough: '',
        shivering: '',
        asthma_history: '',
        high_cholesterol: '',
        diabetes: '',
        obesity: '',
        hiv_aids: '',
        nasal_polyps: '',
        asthma: '',
        high_blood_pressure: '',
        severe_headache: '',
        weakness: '',
        trouble_seeing: '',
        fever: '',
        body_aches: '',
        sore_throat: '',
        sneezing: '',
        diarrhea: '',
        rapid_breathing: '',
        rapid_heart_rate: '',
        pain_behind_eyes: '',
        swollen_glands: '',
        rashes: '',
        sinus_headache: '',
        facial_pain: '',
        shortness_of_breath: '',
        reduced_smell_and_taste: '',
        skinIrritation: '',
        itchiness: '',
        throbbing_headache: '',
        confusion: '',
        back_pain: '',
        knee_ache: ''
    });

    const handleClose = () => {
        setShowModal(false);
        setFormSubmitted(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setHealthFormData({
            ...healthFormData,
            [name]: value,
        });
    };

    const getCurrentLocationWeather = (event) => {
        event.preventDefault();
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    fetchWeatherData(latitude, longitude);
                },
                (error) => {
                    console.error('Error getting user location:', error.message);
                },
                { timeout: 10000, enableHighAccuracy: true }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    };

    const fetchWeatherData = (latitude, longitude) => {
        const apiKey = 'b8216a86fb0d4e4bbc31b0108071d7b5';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const weatherInfo = {
                    temperature: data.main.temp,
                    wind: data.wind.speed,
                    humidity: data.main.humidity,
                };
                setWeatherData(weatherInfo);
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    };

    const submitFormData = () => {
        const payload = { ...healthFormData, ...weatherData };
        payload.Age = Number(payload.Age);

        axios.post('http://localhost:5001/submit', payload, { withCredentials: true })
            .then(response => {
                console.log('Success:', response.data);
                setPredictionResult(response.data.predicted_disease);
                setPrecautions(response.data.precautions);
                setShowModal(true);
                setFormSubmitted(true);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitFormData();
    };
    return (
        <>
            <div className="content-body health-back">
                <div className="container">
                    <form className='form-health' method="post" onSubmit={handleSubmit}>
                        <h1 className='current'>Weather by Current Location</h1>
                        <button className='weather-button' id="currentLocationBtn" onClick={getCurrentLocationWeather}>
                            Get Weather at My Location
                        </button>
                        {weatherData && (
                            <div id="weatherResult">
                                <p className='temperature'>Temperature: {weatherData.temperature} °C</p>
                                <p className='temperature'>Wind: {weatherData.wind} m/s</p>
                                <p className='temperature'>Humidity: {weatherData.humidity}%</p>
                            </div>
                        )}

                        <div class="question my-4">Age: select age</div>
                        <select class="form-select" aria-label="Default select example" name="age" required onChange={handleInputChange}>
                            <option selected>select age</option>
                            <option value="1" name="Age">1</option>
                            <option value="2" name="Age">2</option>
                            <option value="3" name="Age">3</option>
                            <option value="4" name="Age">4</option>
                            <option value="5" name="Age">5</option>
                            <option value="6" name="Age">6</option>
                            <option value="7" name="Age">7</option>
                            <option value="8" name="Age">8</option>
                            <option value="9" name="Age">9</option>
                            <option value="10" name="Age">10</option>
                            <option value="11" name="Age">11</option>
                            <option value="12" name="Age">12</option>
                            <option value="13" name="Age">13</option>
                            <option value="14" name="Age">14</option>
                            <option value="15" name="Age">15</option>
                            <option value="16" name="Age">16</option>
                            <option value="17" name="Age">17</option>
                            <option value="18" name="Age">18</option>
                            <option value="19" name="Age">19</option>
                            <option value="20" name="Age">20</option>
                            <option value="21" name="Age">21</option>
                            <option value="22" name="Age">22</option>
                            <option value="23" name="Age">23</option>
                            <option value="24" name="Age">24</option>
                            <option value="25" name="Age">25</option>
                            <option value="26" name="Age">26</option>
                            <option value="27" name="Age">27</option>
                            <option value="28" name="Age">28</option>
                            <option value="29" name="Age">29</option>
                            <option value="30" name="Age">30</option>
                            <option value="31" name="Age">31</option>
                            <option value="32" name="Age">32</option>
                            <option value="33" name="Age">33</option>
                            <option value="34" name="Age">34</option>
                            <option value="35" name="Age">35</option>
                            <option value="36" name="Age">36</option>
                            <option value="37" name="Age">37</option>
                            <option value="38" name="Age">38</option>
                            <option value="39" name="Age">39</option>
                            <option value="40" name="Age">40</option>
                            <option value="41" name="Age">41</option>
                            <option value="42" name="Age">42</option>
                            <option value="43" name="Age">43</option>
                            <option value="44" name="Age">44</option>
                            <option value="45" name="Age">45</option>
                            <option value="46" name="Age">46</option>
                            <option value="47" name="Age">47</option>
                            <option value="48" name="Age">48</option>
                            <option value="49" name="Age">49</option>
                            <option value="50" name="Age">50</option>
                            <option value="51" name="Age">51</option>
                            <option value="52" name="Age">52</option>
                            <option value="53" name="Age">53</option>
                            <option value="54" name="Age">54</option>
                            <option value="55" name="Age">55</option>
                            <option value="56" name="Age">56</option>
                            <option value="57" name="Age">57</option>
                            <option value="58" name="Age">58</option>
                            <option value="59" name="Age">59</option>
                            <option value="60" name="Age">60</option>
                        </select>

                        <div class="question my-4 my-4">Gender: Are you male or female? (Male/Female)</div>
                        <label for="Gender-yes" name="Gender" className='yes'>Male</label>
                        <input type="radio" id="Gender-yes" name="Gender" value="1" onChange={handleInputChange} />
                        <label for="Gender-no" name="Gender" className='no'>Female</label>
                        <input type="radio" id="Gender-no" name="Gender" value="0" onChange={handleInputChange} />

                        <div class="question my-4">Nausea: Do you feel nauseous in the current situation?</div>
                        <label for="nausea-yes" name="nausea" className='yes'>Yes</label>
                        <input type="radio" id="nausea-yes" name="nausea" value="1" onChange={handleInputChange} />
                        <label for="nausea-no" name="nausea" className='no'>No</label>
                        <input type="radio" id="nausea-no" name="nausea" value="0" onChange={handleInputChange} />

                        <div class="question my-4">Joint Pain: Do you have any joint pain right now?</div>
                        <label for="joint_pain-yes" name="joint_pain" className='yes'>Yes</label>
                        <input type="radio" id="joint_pain-yes" name="joint_pain" value="1" onChange={handleInputChange} />
                        <label for="joint_pain-no" name="joint_pain" className='no'>No</label>
                        <input type="radio" id="joint_pain-no" name="joint_pain" value="0" onChange={handleInputChange} />

                        <div class="question my-4">Abdominal Pain: Are you experiencing abdominal pain at the moment?</div>
                        <label for="abdominal_pain-yes" name="abdominal_pain" className='yes'>Yes</label>
                        <input type="radio" id="abdominal_pain-yes" name="abdominal_pain" value="1" onChange={handleInputChange} />
                        <label for="abdominal_pain-no" name="abdominal_pain" className='no'>No</label>
                        <input type="radio" id="abdominal_pain-no" name="abdominal_pain" value="0" onChange={handleInputChange} />

                        <div class="question my-4">High Fever: Do you currently have a high fever?</div>
                        <label for=" high_fever-yes" name=" high_fever" className='yes'>Yes</label>
                        <input type="radio" id=" high_fever-yes" name=" high_fever" value="1" onChange={handleInputChange} />
                        <label for=" high_fever-no" name="nose" className='no'>No</label>
                        <input type="radio" id=" high_fever-no" name=" high_fever" value="0" onChange={handleInputChange} />

                        <div class="question my-4">Chills: Are you experiencing chills right now?</div>
                        <label for="Chills-yes" name="chills" className='yes'>Yes</label>
                        <input type="radio" id="chills-yes" name="chills" value="1" onChange={handleInputChange} />
                        <label for="Chills-no" name="chills" className='no'>No</label>
                        <input type="radio" id="chills-no" name="chills" value="0" onChange={handleInputChange} />

                        <div class="question my-4">Fatigue: Do you feel unusually tired or fatigued currently?</div>
                        <label for="headache-yes" name="fatigue" className='yes'>Yes</label>
                        <input type="radio" id="Fatigue-yes" name="fatigue" value="1" onChange={handleInputChange} />
                        <label for="Fatigue-no" name="fatigue" className='no'>No</label>
                        <input type="radio" id="Fatigue-no" name="fatigue" value="0" onChange={handleInputChange} />

                        <div class="question my-4">Runny Nose: Do you have a runny nose at this moment?</div>
                        <label for=" runny_nose-yes" name=" runny_nose" className='yes'>Yes</label>
                        <input type="radio" id=" runny_nose-yes" name=" runny_nose" value="1" onChange={handleInputChange} />
                        <label for=" runny_nose-no" name=" runny_nose" className='no'>No</label>
                        <input type="radio" id=" runny_nose-no" name=" runny_nose" value="0" onChange={handleInputChange} />

                        <div class="question my-4">Pain Behind the Eye: Are you experiencing pain behind the eyes now?</div>
                        <label for="pain_behind_the_eyes-yes" name="pain_behind_the_eyes" className='yes'>Yes</label>
                        <input type="radio" id="pain_behind_the_eyes-yes" name="pain_behind_the_eyes" value="1" onChange={handleInputChange} />
                        <label for="pain_behind_the_eyes-no" name="pain_behind_the_eyes" className='no'>No</label>
                        <input type="radio" id="pain_behind_the_eyes-no" name="pain_behind_the_eyes" value="0" onChange={handleInputChange} />

                        <div class="question my-4">Dizziness: Do you feel dizzy in the current situation?</div>
                        <label for="dizziness-yes" name="dizziness" className='yes'>Yes</label>
                        <input type="radio" id="dizziness-yes" name="dizziness" value="1" onChange={handleInputChange} />
                        <label for="dizziness-no" name="dizziness" className='no'>No</label>
                        <input type="radio" id="dizziness-no" name="dizziness" value="0" onChange={handleInputChange} />

                        <div class="question my-4">Headache: Do you currently have a headache?</div>
                        <label for="headache-yes" name="headache" className='yes'>Yes</label>
                        <input type="radio" id="headache-yes" name="headache" value="1" onChange={handleInputChange} />
                        <label for="headache-no" name="headache" className='no'>No</label>
                        <input type="radio" id="headache-no" name="headache" value="0" onChange={handleInputChange} />

                        <div class="question my-4">Chest Pain: Are you experiencing chest pain right now?</div>
                        <label for=" chest_pain-yes" name=" chest_pain" className='yes'>Yes</label>
                        <input type="radio" id=" chest_pain-yes" name=" chest_pain" value="1" onChange={handleInputChange} />
                        <label for=" chest_pain-no" name=" chest_pain" className='no'>No</label>
                        <input type="radio" id=" chest_pain-no" name=" chest_pain" value="0" onChange={handleInputChange} />

                        <div class="question my-4">Vomiting: Have you vomited recently?</div>
                        <label for="vomiting-yes" name="vomiting" className='yes'>Yes</label>
                        <input type="radio" id="vomiting-yes" name="vomiting" value="1" onChange={handleInputChange} />
                        <label for="vomiting-no" name="vomiting" className='no'>No</label>
                        <input type="radio" id="vomiting-no" name="vomiting" value="0" onChange={handleInputChange} />

                        <div class="question my-4">Cough: Do you currently have a cough?</div>
                        <label for="cough-yes" name="cough" className='yes'>Yes</label>
                        <input type="radio" id="cough-yes" name="cough" value="1" onChange={handleInputChange} />
                        <label for="cough-no" name="cough" className='no'>No</label>
                        <input type="radio" id="cough-no" name="cough" value="0" onChange={handleInputChange} />

                        <div class="question my-4">Shivering: Are you shivering or experiencing chills right now?</div>
                        <label for="shivering-yes" name="shivering" className='yes'>Yes</label>
                        <input type="radio" id="arthritis-yes" name="shivering" value="1" onChange={handleInputChange} />
                        <label for="shivering-no" name="shivering" className='no'>No</label>
                        <input type="radio" id="arthritis-no" name="shivering" value="0" onChange={handleInputChange} />

                        <div class="question my-4">Asthma History: Do you have a history of asthma?</div>
                        <label for="asthma_history-yes" name="asthma_history" className='yes'>Yes</label>
                        <input type="radio" id="Asthma-yes" name="asthma_history" value="1" onChange={handleInputChange} />
                        <label for="asthma_history-no" name="asthma_history" className='no'>No</label>
                        <input type="radio" id="asthma_history-no" name="asthma_history" value="0" onChange={handleInputChange} />

                        <div class="question my-4">High Cholesterol: Do you currently have high cholesterol levels?</div>
                        <label for="high_cholesterol-yes" name="high_cholesterol" className='yes'>Yes</label>
                        <input type="radio" id="Cholesterol-yes" name="high_cholesterol" value="1" onChange={handleInputChange} />
                        <label for="high_cholesterol-no" name="high_cholesterol" className='no'>No</label>
                        <input type="radio" id="high_cholesterol-no" name="high_cholesterol" value="0" onChange={handleInputChange} />

                        <div class="question my-4">Diabetes: Have you been diagnosed with diabetes?</div>
                        <label for="diabetes-yes" name="diabetes" className='yes'>Yes</label>
                        <input type="radio" id="diabetes-yes" name="diabetes" value="1" onChange={handleInputChange} />
                        <label for="diabetes-no" name="diabetes" className='no'>No</label>
                        <input type="radio" id="diabetes-no" name="diabetes" value="0" onChange={handleInputChange} />

                        <div class="question my-4">Obesity: Are you currently dealing with obesity?</div>
                        <label for="Obesity-yes" name="obesity" className='yes'>Yes</label>
                        <input type="radio" id="Obesity-yes" name="Obesity" value="1" onChange={handleInputChange} />
                        <label for="Obesity-no" name="Obesity" className='no'>No</label>
                        <input type="radio" id="Obesity-no" name="Obesity" value="0" onChange={handleInputChange} />

                        <div class="question my-4">HIV/AIDS: Do you have a history of HIV/AIDS?</div>
                        <label for="HIV/AIDS-yes" name="hiv_aids" className='yes'>Yes</label>
                        <input type="radio" id="HIV/AIDS-yes" name="hiv_aids" value="1" onChange={handleInputChange} />
                        <label for="HIV/AIDS-no" name="hiv_aids" className='no'>No</label>
                        <input type="radio" id="HIV/AIDS-no" name="hiv_aids" value="0" onChange={handleInputChange} />

                        <div class="question my-4">Nasal Polyps: Have you been diagnosed with nasal polyps?</div>
                        <label for="nasal_polyps-yes" name="nasal_polyps" className='yes'>Yes</label>
                        <input type="radio" id="nasal_polyps-yes" name="nasal_polyps" value="1" onChange={handleInputChange} />
                        <label for="nasal_polyps-no" name="nasal_polyps" className='no'>No</label>
                        <input type="radio" id="nasal_polyps-no" name="nasal_polyps" value="0" onChange={handleInputChange} />

                        <div class="question my-4">Asthma: Do you currently experience any symptoms of asthma, such as difficulty breathing or wheezing, in your current situation? </div>
                        <label for="asthma-yes" name="asthma" className='yes'>Yes</label>
                        <input type="radio" id="asthma-yes" name="asthma" value="1" onChange={handleInputChange} />
                        <label for="asthma-no" name="asthma" className='no'>No</label>
                        <input type="radio" id="asthma-no" name="asthma" value="0" onChange={handleInputChange} />

                        <div class="question my-4">High Blood Pressure: Do you currently have high blood pressure?</div>
                        <label for="high_blood_pressure-yes" name="high_blood_pressure" className='yes'>Yes</label>
                        <input type="radio" id="high_blood_pressure-yes" name="high_blood_pressure" value="1" onChange={handleInputChange} />
                        <label for="high_blood_pressure-no" name="high_blood_pressure" className='no'>No</label>
                        <input type="radio" id="high_blood_pressure-no" name="high_blood_pressure" value="0" onChange={handleInputChange} />

                        <div class="question my-4">Severe Headache: Are you experiencing a severe headache right now?</div>
                        <label for="severe_headache-yes" name="severe_headache" className='yes'>Yes</label>
                        <input type="radio" id="severe_headache-yes" name="severe_headache" value="1" onChange={handleInputChange} />
                        <label for="severe_headache-no" name="severe_headache" className='no'>No</label>
                        <input type="radio" id="severe_headache-no" name="severe_headache" value="0" onChange={handleInputChange} />

                        <div class="question my-4">Weakness: Do you feel weak in the current situation?</div>
                        <label for="weakness-yes" name="weakness" className='yes'>Yes</label>
                        <input type="radio" id="weakness-yes" name="weakness" value="1" onChange={handleInputChange} />
                        <label for="weakness-no" name="weakness" className='no'>No</label>
                        <input type="radio" id="weakness-no" name="weakness" value="0" onChange={handleInputChange} />

                        <div class="question my-4">Trouble Seeing: Are you experiencing trouble seeing or blurred vision?</div>
                        <label for="trouble_seeing-yes" name="trouble_seeing" className='yes'>Yes</label>
                        <input type="radio" id="trouble_seeing-yes" name="trouble_seeing" value="1" onChange={handleInputChange} />
                        <label for="trouble_seeing-no" name="trouble_seeing" className='no'>No</label>
                        <input type="radio" id="trouble_seeing-no" name="trouble_seeing" value="0" onChange={handleInputChange} />

                        <div class="question my-4">Fever: Do you feel like you have a fever right now? Have you experienced any symptoms like chills or a higher-than-normal body temperature?</div>
                        <label for="fever-yes" name="fever" className='yes'>Yes</label>
                        <input type="radio" id="fever-yes" name="fever" value="1" onChange={handleInputChange} />
                        <label for="fever-no" name="feverg" className='no'>No</label>
                        <input type="radio" id="fever-no" name="fever" value="0" onChange={handleInputChange} />

                        <div class="question my-4">Body Aches: Are you experiencing general body aches at the moment?</div>
                        <label for="body_aches-yes" name="body_aches" className='yes'>Yes</label>
                        <input type="radio" id="body_aches-yes" name="body_aches" value="1" onChange={handleInputChange} />
                        <label for="body_aches-no" name="body_aches" className='no'>No</label>
                        <input type="radio" id="body_aches-no" name="body_aches" value="0" onChange={handleInputChange} />

                        <div class="question my-4">Sore Throat: Do you currently have a sore throat?</div>
                        <label for="sore_throat-yes" name="sore_throat" className='yes'>Yes</label>
                        <input type="radio" id="sore_throat-yes" name="sore_throat" value="1" onChange={handleInputChange} />
                        <label for="sore_throat-no" name="sore_throat" className='no'>No</label>
                        <input type="radio" id="sore_throat-no" name="sore_throat" value="0" onChange={handleInputChange} />

                        <div class="question my-4">Sneezing: Are you experiencing frequent sneezing right now?</div>
                        <label for="sneezing-yes" name="sneezing" className='yes'>Yes</label>
                        <input type="radio" id="sneezing-yes" name="sneezing" value="1" onChange={handleInputChange} />
                        <label for="sneezing-no" name="sneezing" className='no'>No</label>
                        <input type="radio" id="sneezing-no" name="sneezing" value="0" onChange={handleInputChange} />

                        <div class="question my-4">Diarrhea: Have you had diarrhea recently?</div>
                        <label for="diarrhea-yes" name="diarrhea" className='yes'>Yes</label>
                        <input type="radio" id="diarrhea-yes" name="diarrhea" value="1" onChange={handleInputChange} />
                        <label for="diarrhea-no" name="diarrhea" className='no'>No</label>
                        <input type="radio" id="diarrhea-no" name="diarrhea" value="0" onChange={handleInputChange} />

                        <div class="question my-4">Rapid Breathing: Are you breathing rapidly currently?</div>
                        <label for="rapid_breathing-yes" name="rapid_breathing" className='yes'>Yes</label>
                        <input type="radio" id="rapid_breathing-yes" name="rapid_breathing" value="1" onChange={handleInputChange} />
                        <label for="rapid_breathing-no" name="rapid_breathing" className='no'>No</label>
                        <input type="radio" id="rapid_breathing-no" name="rapid_breathing" value="0" onChange={handleInputChange} />

                        <div class="question my-4">Rapid Heart Rate: Do you have a rapid heart rate right now?</div>
                        <label for="rapid_heart_rate-yes" name="rapid_heart_rate" className='yes'>Yes</label>
                        <input type="radio" id="rapid_heart_rate-yes" name="rapid_heart_rate" value="1" onChange={handleInputChange} />
                        <label for="rapid_heart_rate-no" name="rapid_heart_rate" className='no'>No</label>
                        <input type="radio" id="rapid_heart_rate-no" name="rapid_heart_rate" value="0" onChange={handleInputChange} />

                        <div class="question my-4">Pain Behind Eyes: Are you feeling pain behind your eyes currently?</div>
                        <label for="pain_behind_eyes-yes" name="pain_behind_eyes" className='yes'>Yes</label>
                        <input type="radio" id="pain_behind_eyes-yes" name="pain_behind_eyes" value="1" onChange={handleInputChange} />
                        <label for="pain_behind_eyes-no" name="pain_behind_eyes" className='no'>No</label>
                        <input type="radio" id="pain_behind_eyes-no" name="pain_behind_eyes" value="0" onChange={handleInputChange} />

                        <div class="question my-4">Swollen Glands: Are your glands swollen right now?</div>
                        <label for="swollen_glands-yes" name="swollen_glands" className='yes'>Yes</label>
                        <input type="radio" id="swollen_glands-yes" name="swollen_glands" value="1" onChange={handleInputChange} />
                        <label for="swollen_glands-no" name="swollen_glands" className='no'>No</label>
                        <input type="radio" id="swollen_glands-no" name="swollen_glands" value="0" onChange={handleInputChange} />

                        <div class="question my-4">Rashes: Do you have any unusual rashes on your skin at the moment?</div>
                        <label for="rashes-yes" name="rashes" className='yes'>Yes</label>
                        <input type="radio" id="rashes-yes" name="rashes" value="1" onChange={handleInputChange} />
                        <label for="rashes-no" name="rashes" className='no'>No</label>
                        <input type="radio" id="rashes-no" name="rashes" value="0" onChange={handleInputChange} />

                        <div class="question my-4">Sinus Headache: Are you experiencing a sinus headache right now?</div>
                        <label for="sinus_headache-yes" name="sinus_headache" className='yes'>Yes</label>
                        <input type="radio" id="sinus_headache-yes" name="sinus_headache" value="1" onChange={handleInputChange} />
                        <label for="sinus_headache-no" name="sinus_headache" className='no'>No</label>
                        <input type="radio" id="sinus_headache-no" name="sinus_headache" value="0" onChange={handleInputChange} />

                        <div class="question my-4">Facial Pain: Do you currently have facial pain?</div>
                        <label for="facial_pain-yes" name="facial_pain" className='yes'>Yes</label>
                        <input type="radio" id="facial_pain-yes" name="facial_pain" value="1" onChange={handleInputChange} />
                        <label for="facial_pain-no" name="facial_pain" className='no'>No</label>
                        <input type="radio" id="facial_pain-no" name="facial_pain" value="0" onChange={handleInputChange} />

                        <div class="question my-4">Shortness of Breath: Are you experiencing shortness of breath currently?</div>
                        <label for="shortness_of_breath-yes" name="shortness_of_breath" className='yes'>Yes</label>
                        <input type="radio" id="shortness_of_breath-yes" name="shortness_of_breath" value="1" onChange={handleInputChange} />
                        <label for="shortness_of_breath-no" name="shortness_of_breath" className='no'>No</label>
                        <input type="radio" id="shortness_of_breath-no" name="shortness_of_breath" value="0" onChange={handleInputChange} />

                        <div class="question my-4">Reduced Smell and Taste: Have you noticed a reduction in your sense of smell and taste in the current situation?</div>
                        <label for="reduced_smell_and_taste-yes" name="reduced_smell_and_taste" className='yes'>Yes</label>
                        <input type="radio" id="Reduced-yes" name="reduced_smell_and_taste" value="1" onChange={handleInputChange} />
                        <label for="reduced_smell_and_taste-no" name="reduced_smell_and_taste" className='no'>No</label>
                        <input type="radio" id="reduced_smell_and_taste-no" name="reduced_smell_and_taste" value="0" onChange={handleInputChange} />

                        <div class="question my-4">Skin Irritation: Are you experiencing any skin irritation at the moment?</div>
                        <label for=" skinIrritation-yes" name=" skinIrritation" className='yes'>Yes</label>
                        <input type="radio" id="Skin-yes" name=" skinIrritation" value="1" onChange={handleInputChange} />
                        <label for=" skinIrritation-no" name=" skinIrritation" className='no'>No</label>
                        <input type="radio" id=" skinIrritation-no" name=" skinIrritation" value="0" onChange={handleInputChange} />

                        <div class="question my-4">Itchiness: Do you have any unusual itchiness right now?</div>
                        <label for=" itchiness-yes" name=" itchiness" className='yes'>Yes</label>
                        <input type="radio" id=" itchiness-yes" name=" itchiness" value="1" onChange={handleInputChange} />
                        <label for=" itchiness-no" name=" itchiness" className='no'>No</label>
                        <input type="radio" id=" itchiness-no" name=" itchiness" value="0" onChange={handleInputChange} />

                        <div class="question my-4">Throbbing: Are you experiencing throbbing sensations currently? </div>
                        <label for="throbbing_headache-yes" name="throbbing_headache" className='yes'>Yes</label>
                        <input type="radio" id="throbbing_headache-yes" name="throbbing_headache" value="1" onChange={handleInputChange} />
                        <label for="throbbing_headache-no" name="throbbing_headache" className='no'>No</label>
                        <input type="radio" id="throbbing_headache-no" name="throbbing_headache" value="0" onChange={handleInputChange} />

                        <div class="question my-4">Confusion: Do you feel confused or disoriented in the current situation?</div>
                        <label for="  confusion-yes" name="  confusion" className='yes'>Yes</label>
                        <input type="radio" id="  confusion-yes" name="  confusion" value="1" onChange={handleInputChange} />
                        <label for="  confusion-no" name="  confusion" className='no'>No</label>
                        <input type="radio" id="  confusion-no" name="  confusion" value="0" onChange={handleInputChange} />

                        <div class="question my-4">Back Pain: Do you currently have back pain?</div>
                        <label for="back_pain-yes" name="back_pain" className='yes'>Yes</label>
                        <input type="radio" id="back_pain-yes" name="back_pain" value="1" onChange={handleInputChange} />
                        <label for="back_pain-no" name="back_pain" className='no'>No</label>
                        <input type="radio" id="back_pain-no" name="back_pain" value="0" onChange={handleInputChange} />

                        <div class="question my-4">Knee Ache: Are you experiencing pain in your knees right now?</div>
                        <label for=" knee_ache-yes" name=" knee_ache" className='yes'>Yes</label>
                        <input type="radio" id=" knee_ache-yes" name=" knee_ache" value="1" onChange={handleInputChange} />
                        <label for=" knee_ache-no" name=" knee_ache" className='no'>No</label>
                        <input type="radio" id=" knee_ache-no" name=" knee_ache" value="0" onChange={handleInputChange} />
                        <div className='button12 my-2'>
                            <button className='btn btn2' name="submit" value="submit" type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title >WeatherApp</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal-body'>
                    {predictionResult ? (
                        <div>
                            <p className='disease-predict'>Predicted Disease: {predictionResult}</p>
                            <h3 className='precautions'>Precautions:</h3>
                            <ul>
                                {precautions && precautions.length > 0 ? (
                                    precautions.map((precaution, index) => (
                                        <li key={index} className='precautions'>{precaution}</li>
                                    ))
                                ) : (
                                    <p>No precautions available</p>
                                )}
                            </ul>
                        </div>
                    ) : (
                        <p>Processing your data...</p>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} className='btn2'>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Health;
