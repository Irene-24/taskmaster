describe("Login Page", () => {
  beforeEach(() => {
    cy.loadApp("/auth/login");
  });

  it("should render the login form correctly", () => {
    cy.contains("Welcome Back").should("be.visible");
    cy.contains("Sign in to your TaskMaster account").should("be.visible");

    cy.get("#email").should("be.visible");
    cy.get("#password").should("be.visible");
    cy.contains("LOG IN").should("be.visible");
  });

  it("should show validation errors when submitting empty form", () => {
    cy.contains("LOG IN").click();

    // Email and password validation errors should appear
    cy.contains("Email address is required").should("be.visible");
    cy.contains("Password must be at least 8 characters.").should("be.visible");
  });

  it("should log in user and redirect to the dashboard", () => {
    cy.intercept("POST", "**/accounts:lookup**").as("lookupReq");

    cy.get("#email").type(Cypress.env("email"));
    cy.get("#password").type(Cypress.env("pwd"));

    cy.contains("LOG IN").click();
    cy.wait("@lookupReq");

    cy.url().should("include", "/dashboard");
  });

  it("should handle failed login attempts", () => {
    cy.intercept("POST", "**/accounts:signInWithPassword**").as("loginRequest");

    cy.get("#email").type("invalid-email@example.com");
    cy.get("#password").type("wrongPassword");

    cy.contains("LOG IN").click();

    cy.wait("@loginRequest");

    cy.contains("Unable to login").should("be.visible");

    cy.url().should("not.include", "/dashboard");
  });
});

describe("Login Page with Callback URL", () => {
  beforeEach(() => {
    cy.loadApp("/auth/login?callbackUrl=/dashboard/tasks");
  });

  it("should redirect to the callback URL after successful login", () => {
    cy.intercept("POST", "**/accounts:lookup**").as("loginRequest");

    cy.get("#email").type(Cypress.env("email"));
    cy.get("#password").type(Cypress.env("pwd"));

    cy.contains("LOG IN").click();

    cy.wait("@loginRequest");

    cy.url().should("include", "/dashboard/tasks");
  });
});

describe("Login no UI", () => {
  it("should show dashboard", () => {
    cy.loadApp("/");
    cy.login();
    cy.visit("/dashboard");

    // cy.wait(1000);

    cy.url().should("not.include", "/auth/login");
  });
});
