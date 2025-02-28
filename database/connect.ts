import 'server-only';
import { config } from 'dotenv-safe';
import postgres, { type Sql } from 'postgres';
import postgresConfig from '../ley.config';

config();

declare namespace globalThis {
  let postgresSqlClient: Sql;
}

// export const sql = postgres({
//   transform: {
//     ...postgres.camel,
//     undefined: null,
//   },
// });

// Connect once to the database
function connectOneTimeToDatabase() {
  if (!('postgresSqlClient' in globalThis)) {
    globalThis.postgresSqlClient = postgres(postgresConfig);
  }
  return globalThis.postgresSqlClient;
}
export const sql = connectOneTimeToDatabase();

// Count postgres connection slot
// sql`
// SELECT count(*)
// FROM
// pg_stat_activity;
// `
// .then((result) => console.log('result:', result))
// .catch((error) => error);
