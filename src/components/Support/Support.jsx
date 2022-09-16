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
import Slider from '@mui/material/Slider';

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
        // conditional before allowing user to proceed to comments
        if (support < 1) {
            alert('Please click the slider to select a number from 1 to 5.');
        } else {
            history.push('/comments');
        }
    }

    // values for MUI slider
    const marks = [{value: 1, label: '1'}, {value: 2, label: '2'}, {value: 3, label: '3'}, {value: 4, label: '4'}, {value: 5, label: '5'}];

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
                        <h3>How well are you being supported?</h3>
                        <CardContent>
                            <Slider
                                style={{color: "#9e2f28"}}
                                step={1}
                                marks={marks}
                                min={1}
                                max={5}
                                value={support}
                                onChange={dispatchSupport}
                            />
                        </CardContent>
                    </CardContent>
                    <CardActions sx={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                        <Button onClick={history.goBack}>
                            <ArrowBackIosIcon style={{color:"#642e68"}}/>
                        </Button>
                        <Button onClick={goForward}>
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

export default Support;