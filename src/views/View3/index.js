import React, { Component } from 'react';
import { Slider, Checkbox, Divider } from 'antd';
import './view3.css';

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Asia', 'America', 'Unknown'];
const defaultCheckedList = ['Asia', 'America', 'Unknown'];

export default class View3 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checkedList: defaultCheckedList,
            indeterminate: true,
            checkAll: false,
        };
    }

    onChangeCheckbox = checkedList => {
        this.setState({
            checkedList,
            indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
            checkAll: checkedList.length === plainOptions.length,
        });
        this.props.changeIncludedRegion(checkedList);
    };

    onCheckAllChange = e => {
        const checkedList = e.target.checked ? plainOptions : [];
        this.setState({
            checkedList: checkedList,
            indeterminate: false,
            checkAll: e.target.checked,
        });
        this.props.changeIncludedPopulation(checkedList);
    };

    onChangeSilder = value => {
        this.props.changeGreaterThenPopulation(value);
    }

    render() {
        return (
            <div id='view3' className='pane'>
                <div className='header'>Filter</div>
                <h3>Region</h3>
                <div style={{ width: 275, margin: 5 }}>
                    <Checkbox
                        indeterminate={this.state.indeterminate}
                        onChange={this.onCheckAllChange}
                        checked={this.state.checkAll}
                    >
                        Check all
                    </Checkbox>
                </div>
                <br />
                <div style={{ width: 275, margin: 5 }}>
                    <CheckboxGroup
                        options={plainOptions}
                        value={this.state.checkedList}
                        onChange={this.onChangeCheckbox}
                    />
                </div>
                <Divider />
                <h3>Population</h3>
                <Slider defaultValue={0} onChange={this.onChangeSilder}/>
            </div>
        )
    }
}