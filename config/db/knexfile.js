const dbUrl: string = process.env.DATABASE_URL;

module.exports = {
    db_config: {
        client: 'pg',
        connection: dbUrl,
        acquireConnectionTimeout: 10000,
        debug: true,
        migrations: {
            directory: './db/migrations',
            tableName: 'knex_migrations'
        },
        seeds: {
            directory: './db/seeds/prod'
        }
    }
};