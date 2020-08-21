const awsRegion = process.env.AWS_REGION || "us-west-2";
const awsBucketName = process.env.AWS_BUCKET_NAME || "fn-apply-views-dev";

const AWS = require('aws-sdk');
const s3 = new AWS.S3({
    region: awsRegion,
});

const listObjectsV2Async = (params) => {
    return new Promise((resolve, reject) => {
        s3.listObjectsV2(params, (err, bucket) => {
            if (err) return reject(err);
            resolve(bucket);
        });
    });
}

const getObjectAsync = (params) => {
    return new Promise((resolve, reject) => {
        s3.getObject(params, (err, obj) => {
            if (err) return reject(err);
            resolve({
                key: params.Key,
                body: obj.Body.toString('utf-8'),
            });
        });
    });
}

const getRequests = async () => {
    const bucket = await listObjectsV2Async({
        Bucket: awsBucketName,
    });

    const requests = await Promise.all(bucket.Contents.map((obj) => {
        return getObjectAsync({
            Bucket: bucket.Name,
            Key: obj.Key,
        });
    }));
    return requests;
};

const sortRequests = (requests) => {
    return requests.sort((a, b) => {
        return parseInt(a.key) - parseInt(b.key);
    });
}

module.exports = {
    getRequests,
    sortRequests,
}