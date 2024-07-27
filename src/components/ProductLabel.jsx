const ProductLabel = ({ isNew, isOnSale }) => {
    return (
        <>
            {isOnSale ? (
                <div
                    className="info-ticket ticket-new"
                    style={{
                        backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/bg_news.png)`,
                    }}
                >
                    Seller
                </div>
            ) : isNew ? (
                <div
                    className="info-ticket ticket-new"
                    style={{
                        backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/bg_news.png)`,
                    }}
                >
                    New
                </div>
            ) : null}
        </>
    );
};

export default ProductLabel;
