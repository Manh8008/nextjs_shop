function StartRating({ rating = 4.5 }) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className='detail-rating'>
            <div className='product-detail__rating-wrapper'>
                {
                    [...Array(fullStars)].map((_, i) => {
                        return <i key={`full-${i}`} className="fa-solid fa-star"></i>
                    })
                }

                {
                    hasHalfStar && <i className="fa-solid fa-star-half"></i>
                }

                {
                    [...Array(emptyStars)].map((_, i) => {
                        return <i key={`empty-${i}`} className="fa-regular fa-star"></i>
                    })
                }
            </div>
            <p>(6) đánh giá</p>
        </div>
    )
}

export default StartRating;
