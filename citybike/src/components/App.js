import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import '../../node_modules/materialize-css/dist/css/materialize.min.css';

class App extends React.Component {
    render() {
        return (
            <div>
                This is some content
                <BrowserRouter>
                    <Route path="/" component={LandingPage} />
                </BrowserRouter>
            </div>
        )
    }
}

export default App;