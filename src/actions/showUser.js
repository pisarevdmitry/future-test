import { SHOW_USER} from "./types";

export default (user) => {
    return {
        type: SHOW_USER,
        payload: user
    }
}