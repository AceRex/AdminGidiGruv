import { Component } from 'react';
import './broadcast.css'


export default class Broadcast extends Component {
    constructor() {
        super();
        this.state = {
            broadcastby: '',
            show: true,
            placeholder: '',
            sendby: ''

        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })


        switch (this.state.broadcastby === value) {
            case (value === 'alluser'):
                this.setState({
                    show: false,
                });
                break;
            case (value === 'bystate'):
                this.setState({
                    show: true,

                });
                break;
            case (value === 'bylocation'):
                this.setState({
                    show: true,

                });
                break;
            default:
                this.setState({
                    show: false
                })
        }

    }



    render() {

        return (
            <div className='broadcast-page'>
                <div className='sort'>
                    <select
                        value={this.state.broadcastby}
                        onChange={this.handleChange}
                        name='broadcastby'
                    >
                        <option value='alluser'>All User</option>
                        <option value='bylocation'>By Location</option>
                        <option value='bystate'>By State</option>
                    </select>

                </div>
                <div className='select-radio'>
                    <input
                        type="radio"
                        name="sendby"
                        value="byemail"
                        checked={this.state.sendby === "byemail"}
                        onChange={this.handleChange}
                    /> By Email
                <input
                        type="radio"
                        name="sendby"
                        value="byphonenumber"
                        checked={this.state.sendby === "byphonenumber"}
                        onChange={this.handleChange}
                    /> By Phone Number
                </div>
                <div className='broadcast-form'>
                    <input
                        placeholder='Broadcast title'

                    />
                </div>
                <div className='broadcast-form'>
                    <input
                        className={this.state.show ? 'hidden' : 'show'}
                        placeholder='Enter Location/State Here...'

                    />
                    <textarea
                        name="alluser"
                        id="alluser"
                        placeholder='Enter Broadcast Message Here...'
                        className='brd-msg'
                        cols="30"
                        rows="10" />
                    <button>Send Broadcast</button>
                </div>
            </div>
        )
    }
} 