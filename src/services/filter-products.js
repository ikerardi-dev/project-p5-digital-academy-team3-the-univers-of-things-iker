export default function filterProducts (products, category) {
    if (!category) {
        return products;
    } else {
        return products.filter((item) => item.genres.find((genre) => genre.name === category));
    }
}
    

