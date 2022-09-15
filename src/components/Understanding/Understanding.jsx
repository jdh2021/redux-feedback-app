import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Understanding = () => {
    // use history to navigate between pages
    const history = useHistory();
    // use dispatch to report data to store
    const dispatch = useDispatch();
    // use selector to get value of understanding from store
    const understanding = useSelector(store => store.understandingReducer);

    const dispatchUnderstanding = (event) => {
        dispatch({type: 'DISPATCH_UNDERSTANDING', payload: event.target.value});
        console.log('in dispatchUnderstanding. Rating is:', event.target.value);
    }
    
    const goForward = () => {
        if (understanding <1 || understanding >5 || understanding === '' ) {
            alert('Please choose a whole number from 1 to 5.')
        } else {
            history.push('/support');
        }
    }
    
    return (<div>
        <h3>How well are you understanding the content?</h3>
        <input 
            type="number"
            min="1"
            max="5"
            value={understanding}
            onChange={dispatchUnderstanding} />
        <button onClick={goForward}>Next</button>
        <button onClick={history.goBack}>Back</button>
    </div>)
}

export default Understanding;