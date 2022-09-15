import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Comments = () => {
    // use history to navigate between pages
    const history = useHistory();
     // use dispatch to report data to store
     const dispatch = useDispatch();
    // use selector to get value of comments from store
    const comments = useSelector(store => store.commentsReducer);

    const dispatchComments = (event) => {
        dispatch({type: 'DISPATCH_COMMENTS', payload: event.target.value});
        console.log('in dispatchComments. Comments are:', event.target.value );
    }
    
    return (<div>
        <h3>Any comments you want to leave?</h3>
        <textarea
            value={comments}
            onChange={dispatchComments}>
        </textarea>
        <button onClick={() => history.push('/review')}>Next</button>
        <button onClick={history.goBack}>Back</button>
    </div>)
}

export default Comments;