import { SimplePhrase } from "../../types";

export interface FilterPhrases {
  /** English: "Integration Marketplace" */
  "filterBar.breadcrumb.integrationMarketplace": SimplePhrase;

  /** English: "Active Integrations" */
  "filterBar.breadcrumb.activeIntegrations": SimplePhrase;

  /** English: "Instances" */
  "filterBar.breadcrumb.instances": SimplePhrase;

  /** English: "Components" */
  "filterBar.breadcrumb.components": SimplePhrase;

  /** English: "Filter" */
  "filterBar.openFiltersButton": SimplePhrase;

  /** English: "Clear filters" */
  "filterBar.clearFiltersButton": SimplePhrase;

  /** English: "Refresh" */
  "filterBar.refreshButton": SimplePhrase;

  /** English: "Auto-polling is only available with default filters." */
  "filterBar.refreshTooltip": SimplePhrase;

  /** English: "[Empty String]" */
  "filterBar.title": SimplePhrase;

  /** English: "[Empty String]" */
  "filterResults.placeholderCta": SimplePhrase;

  /** English: "[Empty String]" */
  "filterResults.placeholderText": SimplePhrase;

  /** English: "[Empty String]" */
  "filterResults.placeholderTitle": SimplePhrase;

  /** English: "Alert groups" */
  "emptyState.alertGroupsTitle": SimplePhrase;

  /** English: "You likely want to be notified when an instance deployed to a customer does something out of the ordinary (maybe it throws an error because a third-party API is down, or is disabled by a customer unexpectedly)." */
  "emptyState.alertGroupsText": SimplePhrase;

  /** English: "You can create groups of people who should be notified when an alert monitor on an instance is triggered." */
  "emptyState.alertGroupsTextTwo": SimplePhrase;

  /** English: "Learn about alert groups" */
  "emptyState.alertGroupsDocsButton": SimplePhrase;

  /** English: "Alert monitors" */
  "emptyState.alertMonitorsTitle": SimplePhrase;

  /** English: "If an instance encounters an error (maybe a third-party API is down), you probably want to be alerted. You can configure monitoring and alerting rules to notify your team or even customers via text, email, or webhook when certain events occur." */
  "emptyState.alertMonitorsText": SimplePhrase;

  /** English: "Not all alerts are bad - you can also alert people when an instance is enabled, or when it runs successfully." */
  "emptyState.alertMonitorsTextTwo": SimplePhrase;

  /** English: "Here you will see any alerts that have been configured for you integrations." */
  "emptyState.alertMonitorsText--customer": SimplePhrase;

  /** English: "Learn about alert monitors" */
  "emptyState.alertMonitorsDocsButton": SimplePhrase;

  /** English: "Alert webhooks" */
  "emptyState.alertWebhooksTitle": SimplePhrase;

  /** English: "Alert webhooks allow you to send alert notifications to a third-party monitoring system, like PagerDuty, OpsGenie, or Slack, or to a webhook endpoint that you manage." */
  "emptyState.alertWebhooksText": SimplePhrase;

  /** English: "Learn about alert webhooks" */
  "emptyState.alertWebhooksDocsButton": SimplePhrase;

  /** English: "Customer attachments" */
  "emptyState.attachmentsTitle": SimplePhrase;

  /** English: "Attachments are a place to store documents that both customers and your team members can reference." */
  "emptyState.attachmentsText": SimplePhrase;

  /** English: "Organization credential" */
  "emptyState.credentialsTitle": SimplePhrase;

  /** English: "Credentials that are saved at an organization level are either applicable to all of your customers (like a shared API key), or they're used by your team members for testing integrations." */
  "emptyState.credentialsText": SimplePhrase;

  /** English: "Learn About Credentials" */
  "emptyState.credentialsDocsButton": SimplePhrase;

  /** English: "OAuth 2.0 in Prismatic" */
  "emptyState.credentialsDocsButtonTwo": SimplePhrase;

  /** English: "Customer credentials" */
  "emptyState.customerCredentialsTitle": SimplePhrase;

  /** English: "When you deploy an instance of an integration to a customer, that customer's credentials are used to connect to third-party apps and services." */
  "emptyState.customerCredentialsText": SimplePhrase;

  /** English: "Customers" */
  "emptyState.customersTitle": SimplePhrase;

  /** English: "You'll manage your customers here. You can deploy any number of your integrations to each customer, or they can activate integrations themselves through the marketplace." */
  "emptyState.customersText": SimplePhrase;

  /** English: "From each customer record, you can deploy or reconfigure their integrations, review logs, manage their users, and more." */
  "emptyState.customersTextTwo": SimplePhrase;

  /** English: "Learn about customers" */
  "emptyState.customersDocsButton": SimplePhrase;

  /** English: "Customer users" */
  "emptyState.customerUsersTitle": SimplePhrase;

  /** English: "You can invite your customers to log in to Prismatic, so they can manage instances deployed to them and review their own executions and logs." */
  "emptyState.customerUsersText": SimplePhrase;

  /** English: "Note: You do not need to add customer users to Prismatic if your users authenticate through an embedded marketplace." */
  "emptyState.customerUsersTextTwo": SimplePhrase;

  /** English: "Learn about customer users" */
  "emptyState.customerUsersDocsButton": SimplePhrase;

  /** English: "Embedded marketplace user authentication" */
  "emptyState.customerUsersDocsButtonTwo": SimplePhrase;

  /** English: "Instance executions" */
  "emptyState.executionsTitle": SimplePhrase;

  /** English: "Each time an instance of an integration runs, that's called an execution. Execution details are available here." */
  "emptyState.executionsText": SimplePhrase;

  /** English: "You can inspect execution logs and results of each step of the execution, which is useful for support and debugging purposes." */
  "emptyState.executionsTextTwo": SimplePhrase;

  /** English: "Learn about instance executions" */
  "emptyState.executionsDocsButton": SimplePhrase;

  /** English: "Instances" */
  "emptyState.instancesTitle": SimplePhrase;

  /** English: "In Prismatic, integrations are reusable - they can be deployed to multiple customers and configured to behave differently from one customer to the next." */
  "emptyState.instancesText": SimplePhrase;

  /** English: "An instance is an integration that has been deployed to a specific customer using customer-specific configuration." */
  "emptyState.instancesTextTwo": SimplePhrase;

  /** English: "Here you will see any integrations that have been configured in the marketplace or deployed directly to your organization." */
  "emptyState.instancesText--customer": SimplePhrase;

  /** English: "Learn about instances" */
  "emptyState.instancesDocsButton": SimplePhrase;

  /** English: "Integrations" */
  "emptyState.integrationsTitle": SimplePhrase;

  /** English: "Integrations are reusable workflows that connect your product to the other apps and services your customers use." */
  "emptyState.integrationsText": SimplePhrase;

  /** English: "After building an integration, you can deploy it to one or more of your customers, or add it to your marketplace, where customers can activate it themselves." */
  "emptyState.integrationsTextTwo": SimplePhrase;

  /** English: "Learn about integrations" */
  "emptyState.integrationsDocsButton": SimplePhrase;

  /** English: "Integration marketplace" */
  "emptyState.integrationMarketplaceTitle": SimplePhrase;

  /** English: "Your integration marketplace is where your customers go to browse your integration offerings and self-activate the ones they want. It can be white-labeled and embedded in your app to create a native integration experience." */
  "emptyState.integrationMarketplaceText": SimplePhrase;

  /** English: "Here is where you set up which integrations are included in your marketplace and how they appear." */
  "emptyState.integrationMarketplaceTextTwo": SimplePhrase;

  /** English: "The integration marketplace displays integrations that have been enabled or available for configuration." */
  "emptyState.integrationMarketplaceText--customer": SimplePhrase;

  /** English: "Learn about the integration marketplace" */
  "emptyState.integrationMarketplaceDocsButton": SimplePhrase;

  /** English: "Embedding marketplace in your app" */
  "emptyState.integrationMarketplaceDocsButtonTwo": SimplePhrase;

  /** English: "Logs" */
  "emptyState.logsTitle": SimplePhrase;

  /** English: "If actions in your deployed instances generate log messages, you'll find those here." */
  "emptyState.logsText": SimplePhrase;

  /** English: "From this page you can search and filter logs so you can keep tabs on exactly what's going on with your customers' live integrations." */
  "emptyState.logsTextTwo": SimplePhrase;

  /** English: "If actions in your deployed instances generate log messages, you'll find those here." */
  "emptyState.logsText--customer": SimplePhrase;

  /** English: "From this page you can search and filter logs so you can keep tabs on exactly what's going on with your integrations." */
  "emptyState.logsTextTwo--customer": SimplePhrase;

  /** English: "Learn about logs" */
  "emptyState.logsDocsButton": SimplePhrase;

  /** English: "Log streams" */
  "emptyState.logStreamsTitle": SimplePhrase;

  /** English: "Log streams allow you to send Prismatic logs to an external logging service (like DataDog or New Relic) or your own proprietary logging system." */
  "emptyState.logStreamsText": SimplePhrase;

  /** English: "Learn about log streams" */
  "emptyState.logStreamsDocsButton": SimplePhrase;
}

export const filterPhrases: FilterPhrases = {
  // filter bar
  "filterBar.breadcrumb.activeIntegrations": "Active Integrations",
  "filterBar.breadcrumb.instances": "Instances",
  "filterBar.breadcrumb.components": "Components",
  "filterBar.breadcrumb.integrationMarketplace": "Integration Marketplace",
  "filterBar.clearFiltersButton": "Clear filters",
  "filterBar.openFiltersButton": "Filter",
  "filterBar.refreshButton": "Refresh",
  "filterBar.refreshTooltip":
    "Auto-polling is only available with default filters.",
  "filterBar.title": "",

  // filter results
  "filterResults.placeholderCta": "",
  "filterResults.placeholderText": "",
  "filterResults.placeholderTitle": "",

  // alert group empty state
  "emptyState.alertGroupsTitle": "Alert groups",
  "emptyState.alertGroupsText":
    "You likely want to be notified when an instance deployed to a customer does something out of the ordinary (maybe it throws an error because a third-party API is down, or is disabled by a customer unexpectedly).",
  "emptyState.alertGroupsTextTwo":
    "You can create groups of people who should be notified when an alert monitor on an instance is triggered.",
  "emptyState.alertGroupsDocsButton": "Learn about alert groups",

  // alert monitors empty state
  "emptyState.alertMonitorsTitle": "Alert monitors",
  "emptyState.alertMonitorsText":
    "If an instance encounters an error (maybe a third-party API is down), you probably want to be alerted. You can configure monitoring and alerting rules to notify your team or even customers via text, email, or webhook when certain events occur.",
  "emptyState.alertMonitorsTextTwo":
    "Not all alerts are bad - you can also alert people when an instance is enabled, or when it runs successfully.",
  "emptyState.alertMonitorsText--customer":
    "Here you will see any alerts that have been configured for you integrations.",
  "emptyState.alertMonitorsDocsButton": "Learn about alert monitors",

  // alert webhook empty state
  "emptyState.alertWebhooksTitle": "Alert webhooks",
  "emptyState.alertWebhooksText":
    "Alert webhooks allow you to send alert notifications to a third-party monitoring system, like PagerDuty, OpsGenie, or Slack, or to a webhook endpoint that you manage.",
  "emptyState.alertWebhooksDocsButton": "Learn about alert webhooks",

  // attachments empty state
  "emptyState.attachmentsTitle": "Customer attachments",
  "emptyState.attachmentsText":
    "Attachments are a place to store documents that both customers and your team members can reference.",

  // credentials empty state
  "emptyState.credentialsTitle": "Organization credential",
  "emptyState.credentialsText":
    "Credentials that are saved at an organization level are either applicable to all of your customers (like a shared API key), or they're used by your team members for testing integrations.",
  "emptyState.credentialsDocsButton": "Learn About Credentials",
  "emptyState.credentialsDocsButtonTwo": "OAuth 2.0 in Prismatic",

  // customer credentials empty state
  "emptyState.customerCredentialsTitle": "Customer credentials",
  "emptyState.customerCredentialsText":
    "When you deploy an instance of an integration to a customer, that customer's credentials are used to connect to third-party apps and services.",

  // customers empty state
  "emptyState.customersTitle": "Customers",
  "emptyState.customersText":
    "You'll manage your customers here. You can deploy any number of your integrations to each customer, or they can activate integrations themselves through the marketplace.",
  "emptyState.customersTextTwo":
    "From each customer record, you can deploy or reconfigure their integrations, review logs, manage their users, and more.",
  "emptyState.customersDocsButton": "Learn about customers",

  // customer users empty state
  "emptyState.customerUsersTitle": "Customer users",
  "emptyState.customerUsersText":
    "You can invite your customers to log in to Prismatic, so they can manage instances deployed to them and review their own executions and logs.",
  "emptyState.customerUsersTextTwo":
    "Note: You do not need to add customer users to Prismatic if your users authenticate through an embedded marketplace.",
  "emptyState.customerUsersDocsButton": "Learn about customer users",
  "emptyState.customerUsersDocsButtonTwo":
    "Embedded marketplace user authentication",

  // executions empty state
  "emptyState.executionsTitle": "Instance executions",
  "emptyState.executionsText":
    "Each time an instance of an integration runs, that's called an execution. Execution details are available here.",
  "emptyState.executionsTextTwo":
    "You can inspect execution logs and results of each step of the execution, which is useful for support and debugging purposes.",
  "emptyState.executionsDocsButton": "Learn about instance executions",

  // instances empty state
  "emptyState.instancesTitle": "Instances",
  "emptyState.instancesText":
    "In Prismatic, integrations are reusable - they can be deployed to multiple customers and configured to behave differently from one customer to the next.",
  "emptyState.instancesTextTwo":
    "An instance is an integration that has been deployed to a specific customer using customer-specific configuration.",
  "emptyState.instancesText--customer":
    "Here you will see any integrations that have been configured in the marketplace or deployed directly to your organization.",
  "emptyState.instancesDocsButton": "Learn about instances",

  // integrations empty state
  "emptyState.integrationsTitle": "Integrations",
  "emptyState.integrationsText":
    "Integrations are reusable workflows that connect your product to the other apps and services your customers use.",
  "emptyState.integrationsTextTwo":
    "After building an integration, you can deploy it to one or more of your customers, or add it to your marketplace, where customers can activate it themselves.",
  "emptyState.integrationsDocsButton": "Learn about integrations",

  // integration marketplace empty state
  "emptyState.integrationMarketplaceTitle": "Integration marketplace",
  "emptyState.integrationMarketplaceText":
    "Your integration marketplace is where your customers go to browse your integration offerings and self-activate the ones they want. It can be white-labeled and embedded in your app to create a native integration experience.",
  "emptyState.integrationMarketplaceTextTwo":
    "Here is where you set up which integrations are included in your marketplace and how they appear.",
  "emptyState.integrationMarketplaceText--customer":
    "The integration marketplace displays integrations that have been enabled or available for configuration.",
  "emptyState.integrationMarketplaceDocsButton":
    "Learn about the integration marketplace",
  "emptyState.integrationMarketplaceDocsButtonTwo":
    "Embedding marketplace in your app",

  // logs empty state
  "emptyState.logsTitle": "Logs",
  "emptyState.logsText":
    "If actions in your deployed instances generate log messages, you'll find those here.",
  "emptyState.logsTextTwo":
    "From this page you can search and filter logs so you can keep tabs on exactly what's going on with your customers' live integrations.",
  "emptyState.logsText--customer":
    "If actions in your deployed instances generate log messages, you'll find those here.",
  "emptyState.logsTextTwo--customer":
    "From this page you can search and filter logs so you can keep tabs on exactly what's going on with your integrations.",
  "emptyState.logsDocsButton": "Learn about logs",

  // log streams empty state
  "emptyState.logStreamsTitle": "Log streams",
  "emptyState.logStreamsText":
    "Log streams allow you to send Prismatic logs to an external logging service (like DataDog or New Relic) or your own proprietary logging system.",
  "emptyState.logStreamsDocsButton": "Learn about log streams",
};
