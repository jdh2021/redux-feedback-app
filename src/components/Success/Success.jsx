import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Success = () => {
    // use history to navigate between pages
    const history = useHistory();
    
    const goHome = () => {
        history.push('/');
    }

    return (<div>
            <h3>Success</h3>
            <button onClick={goHome}>Leave more feedback</button>
        </div>)
}
    
    export default Success;