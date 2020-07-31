import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import LandingPage from '../pages/LandingPage';

class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route path="/" component={LandingPage} />
                </BrowserRouter>
            </div>
        )
    }
}

export default App;