/* eslint-disable react/forbid-prop-types */
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { loginUser } from '../../sagas/loginSaga/reducer'


import GitHubLogin from 'react-github-login';


const onFailure = response => console.error(response);


export class GHLogin extends React.Component {
    login = (code) => {
        const { loginUserFunc } = this.props
        loginUserFunc(code.code)
    }
    render() {
    return (
        <GitHubLogin clientId="Iv1.3c56a85d5c3a50ac"
                     redirectUri="http://127.0.0.1:8000/"
                     onSuccess={this.login}
                     onFailure={onFailure}/>
    );
    }
}

const mapDispatchToProps = {
    loginUserFunc: loginUser
}

GHLogin.propTypes = {
    loginUserFunc: PropTypes.func,
}

GHLogin.defaultProps = {
    loginUserFunc: null,
}

export default connect(null, mapDispatchToProps)(GHLogin)
