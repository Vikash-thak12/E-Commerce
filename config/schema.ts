import { integer, pgTable, varchar } from "drizzle-orm/pg-core";



// usersTable is going to be used in the application where as users is the actual table in the database
export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  image: varchar(),
  email: varchar({ length: 255 }).notNull().unique(),
});
