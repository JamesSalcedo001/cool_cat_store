function ProductCard() {
    return (
        <div className="card">
            <div className="card-image">
                <img id="product" src="https://m.media-amazon.com/images/I/51x7nqTd3vS._AC_SL1500_.jpg" alt="Cool sunglasses" />
            </div>
            <div className="card-content">
                <h3 className="card-title">Cool Sunglasses</h3>
                <p className="card-price">$9.99</p>
                <p className="card-description">Cool Shades for a Cool Cat</p>
            </div>
            <form action="/api/checkout" method="POST">
                <button type="submit">Checkout</button>
            </form>
        </div>
    )
}

export default ProductCard;