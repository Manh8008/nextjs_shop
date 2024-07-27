
export async function fetchSearchedProduct(params) {
    const res = await fetch(`http://localhost:5000/products/search/${params.searchParams.keyword}`)
    const result = await res.json()
    return result;
}

export async function fetchNewProducts() {
    const res = await fetch('http://localhost:5000/products/filter/new');
    const result = await res.json();
    return result;
}

export async function fetchSaleProducts() {
    const res = await fetch('http://localhost:5000/products/filter/sale');
    const result = await res.json();
    return result;
}


