import React, {useState} from'react';
import queryString from "query-string";
import auth from '../../auth';

import './Join.css';

const Join = (props) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    const signIn = (event) => {
        setName(event.target.value);

        // Проверка перехода по приглашению
        if (!props.history.location.state) {
            setRoom(Math.floor(Math.random() * Math.floor(10000)));
        } else {
            setRoom(queryString.parse(props.history.location.state.from.search).room);
        }
    };

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Enter your name</h1>
                <div><input placeholder="Name" className="joinInput" type="text" onChange={signIn} /></div>
            </div>
            <button className="button mt-20"
                onClick={(event) => {
                    if (!name) {
                        event.preventDefault()
                    } else {
                        auth.login(() => {
                            props.history.push(`/chat?name=${name}&room=${room}`);
                        });
                    }
                }}
            >
                Login
            </button>
        </div>
    )
};

export default Join;
