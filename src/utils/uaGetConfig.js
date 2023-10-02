import "isomorphic-fetch";
import {ERROR} from "../constants/uaError";

export default async function uaGetConfig(){
    try {
        const config = await fetch(process.env.REACT_APP_CONFIG)

        const result = await config.json()

        return result

    } catch (e) {
        throw new Error(ERROR.CONFIG)
    }
}
