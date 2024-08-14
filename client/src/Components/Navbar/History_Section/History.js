import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './History.css';

const History = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        fetchHistory();
    }, []);

    const fetchHistory = async () => {
        try {
            const response = await axios.get('http://localhost:5001/history', { withCredentials: true });
            setHistory(response.data);
        } catch (error) {
            console.error('Error fetching history:', error);
        }
    };

    return (
        <div className="history-container">
            <h2 className='user-profile1'>History</h2>
            {history.length > 0 ? (
                <ul className="history-list">
                    {history.map((item, index) => (
                        <li key={index}>
                             <p><span>User Name:</span> {item.username}</p>
                            <p><span>Disease:</span> {item.predicted_disease}</p>
                            <p><span>Precautions:</span></p>
                            <ol className="precaution-list">
                                {item.precautions.map((precaution, idx) => (
                                    <li key={idx} className="precaution-item">{precaution}</li>
                                ))}
                            </ol>
                            <p><span>Temperature:</span> {item.temperature} °C</p>
                            <p><span>Wind:</span> {item.wind} km/h</p>
                            <p><span>Humidity:</span> {item.humidity} %</p>
                            <p><span>Timestamp:</span> {new Date(item.timestamp).toLocaleString()}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="no-history">No history available</p>
            )}
        </div>
    );
};

export default History;
