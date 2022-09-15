
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const Review = () => {
    // use history to navigate between pages
    const history = useHistory();
    // use selector to retrieve data from store
    const feeling = useSelector(store => store.feelingReducer);
    const understanding = useSelector(store => store.understandingReducer);
    const support = useSelector(store => store.supportReducer);
    const comments = useSelector(store => store.commentsReducer);
    // use dispatch to report data to store
     const dispatch = useDispatch();

    // POST request to server
    const submitFeedback = () => {
        // conditional in case user goes to '/review' directly in browser
        if ( feeling <1 || feeling >5 ||
            understanding <1 || understanding >5 ||
            support <1 || support >5) {
                alert('You haven\'t added the required information. Please go back and choose a number from 1 to 5 for Feeling, Understanding, and Support.')
                return;
        }
        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling,
                understanding,
                support,
                comments,
            }
        }).then(response => {
            console.log('POST successful', response);
            dispatch({type: 'CLEAR_FEEDBACK'});
            history.push('/success');
        }).catch(error => {
            console.log('There\'s an error in POST', error);
        }) 
    }

    return (<div>
        <h3>Review</h3>
            <ul>
                <li>Feeling: {feeling} </li>
                <li>Understanding: {understanding} </li>
                <li>Support: {support} </li>
                <li>Comments: {comments}</li>
            </ul>
        <button onClick={submitFeedback}>Submit</button>
        <button onClick={history.goBack}>Back</button>
    </div>)
}

export default Review;
