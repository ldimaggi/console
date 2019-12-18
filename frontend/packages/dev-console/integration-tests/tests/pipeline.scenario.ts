import { browser, ExpectedConditions as until, by } from 'protractor';
import { appHost, checkLogs, checkErrors } from '../../../../integration-tests/protractor.conf';
import { switchPerspective, Perspective, sideHeader } from '../views/dev-perspective.view';
import { pipelinecheckStatus, pageSidebar, pipelinePage, pipelineScriptRunner, pipelineTable, pipelineTableBody } from '../views/pipeline.view';

describe('Pipeline', async() => {
  beforeAll(async() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 3;
    await browser.get(`${appHost}/k8s/cluster/projects`);
  });

  afterEach(() => {
    checkLogs();
    checkErrors();
  });

  fit('pipeline tab scenario', async() => {

    await switchPerspective(Perspective.Developer);
    await console.log('Switch to DevPerspective');
    await browser.sleep(5000);

    expect(sideHeader.getText()).toContain('Developer');
    await browser.wait(until.visibilityOf(pageSidebar));
    await console.log('Wait until visibilityOf pageSidebar');
    await browser.sleep(5000);

    expect(pageSidebar.getText()).toContain('Pipelines');
    await pipelinecheckStatus();

    expect(pipelinePage.getText()).toContain('Pipelines');
    await pipelineScriptRunner();
    await browser.sleep(5000);

    await pipelinecheckStatus();
    await browser.sleep(5000);

    await console.log('Wait until visibilityOf pipelineTable');
    await browser.wait(until.visibilityOf(pipelineTable));
    await browser.sleep(5000);
    expect(pipelineTableBody.element(by.cssContainingText('tr','new-pipeline'))).toBeDefined();

  });
});
