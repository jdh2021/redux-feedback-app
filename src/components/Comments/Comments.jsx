import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Comments = () => {
    // use history to navigate between pages
    const history = useHistory();
     // use dispatch to report data to store
     const dispatch = useDispatch();
    //use state to target changeable value of comments
    const [comments, setComments] = useState('');

    const dispatchComments = () => {
        dispatch({type: 'dispatch_comments', payload: comments});
        console.log('in dispatchComments. Comments are:', comments );
        history.push('/review');
    }

    return (<div>
                <h3>Any comments you want to leave?</h3>
                <textarea
                    value={comments}
                    onChange={(event) => setComments(event.target.value)}>
                </textarea>
                <button onClick={dispatchComments}>Next</button>
                <button onClick={history.goBack}>Back</button>
            </div>)
}

export default Comments;