import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

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
    
    return <Box sx={{ flexGrow: 1 }}>
        <Grid container>
            <Grid item xs>
            </Grid>
            <Grid item xs={6}>
                <Card 
                    sx ={{minWidth: 300, minHeight: 275}}
                    style={{backgroundColor: "#e7ccaf"}}
                    square>
                    <CardContent sx={{minWidth: 200, minHeight: 175, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <h3>Any comments you want to leave?</h3>
                        <CardContent sx={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                            <textarea
                                className="Comments-input"
                                rows="3"
                                value={comments}
                                onChange={dispatchComments}>
                            </textarea>
                        </CardContent>
                    </CardContent>
                    <CardActions sx={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                        <Button onClick={history.goBack}>
                            <ArrowBackIosIcon style={{color:"#642e68"}}/>
                        </Button>
                        <Button onClick={() => history.push('/review')}>
                            <ArrowForwardIosIcon style={{color: "#642e68"}}/>
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs>
            </Grid>
        </Grid>
    </Box>
}

export default Comments;