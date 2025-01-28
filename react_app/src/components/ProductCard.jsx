function ProductCard(props) {
    return (
      <div className="border p-2 shadow-lg rounded-lg">
        <img src={props.product.thumbnail} alt={props.product.thumbnail} />
        <h3>{props.product.name}</h3>
            <span>available: {props.product.available}</span>
            <span>Price: {props.product.price}</span>
     
      </div>
    );
  }
  export default ProductCard;