import { Component } from 'react';
import './Loginscreen.css'
import Logo from '../../compoments/Logo/headerLogo.png'

export default class LoginScreen extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <div className='Login-container'>
                <div className='Logo-container'>
                    <img src={Logo} alt='Logo' />
                </div>
                <div className='login-form'>
                    <form action='../Dashboard.jsx'>
                        <input type='text' value={this.state.login} name='username' placeholder='Email@address.com' />
                        <input type='password' value={this.state.password} name='password' placeholder='8888888888' />
                        <button>Login</button>
                    </form>
                </div>
            </div>
        )
    }
}