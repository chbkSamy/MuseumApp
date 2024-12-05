export const handler = async (event, context) => {
    const param = event.queryStringParameters;
        const apikey = process.env.VITE_API_KEY;
        const searchTerm = param.q || '';
        const query = searchTerm ? `&q=${searchTerm}` : '';
        const response = await fetch(
          `https://www.rijksmuseum.nl/api/en/collection?key=${apikey}&ps=${param.ps}&${query}`
        );
        const result = await response.json();
        // console.log(result);
        return {
          statusCode: 200,
          body: JSON.stringify(result),
        }
}
