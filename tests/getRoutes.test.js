const request = require("supertest");
const mongoose = require("mongoose");

// Mock User Model
jest.mock("../models/user", () => ({
  find: jest.fn().mockResolvedValue([]),
  findById: jest.fn().mockResolvedValue(null),
}));

// Mock MovieInfo Model
jest.mock("../models/MovieInfo", () => ({
  find: jest.fn().mockResolvedValue([]),
  findById: jest.fn().mockResolvedValue(null),
}));

// Mock RentedMovie Model
jest.mock("../models/RentedMovie", () => ({
  find: jest.fn(() => ({
    populate: jest.fn().mockReturnThis(),
    then: (resolve) => Promise.resolve(resolve([])),
  })),
  findById: jest.fn(() => ({
    populate: jest.fn().mockReturnThis(),
    then: (resolve) => Promise.resolve(resolve(null)),
  })),
}));

// Mock Review Model
jest.mock("../models/Review", () => ({
  find: jest.fn(() => ({
    populate: jest.fn().mockReturnThis(),
    then: (resolve) => Promise.resolve(resolve([])),
  })),
  findById: jest.fn(() => ({
    populate: jest.fn().mockReturnThis(),
    then: (resolve) => Promise.resolve(resolve(null)),
  })),
}));

// Mock AvailableMovie Model
jest.mock("../models/AvailableMovie", () => ({
  find: jest.fn(() => ({
    populate: jest.fn().mockResolvedValue([]),
  })),
  findById: jest.fn(() => ({
    populate: jest.fn().mockResolvedValue(null),
  })),
}));

const app = require("../app");

describe("GET and GET BY ID Routes", () => {
  const validObjectId = new mongoose.Types.ObjectId();

  test("GET /users should return 200", async () => {
    const res = await request(app).get("/users");
    expect(res.statusCode).toBe(200);
  });

  test("GET /users/:id should return 404", async () => {
    const res = await request(app).get(`/users/${validObjectId}`);
    expect(res.statusCode).toBe(404);
  });

  test("GET /info should return 200", async () => {
    const res = await request(app).get("/info");
    expect(res.statusCode).toBe(200);
  });

  test("GET /info/:id should return 404", async () => {
    const res = await request(app).get(`/info/${validObjectId}`);
    expect(res.statusCode).toBe(404);
  });

  test("GET /rented should return 200", async () => {
    const res = await request(app).get("/rented");
    expect(res.statusCode).toBe(200);
  });

  test("GET /rented/:id should return 404", async () => {
    const res = await request(app).get(`/rented/${validObjectId}`);
    expect(res.statusCode).toBe(404);
  });

  test("GET /review should return 200", async () => {
    const res = await request(app).get("/review");
    expect(res.statusCode).toBe(200);
  });

  test("GET /review/:id should return 404", async () => {
    const res = await request(app).get(`/review/${validObjectId}`);
    expect(res.statusCode).toBe(404);
  });

  test("GET /available should return 200", async () => {
    const res = await request(app).get("/available");
    expect(res.statusCode).toBe(200);
  });

  test("GET /available/:id should return 404", async () => {
    const res = await request(app).get(`/available/${validObjectId}`);
    expect(res.statusCode).toBe(404);
  });
});
