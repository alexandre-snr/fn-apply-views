const { applyRequests } = require('./database');
const { getRequests, sortRequests } = require('./aws');

const main = async () => {
    try {
        let requests = await getRequests();
        console.log(`Found ${requests.length} requests`);
        requests = sortRequests(requests);
        await applyRequests(requests);
        console.log('Done');
    } catch (err) {
        console.log(err);
    }
};

main();