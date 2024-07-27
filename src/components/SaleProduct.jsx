
import { fetchSaleProducts } from "../services";
import { ProductCard } from "./index";

const SaleProduct = async () => {

    const allSaleProducts = await fetchSaleProducts();

    const isDataEmpty = !Array.isArray(allSaleProducts) || allSaleProducts.length < 1 || !allSaleProducts;

    return (

        <div className="product-sale">
            <h2 className="product-heading">
                BEST SELLER
            </h2>

            <ul className="products">
                {!isDataEmpty ? (
                    <>
                        {allSaleProducts.map(product => (
                            <li className="product-item grid__column-2" >
                                <ProductCard key={product._id} product={product} />

                            </li>

                        ))}
                    </>
                ) : (
                    <div>
                        <h2>No result</h2>
                    </div>
                )}
            </ul>
        </div>
    )
}

export default SaleProduct