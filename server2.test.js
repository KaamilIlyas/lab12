describe("Test the root path", () => {
    test("It should response the GET method", () => {


      const response = request(app)
        .post("http://localhost:8000/user/delete"
        ).send({
          Name: "Kamil Ilyas",
          Email: "20i-2371@nu.edu.pk",
          Age: 20,
          Contact: 01233234211,
        });
        
      expect(response.statusCode), toBe(200);
    });
  });