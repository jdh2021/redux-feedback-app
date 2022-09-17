import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import FlagSharpIcon from '@mui/icons-material/FlagSharp';
import OutlinedFlagSharpIcon from '@mui/icons-material/OutlinedFlagSharp';

const Admin = () => {

    // state variables to display data on page
    const [feedbackData, setFeedbackData] = useState([]);

    // useEffect calls getFeedback when Admin component renders
    useEffect(() => {
        getFeedback();
    }, []);

    // GET request to server, sets FeedbackData to array of feedback objects
    const getFeedback = () => {
        console.log('in getFeedback');
        axios({
            method: 'GET',
            url: '/feedback',
        }).then(response => {
            console.log('GET successful');
            setFeedbackData(response.data);
        }).catch(error => {
            alert('There\'s an error in GET');
        });
    }

    // prompt if record should be deleted, takes in ID of record clicked on. if confirmed, calls deleteFeedback and passes ID as argument
    const confirmDelete = (id) => {
        console.log('in confirmDelete');
        if (window.confirm('Do you want to delete this record?')) {
            deleteFeedback(id);
        }
    }

    // DELETE request to server, takes in ID of record clicked on
    const deleteFeedback = (id) => {
        console.log('in deleteFeedback. Id is:', id);
        axios({
            method: 'DELETE',
            url: `/feedback/${id}`,
        }).then(response => {
            console.log('DELETE successful');
            getFeedback();
        }).catch(error => {
            alert('There\'s an error in DELETE');
        })
    };

    // PUT request to server, takes in ID of record clicked on
    const flagFeedback = (id) => {
        console.log('in flagFeedback. Id is:', id);
        axios({
            method: 'PUT',
            url: `/feedback/${id}`,
        }).then(response => {
            console.log('PUT successful');
            getFeedback();
        }).catch(error => {
            alert('There\'s an error in PUT');
        })
    };

    return <Box sx={{ flexGrow: 1 }}>
        <Grid container>
            <Grid item xs>
            </Grid>
            <Grid item xs={10} sm={10} md={10} lg={8} xl={6}>
                <Card 
                    sx ={{ minWidth: 400}}
                    style={{backgroundColor: "#e7ccaf"}}
                    square>
                    <CardContent sx={{minWidth: 300, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <div className="Feedback-results">
                            <h3>Results</h3>
                            <div className="Feedback-results">
                                <table className="Table-results">
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Feeling</th>
                                            <th>Understanding</th>
                                            <th>Support</th>
                                            <th>Comments</th>
                                            <th>Delete</th>
                                            <th>Flag</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {feedbackData.map((individualFeedback) => {
                                            const date = new Date (individualFeedback.date);
                                            const formattedDate = `${(date.getMonth() + 1)}.${date.getDate()}.${date.getFullYear().toLocaleString().slice(-2)}`;
                                            return <tr key={individualFeedback.id}>
                                                    <td>{formattedDate}</td>
                                                    <td>{individualFeedback.feeling}</td>
                                                    <td>{individualFeedback.understanding}</td>
                                                    <td>{individualFeedback.support}</td>
                                                    <td>{individualFeedback.comments}</td>
                                                    <td>
                                                        <Button onClick={() => confirmDelete(individualFeedback.id)}>
                                                            <DeleteSharpIcon style={{color:"#642e68"}}/>
                                                        </Button>
                                                    </td>
                                                    <td>
                                                        { individualFeedback.flagged ? 
                                                        <Button onClick={() => flagFeedback(individualFeedback.id)}>
                                                            <FlagSharpIcon style={{color: "#9e2f28"}}/>
                                                        </Button> :
                                                        <Button onClick={() => flagFeedback(individualFeedback.id)}>
                                                            <OutlinedFlagSharpIcon style={{color:"#642e68"}}/>
                                                        </Button>
                                                        }
                                                    </td>
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs>
            </Grid>
        </Grid>
    </Box>
}


export default Admin;