describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.get("[data-testid=test-id]").should(
      "have.text",
      "I am the test component"
    );
  });
});
