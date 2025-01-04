describe("Not Allowed /api/v1/migrations", () => {
  describe("Anonymous user", () => {
    describe("Return not allowed for differents methods", () => {
      test("DELETE", async () => {
        const response = await fetch(
          "http://localhost:3000/api/v1/migrations",
          {
            method: "DELETE",
          },
        );

        expect(response.status).toBe(405);
      });

      test("PUT", async () => {
        const response = await fetch(
          "http://localhost:3000/api/v1/migrations",
          {
            method: "PUT",
          },
        );

        expect(response.status).toBe(405);
      });

      test("PATCH", async () => {
        const response = await fetch(
          "http://localhost:3000/api/v1/migrations",
          {
            method: "PATCH",
          },
        );

        expect(response.status).toBe(405);
      });
    });
  });
});
