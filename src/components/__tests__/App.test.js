import React from 'react';
import {shallow} from 'enzyme'
import App from '../App';
import SelectData from '../SelectData'
import UserComponent from '../UsersComponent'

let wrapper;
beforeEach(() =>{
    wrapper = shallow(<App/>);
});
it('shows a select',() =>{
    expect(wrapper.find(SelectData).length).toEqual(1)
});
it('shows a user component',() =>{
    expect(wrapper.find(UserComponent).length).toEqual(1)
});

