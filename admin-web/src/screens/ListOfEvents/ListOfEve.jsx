import { Component } from 'react';
import './style.css'
import DatePicker from 'react-date-picker';

class ListOfEvents extends Component {
    render() {
        return (
            <section>
            <div className='container'>
                <DatePicker/>
            </div>
            </section>
        )
    }
}
export default ListOfEvents