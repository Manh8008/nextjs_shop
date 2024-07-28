
export async function fetchSearchedProduct(params) {
    const res = await fetch(`http://localhost:5000/products/search/${params.searchParams.keyword}`)
    const result = await res.json()
    return result;
}



