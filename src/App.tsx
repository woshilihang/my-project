import React from 'react';
import { Dispatch } from 'redux';
import {
    connect
} from 'react-redux';
import {
  HashRouter,
  Route,
} from 'react-router-dom';

// import pages com
import Home from 'views/Home';

import { AppState } from './store';

import './App.sass';

const addCount = () => ({
  type: 'ADD_COUNT'
})

interface IAppComponentProps {
  addCount: () => void
}

class AppComponent extends React.Component<IAppComponentProps, {}> {
  constructor(props: IAppComponentProps) {
    super(props);
  }

  public render() {
    return (
      <div>
        <HashRouter>
          <Route exact path='/' component={ Home }></Route>
        </HashRouter>
      </div>
    )
  }
}

const mapStateToProps = (state: AppState) => {
  return state;
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addCount: () => dispatch(addCount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
