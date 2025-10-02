import { ComplexPhrase, SimplePhrase } from "../../types";

export interface CustomerConnectionsPhrases {
  /** English: "App" */
  "customerConnections.dataTable.columns.app": SimplePhrase;
  /** English: "Assigned" */
  "customerConnections.dataTable.columns.assigned": SimplePhrase;
  /** English: "Last modified" */
  "customerConnections.dataTable.columns.lastModified": SimplePhrase;
  /** English: "Name" */
  "customerConnections.dataTable.columns.name": SimplePhrase;
  /** English: "Status" */
  "customerConnections.dataTable.columns.status": SimplePhrase;
  /** English: "Delete" */
  "customerConnections.details.actions.delete.label": SimplePhrase;
  /** English: "You must reconfigure all %{integrations} and %{workflows} before deleting a connection" */
  "customerConnections.details.actions.delete.tooltip": ComplexPhrase<{
    integrations: string;
    workflows: string;
  }>;
  /** English: "Inactive versions of %{workflows} or %{integrations} that still reference this connection cannot be re-enabled once the connection is deleted." */
  "customerConnections.details.actions.delete.confirmation.message": ComplexPhrase<{
    integrations: string;
    workflows: string;
  }>;
  /** English: "Delete connection" */
  "customerConnections.details.actions.delete.confirmation.title": SimplePhrase;
  /** English: "Delete" */
  "customerConnections.details.actions.delete.confirmation.submitButton": SimplePhrase;
  /** English: "Disable all" */
  "customerConnections.details.actions.disableAll.label": SimplePhrase;
  /** English: "This will disable all running instances and %{workflows} that depend on this connection" */
  "customerConnections.details.actions.disableAll.confirmation.message": ComplexPhrase<{
    workflows: string;
  }>;
  /** English: "Disconnect from Connection" */
  "customerConnections.details.actions.disconnect.confirmation.title": SimplePhrase;
  /** English: "Disconnecting this connection will apply to all locations using it. This may result in other %{integrations} or %{workflows} not running as expected." */
  "customerConnections.details.actions.disconnect.confirmation.message": ComplexPhrase<{
    integrations: string;
    workflows: string;
  }>;
  /** English: "Rename connection" */
  "customerConnections.details.name.panel.header": SimplePhrase;
  /** English: "Connection name" */
  "customerConnections.details.name.field.label": SimplePhrase;
  /** English: "Configuration" */
  "customerConnections.details.tabs.configuration.label": SimplePhrase;
  /** English: "Warning" */
  "customerConnections.details.tabs.configuration.warning.label": SimplePhrase;
  /** English: "Updates made to this shared connection will be applied to %{usageCount} other locations where it is used" */
  "customerConnections.details.tabs.configuration.warning.message": ComplexPhrase<{
    usageCount: number;
  }>;
  /** English: "Logs" */
  "customerConnections.details.tabs.logs.label": SimplePhrase;
  /** English: "Message" */
  "customerConnections.details.tabs.logs.dataTable.columns.message": SimplePhrase;
  /** English: "Timestamp" */
  "customerConnections.details.tabs.logs.dataTable.columns.timestamp": SimplePhrase;
  /** English: "Usage" */
  "customerConnections.details.tabs.usage.label": SimplePhrase;
  /** English: "Disable" */
  "customerConnections.details.tabs.usage.actions.disable": SimplePhrase;
  /** English: "Reconfigure" */
  "customerConnections.details.tabs.usage.actions.reconfigure": SimplePhrase;
  /** English: "Created on" */
  "customerConnections.details.tabs.usage.dataTable.columns.createdOn": SimplePhrase;
  /** English: "Type" */
  "customerConnections.details.tabs.usage.dataTable.columns.type": SimplePhrase;
  /** English: "Last run" */
  "customerConnections.details.tabs.usage.dataTable.columns.lastRun": SimplePhrase;
  /** English: "Location" */
  "customerConnections.details.tabs.usage.dataTable.columns.location": SimplePhrase;
  /** English: "Status" */
  "customerConnections.details.tabs.usage.dataTable.columns.status": SimplePhrase;
  /** English: "Disabled" */
  "customerConnections.details.tabs.usage.filters.status.options.disabled": SimplePhrase;
  /** English: "Enabled" */
  "customerConnections.details.tabs.usage.filters.status.options.enabled": SimplePhrase;
  /** English: "Paused" */
  "customerConnections.details.tabs.usage.filters.status.options.paused": SimplePhrase;
  /** English: "Running" */
  "customerConnections.details.tabs.usage.filters.status.options.running": SimplePhrase;
  /** English: "App" */
  "customerConnections.filters.app.label": SimplePhrase;
  /** English: "Assigned" */
  "customerConnections.filters.assigned.label": SimplePhrase;
  /** English: "No" */
  "customerConnections.filters.assigned.option.no": SimplePhrase;
  /** English: "Yes" */
  "customerConnections.filters.assigned.option.yes": SimplePhrase;
  /** English: "Status" */
  "customerConnections.filters.status.label": SimplePhrase;
  /** English: "None" */
  "customerConnections.filters.status.option.none": SimplePhrase;
  /** English: "Connected" */
  "customerConnections.filters.status.option.connected": SimplePhrase;
  /** English: "Disconnected" */
  "customerConnections.filters.status.option.disconnected": SimplePhrase;
  /** English: "Error" */
  "customerConnections.filters.status.option.error": SimplePhrase;
  /** English: "Click the add connection button to add a connection." */
  "customerConnections.noResults.message": SimplePhrase;
  /** English: "Connections" */
  "customerConnections.title": SimplePhrase;
}

export const customerConnectionsPhrases: CustomerConnectionsPhrases = {
  "customerConnections.dataTable.columns.app": "App",
  "customerConnections.dataTable.columns.assigned": "Assigned",
  "customerConnections.dataTable.columns.lastModified": "Last modified",
  "customerConnections.dataTable.columns.name": "Name",
  "customerConnections.dataTable.columns.status": "Status",
  "customerConnections.details.actions.delete.label": "Delete",
  "customerConnections.details.actions.delete.tooltip": {
    _: "You must reconfigure all %{integrations} and %{workflows} before deleting a connection",
    integrations: "integrations",
    workflows: "workflows",
  },
  "customerConnections.details.actions.delete.confirmation.title":
    "Delete connection",
  "customerConnections.details.actions.delete.confirmation.submitButton":
    "Delete",
  "customerConnections.details.actions.delete.confirmation.message": {
    _: "Inactive versions of %{workflows} or %{integrations} that still reference this connection cannot be re-enabled once the connection is deleted.",
    integrations: "integrations",
    workflows: "workflows",
  },
  "customerConnections.details.actions.disableAll.confirmation.message": {
    _: "This will disable all running instances and %{workflows} that depend on this connection",
    workflows: "workflows",
  },
  "customerConnections.details.actions.disableAll.label": "Disable all",
  "customerConnections.details.actions.disconnect.confirmation.title":
    "Disconnect from Connection",
  "customerConnections.details.actions.disconnect.confirmation.message": {
    _: "Disconnecting this connection will apply to all locations using it. This may result in other %{integrations} or %{workflows} not running as expected.",
    integrations: "integrations",
    workflows: "workflows",
  },
  "customerConnections.details.name.field.label": "Connection name",
  "customerConnections.details.name.panel.header": "Rename connection",
  "customerConnections.details.tabs.configuration.label": "Configuration",
  "customerConnections.details.tabs.configuration.warning.label": "Warning",
  "customerConnections.details.tabs.configuration.warning.message": {
    _: "Updates made to this shared connection will be applied to %{usageCount} other locations where it is used",
    usageCount: 0,
  },
  "customerConnections.details.tabs.logs.label": "Logs",
  "customerConnections.details.tabs.logs.dataTable.columns.message": "Message",
  "customerConnections.details.tabs.logs.dataTable.columns.timestamp":
    "Timestamp",
  "customerConnections.details.tabs.usage.actions.disable": "Disable",
  "customerConnections.details.tabs.usage.actions.reconfigure": "Reconfigure",
  "customerConnections.details.tabs.usage.dataTable.columns.createdOn":
    "Created on",
  "customerConnections.details.tabs.usage.dataTable.columns.type": "Type",
  "customerConnections.details.tabs.usage.dataTable.columns.lastRun":
    "Last run",
  "customerConnections.details.tabs.usage.dataTable.columns.location":
    "Location",
  "customerConnections.details.tabs.usage.dataTable.columns.status": "Status",
  "customerConnections.details.tabs.usage.filters.status.options.disabled":
    "Disabled",
  "customerConnections.details.tabs.usage.filters.status.options.enabled":
    "Enabled",
  "customerConnections.details.tabs.usage.filters.status.options.paused":
    "Paused",
  "customerConnections.details.tabs.usage.filters.status.options.running":
    "Running",
  "customerConnections.details.tabs.usage.label": "Usage",
  "customerConnections.filters.app.label": "App",
  "customerConnections.filters.assigned.label": "Assigned",
  "customerConnections.filters.assigned.option.no": "No",
  "customerConnections.filters.assigned.option.yes": "Yes",
  "customerConnections.filters.status.label": "Status",
  "customerConnections.filters.status.option.none": "None",
  "customerConnections.filters.status.option.connected": "Connected",
  "customerConnections.filters.status.option.disconnected": "Disconnected",
  "customerConnections.filters.status.option.error": "Error",
  "customerConnections.noResults.message": "No connections exist yet.",
  "customerConnections.title": "Connections",
};
