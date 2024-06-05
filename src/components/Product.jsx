import './Product.css'

function Product(props) {
    return (
        <div className="product">
            <div className='prod-img'>
                <img className="image" src={props.imageUrl}/>
            </div>
            <div className="prod-details">
                <h1>{props.name}</h1>
                <h2>&#8377; {props.price}</h2>
            </div>
        </div>
    )
}

export default Product // used to export the component from the file