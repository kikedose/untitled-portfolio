// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from 'drizzle-orm';
import { index, pgTableCreator } from 'drizzle-orm/pg-core';

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator(
  (name) => `untitled-portfolio_${name}`
);

export const projects = createTable(
  'project',
  (d) => ({
    id: d.uuid().notNull().primaryKey().defaultRandom(),
    title: d.varchar({ length: 256 }),
    country: d.varchar({ length: 256 }),
    year: d.char({ length: 4 }),
    description: d.varchar({ length: 560 }),
    hidden: d.boolean().default(false),
    links: d.json().$type<{ text: string; url: string }[]>(),
    createdAt: d
      .timestamp({ withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: d.timestamp({ withTimezone: true }).$onUpdate(() => new Date()),
  }),
  (t) => [index('name_idx').on(t.title)]
);
