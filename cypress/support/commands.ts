/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

import { signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";

export {};

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to login the user.
       * @example cy.login()
       */
      login(): void;

      /**
       * Custom command to visit home and do some stuff
       * @example cy.loadApp()
       */
      loadApp(url?: string): void;

      /**
       * Custom command to get elements by data-test attribute.
       * @param selector The data-test attribute to select the element.
       * @param extra Optional additional selector.
       * @example cy.getDataTest('submit-button')
       */
      getDataTest(
        selector: string,
        extra?: string
      ): Cypress.Chainable<JQuery<HTMLElement>>;

      /**
       * Custom command to get elements by placeholder attribute.
       * @param selector The data-test attribute to select the element.
       * @param extra Optional additional selector.
       * @example cy.getDataTest('type here','input#my-input')
       */
      getByPlaceholder(
        placeholderValue: string,
        inputSelector?: string
      ): Cypress.Chainable<JQuery<HTMLElement>>;

      /**
       * Custom command to click an element multiple times.
       * @param times Number of times to click the element.
       * @example cy.get('button').clickMultipleTimes(3)
       */
      clickMultipleTimes(times: number): Chainable<JQuery<HTMLElement>>;
    }
  }
}

Cypress.Commands.add("getDataTest", (dataTestSelector, extra = "") => {
  return cy.get(`[data-test="${dataTestSelector}"]${extra}`);
});

Cypress.Commands.add(
  "getByPlaceholder",
  (placeholder, inputSelector = "input") => {
    return cy.get(`${inputSelector}[placeholder="${placeholder}"]`);
  }
);

Cypress.Commands.add("login", () => {
  const email = Cypress.env("email");
  const password = Cypress.env("pwd");

  const firebaseConfig = {
    apiKey: Cypress.env("NEXT_PUBLIC_APIKEY"),
    authDomain: Cypress.env("NEXT_PUBLIC_AUTHDOMAIN"),
    projectId: Cypress.env("NEXT_PUBLIC_PROJECTID"),
    storageBucket: Cypress.env("NEXT_PUBLIC_STORAGEBUCKET"),
    messagingSenderId: Cypress.env("NEXT_PUBLIC_MESSAGINGSENDERID"),
    appId: Cypress.env("NEXT_PUBLIC_APPID"),
    measurementId: Cypress.env("NEXT_PUBLIC_MEASUREMENTID"),
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  if (Cypress.env("use_emulator") === "true") {
    //do this or it fails, ensure emulator is running though
    connectAuthEmulator(auth, "http://localhost:9099");
    // cy.log(JSON.stringify(firebaseConfig, null, 2));
  }

  signInWithEmailAndPassword(auth, email, password);
});

Cypress.Commands.add(
  "clickMultipleTimes",
  { prevSubject: "element" },
  (subject, times) => {
    for (let i = 0; i < times; i++) {
      cy.wrap(subject).click();
    }
  }
);

Cypress.Commands.add("loadApp", (url = "/") => {
  // cy.log(Cypress.env("measurementId"));

  cy.visit(url, {
    onBeforeLoad(win) {
      //@ts-ignore
      delete win.navigator.__proto__.ServiceWorker;
      //@ts-ignore
      delete win.navigator.serviceWorker;
    },
  });

  if (window.navigator && navigator.serviceWorker) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      registrations.forEach((registration) => {
        registration.unregister();
      });
    });
  }
});
