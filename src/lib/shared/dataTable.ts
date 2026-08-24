import type { ComplexPhrase, SimplePhrase } from "../../types";

export interface DataTablePhrases {
  /** English: "Active Instances" */
  "dataTable.activeInstancesLabel": SimplePhrase;

  /** English: "Category" */
  "dataTable.categoryLabel": SimplePhrase;

  /** English: "Connection" */
  "dataTable.connectionLabel": SimplePhrase;

  /** English: "Type" */
  "dataTable.logTypeLabel": SimplePhrase;

  /** English: "Config Variable" */
  "dataTable.configVariableLabel": SimplePhrase;

  /** English: "Comments" */
  "dataTable.commentsLabel": SimplePhrase;

  /** English: "Customer" */
  "dataTable.customerLabel": SimplePhrase;

  /** English: "Default" */
  "dataTable.defaultLabel": SimplePhrase;

  /** English: "Description" */
  "dataTable.descriptionLabel": SimplePhrase;

  /** English: "Email" */
  "dataTable.emailLabel": SimplePhrase;

  /** English: "Events" */
  "dataTable.eventsLabel": SimplePhrase;

  /** English: "Example" */
  "dataTable.exampleLabel": SimplePhrase;

  /** English: "Flow" */
  "dataTable.flowLabel": SimplePhrase;

  /** English: "Input" */
  "dataTable.inputLabel": SimplePhrase;

  /** English: "Inputs %{count}" */
  "dataTable.inputsText": ComplexPhrase<{
    count: number;
  }>;

  /** English: "Instance" */
  "dataTable.instanceLabel": SimplePhrase;

  /** English: "Integration" */
  "dataTable.integrationLabel":
    | ComplexPhrase<{
        integrationSingular: string;
      }>
    | SimplePhrase;

  /** English: "Labels" */
  "dataTable.labelsLabel": SimplePhrase;

  /** English: "Last run" */
  "dataTable.lastRunLabel": SimplePhrase;

  /** English: "Last triggered" */
  "dataTable.lastTriggeredAtLabel": SimplePhrase;

  /** English: "Message" */
  "dataTable.messageLabel": SimplePhrase;

  /** English: "Name" */
  "dataTable.nameLabel": SimplePhrase;

  /** English: "Role" */
  "dataTable.roleLabel": SimplePhrase;

  /** English: "Required" */
  "dataTable.requiredLabel": SimplePhrase;

  /** English: "Published" */
  "dataTable.publishedLabel": SimplePhrase;

  /** English: "Status" */
  "dataTable.statusLabel": SimplePhrase;

  /** English: "Timestamp" */
  "dataTable.timestampLabel": SimplePhrase;

  /** English: "Triggered" */
  "dataTable.triggeredLabel": SimplePhrase;

  /** English: "Triggers" */
  "dataTable.triggersLabel": SimplePhrase;

  /** English: "Type" */
  "dataTable.typeLabel": SimplePhrase;

  /** English: "Version" */
  "dataTable.versionLabel": SimplePhrase;

  /** English: "User Identifier" */
  "dataTable.userIdentifierLabel": SimplePhrase;

  /** English: "Source" */
  "dataTable.sourceLabel": SimplePhrase;

  /** English: "Columns" */
  "dataTable.columnsButton": SimplePhrase;

  /** English: "Table columns" */
  "dataTable.columnsTitle": SimplePhrase;

  /** English: "Drag between the lists to show or hide, and to reorder" */
  "dataTable.columnsDescription": SimplePhrase;

  /** English: "Done" */
  "dataTable.columnsDoneButton": SimplePhrase;

  /** English: "Drag a column here" */
  "dataTable.columnsEmptyText": SimplePhrase;

  /** English: "Hidden" */
  "dataTable.columnsHiddenLabel": SimplePhrase;

  /** English: "Visible" */
  "dataTable.columnsVisibleLabel": SimplePhrase;

  /** English: "This column can't be removed" */
  "dataTable.columnsLockedText": SimplePhrase;

  /** English: "Hide column" */
  "dataTable.hideColumnOption": SimplePhrase;

  /** English: "Manage columns" */
  "dataTable.manageColumnsOption": SimplePhrase;

  /** English: "%{columnLabel} value options" */
  "dataTable.cellMenuLabel": ComplexPhrase<{
    columnLabel: string;
  }>;

  /** English: "%{columnLabel} column options" */
  "dataTable.headerMenuLabel": ComplexPhrase<{
    columnLabel: string;
  }>;

  /** English: "Hide %{columnLabel}" */
  "dataTable.hideColumnLabel": ComplexPhrase<{
    columnLabel: string;
  }>;

  /** English: "Reorder %{columnLabel}" */
  "dataTable.reorderColumnLabel": ComplexPhrase<{
    columnLabel: string;
  }>;

  /** English: "Resize %{columnLabel}" */
  "dataTable.resizeColumnLabel": ComplexPhrase<{
    columnLabel: string;
  }>;

  /** English: "Show %{columnLabel}" */
  "dataTable.showColumnLabel": ComplexPhrase<{
    columnLabel: string;
  }>;
}

export const dataTablePhrases: DataTablePhrases = {
  "dataTable.activeInstancesLabel": "Active Instances",
  "dataTable.categoryLabel": "Category",
  "dataTable.connectionLabel": "Connection",
  "dataTable.logTypeLabel": "Type",
  "dataTable.commentsLabel": "Comments",
  "dataTable.configVariableLabel": "Config Variable",
  "dataTable.customerLabel": "Customer",
  "dataTable.defaultLabel": "Default",
  "dataTable.descriptionLabel": "Description",
  "dataTable.emailLabel": "Email",
  "dataTable.eventsLabel": "Events",
  "dataTable.exampleLabel": "Example",
  "dataTable.flowLabel": "Flow",
  "dataTable.instanceLabel": "Instance",
  "dataTable.inputLabel": "Input",
  "dataTable.inputsText": { _: "%{count} inputs", count: 0 },
  "dataTable.integrationLabel": {
    _: "%{integrationSingular}",
    integrationSingular: "Integration",
  },
  "dataTable.labelsLabel": "Labels",
  "dataTable.lastTriggeredAtLabel": "Last triggered",
  "dataTable.lastRunLabel": "Last run",
  "dataTable.messageLabel": "Message",
  "dataTable.nameLabel": "Name",
  "dataTable.requiredLabel": "Required",
  "dataTable.roleLabel": "Role",
  "dataTable.publishedLabel": "Published",
  "dataTable.statusLabel": "Status",
  "dataTable.timestampLabel": "Timestamp",
  "dataTable.triggeredLabel": "Triggered",
  "dataTable.triggersLabel": "Triggers",
  "dataTable.typeLabel": "Type",
  "dataTable.versionLabel": "Version",
  "dataTable.userIdentifierLabel": "User Identifier",
  "dataTable.sourceLabel": "Source",

  // configurable table affordances
  "dataTable.columnsButton": "Columns",
  "dataTable.columnsTitle": "Table columns",
  "dataTable.columnsDescription":
    "Drag between the lists to show or hide, and to reorder",
  "dataTable.columnsDoneButton": "Done",
  "dataTable.columnsEmptyText": "Drag a column here",
  "dataTable.columnsHiddenLabel": "Hidden",
  "dataTable.columnsVisibleLabel": "Visible",
  "dataTable.columnsLockedText": "This column can't be removed",
  "dataTable.hideColumnOption": "Hide column",
  "dataTable.manageColumnsOption": "Manage columns",
  "dataTable.cellMenuLabel": {
    _: "%{columnLabel} value options",
    columnLabel: "",
  },
  "dataTable.headerMenuLabel": {
    _: "%{columnLabel} column options",
    columnLabel: "",
  },
  "dataTable.hideColumnLabel": {
    _: "Hide %{columnLabel}",
    columnLabel: "",
  },
  "dataTable.reorderColumnLabel": {
    _: "Reorder %{columnLabel}",
    columnLabel: "",
  },
  "dataTable.resizeColumnLabel": {
    _: "Resize %{columnLabel}",
    columnLabel: "",
  },
  "dataTable.showColumnLabel": {
    _: "Show %{columnLabel}",
    columnLabel: "",
  },
};
