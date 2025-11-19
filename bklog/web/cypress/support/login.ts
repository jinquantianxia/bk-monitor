Cypress.Commands.add("login" as any, () => {
  // 缓存登录会话
  cy.session("login", () => {
    cy.setCookie(
      "log-search-4_sessionid",
      Cypress.env("log-search-4_sessionid"),
      { path: "/", domain: Cypress.env("BKLOG_DOMAIN") },
    );
    cy.setCookie(
      "log-search-4_csrftoken",
      Cypress.env("log-search-4_csrftoken"),
      { path: "/", domain: Cypress.env("BKLOG_DOMAIN") },
    );
    cy.setCookie("bk_ticket", Cypress.env("bk_ticket"), {
      path: "/",
      domain: Cypress.env("ROOT_DOMAIN"),
    });
    cy.setCookie("bk_uid", Cypress.env("bk_uid"), {
      path: "/",
      domain: Cypress.env("ROOT_DOMAIN"),
    });
    cy.setCookie("x-client-ssid", Cypress.env("x-client-ssid"), {
      path: "/",
      domain: Cypress.env("ROOT_DOMAIN"),
    });
    cy.setCookie(
      "x_host_key_access_https",
      Cypress.env("x_host_key_access_https"),
      { path: "/", domain: Cypress.env("ROOT_DOMAIN") },
    );
  });
});
