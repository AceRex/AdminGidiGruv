import { Component } from 'react';
import './style.css'
import Input from './index'
import { AiOutlineDelete } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi'
import { AiOutlineNotification } from 'react-icons/ai'



class ListOfEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: this.props.image,
            title: this.props.title,
            date: this.props.date,
            address: this.props.address,
            description: this.props.description,
            clicked: false,
            delete: false,
            edit: false
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleEdit = this.handleEdit.bind(this)

    }
    handleClick() {
        this.setState({
            clicked: true,
            edit: false
        })
    }
    handleDelete() {
        this.setState({
            delete: true
        });
    }
    handleEdit() {
        this.setState({
            edit: true
        });
    }
    render() {
        return (
            <>
                <div className={this.state.delete ? 'hidden' : 'event-card'}>
                    <div className='image-container'>
                        <img src={this.state.image} alt={this.state.title} />
                    </div>
                    <div className='details'>
                        <span>{this.state.date}</span>
                        <p>{this.state.title}</p>
                        <span>{this.state.address}</span>

                    </div>
                    <div className='edit-delete-btn'>
                        <button className='del' onClick={this.handleDelete}><AiOutlineDelete /></button>
                        <button className='edt' onClick={this.handleEdit}><BiEdit /></button>
                    </div>
                    <div className={this.state.edit ? 'show-event' : 'hidden'}>
                        <Input />
                        <div className='btn-close'>
                            <button onClick={this.handleClick}>close</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default ListOfEvents