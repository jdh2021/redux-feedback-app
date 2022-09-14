import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Review = () => {
    // use history to navigate between pages
    const history = useHistory();
    // use selector to retrieve data from store
    const retrievedFeeling = useSelector(store => store.feelingReducer);
    const retrievedUnderstanding = useSelector(store => store.understandingReducer);
    const retrievedSupport = useSelector(store => store.supportReducer);
    const retrievedComments = useSelector(store => store.commentsReducer);

    const goForward = () => {
        history.push('/success');
    }

    return (<div>
        <h3>Review</h3>
            <ul>
                <li>Feelings: {retrievedFeeling} </li>
                <li>Understanding: {retrievedUnderstanding} </li>
                <li>Support: {retrievedSupport} </li>
                <li>Comments: {retrievedComments}</li>
            </ul>
        <button onClick={goForward}>Submit</button>
        <button onClick={history.goBack}>Back</button>
    </div>)
}

export default Review;
