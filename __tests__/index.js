const supertest = require("supertest")
const server = require("../server")


test("GET /", async () => {
    const res = await supertest(server).get("/")

    //check the status code
    expect(res.statusCode).toBe(200)

    //check the response type
    expect(res.type).toBe("application/json")
    
    //check the content (body)
    expect(res.body.message).toBe("Welcome to our API")
})