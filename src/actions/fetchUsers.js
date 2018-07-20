import axios from 'axios'
import urls from '../config/urls';
import { FETCH_USERS, LOADING_USERS, SERVER_ERROR } from "./types"

export default (param) => {
    return async (dispatch) => {
        dispatch({
            type: LOADING_USERS,
            payload: false
        })
        try{
            const response = await axios.get(urls[param]);
            // проверяем на валидный ответ
            if (typeof response.data !== 'object'|| !response.data.every(item => typeof item.address === 'object' )) {
                throw new Error('Error')
            }
            // так как серве не генерирует уникальный id добавляю свой для удобного поиска
           const result = response.data.map((item, index) => {
               return {...item, myId: index}
           })
            return dispatch({
                type: FETCH_USERS,
                payload: result
            })
        } catch (e) {
           return dispatch({
                type: SERVER_ERROR,
                payload: 'error'
            })
        }


    }
}