import {uaGetConfig, uaGetStorageConfig} from "../utils";
import {useMemo} from "react";

const convertArrayToObject = (array, key) => {
    let initialValue = {};
    return array.reduce((obj, item) => {
        return {
            ...obj,
            [item[key]]: item.uaValue
        }
    }, initialValue)
}

const useLang = () => {
    const config = uaGetStorageConfig()
    const lang = config.uaLanguage;

    const langPack = lang.uaPacks.filter(pack => pack.uaKey === lang.uaDefault)

    return useMemo(() => convertArrayToObject(langPack[0].uaPhrases, "uaKey"), [langPack])
}

export default useLang
