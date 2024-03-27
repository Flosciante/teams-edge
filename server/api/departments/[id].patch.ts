export default defineEventHandler(async (event) => {
  const { id, name } = await readBody(event)

  const db = hubDatabase()

  await db
    .prepare('UPDATE departments SET name = ?2 WHERE id = ?1')
    .bind(id, name)
    .run()

  return {}
})
