import type { ComplexPhrase, SimplePhrase } from "../../types";

export interface ExecutionDetailPhrases {
  /** English: "Execution actions" */
  "executionDetail.actions.menuLabel": SimplePhrase;

  /** English: "Replay Execution" */
  "executionDetail.actions.replayExecutionOption": SimplePhrase;

  /** English: "Replay Batch" */
  "executionDetail.actions.replayBatchOption": SimplePhrase;

  /** English: "Copy ID" */
  "executionDetail.actions.copyIdOption": SimplePhrase;

  /** English: "Copy URL" */
  "executionDetail.actions.copyUrlOption": SimplePhrase;

  /** English: "Replay execution?" */
  "executionDetail.actions.replayExecutionTitle": SimplePhrase;

  /** English: "Replay batch?" */
  "executionDetail.actions.replayBatchTitle": SimplePhrase;

  /** English: "Replay this execution's trigger payload using the instance's currently deployed %{integrationSingularLower} version." */
  "executionDetail.actions.replayExecutionMessage": ComplexPhrase<{
    integrationSingularLower: string;
  }>;

  /** English: "Replay this batch as a standalone execution using the instance's currently deployed %{integrationSingularLower} version." */
  "executionDetail.actions.replayBatchMessage": ComplexPhrase<{
    integrationSingularLower: string;
  }>;

  /** English: "Code-Native" */
  "executionDetail.kind.codeNativeValue": SimplePhrase;

  /** English: "Low-Code" */
  "executionDetail.kind.lowCodeValue": SimplePhrase;

  /** English: "Section" */
  "executionDetail.kind.sectionName": SimplePhrase;

  /** English: "Sections" */
  "executionDetail.kind.sectionNamePlural": SimplePhrase;

  /** English: "Step Result" */
  "executionDetail.kind.stepResultName": SimplePhrase;

  /** English: "Step Results" */
  "executionDetail.kind.stepResultNamePlural": SimplePhrase;

  /** English: "Step" */
  "executionDetail.kind.stepName": SimplePhrase;

  /** English: "Steps" */
  "executionDetail.kind.stepNamePlural": SimplePhrase;

  /** English: "Replay of Execution" */
  "executionDetail.replayOrigin.executionLabel": SimplePhrase;

  /** English: "Replay of Batch" */
  "executionDetail.replayOrigin.batchLabel": SimplePhrase;

  /** English: "Initial Execution" */
  "executionDetail.replayOrigin.initialExecutionLabel": SimplePhrase;

  /** English: "Original Execution" */
  "executionDetail.originalExecutionTitle": SimplePhrase;

  /** English: "Execution Replays" */
  "executionDetail.executionReplaysTitle": SimplePhrase;

  /** English: "Batch Replays" */
  "executionDetail.batchReplaysTitle": SimplePhrase;

  /** English: "This execution invoked no other executions." */
  "executionDetail.linkedExecutions.noInvokedMessage": SimplePhrase;

  /** English: "Trace" */
  "executionDetail.trace.title": SimplePhrase;

  /** English: "Step span" */
  "executionDetail.trace.legend.stepSpanLabel": SimplePhrase;

  /** English: "Failed step" */
  "executionDetail.trace.legend.failedStepLabel": SimplePhrase;

  /** English: "Loop iterations (aggregated)" */
  "executionDetail.trace.legend.loopIterationsLabel": SimplePhrase;

  /** English: "Lifecycle event" */
  "executionDetail.eventKind.lifecycleValue": SimplePhrase;

  /** English: "Log" */
  "executionDetail.eventKind.logValue": SimplePhrase;

  /** English: "Step result" */
  "executionDetail.eventKind.stepResultValue": SimplePhrase;

  /** English: "Trigger payload" */
  "executionDetail.eventKind.triggerPayloadValue": SimplePhrase;

  /** English: "Event types" */
  "executionDetail.eventType.title": SimplePhrase;

  /** English: "Lifecycle events" */
  "executionDetail.eventType.lifecycleEventsLabel": SimplePhrase;

  /** English: "Batches" */
  "executionDetail.batches.title": SimplePhrase;

  /** English: "No batches have run for this execution." */
  "executionDetail.batches.noBatchesMessage": SimplePhrase;

  /** English: "No batches have succeeded for this execution." */
  "executionDetail.batches.noSucceededBatchesMessage": SimplePhrase;

  /** English: "No batches have failed for this execution." */
  "executionDetail.batches.noFailedBatchesMessage": SimplePhrase;

  /** English: "Select batch for replay" */
  "executionDetail.batches.replayCheckboxLabel": SimplePhrase;

  /** English: "— Replay is capped at %{limit} batches at once." */
  "executionDetail.batches.replayLimitText": ComplexPhrase<{ limit: number }>;

  /** English: "All batches" */
  "executionDetail.batches.allBatchesOption": SimplePhrase;

  /** English: "Loading…" */
  "executionDetail.batches.loadingOption": SimplePhrase;

  /** English: "Batch %{index} · %{startTime}" */
  "executionDetail.batches.batchOption": ComplexPhrase<{
    index: number;
    startTime: string;
  }>;

  /** English: "Batch ID" */
  "executionDetail.batches.field.batchIdLabel": SimplePhrase;

  /** English: "Role" */
  "executionDetail.batches.field.roleLabel": SimplePhrase;

  /** English: "Records" */
  "executionDetail.batches.field.recordsLabel": SimplePhrase;

  /** English: "Completed" */
  "executionDetail.batches.field.completedLabel": SimplePhrase;

  /** English: "Processing" */
  "executionDetail.batches.role.processingValue": SimplePhrase;

  /** English: "Discovery" */
  "executionDetail.batches.role.discoveryValue": SimplePhrase;

  /** English: "Completed" */
  "executionDetail.batches.outcome.completedValue": SimplePhrase;

  /** English: "Failed" */
  "executionDetail.batches.outcome.failedValue": SimplePhrase;

  /** English: "Running" */
  "executionDetail.batches.outcome.runningValue": SimplePhrase;

  /** English: "Queued" */
  "executionDetail.batches.outcome.queuedValue": SimplePhrase;

  /** English: "1 batch" */
  "executionDetail.batches.replay.oneBatchText": SimplePhrase;

  /** English: "%{count} batches" */
  "executionDetail.batches.replay.batchCountText": ComplexPhrase<{
    count: number;
  }>;

  /** English: "Queued %{batches} for replay." */
  "executionDetail.batches.replay.queuedMessage": ComplexPhrase<{
    batches: string;
  }>;

  /** English: "None of the %{batches} could be replayed. %{message}" */
  "executionDetail.batches.replay.noneReplayedMessage": ComplexPhrase<{
    batches: string;
    message: string;
  }>;

  /** English: "Queued %{queued} for replay. %{failed} could not be: %{message}" */
  "executionDetail.batches.replay.partialMessage": ComplexPhrase<{
    queued: string;
    failed: string;
    message: string;
  }>;

  /** English: "The batches could not be replayed." */
  "executionDetail.batches.replay.requestRefusedError": SimplePhrase;

  /** English: "This batch could not be replayed." */
  "executionDetail.batches.replay.batchRefusedError": SimplePhrase;

  /** English: "Canceling batch processing. Batches already running will finish." */
  "executionDetail.batchProgress.cancelingMessage": SimplePhrase;

  /** English: "Cancel processing" */
  "executionDetail.batchProgress.cancelButton": SimplePhrase;

  /** English: "Canceling…" */
  "executionDetail.batchProgress.cancelingButton": SimplePhrase;

  /** English: "Cancel batch processing?" */
  "executionDetail.batchProgress.cancelTitle": SimplePhrase;

  /** English: "Stops queued batches from running. Batches already in flight will finish on their own; their results are kept. This cannot be undone." */
  "executionDetail.batchProgress.cancelMessage": SimplePhrase;

  /** English: "Keep processing" */
  "executionDetail.batchProgress.keepProcessingButton": SimplePhrase;

  /** English: "Processed" */
  "executionDetail.batchProgress.processedLabel": SimplePhrase;

  /** English: "Progress" */
  "executionDetail.batchProgress.progressLabel": SimplePhrase;

  /** English: "Discovering..." */
  "executionDetail.batchProgress.discoveringValue": SimplePhrase;

  /** English: "Trigger resolver is still discovering batches; counts will grow." */
  "executionDetail.batchProgress.discoveringTooltip": SimplePhrase;

  /** English: "%{count} done so far" */
  "executionDetail.batchProgress.doneSoFarText": ComplexPhrase<{
    count: string;
  }>;

  /** English: "%{count} succeeded" */
  "executionDetail.batchProgress.succeededText": ComplexPhrase<{
    count: string;
  }>;

  /** English: "%{count} success" */
  "executionDetail.batchProgress.successText": ComplexPhrase<{
    count: string;
  }>;

  /** English: "%{count} failed" */
  "executionDetail.batchProgress.failedText": ComplexPhrase<{ count: string }>;

  /** English: "%{count} canceled" */
  "executionDetail.batchProgress.canceledText": ComplexPhrase<{
    count: string;
  }>;

  /** English: "%{count} running" */
  "executionDetail.batchProgress.runningText": ComplexPhrase<{
    count: string;
  }>;

  /** English: "%{count} queued" */
  "executionDetail.batchProgress.queuedText": ComplexPhrase<{ count: string }>;

  /** English: "1 record ea." */
  "executionDetail.batchProgress.singularRecordsChip": SimplePhrase;

  /** English: "%{size} / batch" */
  "executionDetail.batchProgress.batchSizeChip": ComplexPhrase<{
    size: number;
  }>;

  /** English: "Loop breadcrumb" */
  "executionDetail.timeline.loopBreadcrumbLabel": SimplePhrase;

  /** English: "%{stepLabel} · %{iteration} of %{iterationCount}" */
  "executionDetail.timeline.loopLevelText": ComplexPhrase<{
    stepLabel: string;
    iteration: number;
    iterationCount: string;
  }>;

  /** English: "Show the whole timeline" */
  "executionDetail.timeline.showTimelineLabel": SimplePhrase;

  /** English: "Show %{label}" */
  "executionDetail.timeline.showColumnLabel": ComplexPhrase<{ label: string }>;

  /** English: "No events matched the selected event types." */
  "executionDetail.timeline.noMatchingEventsMessage": SimplePhrase;

  /** English: "Select an event to read its detail." */
  "executionDetail.timeline.selectEventMessage": SimplePhrase;

  /** English: "%{logType} log" */
  "executionDetail.timeline.typedLogLabel": ComplexPhrase<{ logType: string }>;

  /** English: "%{count} iterations" */
  "executionDetail.timeline.iterationCountText": ComplexPhrase<{
    count: string;
  }>;

  /** English: "Iteration" */
  "executionDetail.timeline.iterationLabel": SimplePhrase;

  /** English: "iteration %{iteration}" */
  "executionDetail.timeline.iterationText": ComplexPhrase<{
    iteration: string;
  }>;

  /** English: "of %{count} iterations" */
  "executionDetail.timeline.ofIterationsText": ComplexPhrase<{
    count: string;
  }>;

  /** English: "Showing the first %{loaded} of %{total} events in %{iteration}." */
  "executionDetail.timeline.showingFirstEventsText": ComplexPhrase<{
    loaded: string;
    total: string;
    iteration: string;
  }>;

  /** English: "No logs were emitted in %{iteration}." */
  "executionDetail.timeline.noIterationLogsText": ComplexPhrase<{
    iteration: string;
  }>;

  /** English: "Step results were not recorded for this iteration. A loop records step results for its first iterations only. When an outer loop goes past that limit, it stops recording step results for every step inside it. The logs below are always recorded." */
  "executionDetail.timeline.noIterationStepsText": SimplePhrase;

  /** English: "Every log from this iteration, including any loop nested inside it." */
  "executionDetail.timeline.iterationLogsText": SimplePhrase;

  /** English: "This loop ran before iteration counts were recorded, so its iterations cannot be listed. Re-run the integration to inspect them." */
  "executionDetail.timeline.noIterationCountText": SimplePhrase;

  /** English: "This loop received an empty collection and ran no iterations." */
  "executionDetail.timeline.emptyLoopText": SimplePhrase;

  /** English: "Download %{label} step result" */
  "executionDetail.timeline.downloadStepResultLabel": ComplexPhrase<{
    label: string;
  }>;

  /** English: "Download %{label} %{noun}" */
  "executionDetail.timeline.downloadContentLabel": ComplexPhrase<{
    label: string;
    noun: string;
  }>;

  /** English: "Data" */
  "executionDetail.timeline.content.dataHeading": SimplePhrase;

  /** English: "data" */
  "executionDetail.timeline.content.dataNoun": SimplePhrase;

  /** English: "payload" */
  "executionDetail.timeline.content.payloadNoun": SimplePhrase;

  /** English: "step result" */
  "executionDetail.timeline.content.stepResultNoun": SimplePhrase;

  /** English: "Jump to failure" */
  "executionDetail.timeline.jumpToFailureButton": SimplePhrase;

  /** English: "Failed at %{stepName}" */
  "executionDetail.timeline.failedAtText": ComplexPhrase<{ stepName: string }>;

  /** English: "This execution failed" */
  "executionDetail.timeline.executionFailedText": SimplePhrase;

  /** English: "Inside loop" */
  "executionDetail.timeline.insideLoopLabel": SimplePhrase;

  /** English: "Lifecycle event · %{timing}" */
  "executionDetail.timeline.lifecycleSubtitle": ComplexPhrase<{
    timing: string;
  }>;

  /** English: "%{sectionName} · %{duration}" */
  "executionDetail.timeline.sectionSubtitle": ComplexPhrase<{
    sectionName: string;
    duration: string;
  }>;

  /** English: "Step results inside of a loop cannot be previewed. Download the step result to review it." */
  "executionDetail.timeline.loopStepResultNoteText": SimplePhrase;

  /** English: "This %{noun} is too large to preview. Download the %{noun} to review it." */
  "executionDetail.timeline.tooLargeText": ComplexPhrase<{ noun: string }>;

  /** English: "Collapse all" */
  "executionDetail.timeline.collapseAllButton": SimplePhrase;

  /** English: "Expand all" */
  "executionDetail.timeline.expandAllButton": SimplePhrase;

  /** English: "Copy the %{noun}" */
  "executionDetail.timeline.copyContentLabel": ComplexPhrase<{ noun: string }>;

  /** English: "Showing the first %{loaded} of %{total} logs." */
  "executionDetail.timeline.showingFirstLogsText": ComplexPhrase<{
    loaded: string;
    total: string;
  }>;

  /** English: "Copy payload" */
  "executionDetail.events.copyPayloadButton": SimplePhrase;

  /** English: "Copy %{title}" */
  "executionDetail.events.copyTextLabel": ComplexPhrase<{ title: string }>;

  /** English: "This payload is too large to preview. Download the payload to review it." */
  "executionDetail.events.payloadTooLargeText": SimplePhrase;

  /** English: "No payload preview is available for this event." */
  "executionDetail.events.noPayloadPreviewText": SimplePhrase;

  /** English: "This payload cannot be previewed. Download the payload to review it." */
  "executionDetail.events.payloadNotPreviewableText": SimplePhrase;

  /** English: "No payload was stored for this event." */
  "executionDetail.events.noStoredPayloadText": SimplePhrase;

  /** English: "Select an event type to see events." */
  "executionDetail.events.selectEventTypeMessage": SimplePhrase;

  /** English: "No events match the filters." */
  "executionDetail.events.noMatchingEventsMessage": SimplePhrase;

  /** English: "No events were recorded for this execution." */
  "executionDetail.events.noEventsMessage": SimplePhrase;

  /** English: "Event fields" */
  "executionDetail.events.eventFieldsGroupLabel": SimplePhrase;

  /** English: "Payload keys" */
  "executionDetail.events.payloadKeysGroupLabel": SimplePhrase;

  /** English: "Severity" */
  "executionDetail.field.severityLabel": SimplePhrase;

  /** English: "Event Type" */
  "executionDetail.field.eventTypeLabel": SimplePhrase;

  /** English: "Log Type" */
  "executionDetail.field.logTypeLabel": SimplePhrase;

  /** English: "Lifecycle Type" */
  "executionDetail.field.lifecycleTypeLabel": SimplePhrase;

  /** English: "Step Name" */
  "executionDetail.field.stepNameLabel": SimplePhrase;

  /** English: "Step Stable Key" */
  "executionDetail.field.stepStableKeyLabel": SimplePhrase;

  /** English: "Section" */
  "executionDetail.field.sectionLabel": SimplePhrase;

  /** English: "Section Event" */
  "executionDetail.field.sectionEventLabel": SimplePhrase;

  /** English: "Section ID" */
  "executionDetail.field.sectionIdLabel": SimplePhrase;

  /** English: "Warning" */
  "executionDetail.field.warningLabel": SimplePhrase;

  /** English: "Has Error" */
  "executionDetail.field.hasErrorLabel": SimplePhrase;

  /** English: "Branch" */
  "executionDetail.field.branchLabel": SimplePhrase;

  /** English: "Branch Path" */
  "executionDetail.field.branchPathLabel": SimplePhrase;

  /** English: "Loop Path" */
  "executionDetail.field.loopPathLabel": SimplePhrase;

  /** English: "Loop Step" */
  "executionDetail.field.loopStepLabel": SimplePhrase;

  /** English: "Loop Iteration" */
  "executionDetail.field.loopIterationLabel": SimplePhrase;

  /** English: "Is Loop Step" */
  "executionDetail.field.isLoopStepLabel": SimplePhrase;

  /** English: "Loop Iterations" */
  "executionDetail.field.loopIterationsLabel": SimplePhrase;

  /** English: "Is Root Result" */
  "executionDetail.field.isRootResultLabel": SimplePhrase;

  /** English: "Scoped Config Variable ID" */
  "executionDetail.field.scopedConfigVariableIdLabel": SimplePhrase;

  /** English: "Customer Config Variable ID" */
  "executionDetail.field.customerConfigVariableIdLabel": SimplePhrase;

  /** English: "Batch Role" */
  "executionDetail.field.batchRoleLabel": SimplePhrase;

  /** English: "Discovered By" */
  "executionDetail.field.discoveredByLabel": SimplePhrase;
}

export const executionDetailPhrases: ExecutionDetailPhrases = {
  "executionDetail.actions.menuLabel": "Execution actions",
  "executionDetail.actions.replayExecutionOption": "Replay Execution",
  "executionDetail.actions.replayBatchOption": "Replay Batch",
  "executionDetail.actions.copyIdOption": "Copy ID",
  "executionDetail.actions.copyUrlOption": "Copy URL",
  "executionDetail.actions.replayExecutionTitle": "Replay execution?",
  "executionDetail.actions.replayBatchTitle": "Replay batch?",
  "executionDetail.actions.replayExecutionMessage": {
    _: "Replay this execution's trigger payload using the instance's currently deployed %{integrationSingularLower} version.",
    integrationSingularLower: "integration",
  },
  "executionDetail.actions.replayBatchMessage": {
    _: "Replay this batch as a standalone execution using the instance's currently deployed %{integrationSingularLower} version.",
    integrationSingularLower: "integration",
  },
  "executionDetail.kind.codeNativeValue": "Code-Native",
  "executionDetail.kind.lowCodeValue": "Low-Code",
  "executionDetail.kind.sectionName": "Section",
  "executionDetail.kind.sectionNamePlural": "Sections",
  "executionDetail.kind.stepResultName": "Step Result",
  "executionDetail.kind.stepResultNamePlural": "Step Results",
  "executionDetail.kind.stepName": "Step",
  "executionDetail.kind.stepNamePlural": "Steps",
  "executionDetail.replayOrigin.executionLabel": "Replay of Execution",
  "executionDetail.replayOrigin.batchLabel": "Replay of Batch",
  "executionDetail.replayOrigin.initialExecutionLabel": "Initial Execution",
  "executionDetail.originalExecutionTitle": "Original Execution",
  "executionDetail.executionReplaysTitle": "Execution Replays",
  "executionDetail.batchReplaysTitle": "Batch Replays",
  "executionDetail.linkedExecutions.noInvokedMessage":
    "This execution invoked no other executions.",
  "executionDetail.trace.title": "Trace",
  "executionDetail.trace.legend.stepSpanLabel": "Step span",
  "executionDetail.trace.legend.failedStepLabel": "Failed step",
  "executionDetail.trace.legend.loopIterationsLabel":
    "Loop iterations (aggregated)",
  "executionDetail.eventKind.lifecycleValue": "Lifecycle event",
  "executionDetail.eventKind.logValue": "Log",
  "executionDetail.eventKind.stepResultValue": "Step result",
  "executionDetail.eventKind.triggerPayloadValue": "Trigger payload",
  "executionDetail.eventType.title": "Event types",
  "executionDetail.eventType.lifecycleEventsLabel": "Lifecycle events",
  "executionDetail.batches.title": "Batches",
  "executionDetail.batches.noBatchesMessage":
    "No batches have run for this execution.",
  "executionDetail.batches.noSucceededBatchesMessage":
    "No batches have succeeded for this execution.",
  "executionDetail.batches.noFailedBatchesMessage":
    "No batches have failed for this execution.",
  "executionDetail.batches.replayCheckboxLabel": "Select batch for replay",
  "executionDetail.batches.replayLimitText": {
    _: "— Replay is capped at %{limit} batches at once.",
    limit: 0,
  },
  "executionDetail.batches.allBatchesOption": "All batches",
  "executionDetail.batches.loadingOption": "Loading…",
  "executionDetail.batches.batchOption": {
    _: "Batch %{index} · %{startTime}",
    index: 0,
    startTime: "",
  },
  "executionDetail.batches.field.batchIdLabel": "Batch ID",
  "executionDetail.batches.field.roleLabel": "Role",
  "executionDetail.batches.field.recordsLabel": "Records",
  "executionDetail.batches.field.completedLabel": "Completed",
  "executionDetail.batches.role.processingValue": "Processing",
  "executionDetail.batches.role.discoveryValue": "Discovery",
  "executionDetail.batches.outcome.completedValue": "Completed",
  "executionDetail.batches.outcome.failedValue": "Failed",
  "executionDetail.batches.outcome.runningValue": "Running",
  "executionDetail.batches.outcome.queuedValue": "Queued",
  "executionDetail.batches.replay.oneBatchText": "1 batch",
  "executionDetail.batches.replay.batchCountText": {
    _: "%{count} batches",
    count: 0,
  },
  "executionDetail.batches.replay.queuedMessage": {
    _: "Queued %{batches} for replay.",
    batches: "",
  },
  "executionDetail.batches.replay.noneReplayedMessage": {
    _: "None of the %{batches} could be replayed. %{message}",
    batches: "",
    message: "",
  },
  "executionDetail.batches.replay.partialMessage": {
    _: "Queued %{queued} for replay. %{failed} could not be: %{message}",
    queued: "",
    failed: "",
    message: "",
  },
  "executionDetail.batches.replay.requestRefusedError":
    "The batches could not be replayed.",
  "executionDetail.batches.replay.batchRefusedError":
    "This batch could not be replayed.",
  "executionDetail.batchProgress.cancelingMessage":
    "Canceling batch processing. Batches already running will finish.",
  "executionDetail.batchProgress.cancelButton": "Cancel processing",
  "executionDetail.batchProgress.cancelingButton": "Canceling…",
  "executionDetail.batchProgress.cancelTitle": "Cancel batch processing?",
  "executionDetail.batchProgress.cancelMessage":
    "Stops queued batches from running. Batches already in flight will finish on their own; their results are kept. This cannot be undone.",
  "executionDetail.batchProgress.keepProcessingButton": "Keep processing",
  "executionDetail.batchProgress.processedLabel": "Processed",
  "executionDetail.batchProgress.progressLabel": "Progress",
  "executionDetail.batchProgress.discoveringValue": "Discovering...",
  "executionDetail.batchProgress.discoveringTooltip":
    "Trigger resolver is still discovering batches; counts will grow.",
  "executionDetail.batchProgress.doneSoFarText": {
    _: "%{count} done so far",
    count: "",
  },
  "executionDetail.batchProgress.succeededText": {
    _: "%{count} succeeded",
    count: "",
  },
  "executionDetail.batchProgress.successText": {
    _: "%{count} success",
    count: "",
  },
  "executionDetail.batchProgress.failedText": {
    _: "%{count} failed",
    count: "",
  },
  "executionDetail.batchProgress.canceledText": {
    _: "%{count} canceled",
    count: "",
  },
  "executionDetail.batchProgress.runningText": {
    _: "%{count} running",
    count: "",
  },
  "executionDetail.batchProgress.queuedText": {
    _: "%{count} queued",
    count: "",
  },
  "executionDetail.batchProgress.singularRecordsChip": "1 record ea.",
  "executionDetail.batchProgress.batchSizeChip": {
    _: "%{size} / batch",
    size: 0,
  },
  "executionDetail.timeline.loopBreadcrumbLabel": "Loop breadcrumb",
  "executionDetail.timeline.loopLevelText": {
    _: "%{stepLabel} · %{iteration} of %{iterationCount}",
    stepLabel: "",
    iteration: 0,
    iterationCount: "",
  },
  "executionDetail.timeline.showTimelineLabel": "Show the whole timeline",
  "executionDetail.timeline.showColumnLabel": {
    _: "Show %{label}",
    label: "",
  },
  "executionDetail.timeline.noMatchingEventsMessage":
    "No events matched the selected event types.",
  "executionDetail.timeline.selectEventMessage":
    "Select an event to read its detail.",
  "executionDetail.timeline.typedLogLabel": {
    _: "%{logType} log",
    logType: "",
  },
  "executionDetail.timeline.iterationCountText": {
    _: "%{count} iterations",
    count: "",
  },
  "executionDetail.timeline.iterationLabel": "Iteration",
  "executionDetail.timeline.iterationText": {
    _: "iteration %{iteration}",
    iteration: "",
  },
  "executionDetail.timeline.ofIterationsText": {
    _: "of %{count} iterations",
    count: "",
  },
  "executionDetail.timeline.showingFirstEventsText": {
    _: "Showing the first %{loaded} of %{total} events in %{iteration}.",
    loaded: "",
    total: "",
    iteration: "",
  },
  "executionDetail.timeline.noIterationLogsText": {
    _: "No logs were emitted in %{iteration}.",
    iteration: "",
  },
  "executionDetail.timeline.noIterationStepsText":
    "Step results were not recorded for this iteration. A loop records step results for its first iterations only. When an outer loop goes past that limit, it stops recording step results for every step inside it. The logs below are always recorded.",
  "executionDetail.timeline.iterationLogsText":
    "Every log from this iteration, including any loop nested inside it.",
  "executionDetail.timeline.noIterationCountText":
    "This loop ran before iteration counts were recorded, so its iterations cannot be listed. Re-run the integration to inspect them.",
  "executionDetail.timeline.emptyLoopText":
    "This loop received an empty collection and ran no iterations.",
  "executionDetail.timeline.downloadStepResultLabel": {
    _: "Download %{label} step result",
    label: "",
  },
  "executionDetail.timeline.downloadContentLabel": {
    _: "Download %{label} %{noun}",
    label: "",
    noun: "",
  },
  "executionDetail.timeline.content.dataHeading": "Data",
  "executionDetail.timeline.content.dataNoun": "data",
  "executionDetail.timeline.content.payloadNoun": "payload",
  "executionDetail.timeline.content.stepResultNoun": "step result",
  "executionDetail.timeline.jumpToFailureButton": "Jump to failure",
  "executionDetail.timeline.failedAtText": {
    _: "Failed at %{stepName}",
    stepName: "",
  },
  "executionDetail.timeline.executionFailedText": "This execution failed",
  "executionDetail.timeline.insideLoopLabel": "Inside loop",
  "executionDetail.timeline.lifecycleSubtitle": {
    _: "Lifecycle event · %{timing}",
    timing: "",
  },
  "executionDetail.timeline.sectionSubtitle": {
    _: "%{sectionName} · %{duration}",
    sectionName: "",
    duration: "",
  },
  "executionDetail.timeline.loopStepResultNoteText":
    "Step results inside of a loop cannot be previewed. Download the step result to review it.",
  "executionDetail.timeline.tooLargeText": {
    _: "This %{noun} is too large to preview. Download the %{noun} to review it.",
    noun: "",
  },
  "executionDetail.timeline.collapseAllButton": "Collapse all",
  "executionDetail.timeline.expandAllButton": "Expand all",
  "executionDetail.timeline.copyContentLabel": {
    _: "Copy the %{noun}",
    noun: "",
  },
  "executionDetail.timeline.showingFirstLogsText": {
    _: "Showing the first %{loaded} of %{total} logs.",
    loaded: "",
    total: "",
  },
  "executionDetail.events.copyPayloadButton": "Copy payload",
  "executionDetail.events.copyTextLabel": { _: "Copy %{title}", title: "" },
  "executionDetail.events.payloadTooLargeText":
    "This payload is too large to preview. Download the payload to review it.",
  "executionDetail.events.noPayloadPreviewText":
    "No payload preview is available for this event.",
  "executionDetail.events.payloadNotPreviewableText":
    "This payload cannot be previewed. Download the payload to review it.",
  "executionDetail.events.noStoredPayloadText":
    "No payload was stored for this event.",
  "executionDetail.events.selectEventTypeMessage":
    "Select an event type to see events.",
  "executionDetail.events.noMatchingEventsMessage":
    "No events match the filters.",
  "executionDetail.events.noEventsMessage":
    "No events were recorded for this execution.",
  "executionDetail.events.eventFieldsGroupLabel": "Event fields",
  "executionDetail.events.payloadKeysGroupLabel": "Payload keys",
  "executionDetail.field.severityLabel": "Severity",
  "executionDetail.field.eventTypeLabel": "Event Type",
  "executionDetail.field.logTypeLabel": "Log Type",
  "executionDetail.field.lifecycleTypeLabel": "Lifecycle Type",
  "executionDetail.field.stepNameLabel": "Step Name",
  "executionDetail.field.stepStableKeyLabel": "Step Stable Key",
  "executionDetail.field.sectionLabel": "Section",
  "executionDetail.field.sectionEventLabel": "Section Event",
  "executionDetail.field.sectionIdLabel": "Section ID",
  "executionDetail.field.warningLabel": "Warning",
  "executionDetail.field.hasErrorLabel": "Has Error",
  "executionDetail.field.branchLabel": "Branch",
  "executionDetail.field.branchPathLabel": "Branch Path",
  "executionDetail.field.loopPathLabel": "Loop Path",
  "executionDetail.field.loopStepLabel": "Loop Step",
  "executionDetail.field.loopIterationLabel": "Loop Iteration",
  "executionDetail.field.isLoopStepLabel": "Is Loop Step",
  "executionDetail.field.loopIterationsLabel": "Loop Iterations",
  "executionDetail.field.isRootResultLabel": "Is Root Result",
  "executionDetail.field.scopedConfigVariableIdLabel":
    "Scoped Config Variable ID",
  "executionDetail.field.customerConfigVariableIdLabel":
    "Customer Config Variable ID",
  "executionDetail.field.batchRoleLabel": "Batch Role",
  "executionDetail.field.discoveredByLabel": "Discovered By",
};
