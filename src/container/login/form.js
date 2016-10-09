import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import s from './form.scss';

class Form extends Component {
    render() {
        return (
          <form action="" method="post" className={s.login_form}>
                    <input type="text" name="username" placeholder="I am ..."/><br/>
                    <input type="password" name="password" placeholder="password..."/><br/>
                    <div className={s.login_button_container}>
                        <button type="button" className={s.login_button}>Let's Party</button>
                        {/*<button type="reset" className={s.reset_button}>Sorry Type Wrong</button>*/}
                    </div>
          </form>
        );
    }
}

export default CSSModules(Form, s);
