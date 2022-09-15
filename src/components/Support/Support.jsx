import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Support = () => {
    // use history to navigate between pages
    const history = useHistory();
     // use dispatch to report data to store
     const dispatch = useDispatch();
     // use selector to get value of support from store
     const support = useSelector(store => store.supportReducer);

    const dispatchSupport = (event) => {
        dispatch({type: 'DISPATCH_SUPPORT', payload: event.target.value});
        console.log('in dispatchSupport. Rating is:', event.target.value);
    }

    const goForward = () => {
        if (support <1 || support >5 || support === '' ) {
            alert('Please choose a whole number from 1 to 5.')
        } else {
            history.push('/comments');
        }
    }

    return (<div>
        <h3>How well are you being supported?</h3>
        <input 
            type="number"
            min="1"
            max="5"
            value={support}
            onChange={dispatchSupport} />
        <button onClick={goForward}>Next</button>
        <button onClick={history.goBack}>Back</button>
    </div>)
}

export default Support;