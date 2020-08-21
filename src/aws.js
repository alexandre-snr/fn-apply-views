const awsRegion = process.env.AWS_REGION || "us-west-2";
const awsBucketName = process.env.AWS_BUCKET_NAME || "fn-apply-views-dev";

const AWS = require('aws-sdk');
const s3 = new AWS.S3({
    region: awsRegion,
});

const getRequests = async () => {
    const bucket = await s3.listObjectsV2({
        Bucket: awsBucketName,
    }).promise();

    const requests = await Promise.all(bucket.Contents.map(async (obj) => {
        const objData = await s3.getObject({
            Bucket: bucket.Name,
            Key: obj.Key,
        }).promise();

        const [key, ...name] = obj.Key.split("_");

        return {
            key: parseInt(key),
            name: name.join('_'),
            body: objData.Body.toString('utf-8'),
        };
    }));
    return requests;
}

const sortRequests = (requests) => {
    return requests.sort((a, b) => {
        return a.key - b.key;
    });
}

module.exports = {
    getRequests,
    sortRequests,
}