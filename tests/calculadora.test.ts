const calculadora = require("../models/calculadora.ts")

test("Somar 2+2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2)
  expect(resultado).toBe(4)
})