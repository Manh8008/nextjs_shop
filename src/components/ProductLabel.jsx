const ProductLabel = ({ condition }) => {
    return (
        <>
            {condition == 'showNew' ? (
                <div
                    className="info-ticket ticket-new"
                    style={{
                        backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/bg_news.png)`,
                    }}
                >
                    New
                </div>
            ) : condition == 'showHot' ? (
                <div
                    className="info-ticket ticket-new"
                    style={{
                        backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/bg_news.png)`,
                    }}
                >
                    Hot
                </div>
            ) : null}
        </>
    );
};

export default ProductLabel;
