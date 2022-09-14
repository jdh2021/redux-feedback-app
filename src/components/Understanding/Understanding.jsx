import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Understanding = () => {
    // use history to navigate between pages
    const history = useHistory();
     // use dispatch to report data to store
     const dispatch = useDispatch();
     // use state to target changeable value of understanding
    const [understanding, setUnderstanding] = useState(0);

    const dispatchUnderstanding = () => {
        dispatch({type: 'dispatch_understanding', payload: understanding});
        console.log('in dispatchUnderstanding. Rating is:', understanding);
        history.push('/support');
    }
  
    return (<div>
            <h3>How well are you understanding the content?</h3>
                <input 
                    type="number"
                    min="1"
                    max="5"
                    value={understanding}
                    onChange={(event) => setUnderstanding(event.target.value)}  />
                <button onClick={dispatchUnderstanding}>Next</button>
                <button onClick={history.goBack}>Back</button>
            </div>)
}

export default Understanding;