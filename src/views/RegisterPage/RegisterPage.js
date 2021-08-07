import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { RegisterNick } from './RegisterNick';
import { RegisterCardNumber } from './RegisterCardNumber';
import { RegisterContext } from 'helpers/context/RegisterContext'

export const RegisterPage = () => {
  const [info, setInfo] = React.useState({nick: '', cardNumber: ''});

  return (
    <Switch>
      <RegisterContext.Provider value={{info, setInfo}}>
        <Route path="/register/nick" render={(props) => <RegisterNick {...props}/>} />
        <Route path="/register/card-number" render={(props) => <RegisterCardNumber {...props} />} />
        <Redirect from="/register" to="/register/nick" />
      </RegisterContext.Provider>
    </Switch>
  )
}