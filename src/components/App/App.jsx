import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Success from '../Success/Success';
import Admin from '../Admin/Admin';

import { ThemeProvider } from '@mui/material/styles';
import FontHoverTheme from '../FontHoverTheme/FontHoverTheme';

function App() {
    return (<ThemeProvider theme={FontHoverTheme}>
        <div className="App">
            <Router>
                <Header />
                <Route exact path ="/">
                    <Feeling />
                </Route>
                <Route exact path ="/understanding">
                    <Understanding />
                </Route>
                <Route exact path ="/support">
                    <Support />
                </Route>
                <Route exact path ="/comments">
                    <Comments />
                </Route>
                <Route exact path ="/review">
                    <Review />
                </Route>
                <Route exact path ="/success">
                    <Success />
                </Route>
                <Route exact path ="/admin">
                    <Admin />
                </Route>
            </Router>
        </div>
    </ThemeProvider>
    );
}

export default App;
