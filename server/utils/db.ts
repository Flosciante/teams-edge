import { drizzle } from 'drizzle-orm/d1'
export { sql, eq, and, or } from 'drizzle-orm'

import * as schema from '../database/schema'

export const tables = schema

export function useDB() {
  return drizzle(hubDatabase(), { schema })
}

export type Employees = typeof schema.employees.$inferSelect
export type Location = typeof schema.locations.$inferSelect
export type departments = typeof schema.departments.$inferSelect