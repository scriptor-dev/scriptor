describe("Theme", () => {
  it("should switch to light mode", () => {
    cy.visit("/");
    cy.get("button").find("span").contains("Settings").parent().click();
    cy.get("button").find("span").contains("Toggle theme").parent().click();
    cy.get("div").contains("Light").click();
    cy.get("html").should("have.class", "light");
  });

  it("should switch to dark mode", () => {
    cy.visit("/");
    cy.get("button").find("span").contains("Settings").parent().click();
    cy.get("button").find("span").contains("Toggle theme").parent().click();
    cy.get("div").contains("Dark").click();
    cy.get("html").should("have.class", "dark");
  });
});
