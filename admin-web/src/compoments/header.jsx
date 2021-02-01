import { Component } from 'react';
import './header.css'
import { FaTimes, FaBars } from 'react-icons/fa'
import Logo from './Logo/logo.png'


export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            Clicked: false,
        }
    }
    handleClicked = () => {
        this.setState({ clicked: !this.state.clicked });
    };
    render() {
        return (
            <nav>
                <div className='img-container'>
                    <img src={Logo} alt='Logo' />
                </div>

                <div className="menu-icon" onClick={this.handleClicked}>
                    <li>
                        {this.state.clicked ? (
                            <FaTimes />
                        ) : (
                                <FaBars />
                            )}
                    </li>
                </div>
                <ul className={this.state.clicked ? "side-nav active" : "side-nav"}>
                    Hello
                </ul>
            </nav>

        )
    }
}