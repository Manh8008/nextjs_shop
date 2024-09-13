import { FilterLeft, FilterTop } from '@/components/ui'

function NoResult() {
    return (
        <div className="main-container">
            <div className="grid wide">
                <div className="grid__row main-content">
                    <div className="grid__column-2">
                        <FilterLeft />
                    </div>

                    <div className="grid__column-10">
                        <FilterTop />
                        <div className="home-product grid">
                            <h4 className="text-error">Không tìm thấy sản phẩm phù hợp !</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoResult
