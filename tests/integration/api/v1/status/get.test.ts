test("Get to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.update_at).toBeDefined();
  
  const parsedUpdatedAt = new Date(responseBody.update_at).toISOString();
  expect(responseBody.update_at).toEqual(parsedUpdatedAt);

  const dbVersion = responseBody.dependencies.database.version
  expect(dbVersion).toEqual("16.0");

  // const dbMaxConn = responseBody.db_max_conn.rows[0].max_connections;
  // expect(dbMaxConn).toEqual("100");

  // const dbOpenedConn = responseBody.db_opened_conn.rows[0].count;
  // expect(parseInt(dbOpenedConn)).toBeGreaterThan(0);
});
