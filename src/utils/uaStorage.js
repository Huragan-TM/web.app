export function uaGetStorage(type, key){
    try {
        if (type === 'localStorage') {
            return localStorage.getItem(key)
        } else {
            return null
        }
    } catch (e) {
        console.log(e);
    }
}

export async function uaSetStorage(type, key, data){
    try {
        if (type === 'localStorage') {
            return await localStorage.setItem(key, JSON.stringify(data))
        } else {
            return null
        }
    } catch (e) {
        console.log(e);
    }
}
