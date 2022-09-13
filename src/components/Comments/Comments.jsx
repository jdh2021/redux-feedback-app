import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Comments = () => {
    // use history to navigate between pages
    const history = useHistory();

    const goForward = () => {
        history.push('/review');
    }

    return (<div>
                <h3>Any comments you want to leave?</h3>
                <textarea>
                </textarea>
                <button onClick={goForward}>Next</button>
                <button onClick={history.goBack}>Back</button>
            </div>)
}

export default Comments;