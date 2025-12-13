const Separator = () =>{
    return <div style={{
        height:"30px",
        width:"100%",
        backgroundColor:"black",
        backgroundImage:'url("/assets/background/tape.webp")',
        backgroundSize:"300px 30px",
        filter:"drop-shadow(0 1px 1px #00000090)"
    }}>
        <div style={{
            height:"30px",
            width:"100%",
            backgroundImage:'linear-gradient(90deg,rgba(0, 0, 0, 0.6) 0%, rgba(255, 255, 255, 0) 25%, rgba(255, 255, 255, 0) 75%, rgba(0, 0, 0, 0.6) 100%)',
        }}
        ></div>
    </div>
}

export default Separator