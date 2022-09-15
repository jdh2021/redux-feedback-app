import { useHistory } from 'react-router-dom';

const Success = () => {
    // use history to navigate between pages
    const history = useHistory();
    
    return (<div>
            <h3>Success</h3>
            <button onClick={()=> history.push('/')}>Leave more feedback</button>
        </div>)
}
    
export default Success;