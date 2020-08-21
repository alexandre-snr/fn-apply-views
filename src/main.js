const database = require('./database');
const { getRequests, sortRequests } = require('./aws');

const main = async () => {
    let requests = await getRequests();
    requests = sortRequests(requests);
    console.log(requests);
};

main();