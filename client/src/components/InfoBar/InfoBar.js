import React from'react';

import onlineIcon from '../../icons/onlineIcon.png'
import closeIcon from '../../icons/closeIcon.png'

import './InfoBar.css';

const InfoBar = ({ room, users }) => (
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon} alt="online"/>
            <h3>{room}</h3>
            {
                users
                    ? (
                        <div className="onlineCount">
                            <span>online: {users.length}</span>
                            <ul>
                                {users.map(({name}) => (
                                    <li key={name} className="activeUser">
                                        {name}
                                        <img alt="Online Icon" src={onlineIcon}/>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )
                    : null
            }

        </div>


        <div className="rightInnerContainer">
            <a href="/">
                <img src={closeIcon} alt="close"/>
            </a>
        </div>
    </div>
);

export default InfoBar;
