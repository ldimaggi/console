import { by, element } from 'protractor';

export const firstKebabMenu = element.all(by.css('[data-test-id="kebab-button"]')).first();
export const actionItems = element(by.css('data-test-id="action-items"'));
export const editCount = element(by.cssContainingText('.pf-c-dropdown__menu-item', 'Edit Count'));
export const machineSetsInput = element(by.className('pf-c-form-control co-m-number-spinner__input'));
export const submitCount = element(by.id('confirm-action'));
