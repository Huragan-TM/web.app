import { Provider } from 'react-redux'
import {uaGetConfig, uaSetStorage} from "./utils";
import uaCreateRoot from "./utils/uaCreateRoot";
import App from "./app/App";
import Error from "./app/Error";
import store from "./store";


(async (window)=> {
    try {
        const config = await uaGetConfig()

        window[config.uaDataStorage.uaBrowserWindow] = config

        await uaSetStorage(
            config.uaDataStorage.uaType,
            config.uaDataStorage.uaKeys.uaAppConfig,
            config
        )
        await uaSetStorage(
            config.uaDataStorage.uaType,
            config.uaDataStorage.uaKeys.uaAppLanguage,
            config.uaLanguage.uaDefault
        )

        uaCreateRoot().render(
            <Provider store={store}>
                <App/>
            </Provider>
        )
    } catch (e) {
        uaCreateRoot().render(<Error msg={e.message} code={500}/>)
    }
})(window)

