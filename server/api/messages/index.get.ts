export default eventHandler(async () => {
  const db = hubDatabase()

  await db.batch([
    db.prepare('INSERT INTO locations (name) VALUES ("France", "UK")'),
    db.prepare('INSERT INTO Departments (name) VALUES ("Software Engineering", "Product Manager", "Information Technology (IT)")')
  ])

  const [departments, locations] = await db.batch([
    db.prepare('SELECT name FROM departments)'),
    db.prepare('SELECT name FROM locations)')
  ])

  return [departments, locations]
})
