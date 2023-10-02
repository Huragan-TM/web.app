function Error({ msg, code }){
    return (
        <div>
            <h1>{code}</h1>
            <p>{msg}</p>
        </div>
    )
}

export default Error
