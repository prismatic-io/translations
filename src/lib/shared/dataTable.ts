import { ComplexPhrase, SimplePhrase } from "../../types";

export interface DataTablePhrases {
  /** English: "Active Instances" */
  "dataTable.activeInstancesLabel": SimplePhrase;

  /** English: "Category" */
  "dataTable.categoryLabel": SimplePhrase;

  /** English: "Connection" */
  "dataTable.connectionLabel": SimplePhrase;

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

  /** English: "Inputs ${count}" */
  "dataTable.inputsText": ComplexPhrase<{
    count: number;
  }>;

  /** English: "Instance" */
  "dataTable.instanceLabel": SimplePhrase;

  /** English: "Integration" */
  "dataTable.integrationLabel": SimplePhrase;

  /** English: "Labels" */
  "dataTable.labelsLabel": SimplePhrase;

  /** English: "Last triggered" */
  "dataTable.lastTriggeredAtLabel": SimplePhrase;

  /** English: "Message" */
  "dataTable.messageLabel": SimplePhrase;

  /** English: "Name" */
  "dataTable.nameLabel": SimplePhrase;

  /** English: "Required" */
  "dataTable.requiredLabel": SimplePhrase;

  /** English: "Published" */
  "dataTable.publishedLabel": SimplePhrase;

  /** English: "Timestamp" */
  "dataTable.timestampLabel": SimplePhrase;

  /** English: "Triggers" */
  "dataTable.triggersLabel": SimplePhrase;

  /** English: "Type" */
  "dataTable.typeLabel": SimplePhrase;

  /** English: "Version" */
  "dataTable.versionLabel": SimplePhrase;

  /** English: "User Identifier" */
  "dataTable.userIdentifierLabel": SimplePhrase;
}

export const dataTablePhrases: DataTablePhrases = {
  "dataTable.activeInstancesLabel": "Active Instances",
  "dataTable.categoryLabel": "Category",
  "dataTable.connectionLabel": "Connection",
  "dataTable.commentsLabel": "Comments",
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
  "dataTable.integrationLabel": "Integration",
  "dataTable.labelsLabel": "Labels",
  "dataTable.lastTriggeredAtLabel": "Last triggered",
  "dataTable.messageLabel": "Message",
  "dataTable.nameLabel": "Name",
  "dataTable.requiredLabel": "Required",
  "dataTable.publishedLabel": "Published",
  "dataTable.timestampLabel": "Timestamp",
  "dataTable.triggersLabel": "Triggers",
  "dataTable.typeLabel": "Type",
  "dataTable.versionLabel": "Version",
  "dataTable.userIdentifierLabel": "User Identifier",
};
