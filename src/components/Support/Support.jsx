import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Support = () => {
    // use history to navigate between pages
    const history = useHistory();

    const goForward = () => {
        history.push('/comments');
    }

    return (<div>
            <h3>How well are you being supported?</h3>
                <input 
                    type="number"
                    min="1"
                    max="5" />
                <button onClick={goForward}>Next</button>
                <button onClick={history.goBack}>Back</button>
            </div>)
}

export default Support;