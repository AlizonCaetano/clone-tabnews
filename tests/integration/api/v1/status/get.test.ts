test("Get to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  const parsedUpdatedAt = new Date(responseBody.update_at).toISOString();
  expect(responseBody.update_at).toEqual(parsedUpdatedAt);

  const dbVersion = responseBody.dependencies.database.version;
  expect(dbVersion).toEqual("16.0");

  const dbMaxConnections = responseBody.dependencies.database.max_connections;
  expect(dbMaxConnections).toEqual(100);

  // const dbOpenedConn = responseBody.db_opened_conn.rows[0].count;
  // expect(parseInt(dbOpenedConn)).toBeGreaterThan(0);
});
