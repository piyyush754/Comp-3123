function SayHello({fname, lname}/*props*/){
    // const name = "pc"

    const myStyle = {
        color: 'purple',
        backgroundColor: 'yellow'
    }
    
    return (
        <h1 style={myStyle}> Hello {fname} {lname}</h1>

        // <div> Hello {props.name} {props.lname}</div>
    )
}

export default SayHello;