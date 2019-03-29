import React from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from '../actions';

class GoogleAuth extends React.Component{
    
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId: '797401886567-9cumct9mrt3v2va409rasa7fa6fq02hh.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) =>{
        if(isSignedIn){
            this.props.signIn();
        }else{
            this.props.signOut();
        }
    }

    onSignIn = ()=>{
        this.auth.signIn();
    };

    onSignOut = ()=>{
        this.auth.signOut();
    };

    renderAuthButton(){
        let {isSignedIn} = this.props;
        if(isSignedIn === null){
            return <div>Idk is signed</div>;
        }else if(isSignedIn){
            return (<button onClick={this.onSignOut} className="ui red google button">
                <i className="google icon"></i>Signed out
            </button>);
        }else{
            return (<button onClick={this.onSignIn} className="ui red google button">
                <i className="google icon"></i>Signed in
            </button>);
        }
    }

    render(){
        return <div>{this.renderAuthButton()}</div>;
    }
    
};

const mapStateToProps = (state)=>{
    return {isSignedIn: state.auth.isSignedIn};
}

export default connect(mapStateToProps,{signIn, signOut})(GoogleAuth);