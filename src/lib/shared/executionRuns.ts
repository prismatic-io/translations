import type { ComplexPhrase, SimplePhrase } from "../../types";

export interface ExecutionRunPhrases {
  /** English: "All Customer Executions" */
  "executionRuns.allCustomersTitle": SimplePhrase;

  /** English: "No executions in the selected time range." */
  "executionRuns.noExecutionsMessage": SimplePhrase;

  /** English: "Status" */
  "executionRuns.field.statusLabel": SimplePhrase;

  /** English: "Started" */
  "executionRuns.field.startedLabel": SimplePhrase;

  /** English: "Execution ID" */
  "executionRuns.field.executionIdLabel": SimplePhrase;

  /** English: "Invoke Type" */
  "executionRuns.field.invokeTypeLabel": SimplePhrase;

  /** English: "Result Type" */
  "executionRuns.field.resultTypeLabel": SimplePhrase;

  /** English: "Instance" */
  "executionRuns.field.instanceLabel": SimplePhrase;

  /** English: "Customer" */
  "executionRuns.field.customerLabel": SimplePhrase;

  /** English: "Integration" */
  "executionRuns.field.integrationLabel": SimplePhrase;

  /** English: "Flow" */
  "executionRuns.field.flowLabel": SimplePhrase;

  /** English: "Error" */
  "executionRuns.field.errorLabel": SimplePhrase;

  /** English: "Error Step" */
  "executionRuns.field.errorStepLabel": SimplePhrase;

  /** English: "Duration" */
  "executionRuns.field.durationLabel": SimplePhrase;

  /** English: "Steps" */
  "executionRuns.field.stepsLabel": SimplePhrase;

  /** English: "Trigger Payload" */
  "executionRuns.field.triggerPayloadLabel": SimplePhrase;

  /** English: "Retry Attempt" */
  "executionRuns.field.retryAttemptLabel": SimplePhrase;

  /** English: "Ended" */
  "executionRuns.field.endedLabel": SimplePhrase;

  /** English: "Queued" */
  "executionRuns.field.queuedLabel": SimplePhrase;

  /** English: "Resumed" */
  "executionRuns.field.resumedLabel": SimplePhrase;

  /** English: "Instance Type" */
  "executionRuns.field.instanceTypeLabel": SimplePhrase;

  /** English: "Is Replay" */
  "executionRuns.field.isReplayLabel": SimplePhrase;

  /** English: "From Preprocess Flow" */
  "executionRuns.field.fromPreprocessFlowLabel": SimplePhrase;

  /** English: "Uses Batching" */
  "executionRuns.field.usesBatchingLabel": SimplePhrase;

  /** English: "Invoked By" */
  "executionRuns.field.invokedByLabel": SimplePhrase;

  /** English: "Retry Of Execution ID" */
  "executionRuns.field.retryOfExecutionIdLabel": SimplePhrase;

  /** English: "Instance ID" */
  "executionRuns.field.instanceIdLabel": SimplePhrase;

  /** English: "Customer ID" */
  "executionRuns.field.customerIdLabel": SimplePhrase;

  /** English: "Customer External ID" */
  "executionRuns.field.customerExternalIdLabel": SimplePhrase;

  /** English: "Integration ID" */
  "executionRuns.field.integrationIdLabel": SimplePhrase;

  /** English: "Integration Version Sequence ID" */
  "executionRuns.field.integrationVersionSequenceIdLabel": SimplePhrase;

  /** English: "Flow ID" */
  "executionRuns.field.flowIdLabel": SimplePhrase;

  /** English: "Flow Stable ID" */
  "executionRuns.field.flowStableIdLabel": SimplePhrase;

  /** English: "Flow Config ID" */
  "executionRuns.field.flowConfigIdLabel": SimplePhrase;

  /** English: "Type" */
  "executionRuns.field.typeLabel": SimplePhrase;

  /** English: "Result" */
  "executionRuns.field.resultLabel": SimplePhrase;

  /** English: "Is Test Execution" */
  "executionRuns.field.isTestExecutionLabel": SimplePhrase;

  /** English: "Invoked By Execution ID" */
  "executionRuns.field.invokedByExecutionIdLabel": SimplePhrase;

  /** English: "Ended At" */
  "executionRuns.field.endedAtLabel": SimplePhrase;

  /** English: "Queued At" */
  "executionRuns.field.queuedAtLabel": SimplePhrase;

  /** English: "Resumed At" */
  "executionRuns.field.resumedAtLabel": SimplePhrase;

  /** English: "Yes" */
  "executionRuns.table.yesValue": SimplePhrase;

  /** English: "No" */
  "executionRuns.table.noValue": SimplePhrase;

  /** English: "Running…" */
  "executionRuns.table.runningValue": SimplePhrase;

  /** English: "Queued" */
  "executionRuns.table.queuedValue": SimplePhrase;

  /** English: "(truncated) " */
  "executionRuns.table.truncatedPrefix": SimplePhrase;

  /** English: "Copied to clipboard" */
  "executionRuns.table.copiedMessage": SimplePhrase;

  /** English: "Collapse chart" */
  "executionRuns.chart.collapseButton": SimplePhrase;

  /** English: "Expand chart" */
  "executionRuns.chart.expandButton": SimplePhrase;

  /** English: "Select execution for replay" */
  "executionRuns.list.replayCheckboxLabel": SimplePhrase;

  /** English: "View in sidebar" */
  "executionRuns.cellMenu.viewInSidebarOption": SimplePhrase;

  /** English: "Copy value" */
  "executionRuns.cellMenu.copyValueOption": SimplePhrase;

  /** English: "Filter by value" */
  "executionRuns.cellMenu.filterByValueOption": SimplePhrase;

  /** English: "Exclude value" */
  "executionRuns.cellMenu.excludeValueOption": SimplePhrase;

  /** English: "Replace filter with value" */
  "executionRuns.cellMenu.replaceFilterOption": SimplePhrase;

  /** English: "Sort ascending" */
  "executionRuns.headerMenu.sortAscendingOption": SimplePhrase;

  /** English: "Sort descending" */
  "executionRuns.headerMenu.sortDescendingOption": SimplePhrase;

  /** English: "Close sidebar" */
  "executionRuns.sidebar.closeButton": SimplePhrase;

  /** English: "Raw Error" */
  "executionRuns.sidebar.rawErrorLabel": SimplePhrase;

  /** English: "Copy the raw error" */
  "executionRuns.sidebar.copyErrorButton": SimplePhrase;

  /** English: "Copy the trigger payload" */
  "executionRuns.sidebar.copyPayloadButton": SimplePhrase;

  /** English: "Download trigger payload" */
  "executionRuns.sidebar.downloadPayloadButton": SimplePhrase;

  /** English: "Download the full trigger payload" */
  "executionRuns.sidebar.downloadPayloadTooltip": SimplePhrase;

  /** English: "Download failed. Please try again." */
  "executionRuns.sidebar.downloadFailedMessage": SimplePhrase;

  /** English: "Payload preview truncated. Download to view the full payload." */
  "executionRuns.sidebar.payloadTruncatedMessage": SimplePhrase;

  /** English: "%{count} selected" */
  "executionRuns.replay.selectedCountText": ComplexPhrase<{
    count: number;
  }>;

  /** English: "— Replay is capped at %{limit} executions at once." */
  "executionRuns.replay.limitText": ComplexPhrase<{
    limit: number;
  }>;

  /** English: "Clear" */
  "executionRuns.replay.clearButton": SimplePhrase;

  /** English: "Replay" */
  "executionRuns.replay.replayButton": SimplePhrase;

  /** English: "1 execution" */
  "executionRuns.replay.oneExecutionText": SimplePhrase;

  /** English: "%{count} executions" */
  "executionRuns.replay.executionCountText": ComplexPhrase<{
    count: number;
  }>;

  /** English: "Queued %{executions} for replay." */
  "executionRuns.replay.queuedMessage": ComplexPhrase<{
    executions: string;
  }>;

  /** English: "None of the %{executions} could be replayed. %{message}" */
  "executionRuns.replay.noneReplayedMessage": ComplexPhrase<{
    executions: string;
    message: string;
  }>;

  /** English: "Queued %{queued} for replay. %{failed} could not be: %{message}" */
  "executionRuns.replay.partialMessage": ComplexPhrase<{
    queued: string;
    failed: string;
    message: string;
  }>;

  /** English: "The executions could not be replayed." */
  "executionRuns.replay.requestRefusedError": SimplePhrase;

  /** English: "This execution could not be replayed." */
  "executionRuns.replay.executionRefusedError": SimplePhrase;

  /** English: "The executions could not be replayed. Please try again." */
  "executionRuns.replay.unreachableError": SimplePhrase;

  /** English: "Select a customer" */
  "executionRuns.filterOptions.customerPlaceholder": SimplePhrase;

  /** English: "Select an instance" */
  "executionRuns.filterOptions.instancePlaceholder": SimplePhrase;

  /** English: "Select an integration" */
  "executionRuns.filterOptions.integrationPlaceholder": SimplePhrase;

  /** English: "Select an instance type" */
  "executionRuns.filterOptions.instanceTypePlaceholder": SimplePhrase;

  /** English: "Select a type" */
  "executionRuns.filterOptions.invokeTypePlaceholder": SimplePhrase;

  /** English: "Select a result" */
  "executionRuns.filterOptions.resultTypePlaceholder": SimplePhrase;

  /** English: "Select a status" */
  "executionRuns.filterOptions.statusPlaceholder": SimplePhrase;

  /** English: "Integration" */
  "executionRuns.instanceType.integrationValue": SimplePhrase;

  /** English: "Workflow" */
  "executionRuns.instanceType.workflowValue": SimplePhrase;

  /** English: "AI Agent" */
  "executionRuns.invokeType.aiAgentValue": SimplePhrase;

  /** English: "Cross Flow" */
  "executionRuns.invokeType.crossFlowValue": SimplePhrase;

  /** English: "Deploy Flow" */
  "executionRuns.invokeType.deployFlowValue": SimplePhrase;

  /** English: "Instance Sync Flow" */
  "executionRuns.invokeType.instanceSyncFlowValue": SimplePhrase;

  /** English: "Integration Endpoint Test" */
  "executionRuns.invokeType.integrationEndpointTestValue": SimplePhrase;

  /** English: "Integration Flow Test" */
  "executionRuns.invokeType.integrationFlowTestValue": SimplePhrase;

  /** English: "Scheduled" */
  "executionRuns.invokeType.scheduledValue": SimplePhrase;

  /** English: "Tear Down Flow" */
  "executionRuns.invokeType.tearDownFlowValue": SimplePhrase;

  /** English: "Webhook" */
  "executionRuns.invokeType.webhookValue": SimplePhrase;

  /** English: "Webhook Snapshot" */
  "executionRuns.invokeType.webhookSnapshotValue": SimplePhrase;

  /** English: "Canceled As Duplicate" */
  "executionRuns.resultType.canceledAsDuplicateValue": SimplePhrase;

  /** English: "Canceled By User" */
  "executionRuns.resultType.canceledByUserValue": SimplePhrase;

  /** English: "Completed" */
  "executionRuns.resultType.completedValue": SimplePhrase;

  /** English: "Error" */
  "executionRuns.resultType.errorValue": SimplePhrase;

  /** English: "Polled No Changes" */
  "executionRuns.resultType.polledNoChangesValue": SimplePhrase;

  /** English: "Canceled" */
  "executionRuns.status.canceledValue": SimplePhrase;

  /** English: "Canceling" */
  "executionRuns.status.cancelingValue": SimplePhrase;

  /** English: "Error" */
  "executionRuns.status.errorValue": SimplePhrase;

  /** English: "Pending" */
  "executionRuns.status.pendingValue": SimplePhrase;

  /** English: "Queued" */
  "executionRuns.status.queuedValue": SimplePhrase;

  /** English: "Success" */
  "executionRuns.status.successValue": SimplePhrase;
}

export const executionRunPhrases: ExecutionRunPhrases = {
  "executionRuns.allCustomersTitle": "All Customer Executions",
  "executionRuns.noExecutionsMessage":
    "No executions in the selected time range.",

  // field names, shared by the table's columns and the query builder's picker
  "executionRuns.field.statusLabel": "Status",
  "executionRuns.field.startedLabel": "Started",
  "executionRuns.field.executionIdLabel": "Execution ID",
  "executionRuns.field.invokeTypeLabel": "Invoke Type",
  "executionRuns.field.resultTypeLabel": "Result Type",
  "executionRuns.field.instanceLabel": "Instance",
  "executionRuns.field.customerLabel": "Customer",
  "executionRuns.field.integrationLabel": "Integration",
  "executionRuns.field.flowLabel": "Flow",
  "executionRuns.field.errorLabel": "Error",
  "executionRuns.field.errorStepLabel": "Error Step",
  "executionRuns.field.durationLabel": "Duration",
  "executionRuns.field.stepsLabel": "Steps",
  "executionRuns.field.triggerPayloadLabel": "Trigger Payload",
  "executionRuns.field.retryAttemptLabel": "Retry Attempt",
  "executionRuns.field.endedLabel": "Ended",
  "executionRuns.field.queuedLabel": "Queued",
  "executionRuns.field.resumedLabel": "Resumed",
  "executionRuns.field.instanceTypeLabel": "Instance Type",
  "executionRuns.field.isReplayLabel": "Is Replay",
  "executionRuns.field.fromPreprocessFlowLabel": "From Preprocess Flow",
  "executionRuns.field.usesBatchingLabel": "Uses Batching",
  "executionRuns.field.invokedByLabel": "Invoked By",
  "executionRuns.field.retryOfExecutionIdLabel": "Retry Of Execution ID",
  "executionRuns.field.instanceIdLabel": "Instance ID",
  "executionRuns.field.customerIdLabel": "Customer ID",
  "executionRuns.field.customerExternalIdLabel": "Customer External ID",
  "executionRuns.field.integrationIdLabel": "Integration ID",
  "executionRuns.field.integrationVersionSequenceIdLabel":
    "Integration Version Sequence ID",
  "executionRuns.field.flowIdLabel": "Flow ID",
  "executionRuns.field.flowStableIdLabel": "Flow Stable ID",
  "executionRuns.field.flowConfigIdLabel": "Flow Config ID",
  "executionRuns.field.typeLabel": "Type",
  "executionRuns.field.resultLabel": "Result",
  "executionRuns.field.isTestExecutionLabel": "Is Test Execution",
  "executionRuns.field.invokedByExecutionIdLabel": "Invoked By Execution ID",
  "executionRuns.field.endedAtLabel": "Ended At",
  "executionRuns.field.queuedAtLabel": "Queued At",
  "executionRuns.field.resumedAtLabel": "Resumed At",

  // table cell values
  "executionRuns.table.yesValue": "Yes",
  "executionRuns.table.noValue": "No",
  "executionRuns.table.runningValue": "Running…",
  "executionRuns.table.queuedValue": "Queued",
  "executionRuns.table.truncatedPrefix": "(truncated) ",
  "executionRuns.table.copiedMessage": "Copied to clipboard",

  // chart
  "executionRuns.chart.collapseButton": "Collapse chart",
  "executionRuns.chart.expandButton": "Expand chart",

  // list
  "executionRuns.list.replayCheckboxLabel": "Select execution for replay",

  // cell menu
  "executionRuns.cellMenu.viewInSidebarOption": "View in sidebar",
  "executionRuns.cellMenu.copyValueOption": "Copy value",
  "executionRuns.cellMenu.filterByValueOption": "Filter by value",
  "executionRuns.cellMenu.excludeValueOption": "Exclude value",
  "executionRuns.cellMenu.replaceFilterOption": "Replace filter with value",

  // header menu
  "executionRuns.headerMenu.sortAscendingOption": "Sort ascending",
  "executionRuns.headerMenu.sortDescendingOption": "Sort descending",

  // detail sidebar
  "executionRuns.sidebar.closeButton": "Close sidebar",
  "executionRuns.sidebar.rawErrorLabel": "Raw Error",
  "executionRuns.sidebar.copyErrorButton": "Copy the raw error",
  "executionRuns.sidebar.copyPayloadButton": "Copy the trigger payload",
  "executionRuns.sidebar.downloadPayloadButton": "Download trigger payload",
  "executionRuns.sidebar.downloadPayloadTooltip":
    "Download the full trigger payload",
  "executionRuns.sidebar.downloadFailedMessage":
    "Download failed. Please try again.",
  "executionRuns.sidebar.payloadTruncatedMessage":
    "Payload preview truncated. Download to view the full payload.",

  // bulk replay
  "executionRuns.replay.selectedCountText": {
    _: "%{count} selected",
    count: 0,
  },
  "executionRuns.replay.limitText": {
    _: "— Replay is capped at %{limit} executions at once.",
    limit: 0,
  },
  "executionRuns.replay.clearButton": "Clear",
  "executionRuns.replay.replayButton": "Replay",
  "executionRuns.replay.oneExecutionText": "1 execution",
  "executionRuns.replay.executionCountText": {
    _: "%{count} executions",
    count: 0,
  },
  "executionRuns.replay.queuedMessage": {
    _: "Queued %{executions} for replay.",
    executions: "",
  },
  "executionRuns.replay.noneReplayedMessage": {
    _: "None of the %{executions} could be replayed. %{message}",
    executions: "",
    message: "",
  },
  "executionRuns.replay.partialMessage": {
    _: "Queued %{queued} for replay. %{failed} could not be: %{message}",
    queued: "",
    failed: "",
    message: "",
  },
  "executionRuns.replay.requestRefusedError":
    "The executions could not be replayed.",
  "executionRuns.replay.executionRefusedError":
    "This execution could not be replayed.",
  "executionRuns.replay.unreachableError":
    "The executions could not be replayed. Please try again.",

  // filter value option pickers
  "executionRuns.filterOptions.customerPlaceholder": "Select a customer",
  "executionRuns.filterOptions.instancePlaceholder": "Select an instance",
  "executionRuns.filterOptions.integrationPlaceholder": "Select an integration",
  "executionRuns.filterOptions.instanceTypePlaceholder":
    "Select an instance type",
  "executionRuns.filterOptions.invokeTypePlaceholder": "Select a type",
  "executionRuns.filterOptions.resultTypePlaceholder": "Select a result",
  "executionRuns.filterOptions.statusPlaceholder": "Select a status",

  // enum value labels
  "executionRuns.instanceType.integrationValue": "Integration",
  "executionRuns.instanceType.workflowValue": "Workflow",
  "executionRuns.invokeType.aiAgentValue": "AI Agent",
  "executionRuns.invokeType.crossFlowValue": "Cross Flow",
  "executionRuns.invokeType.deployFlowValue": "Deploy Flow",
  "executionRuns.invokeType.instanceSyncFlowValue": "Instance Sync Flow",
  "executionRuns.invokeType.integrationEndpointTestValue":
    "Integration Endpoint Test",
  "executionRuns.invokeType.integrationFlowTestValue": "Integration Flow Test",
  "executionRuns.invokeType.scheduledValue": "Scheduled",
  "executionRuns.invokeType.tearDownFlowValue": "Tear Down Flow",
  "executionRuns.invokeType.webhookValue": "Webhook",
  "executionRuns.invokeType.webhookSnapshotValue": "Webhook Snapshot",
  "executionRuns.resultType.canceledAsDuplicateValue": "Canceled As Duplicate",
  "executionRuns.resultType.canceledByUserValue": "Canceled By User",
  "executionRuns.resultType.completedValue": "Completed",
  "executionRuns.resultType.errorValue": "Error",
  "executionRuns.resultType.polledNoChangesValue": "Polled No Changes",
  "executionRuns.status.canceledValue": "Canceled",
  "executionRuns.status.cancelingValue": "Canceling",
  "executionRuns.status.errorValue": "Error",
  "executionRuns.status.pendingValue": "Pending",
  "executionRuns.status.queuedValue": "Queued",
  "executionRuns.status.successValue": "Success",
};
