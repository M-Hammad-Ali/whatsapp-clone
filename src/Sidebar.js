import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@material-ui/icons';
import {Avatar, IconButton} from '@material-ui/core'

import React from 'react'
import './Sidebar.css';
import SidebarChat from './SidebarChat';

const Sidebar = () => {
    return ( 
        <div className="sidebar">
            <div className="sidebar_header"> 
                <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQETJkHu9f2njg/profile-displayphoto-shrink_800_800/0/1610014589603?e=1619654400&v=beta&t=5_hmMnIxU2bDi8i1P0rWiLvSPLIh6VssRw7vP0dXoeg" />
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLarge></DonutLarge>
                    </IconButton>
                    <IconButton>
                        <Chat/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined/>
                    <input placeholder="Search or start new chat" type="text"/>
                </div>
            </div>
            <div className="sidebar_chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>
        </div>
     );
}
 
export default Sidebar;