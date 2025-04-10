import { sql } from 'drizzle-orm';
import { index, pgTableCreator } from 'drizzle-orm/pg-core';

/**
 * Multi-project schema prefix. Using the same
 * database instance for multiple projects.
 */
export const createTable = pgTableCreator(
  (name) => `untitled-portfolio_${name}`
);

export const projects = createTable(
  'projects-en',
  (d) => ({
    id: d.uuid().notNull().primaryKey().defaultRandom(),
    title: d.varchar({ length: 256 }).notNull(),
    country: d.varchar({ length: 256 }).notNull(),
    year: d.char({ length: 4 }).notNull(),
    description: d.varchar({ length: 560 }).notNull(),
    hidden: d.boolean().default(false).notNull(),
    links: d
      .json()
      .$type<{ text: string; url: string }[]>()
      .default([])
      .notNull(),
    thumbnail: d.varchar({ length: 256 }).notNull(),
    blur: d.varchar({ length: 256 }).notNull(),
    images: d
      .json()
      .$type<{ alt: string; url: string }[]>()
      .default([])
      .notNull(),
    createdAt: d
      .timestamp({ withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: d.timestamp({ withTimezone: true }).$onUpdate(() => new Date()),
  }),
  (t) => [index('name_idx').on(t.title)]
);
