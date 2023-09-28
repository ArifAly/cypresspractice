describe("Blog Page Link Check", () => {
  beforeEach(() => {
    // Visit the blog page URL
    cy.visit("https://www.seesight-tours.com/blog/toronto-in-september");
  });

  Cypress.on("uncaught:exception", (err, runnable) => {
    console.error("An error occurred:", err.message);
    alert("An error occurred. Please check the console for details.");
    return false;
  });

  it("Should click on links one by one and check if they work", () => {
    // Find all the links on the page
    cy.get("a").each((link) => {
      // Extract the href attribute
      cy.wrap(link).invoke("attr", "href").then((href) => {
        // Check if the href is not empty and it's a relative link
        if (href && href !== "#" && !href.startsWith("http")) {
          // Visit the link and open it in a new tab
          //cy.visit(href, { force: true });
        }
         
      });
    });
  });
});