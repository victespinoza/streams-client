import React from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from '../actions';

class GoogleAuth extends React.Component{
    state={isSignedIn:null};
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId: '260651242892-0hj1178pcliu7hnehm02c9v4a38e27e1.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()});
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange(isSignedIn){
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
        if(this.state.isSignedIn === null){
            return <div>Idk is signed</div>;
        }else if(this.state.isSignedIn){
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
}

export default connect(null,{signIn, signOut})(GoogleAuth);