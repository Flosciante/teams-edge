import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const locations = sqliteTable('locations', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
})

export const departments = sqliteTable('departments', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
})

export const employees = sqliteTable('employees', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  position: text('position').notNull(),
  joinDate: integer('created_at', { mode: 'timestamp' }).notNull(),
  locationId: integer('location_id').notNull().references(() => locations.id, { onDelete: 'cascade' }),
  departmentId: integer('department_Id').notNull().references(() => departments.id, { onDelete: 'cascade' }),
})
