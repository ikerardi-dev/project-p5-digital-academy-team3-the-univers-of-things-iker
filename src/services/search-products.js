export default function searchProducts (products, input) {
    if (!input) {
        return products;
    } else {
        input.toLowerCase();
        return products.filter((item) => item.title.toLowerCase.startsWith(input));
    }
}

