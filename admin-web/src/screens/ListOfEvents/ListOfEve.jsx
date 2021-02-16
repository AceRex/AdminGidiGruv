import { Component } from 'react';
import './style.css'
import { MdSort } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import Img from './chrcuh.jpg'
import Card from './card'



class ListOfEvents extends Component {
    constructor() {
        super();
        this.state = {
            search: '',
            image: Img,
            title: 'Replib Live',
            date: '15/02/2021',
            address: '19, Olatunji Ige street, Ikosi Ketu, Lagos, NG.',
            description: 'descritpion'
        }
        this.handleSearch = this.handleSearch.bind(this)
    }
    handleSearch(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        })
    }
    render() {
        return (
            <>
                <div className='searchFilter'>
                    <div className="search">
                        <span><BiSearchAlt /></span>
                        <input
                            type='search'
                            name='search'
                            id='search'
                            placeholder='Search'
                            value={this.state.search}
                            onChange={this.handleSearch}
                            className='searchinput' />
                    </div>
                    <div className='filter'>
                        <span><MdSort /></span>
                        <select>
                            <option value='sortby' disabled selected>Sort By</option>
                            <option value='bymonth'>By Month</option>
                            <option value='byday'>By Day</option>
                        </select>
                    </div>
                </div>
                <section className='eventList'>
                    <Card
                        image={this.state.image}
                        title={this.state.title}
                        date={this.state.date}
                        address={this.state.address}
                        description={this.state.description}
                    />
                     <Card
                        image={this.state.image}
                        title={this.state.title}
                        date={this.state.date}
                        address={this.state.address}
                        description={this.state.description}
                    />
                </section>
            </>
        )
    }
}
export default ListOfEvents