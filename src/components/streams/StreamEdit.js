import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import {fetchStream, editStream} from 'actions';
import StreamForm from 'components/streams/StreamForm';

class StreamEdit extends React.Component{
    componentDidMount(){
        let {fetchStream, match} = this.props;
        fetchStream(match.params.id);
    }

    onSubmit = (formValues) =>{
        this.props.editStream(this.props.match.params.id,formValues);
    };
    
    render(){
        let {stream} = this.props;
        if(!stream){
            return <div>Loading</div>;
        }
        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm
                initialValues={_.pick(stream,'title','description')} 
                onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) =>{
    return{
        stream: state.streams[ownProps.match.params.id]
    };
}

export default connect(mapStateToProps,
    {fetchStream, editStream}
)(StreamEdit);