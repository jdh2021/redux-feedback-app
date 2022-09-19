
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SendIcon from '@mui/icons-material/Send';

const Review = () => {
    // use history to navigate between pages
    const history = useHistory();
    // use selector to retrieve data from store
    const feeling = useSelector(store => store.feelingReducer);
    const understanding = useSelector(store => store.understandingReducer);
    const support = useSelector(store => store.supportReducer);
    const comments = useSelector(store => store.commentsReducer);
    // use dispatch to report data to store
     const dispatch = useDispatch();

    // POST request to server
    const postFeedback = () => {
        // conditional in case user goes to '/review' directly in browser
        if ( feeling < 1 || understanding < 1 || support < 1) {
                alert('You\'re missing feedback. Please go back and select a number from 1 to 5 for the field(s) indicated below.')
                return;
        }
        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling,
                understanding,
                support,
                comments,
            }
        }).then(response => {
            console.log('POST successful', response);
            dispatch({type: 'CLEAR_FEEDBACK'});
            history.push('/success');
        }).catch(error => {
            alert('There\'s an error in POST');
        }) 
    }

    return <Box sx={{ flexGrow: 1 }}>
        <Grid container>
            <Grid item xs>
            </Grid>
            <Grid item xs={8} sm={6} md={6} lg={4} xl={4}>
                <Card 
                    sx ={{ minWidth: 300, minHeight: 275 }}
                    style={{backgroundColor: "#e7ccaf"}}
                    square>
                    <CardContent sx={{minWidth: 200, minHeight: 175, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <h3>Review before submitting</h3>
                        <ul className="Review-list">
                            <li>Feeling: {feeling < 1 ? <span>Missing!</span> : <span>{feeling}</span>}</li>
                            <li>Understanding: {understanding < 1 ? <span>Missing!</span> : <span>{understanding}</span>}</li>
                            <li>Support: {support < 1 ? <span>Missing!</span> : <span>{support}</span>} </li>
                            <li>Comments:</li>
                            <li>{comments === '' ? <span>None</span> : <span>{comments}</span>}</li>
                        </ul>
                    </CardContent>
                    <CardActions sx={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                        <Button onClick={history.goBack}>
                            <ArrowBackIosIcon style={{color:"#642e68"}} />
                        </Button>
                        <Button onClick={postFeedback}>
                            <SendIcon style={{color:"#642e68"}} />
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs>
            </Grid>
        </Grid>
    </Box>
}

export default Review;
