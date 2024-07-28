"use client";
import { Loader } from "@/components";
import useFetchProduct from "@/hooks/useFetchProduct";
import useAddCart from "@/hooks/useAddCart";
import ErrorMessage from "@/components/ErrorMessage";
import { StartRating } from "@/components";

function Detail({ params }) {
    const { product, error, isLoading } = useFetchProduct(params.slug);
    const { quantity, setQuantity, setSize, errorMessage, handleAddToCart } = useAddCart(product);

    if (error) return <div>Failed to load</div>;
    if (isLoading) return <Loader />;

    return (
        <div className="main-container">
            <form onSubmit={handleAddToCart}>
                <div className="container-detail">
                    <div className="detail">
                        <div className="image">
                            <img
                                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${product.image}`}
                                alt="Product Image"
                            />
                        </div>
                        <div className="content">
                            <h1 className="name">{product.name}</h1>

                            <div className="detail_sub-info">
                                <p>
                                    SKU:
                                    <span>57E3930</span>
                                </p>
                                <StartRating rating={product.rating} />
                            </div>

                            <div className="price">{product.price.toLocaleString()}đ</div>

                            <div className="detail-color">
                                <p>Màu sắc: Trắng</p>
                            </div>

                            <div className="size-selector">
                                <input
                                    type="radio"
                                    name="size"
                                    id="size_s"
                                    value="S"
                                    onChange={(e) => setSize(e.target.value)}
                                />
                                <label htmlFor="size_s">S</label>

                                <input
                                    type="radio"
                                    name="size"
                                    id="size_m"
                                    value="M"
                                    onChange={(e) => setSize(e.target.value)}
                                />
                                <label htmlFor="size_m">M</label>

                                <input
                                    type="radio"
                                    name="size"
                                    id="size_l"
                                    value="L"
                                    onChange={(e) => setSize(e.target.value)}
                                />
                                <label htmlFor="size_l">L</label>

                                <input
                                    type="radio"
                                    name="size"
                                    id="size_xl"
                                    value="XL"
                                    onChange={(e) => setSize(e.target.value)}
                                />
                                <label htmlFor="size_xl">XL</label>
                            </div>

                            <div className="quantity-container">
                                <label htmlFor="quantity">Số lượng</label>
                                <input
                                    type="number"
                                    name="quantity"
                                    id="quantity"
                                    min="1"
                                    value={quantity}
                                    onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                                />
                            </div>

                            <div className="detail-option">
                                <button type="submit" className="btn-add-cart btn btn--large">
                                    Thêm vào giỏ
                                </button>

                                <button type="button" className="btn btn--large btn--outline btn-outline-hover">
                                    Mua hàng
                                </button>

                                <button
                                    type="button"
                                    className="btn btn--large btn--outline btn-outline-hover"
                                    style={{ marginLeft: 14 }}
                                >
                                    <i className="fa-regular fa-heart"></i>
                                </button>
                            </div>

                            <div className="description">{product.description}</div>
                        </div>
                    </div>
                </div>
            </form>
            <ErrorMessage message={errorMessage} />
        </div>
    );
}

export default Detail;
