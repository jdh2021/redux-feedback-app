import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Admin = () => {

    // state variables to display data on page
    const [feedbackData, setFeedbackData] = useState([]);

    // useEffect calls getFeedback when Admin component renders
    useEffect(() => {
        getFeedback();
    }, []);

    // GET request to server, sets FeedbackData to array of feedback objects
    const getFeedback = () => {
        console.log('in getFeedback');
        axios({
            method: 'GET',
            url: '/feedback',
        }).then(response => {
            console.log('GET successful');
            setFeedbackData(response.data);
        }).catch(error => {
            console.log('There\'s an error in GET');
        });
    }

    return (<div>
        <h3>Feedback Results</h3>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Feeling</th>
                    <th>Understanding</th>
                    <th>Support</th>
                    <th>Comments</th>
                    <th>Delete</th>
                    <th>Flagged</th>
                </tr>
            </thead>
            <tbody>
                {feedbackData.map((individualFeedback) => {
                    console.log(individualFeedback);
                    return <tr key={individualFeedback.id}>
                            <td>{individualFeedback.date}</td>
                            <td>{individualFeedback.feeling}</td>
                            <td>{individualFeedback.understanding}</td>
                            <td>{individualFeedback.support}</td>
                            <td>{individualFeedback.comments}</td>
                            <td><button>Delete</button></td>
                            <td><button>Flagged</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
    )
}


export default Admin;