import { browser, ExpectedConditions as until, by, element, $ } from 'protractor';

export const pageSidebar = element(by.id('page-sidebar'));
export const pipelineTab = element(by.css('[data-test-id="pipeline-header"]'));
export const pipelinePage = element(by.css('[data-test-id="resource-title"]'));
export const createPipelineYaml = element(by.id('yaml-create'));
export const yamlPipeline = element(by.className('lines-content monaco-editor-background'));
export const saveChangesYamlPipeline = element(by.id('save-changes'));
export const createPipelineYamlError = $('.pf-c-alert.pf-m-danger');

//export const pipelineTable = $('.ReactVirtualized__VirtualGrid ReactVirtualized__List');
export const pipelineTableBody = $('ReactVirtualized__VirtualGrid__innerScrollContainer');
export const pipelineTable = element(by.className('ReactVirtualized__VirtualGrid ReactVirtualized__List'));

export const pipelineOverview = element(
    by.cssContainingText('h2', 'Pipeline Overview'),
);
export const pipelineGraph = $('odc-pipeline-vis-graph__stages');
// export const pipelineOverviewName = element(by.css('[data-test-id="resource-summary"]')).element(
//     by.cssContainingText('dd', 'new-pipeline'),
// );
export const piplineBreadcrumb = element(by.css('[data-test-id="breadcrumb-link-0"]'));
export const pipelineOverviewName = element(by.css('[data-test-id="resource-title"]'));

export const pipelineScriptRunner = async function() {
    await createPipelineYaml.click();
    await console.log('Click on createPipelineYaml');
    await browser.sleep(5000);

    await browser.wait(until.presenceOf(saveChangesYamlPipeline));
    await console.log('Wait untill presence of saveChangesYamlPipeline');
    await browser.sleep(5000);

    await saveChangesYamlPipeline.click();
    await console.log('Click on saveChangesYamlPipeline');
    await browser.sleep(5000);

    // browser.wait(until.visibilityOf(pipelineOverview));console.log('y3');
    // browser.wait(until.visibilityOf(pipelineGraph),15000);console.log('y4');
}

export const pipelinecheckStatus = async function() {
    await console.log('Open the Pipelines tab');
    await pipelineTab.click();
    await console.log('Wait for pipeline table to be displayed');
    await browser.wait(until.textToBePresentInElement(pipelinePage, 'Pipelines'));
//    pipelinePage.getText().then(function (text) {
//        console.log('debugging:',text);
//    });
};
