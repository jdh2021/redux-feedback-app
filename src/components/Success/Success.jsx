import { useHistory } from 'react-router-dom';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CreateIcon from '@mui/icons-material/Create';

const Success = () => {
    // use history to navigate between pages
    const history = useHistory();
    
    return <Box sx={{ flexGrow: 1 }}>
        <Grid container>
            <Grid item xs>
            </Grid>
            <Grid item xs={8} sm={6} md={6} lg={4} xl={4}>
                <Card 
                    sx ={{ minWidth: 300, minHeight: 275}}
                    style={{backgroundColor: "#e7ccaf"}}
                    square>
                    <CardContent sx={{minWidth: 200, minHeight: 175, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <h3>Success!</h3>
                        <span>Your feedback was sent.</span><br />
                        <span>When you're ready, take another survey.</span>
                    </CardContent>
                    <CardActions sx={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                        <Button onClick={()=> history.push('/')}>
                            <CreateIcon style={{color:"#642e68"}} fontSize="large" />
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs>
            </Grid>
        </Grid>
    </Box>
}
    
export default Success;