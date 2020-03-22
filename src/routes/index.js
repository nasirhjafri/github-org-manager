import React from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import GitHubLogin from "../components/GitHubLogin/GitHubLogin";


class Routes extends React.PureComponent {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={(props) => <GitHubLogin  {...props}/>}  />
                </Switch>
            </div>
        )
    }
}

export default withRouter(Routes)
