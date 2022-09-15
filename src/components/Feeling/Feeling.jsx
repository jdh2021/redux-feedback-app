import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Feeling = () => {
    // use history to navigate between pages
    const history = useHistory();
    // use dispatch to report data to store
    const dispatch = useDispatch();
    // use selector to get value of feeling from store
    const feeling = useSelector(store => store.feelingReducer);

    const dispatchFeeling = (event) => {
        dispatch({type: 'DISPATCH_FEELING', payload: event.target.value});
        console.log('in dispatchFeeling. Rating is:', event.target.value);
    }
    
    const goForward = () => {
        // conditional before allowing user to proceed to understanding
        if (feeling <1 || feeling >5 || feeling === '' ) {
            alert('Please choose a whole number from 1 to 5.')
        } else {
            history.push('/understanding');
        }
    }

    return (<div>
        <h3>How are you feeling today?</h3>
        <input 
            type="number"
            min="1"
            max="5" 
            value={feeling}
            onChange={dispatchFeeling} />
        <button onClick={goForward}>Next</button>
    </div>)
}

export default Feeling;