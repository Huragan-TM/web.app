import "isomorphic-fetch";
import {ERROR} from "../constants/uaError";

export default function uaGetStorageConfig(){
    try {
        const config = localStorage.getItem("@uaAppConfigKey:")

        const result = JSON.parse(config)

        return result

    } catch (e) {
        throw new Error(ERROR.CONFIG)
    }
}
