export default function filterProducts (products, category) {
    

    // Validation
    try {
        if (!Array.isArray(products)) {
            throw new Error("filterProducts() - Wrong value entered to 'products' argument!");
        } else if (!products[0] || !("genres" in products[0])) {
            throw new Error("filterProducts() - Wrong data fetched! 'genres' key doesn't exist!"); 
        } else if (!(Array.isArray(products[0].genres) && "name" in products[0].genres[0])) {
            throw new Error("filterProducts() - Wrong data fetched! 'genres' key doesn't exist!"); 
        } else if (typeof category !== "string") {
            throw new Error("filterProducts() - Wrong data type in 'category' argument!"); 
        } 
    } catch (error) {
        console.error(error);
        return [];
    }
    
    // logic
    if (!category || category === undefined) {
        return products;
    } else {
        return products.filter(
            (item) => item.genres.find(
                (genre) => genre.name === category
            )
        );
    }
}
    

