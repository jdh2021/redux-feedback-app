import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Review = () => {
    // use history to navigate between pages
    const history = useHistory();
    // use selector to retrieve data from store
    const retrievedFeeling = useSelector(store => store.feelingReducer)

    const goForward = () => {
        history.push('/success');
    }

    return (<div>
        <h3>Review</h3>
            <ul>
                <li>Feelings: {retrievedFeeling} </li>
                <li>Understanding: </li>
                <li>Support: </li>
                <li>Comments:</li>
            </ul>
        <button onClick={goForward}>Submit</button>
        <button onClick={history.goBack}>Back</button>
    </div>)
}

export default Review;
