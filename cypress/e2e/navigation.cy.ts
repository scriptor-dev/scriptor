describe("Navigation", () => {
  context("Desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1280, 800);
    });

    it("should navigate to the /theorems page", () => {
      cy.visit("/");
      cy.get('a[href*="theorems"]').click();
      cy.url().should("include", "/theorems");
      cy.get("h2").contains("Theorems");
    });

    it("should navigate to the /statistics page", () => {
      cy.visit("/");
      cy.get('a[href*="statistics"]').click();
      cy.url().should("include", "/statistics");
      cy.get("h2").contains("Statistics");
    });

    it("should navigate to the /about page", () => {
      cy.visit("/");
      cy.get('a[href*="about"]').click();
      cy.url().should("include", "/about");
      cy.get("h2").contains("About");
    });

    it("should navigate to the /404 page", () => {
      cy.visit("/not-existing-page", {
        failOnStatusCode: false
      });
      cy.get("h1").contains("404 - Page Not Found");
    });

    it("should navigate to the / page", () => {
      cy.visit("/about");
      cy.get('a[href="/"]').contains("Home").click();
      cy.get("h1").contains("Prove & Show your Data Science Skills with");
    });

    it("should navigate from logo to the / page", () => {
      cy.visit("/about");
      cy.get('a[href="/"]').get("p").contains("Scriptor").click();
      cy.get("h1").contains("Prove & Show your Data Science Skills with");
    });
  });

  context("Mobile resolution", () => {
    beforeEach(() => {
      cy.viewport(390, 844);
      cy.visit("/");
      cy.get("button").find("svg.lucide.lucide-menu").parents("button").click();
    });

    it("should open side menu", () => {
      cy.get('a[href="/"]').get("p").contains("Theorem");
      cy.get("button").find("svg.lucide.lucide-x");
      cy.get("a").contains("Home");
      cy.get("a").contains("Theorems");
      cy.get("a").contains("Statistics");
      cy.get("a").contains("About");
    });
  });
});
