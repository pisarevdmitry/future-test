import {FILTER_USERS} from "./types";

export default (data,sortInfo,name, term) => {
    // фильтрируем массив с игнорированием регистра
    let result = data.filter(item => {
        return String(item[name]).toLowerCase().includes(term.toLowerCase())
    });
    // если до этого применялась сортировка данных б то сортируем выходные данные
    if (sortInfo.id) {
        result = result.sort((a, b) =>{
            if (sortInfo.direction === 'asc') {
                return a[sortInfo.id] >= b[sortInfo.id] ? 1 : -1
            }
            return a[sortInfo.id] >= b[sortInfo.id] ? -1 : 1
        })
    }
    return {
        type:FILTER_USERS,
        payload: result
    }
}