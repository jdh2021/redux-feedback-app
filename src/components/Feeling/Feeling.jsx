import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Slider from '@mui/material/Slider';

const marks = [{value: 1, label: '1'}, {value: 2, label: '2'}, {value: 3, label: '3'}, {value: 4, label: '4'}, {value: 5, label: '5'}];

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

    return <Box sx={{ flexGrow: 1 }}>
        <Grid container>
            <Grid item xs>
            </Grid>
            <Grid item xs={6}>
                <Card 
                    sx ={{ minWidth: 300, minHeight: 275}}
                    style={{backgroundColor: "#e7ccaf"}}
                    square>
                    <CardContent sx={{minWidth: 200, minHeight: 175, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <h3>How are you feeling today?</h3>
                        <CardContent>
                            <Slider className="Slider"
                                style={{color: "#9e2f28"}}
                                step={1}
                                marks={marks}
                                min={1}
                                max={5}
                                value={feeling}
                                onChange={dispatchFeeling}
                            />
                        </CardContent>
                    </CardContent>
                    <CardActions sx={{ display: "flex", flexDirection: "row", justifyContent: "right" }}>
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

export default Feeling;