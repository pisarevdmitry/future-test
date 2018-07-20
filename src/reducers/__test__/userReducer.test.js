import userReducer from '../userReducer'
import {FETCH_USERS} from "../../actions/types";

it('handle actions of type FETCH_USER',() =>{
    const action = {
        type: FETCH_USERS,
        payload:[{name: 'mark'}, {name: 'boris'}]
    }
    const newState = userReducer(null, action);
    const expected = {
        allUsers: [{"name": "mark"}, {"name": "boris"}],
        current: null,
        filtered: [{"name": "mark"}, {"name": "boris"}],
        sort: {}
    }
    expect(newState).toEqual(expected)
});
it('handle action with unknown type', () =>{
    const action = {
        type: 'unknown',
        payload: [{name: 'mark'}, {name: 'boris'}]
    }
    const newState = userReducer(null, action);
    expect(newState).toEqual(null)
});
