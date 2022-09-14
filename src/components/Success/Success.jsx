import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Success = () => {
    // use history to navigate between pages
    const history = useHistory();
    // use dispatch to report action to store
    const dispatch = useDispatch();
    
    const clearFeedback = () => {
        dispatch({type: 'clear_feedback'});
        history.push('/');
    }

    return (<div>
            <h3>Success</h3>
            <button onClick={clearFeedback}>Leave more feedback</button>
        </div>)
}
    
    export default Success;