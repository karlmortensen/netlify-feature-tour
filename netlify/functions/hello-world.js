exports.handler = async () => {
const tc = process.env.TACO_COUNT;
const ov = process.env.CAT_COUNT;
const bc = process.env.BEANS_COUNT;
    return {
    statusCode: 200,
    body: 'Word dog. tc is ${tc} and ${ov} ${bc}'
    };
};