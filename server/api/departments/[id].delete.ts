export default defineEventHandler(async (event) => {
  const { id } = await readBody(event)

  const db = hubDatabase()

  await db
    .prepare('DELETE FROM departments WHERE id = ?1')
    .bind(id)
    .run()

  return {}
})
