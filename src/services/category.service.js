
export async function fetchCategory() {
    const res = await fetch('http://localhost:5000/categories');
    const result = await res.json();
    return result;
}