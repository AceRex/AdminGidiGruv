import { Component } from 'react';
import '../App.css'
import Header from '../compoments/header.jsx'

export default class Dashboard extends Component{
    render(){
        return(
            <div className='container'>
                <Header />
            </div>
        )
    }
}