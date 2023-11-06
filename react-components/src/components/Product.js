
export default function Product(props){
    return(
        <div>
            <div className="card"  style={{width:18+"rem"}}>
                <img src="https://picsum.photos/200/100" className="card-img-top" alt={props.product.title}/>
                <div className="card-body">
                    <h5 className="card-title">{props.product.title}</h5>
                    <p className="card-text">{props.product.description}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}