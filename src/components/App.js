import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Login from '../container/login/login';
import s from './user.scss';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className={s.backgroundimg}></div>
        <Login/>
      </div>
    );
  }
}
export default CSSModules(Home, s);
