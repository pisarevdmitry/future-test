import sortingUsers from '../sortingUsers';
import {SORTING_USERS} from "../types"

describe('sortingUsers',() =>{
    let newAction;
    const data = [{id: 17}, {id: 7}, {id: 22}, {id: 5}];
    beforeEach(() =>{
        newAction = sortingUsers(data, "id", 'asc');
    })
    it('has a correct type', () =>{
        expect(newAction.type).toEqual(SORTING_USERS)
    })
    it('has a correct payload', () =>{
        expect(newAction.payload).toEqual({
          result:  [{id: 5}, {id: 7}, {id: 17}, {id: 22}],
            id: 'id',
            direction: "asc"
        })
    })
})
