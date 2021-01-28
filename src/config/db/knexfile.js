const dbUrl = process.env.DATABASE_URL;

module.exports = {
    client: 'pg',
    connection: dbUrl,
    acquireConnectionTimeout: 10000,
    debug: true,
    migrations: {
        directory: './migrations',
        tableName: 'knex_migrations'
    },
    seeds: {
        directory: './seeds/prod'
    }
};