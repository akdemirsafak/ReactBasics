function SayHello(props){ //bu component'e aktarılan prop'u burada karşıladık.

    return(
        <>
        <h1>Hello {props.personName}</h1>
        </>
    )
}
export default SayHello;
