import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Success = () => {
    // use history to navigate between pages
    const history = useHistory();
    // use dispatch to report action to store
    const dispatch = useDispatch();
    
    const clearFeedback = () => {
        dispatch({type: 'CLEAR_FEEDBACK'});
        history.push('/');
    }

    return (<div>
            <h3>Success</h3>
            <button onClick={clearFeedback}>Leave more feedback</button>
        </div>)
}
    
    export default Success;