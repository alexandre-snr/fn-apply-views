const { applyRequests } = require('./database');
const { getRequests, sortRequests } = require('./aws');

const main = async () => {
    try {
        let requests = await getRequests();
        requests = sortRequests(requests);
        await applyRequests(requests);
        console.log('Done');
    } catch (err) {
        console.log(err);
    }
};

main();