describe("聚类设置功能测试", () => {
  beforeEach(() => {
    // @ts-ignore
    cy.login();
    cy.viewport(1920, 1080);
    const url = `${Cypress.env("LOCAL_URL")}/#/retrieve/627483?spaceUid=bkcc__100605&bizId=100605`;
    cy.visit(url);
  });

  it("过滤规则设置测试", () => {
    cy.get('[data-test-id="retrieve-tab-item"]')
      .filter(':contains("日志聚类")')
      .click();
    cy.get('[data-test-id="clusterConfigMain"]').click();
    cy.get('[data-test-id="addRuleTrigger"]').click();
    cy.get('[data-test-id="conditionSelect"]').click();
    cy.get('[data-test-id="conditionOption"]').first().click();
    cy.get('[data-test-id="valueTagInput"]').type("123{enter}");
    cy.get('[data-test-id="configRuleConfirmButton"]').click();
    cy.get('[data-test-id="filterRuleItem"]').should("have.length", 1);
  });
});
