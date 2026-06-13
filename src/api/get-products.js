export default async function getProducts () {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Network response was not ok");
        } 

        const fetchedData = await response.json();

        if (!("data" in fetchedData)) {
            throw new Error(`Wrong data fetched.\nData: ${JSON.stringify(fetchedData)}`);
        }

        const items = fetchedData.data;

        return items;

    } catch (error) {
        console.log(`ERROR: ${error.message}`);
        return null;
    }
}