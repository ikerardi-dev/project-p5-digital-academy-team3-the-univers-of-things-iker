export default async function getProducts(page = 1) {
  try {
    if (typeof page !== "number") page = 1;
    const URI = `https://api.jikan.moe/v4/anime?page=${page}`

    const response = await fetch(URI)

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const fetchedData = await response.json()

    if (!('data' in fetchedData)) {
      throw new Error(`Wrong data fetched.\nData: ${JSON.stringify(fetchedData)}`)
    }

    const items = fetchedData.data

    return items
  } catch (error) {
    console.log(`ERROR: ${error.message}`)
    return null
  }
}
