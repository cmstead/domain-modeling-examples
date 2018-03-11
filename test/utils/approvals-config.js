'use strict';

const approvalsConfigFactory = require('approvals-config-factory');
const approvalsLocation = './test/approvals';

const approvalsConfig = approvalsConfigFactory.buildApprovalsConfig({
    reporter: 'kdiff3'
});

module.exports = require('approvals')
    .configure(approvalsConfig)
    .mocha(approvalsLocation);