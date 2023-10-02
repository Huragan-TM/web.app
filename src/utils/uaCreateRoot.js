import ReactDOM from "react-dom/client"

export default function uaCreateRoot(){
    try {
        const root = document.createElement('div')
        document.body.appendChild(root)
        return ReactDOM.createRoot(root)
    } catch (e) {
        console.error(e);
    }
}
