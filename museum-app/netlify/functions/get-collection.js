export const handler = async (event, context) => {
    const param = event.queryStringParameters;
        const apikey = process.env.VITE_API_KEY;
        const response = await fetch(
          `https://www.rijksmuseum.nl/api/en/collection?key=${apikey}&ps=${param.ps}`
        );
        const result = await response.json();
        console.log(result);
        return {
          statusCode: 200,
          body: JSON.stringify(result),
        }
}
