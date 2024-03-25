export default eventHandler(async () => {
  const db = hubDatabase()

  // const { data: departments }: any = db.prepare('SELECT name FROM departments').all()

  return db.prepare('SELECT name FROM departments').all()
})
