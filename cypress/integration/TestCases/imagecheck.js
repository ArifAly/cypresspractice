describe("Check for Missing Images", () => {
    beforeEach(() => {
      // Visit the page URL
      cy.visit("https://www.seesight-tours.com/partner");
    });
  
    it("Should check for missing images and show an alert if any are missing", () => {
      // Flag to check if any missing images were found
      let missingImages = false;
  
      // Find all images on the page
      cy.get("img").each((image) => {
        // Get the image's source (src) attribute
        cy.wrap(image).invoke("attr", "src").then((src) => {
          // Check if the src is not empty and doesn't contain "data:" (data URLs)
          if (src && !src.startsWith("data:")) {
            // Use cy.request to check if the image URL returns a 404 status
            cy.request(src).then((response) => {
              // If the response status is 404, log the missing image URL
              if (response.status === 404) {
                cy.log(`Missing image: ${src}`);
                missingImages = true;
              }
            });
          }   
      }).then(() => {
        // Use an assertion to fail the test and display a custom alert message if missing images were found
        if (missingImages) {
          throw new Error("One or more images are missing on the page!");
        }
      });
    });
  });
  