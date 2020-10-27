exports.handler = async function (event, context) {
    let body = event.body ? JSON.parse(event.body) : null;
    if (body && body.message) {
        return {
            statusCode: 200,
            body: JSON.stringify({ message: body.message }),
        };
    }
    else {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "Please provide a message" }),
        };
    }
};
