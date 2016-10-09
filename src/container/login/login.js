import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import Form from './form';
import s from './login.scss';

class Login extends Component {
    render() {
        return (
            <div className={s.container}>
                <div className={s.login_img_container}>
                  <img src="./img/login.png" alt="" width="100%" height="100%"/>
                </div>
                <Form/>
            </div>
        );
    }
}

export default CSSModules(Login, s);
