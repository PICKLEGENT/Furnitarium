function Catalog() {
    return (
        <main className='catalog-wrapper'>
            <h1 className='product-heading-name'>Ручки</h1>
            <div className='products'>
                <div className='product'>
                    <div className='product-img'></div>
                    <div className='product-name'>Ручка</div>
                    <div className='product-price'>169</div>
                    <button className='add-to-cart'>+</button>
                </div>
            </div>
        </main>
    );
}

export default Catalog;
