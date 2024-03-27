export default eventHandler(async () => {
  const db = hubDatabase()

  const { results } = await db.prepare('SELECT name FROM employees').all()

  return results
})
