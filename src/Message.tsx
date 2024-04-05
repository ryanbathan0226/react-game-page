function Message () {

    const name = "Ryan";
    const newname = () =>{return name+" Pogi"};
    
    return <h1> Hello {name? newname() : "No name"} </h1>;
}

export default Message;