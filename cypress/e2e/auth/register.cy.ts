const email = `testemail${new Date().getTime()}@fakemail.com`;

describe("Register Page", () => {
  beforeEach(() => {
    cy.loadApp("/auth/register");
  });

  it("should render the registration form correctly", () => {
    cy.contains("Hello Friend").should("be.visible");
    cy.contains("Sign up, and boost productivity with TaskMaster").should(
      "be.visible"
    );

    cy.get("#firstName").should("be.visible");
    cy.get("#lastName").should("be.visible");
    cy.get("#email").should("be.visible");
    cy.get("#password").should("be.visible"); // Password field
    cy.get("#confirmPassword").should("be.visible"); // Confirm Password field
    cy.contains("REGISTER").should("be.visible");
  });

  it("should show validation errors when submitting empty form", () => {
    cy.contains("REGISTER").click();

    // Validate error messages
    cy.contains("First name is required").should("be.visible");
    cy.contains("Last name is required").should("be.visible");
    cy.contains("Invalid email address").should("be.visible");
    cy.contains("Password must be at least 8 characters long").should(
      "be.visible"
    );
    cy.contains("Confirm password must be at least 8 characters long").should(
      "be.visible"
    );
  });

  it("should register user successfully and redirect to dashboard", () => {
    cy.intercept("POST", "**/accounts:lookup**").as("registerUser");

    cy.get("#firstName").type("Jane");
    cy.get("#lastName").type("Doe");
    cy.get("#email").type(email);
    cy.get("#password").type("Password123$");
    cy.get("#confirmPassword").type("Password123$");

    cy.contains("REGISTER").click();
    cy.wait("@registerUser");

    // Validate success message and redirection
    cy.contains("Welcome Jane").should("be.visible");
    cy.url().should("include", "/dashboard");
  });

  it("should handle registration error", () => {
    // Mock the API call for registration failure
    cy.intercept("POST", "**/accounts:lookup**").as("registerUser");

    cy.get("#firstName").type("Jane");
    cy.get("#lastName").type("Doe");
    cy.get("#email").type(email);
    cy.get("#password").type("Password123$");
    cy.get("#confirmPassword").type("Password123$");

    cy.contains("REGISTER").click();
    cy.wait("@registerUser");

    // Validate error message
    cy.contains("Unable to process").should("be.visible");
  });
});
