import React, { Component } from 'react'


export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            address: '',
            busstop: '',
            description: '',
            month: '',
            day: '',
            year:'',
            ampm: '',
        }
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    }
    render() {
        return (
            <div className='inputs'>
                <input type='text'
                    name='title'
                    id='title'
                    value={this.state.title}
                    onChange={this.handleChange}
                    placeholder='Event Title' />
                <input type='text'
                    name='address'
                    id='address'
                    value={this.state.address}
                    onChange={this.handleChange}
                    placeholder='Address to Event' />
                <input type='text'
                    name='busstop'
                    id='busstop'
                    value={this.state.busstop}
                    onChange={this.handleChange}
                    placeholder='Enter closest Busstop and State' />
                <textarea type='text'
                    cols='10'
                    name='description'
                    id='description'
                    value={this.state.description}
                    onChange={this.handleChange}
                    placeholder='Description of Event' />
                <div className='date'>
                    <input
                        type='text'
                        name='month'
                        id='month'
                        maxLength='3'
                        placeholder='Month'
                        value={this.state.month}
                        onChange={this.handleChange}
                    />
                    <input
                        type='text'
                        name='day'
                        maxLength='2'
                        placeholder='Day'
                        id='day'
                        value={this.state.day}
                        onChange={this.handleChange}
                    />
                     <input
                        type='text'
                        name='year'
                        maxLength='4'
                        placeholder='Year'
                        id='year'
                        value={this.state.year}
                        onChange={this.handleChange}
                    />
                </div>
                <div className='time'>
                    <input
                        type='text'
                        name='hh'
                        id='hh'
                        maxLength='2'
                        placeholder='HH'
                        value={this.state.hh}
                        onChange={this.handleChange}
                    />
                    <span>{' : '}</span>
                    <input
                        type='text'
                        name='mm'
                        id='mm'
                        maxLength='2'
                        placeholder='MM'
                        value={this.state.mm}
                        onChange={this.handleChange}
                    />
                    <span>{' : '}</span>
                    <select
                        name='ampm'
                        id='ampm'
                        onChange={this.handleChange}>
                        <option value='am' >AM</option>
                        <option value='pm'>PM</option>
                    </select>
                </div>
                <button className='post-btn'>Post</button>
            </div>
        )
    }
}