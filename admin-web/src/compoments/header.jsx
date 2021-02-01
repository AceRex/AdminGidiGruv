import { Component } from 'react';
import './header.css'
import { FaTimes, FaBars } from 'react-icons/fa'
import Logo from './Logo/logo.png'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { BsFilePlus } from 'react-icons/bs'
import { RiFileListLine } from 'react-icons/ri'
import { IoMdNotifications } from 'react-icons/io'
import { AiFillNotification } from 'react-icons/ai'
import PostEvn from '../screens/PostEvent/index'
import ListOfEvents from '../screens/ListOfEvents/ListOfEve'

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
            <>
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

                </nav>
                <Tabs>
                    <TabList className={this.state.clicked ? "side-nav active" : "side-nav"}>
                        <Tab onClick={this.handleClicked}><span><BsFilePlus /></span>Post an Event</Tab>
                        <Tab onClick={this.handleClicked}><span><RiFileListLine /></span>List Of Events</Tab>
                        <Tab onClick={this.handleClicked}><span><IoMdNotifications /></span>Notification</Tab>
                        <Tab onClick={this.handleClicked}><span><AiFillNotification /></span>Broadcast an Event</Tab>
                    </TabList>

                    <TabPanel>
                        <PostEvn />
                    </TabPanel>
                    <TabPanel>
                        <ListOfEvents/>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 4</h2>
                    </TabPanel>
                </Tabs>
            </>
        )
    }
}