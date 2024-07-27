import { fetchNewProducts } from "../services";
import { ProductCard } from "./index";

const NewProduct = async () => {
    const allNewProducts = await fetchNewProducts();

    const isDataEmpty =
        !Array.isArray(allNewProducts) ||
        allNewProducts.length < 1 ||
        !allNewProducts;

    return (
        <div className="product-sale">
            <h2 className="product-heading">NEW ARRIVAL</h2>

            <ul className="products grid">
                {!isDataEmpty ? (
                    <>
                        {allNewProducts.map((product) => (
                            <li className="product-item grid__column-2">
                                <ProductCard
                                    key={product._id}
                                    product={product}
                                />
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
    );
};

export default NewProduct;
