const request = require("supertest");
const app = require("../app");

describe("get /movies", ()=>{
test("Should return a list of movies",async()=>{
    const response= await request(app).get("/movies");
    expect(response.status).toBe(200); 
    expect(response.body.length).not.toBe(0); 
    
});

});

describe("get /movies/1", ()=>{
    test("Should return a movie by id",async()=>{
        const response= await request(app).get("/movies/1");
        expect(response.status).toBe(200); 
        expect(response.header ['Content-Type']).toMatch(/json/); 
        expect(response.body).toHaveProperty("title"); 
        
    });
    
    test("Should return empty data with 404 status code ",async()=>{
        const response= await request(app).get("/movies/0");
        expect(response.status).toBe(404); 
        expect(response.header ['Content-Type']).toMatch(/json/); 

    });
    });
