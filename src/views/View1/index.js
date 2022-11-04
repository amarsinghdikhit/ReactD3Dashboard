import React, { Component } from 'react';
import { Avatar } from 'antd';
import './view1.css';

export default class View1 extends Component {
    render() {
        let {user} = this.props;
        if (user === null) {
            user = {
                city: 'null',
                region: 'null',
                population: 'null',
            }
        }
        return (
            <div id='view1' className='pane'>
                <div className='header'>City Profile</div>
                <div>
                    <div className={'avatar-view'}>
                        <Avatar shape="square" size={120} icon="user" />
                    </div>
                    <div className={'info-view'}>
                        <div>name: {user.city}</div>
                        <div>region: {user.region}</div>
                        <div>population: {user.population}</div>
                    </div>
                </div>
            </div>
        )
    }
}
