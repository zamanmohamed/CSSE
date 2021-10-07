const app = require("../server");
const mongoose = require("mongoose");
const supertest = require("supertest");
const { request } = require("../server");

test("get all orders true", () => {
  return supertest(app)
    .get("/api/payments/get")
    .then((response) => {
      expect(response.statusCode).toBe(200);
    });
});

test("get all orders false", () => {
  return supertest(app)
    .post("/api/payments/get")
    .then((response) => {
      expect(response.statusCode).toBe(200);
    });
});

test("login project mannager true ", () => {
  return supertest(app)
    .post("/api/customers/login")
    .send({ email: "test@gmail.com", password: "123" })
    .then((response) => {
      expect(response.statusCode).toBe(200);
    });
});

test("login project mannager false", () => {
  return supertest(app)
    .post("/api/customers/login")
    .send({ email: "test@gmail.com", password: "1234" })
    .then((response) => {
      expect(response.statusCode).toBe(200);
    });
});

test("Approve project true", () => {
  return supertest(app)
    .post("/api/payments/approve")
    .send({ email: "test@gmail.com", state: "Approved" })
    .then((response) => {
      expect(response.statusCode).toBe(200);
    });
});

test("Approve project false", () => {
  return supertest(app)
    .get("/api/payments/approve")
    .send({ email: "test@gmail.com", state: "Approved" })
    .then((response) => {
      expect(response.statusCode).toBe(200);
    });
});

test("pending project true", () => {
  return supertest(app)
    .post("/api/payments/approve")
    .send({ email: "test@gmail.com", state: "pending" })
    .then((response) => {
      expect(response.statusCode).toBe(200);
    });
});

test("pending project false", () => {
  return supertest(app)
    .get("/api/payments/approve")
    .send({ email: "test77@gmail.com", state: "pending" })
    .then((response) => {
      expect(response.statusCode).toBe(200);
    });
});
