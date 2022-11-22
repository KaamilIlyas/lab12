const request = require("supertest");
const app = require('./routes/User');
const mongoose = require('mongoose');




describe("Test the root path", () => {
test("It should response the POST method", () => {
const response = request(app).post("http://localhost:8000/User/add"
).send ({
"Name": "Kamil Ilyas",
"Email": "20i-2371",
"Age": 20,
"Contact": 01233234211
})
expect(response.statusCode).toBe(200);
})
})