export const handler = async (event, context) => {
    const param = event.queryStringParameters;
    console.log(param.searchTerm);
    return {
        statusCode: 200,
        body: JSON.stringify("test ok"),
    }
}
