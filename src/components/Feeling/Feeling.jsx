import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Feeling = () => {
    // use history to navigate between pages
    const history = useHistory();

    const goForward = () => {
        history.push('/understanding');
    }

    return (<div>
            <h3>How are you feeling today?</h3>
                <input 
                    type="number"
                    min="1"
                    max="5" />
            <button onClick={goForward}>Next</button>
            </div>)
}

export default Feeling;