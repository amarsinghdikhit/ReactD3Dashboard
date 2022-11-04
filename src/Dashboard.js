import React, { Component } from 'react';
import data from './data/index';
import { Layout } from 'antd';
import View1 from './views/View1';
import View2 from './views/View2';
import View3 from './views/View3';
import View4 from './views/View4';
import View5 from './views/View5';
import View6 from './views/View6';
import './dashboard.css';

const { Sider, Content } = Layout;

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedUser: data[0],
            greaterThenPopulation: 0,
            includedRegion: ['Asia', 'America','Unknown'],
        }
    }

    changeSelectUser = value => {
        this.setState({
            selectedUser: value
        })
    }

    changeGreaterThenAge = value => {
        this.setState({
            greaterThenAge: value
        })
    }

    changeIncludedGender = value => {
        this.setState({
            includedGender: value
        })
    }

    render() {
        const {selectedUser, greaterThenPopulation, includedRegion} = this.state;
        const filteredData = data.filter(user=>includedRegion.indexOf(user.region)!==-1)
                                 .filter(user=>user.population>greaterThenPopulation);
        return (
            <div>
                <Layout style={{ height: 920 }}>
                    <Sider width={300} style={{backgroundColor:'#eee'}}>
                        <Content style={{ height: 200 }}>
                            <View1 user={selectedUser}/>
                        </Content>
                        <Content style={{ height: 300 }}>
                            <View2 data={filteredData}/>
                        </Content>
                        <Content style={{ height: 400 }}>
                            <View3 
                                changeGreaterThenPopulation={this.changeGreaterThenPopulation}
                                changeIncludedRegion={this.changeIncludedRegion}
                            />
                        </Content>
                    </Sider>
                    <Layout>
                        <Content style={{ height: 300 }}>
                            <View4 user={selectedUser}/>
                        </Content>
                        <Layout style={{ height: 600 }}>
                            <Content>
                                <View5 data={filteredData}/>
                            </Content>
                            <Sider width={300} style={{backgroundColor:'#eee'}}>
                                <View6 data={filteredData} changeSelectUser={this.changeSelectUser}/>
                            </Sider>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
