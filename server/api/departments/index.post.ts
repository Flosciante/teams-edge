export default eventHandler(async (event) => {
  const { name } = await readBody(event)
  const db = hubDatabase()

  await db
    .prepare('INSERT INTO departments (name) VALUES (?1)')
    .bind(name)
    .run()

  return {}
})
