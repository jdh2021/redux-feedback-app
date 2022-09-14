import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Feeling = () => {
    // use history to navigate between pages
    const history = useHistory();
    // use dispatch to report data to store
    const dispatch = useDispatch();
     // use state to target changeable value of feeling
    const [feeling, setFeeling] = useState(0);

    const dispatchFeeling = () => {
        dispatch({type: 'dispatch_feeling', payload: feeling});
        console.log('in dispatchFeeling. Rating is:', feeling);
        history.push('/understanding');
    }

    return (<div>
        <h3>How are you feeling today?</h3>
        <input 
            type="number"
            min="1"
            max="5" 
            value={feeling}
            onChange={(event) => setFeeling(event.target.value)}/>
        <button onClick={dispatchFeeling}>Next</button>
    </div>)
}

export default Feeling;