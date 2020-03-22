import React from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import GHLogin from "../components/GHLogin/GHLogin";


class Routes extends React.PureComponent {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={(props) => <GHLogin  {...props}/>}  />
                </Switch>
            </div>
        )
    }
}

export default withRouter(Routes)
