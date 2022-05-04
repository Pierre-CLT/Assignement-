module.exports = {
    development: {
        client: 'postgresql',
        connection: {
          host: '192.0.0.0',
          port: '3001',
          database: 'data1',
          user:     'data1',
          password: 'azertyuiop'
        },
        pool: {
          min: 2,
          max: 10
        },
        migrations: {
          tableName: 'knex_migrations'
        }
    },
    staging: {
      client: 'postgresql',
      connection: {
        database: '192.0.0.0:3000',
        user:     'data2',
        password: 'qsdfghjklm'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex'
      }
    },
    production: {
      client: 'postgresql',
      connection: {
        database: '192.0.0.0:3000',
        user:     'data3',
        password: 'wxcvbn'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex'
      }
    }
  };