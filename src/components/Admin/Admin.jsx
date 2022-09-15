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

    // prompt if record should be deleted, takes in ID of record clicked on. if confirmed, calls deleteFeedback and passes ID as argument
    const confirmDelete = (id) => {
        console.log('in confirmDelete');
        if (window.confirm('Do you want to delete this record?')) {
            deleteFeedback(id);
        }
    }

    // DELETE request to server, takes in ID of record clicked on
    const deleteFeedback = (id) => {
        console.log('in deleteFeedback. Id is:', id);
        axios({
            method: 'DELETE',
            url: `/feedback/${id}`,
        }).then(response => {
            console.log('DELETE successful');
            getFeedback();
        }).catch(error => {
            console.log('There\'s an error in DELETE');
        })
    };

    // PUT request to server, takes in ID of record clicked on
    const flagFeedback = (id) => {
        console.log('in flagFeedback. Id is:', id);
        axios({
            method: 'PUT',
            url: `/feedback/${id}`,
        }).then(response => {
            console.log('PUT successful');
            getFeedback();
        }).catch(error => {
            console.log('There\'s an error in PUT');
        })
    };

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
                    const date = new Date (individualFeedback.date);
                    const formattedDate = `${(date.getMonth() + 1)}.${date.getDate()}.${date.getFullYear().toLocaleString().slice(-2)}`;
                    return <tr key={individualFeedback.id}>
                            <td>{formattedDate}</td>
                            <td>{individualFeedback.feeling}</td>
                            <td>{individualFeedback.understanding}</td>
                            <td>{individualFeedback.support}</td>
                            <td>{individualFeedback.comments}</td>
                            <td><button onClick={() => confirmDelete(individualFeedback.id)}>Delete</button></td>
                            <td>
                                { individualFeedback.flagged ? 
                                <button onClick={() => flagFeedback(individualFeedback.id)}>Flagged</button>:
                                <button onClick={() => flagFeedback(individualFeedback.id)}>Not flagged</button>
                                }
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
    )
}


export default Admin;