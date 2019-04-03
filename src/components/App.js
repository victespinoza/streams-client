import React from 'react';
import {Router, Route} from 'react-router-dom';

import StreamCreate from 'components/streams/StreamCreate';
import StreamDelete from 'components/streams/StreamDelete';
import StreamEdit from 'components/streams/StreamEdit';
import StreamList from 'components/streams/StreamList';
import StreamShow from 'components/streams/StreamShow';
import Header from 'components/Header';
import history from 'history.js';

const App = () => {
    return (
        <div className="ui container">
        <Router history={history}>
            <div>
                <Header/>
                <Route path="/stream/new" exact component={StreamCreate}/>
                <Route path="/stream/delete" exact component={StreamDelete}/>
                <Route path="/stream/edit/:id" exact component={StreamEdit}/>
                <Route path="/" exact component={StreamList}/>
                <Route path="/stream/show" exact component={StreamShow}/>
            </div>
        </Router>
        </div>
    );
};

export default App;