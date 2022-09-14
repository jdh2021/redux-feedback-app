import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Support = () => {
    // use history to navigate between pages
    const history = useHistory();
     // use dispatch to report data to store
     const dispatch = useDispatch();
    // use state to target changeable value of support
    const [support, setSupport] = useState(0);

    const dispatchSupport = () => {
        dispatch({type: 'dispatch_support', payload: support});
        console.log('in dispatchSupport. Rating is:', support);
        history.push('/comments');
    }

    return (<div>
            <h3>How well are you being supported?</h3>
                <input 
                    type="number"
                    min="1"
                    max="5"
                    value={support}
                    onChange={(event) => setSupport(event.target.value)} />
                <button onClick={dispatchSupport}>Next</button>
                <button onClick={history.goBack}>Back</button>
            </div>)
}

export default Support;