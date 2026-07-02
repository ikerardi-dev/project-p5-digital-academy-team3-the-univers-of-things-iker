export default function searchProducts (products, input) {
    
    // Validation
    try {
        if (!Array.isArray(products)) {
            throw new Error("filterProducts() - Wrong value entered to 'products' argument!");
        } else if (products[0]?.title === undefined) {
            throw new Error("filterProducts() - Wrong data fetched! 'title' key doesn't exist!"); 
        } else if (typeof products[0].title !== 'string') {
            throw new Error("filterProducts() - Wrong data fetched! 'title' is not a string!"); 
        } else if (typeof input !== "string") {
            throw new Error("filterProducts() - Wrong data type in 'category' argument!"); 
        } 
    } catch (error) {
        console.error(error);
        return [];
    }
    
    // logic
    if (!input || typeof input !== 'string') {
        return products;
    } else {
        const lowedInput = input.toLowerCase();
        return products.filter((item) => item.title.toLowerCase().startsWith(lowedInput));
    }
}

