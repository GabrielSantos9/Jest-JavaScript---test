const request = require("supertest");
const express = require("express");
const app = require("./aplication");

describe("Decimal to Binary API", () => {
  it("deve retornar um número binário se o número informado for um decimal válido", async () => {
    const response = await request(app).get("/to-binary/10");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ decimal: 10, binary: "1010" });
  }); //Realiza uma chamada para um endpoint (“/to-binary/10”) passando o valor 10 como parâmetro. Após essa etapa, ele espera receber um status http 200 e um json com o resultado da conversão correta, já que 10 é um número decimal válido.

  it("deve retornar erro 400 caso for informado um número decimal inválido", async () => {
    const response = await request(app).get("/to-binary/invalid");
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: "Número decimal inválido" });
  }); // Faz uma nova chamada para o mesmo endpoint só que agora passando a palavra invalid e isso faz com que a função dê erro, pois só converte para binário os números decimais válidos; com isso, o teste espera receber um status http de erro 400 e um json com a frase “Número decimal inválido”.
});
