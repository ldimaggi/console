import { protractor, element, by, browser, ExpectedConditions as until } from 'protractor';
import {
  appHost,
  checkLogs,
  checkErrors,
} from '../../../../integration-tests/protractor.conf';

import { switchPerspective, Perspective, sideHeader } from '../views/dev-perspective.view';
import * as sidenavView from '../../../../integration-tests/views/sidenav.view';
import * as crudView from '../../../../integration-tests/views/crud.view';
import { firstKebabMenu, editCount, machineSetsInput, submitCount } from '../views/machine-sets.view';

describe('Compute', async () => {
    beforeAll(async () => {
      await browser.get(`${appHost}/k8s/cluster/projects`);
      await switchPerspective(Perspective.Administrator);
      expect(sideHeader.getText()).toContain('Administrator');
    });

    afterEach(() => {
        checkLogs();
        checkErrors();
      });

    it('Increase the Machine sets count', async() => {
      await browser.wait(until.presenceOf(sidenavView.navSectionFor('Compute')));
      await sidenavView.clickNavLink(['Compute', 'Machine Sets']);
      await crudView.isLoaded();

      await browser.wait(until.elementToBeClickable(firstKebabMenu));
      await firstKebabMenu.click();

      await browser.wait(until.elementToBeClickable(editCount));
      await editCount.click();

      await browser.wait(until.elementToBeClickable(machineSetsInput));
      await machineSetsInput.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"));
      await machineSetsInput.sendKeys("9");

      await browser.wait(until.elementToBeClickable(submitCount));
      await submitCount.click();
//      await browser.wait(until.elementToBeVisible());  <---  This line is incomplete - which element did you want?

      /*var tabledata = element.all(by.css("./table"));
      var rows = tabledata.all(by.tagName("tr"));
      var cells = rows.all(by.tagName("td"));
      expect(cells.get(3).getText()).toEqual("9 of 9 machines")*/
    });
});
