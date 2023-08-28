
function ProductCard({ product }) {

    return (
        <div className="card">
            <div className="card-image">
                <img id="product-image" src={product.image} alt={product.title} />
            </div>
            <div className="card-content">
                <h3 className="card-title">{product.title}s</h3>
                <p className="card-price">${product.price}</p>
                <p className="card-description">{product.description}</p>
            </div>
        </div>
    )
}

export default ProductCard;