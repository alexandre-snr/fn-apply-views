const dbUser = process.env.DB_USER || "postgres";
const dbPassword = process.env.DB_PASSWORD || "azerty";
const dbHost = process.env.DB_HOST || "db:5432";
const dbName = process.env.DB_NAME || "postgres";

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(`postgres://${dbUser}:${dbPassword}@${dbHost}/${dbName}`)

const applyRequests = async (requests) => {
    const tx = await sequelize.transaction();

    try {
        for (let i = 0; i < requests.length; i++) {
            console.log(`Applying request ${requests[i].key}`);
            await sequelize.query(requests[i].body, {
                transaction: tx,
            });
            console.log(`Done ${requests[i].key}`);
        }
        await tx.commit();
    } catch (err) {
        console.error(err);
        await tx.rollback();
    }
}

module.exports = {
    applyRequests,
}