import {SORTING_USERS} from "./types"

export default (data ,id, direction) => {
    const result = data.slice().sort((a, b) =>{
        if (direction === 'asc') {
            return a[id] >= b[id] ? 1 : -1
        }
        return a[id] >= b[id] ? -1 : 1
    })
    return {
        type: SORTING_USERS,
        payload: {id,direction,result}
    }
}