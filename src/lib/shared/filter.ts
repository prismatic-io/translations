import { ComplexPhrase, SimplePhrase } from "../../types";

export interface FilterPhrases {
  /** English: "Marketplace" */
  "filterBar.breadcrumb.integrationMarketplace":
    | ComplexPhrase<{
        marketplaceSingular: string;
      }>
    | SimplePhrase;

  /** English: "Active %{integrationPlural}" */
  "filterBar.breadcrumb.activeIntegrations":
    | ComplexPhrase<{
        integrationPlural: string;
      }>
    | SimplePhrase;

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

  /** English: "Here you will see any alerts that have been configured for your %{integrationPluralLower}." */
  "emptyState.alertMonitorsText--customer":
    | ComplexPhrase<{
        integrationPluralLower: string;
      }>
    | SimplePhrase;

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

  /** English: "Attachments" */
  "emptyState.attachmentsTitle--embedded": SimplePhrase;

  /** English: "Place to store %{integrationSingularLower} documents that your team members can reference." */
  "emptyState.attachmentsText--embedded":
    | ComplexPhrase<{
        integrationSingularLower: string;
      }>
    | SimplePhrase;

  /** English: "Components" */
  "emptyState.componentsTitle": SimplePhrase;

  /** English: "" */
  "emptyState.componentsText": SimplePhrase;

  /** English: "Components" */
  "emptyState.componentsTitle--embedded": SimplePhrase;

  /** English: "Here you will see any components that have been built specifically for your organization to use in the %{integrationSingular} designer." */
  "emptyState.componentsText--embedded":
    | ComplexPhrase<{
        integrationSingular: string;
      }>
    | SimplePhrase;

  /** English: "Organization credential" */
  "emptyState.credentialsTitle": SimplePhrase;

  /** English: "Credentials that are saved at an organization level are either applicable to all of your customers (like a shared API key), or they're used by your team members for testing %{integrationPlural}." */
  "emptyState.credentialsText":
    | ComplexPhrase<{
        integrationPlural: string;
      }>
    | SimplePhrase;

  /** English: "Learn About Credentials" */
  "emptyState.credentialsDocsButton": SimplePhrase;

  /** English: "OAuth 2.0 in Prismatic" */
  "emptyState.credentialsDocsButtonTwo": SimplePhrase;

  /** English: "Customer credentials" */
  "emptyState.customerCredentialsTitle": SimplePhrase;

  /** English: "When you deploy an instance of %{integrationSingularArticle} %{integrationSingularLower} to a customer, that customer's credentials are used to connect to third-party apps and services." */
  "emptyState.customerCredentialsText":
    | ComplexPhrase<{
        integrationSingularLower: string;
        integrationSingularArticle: string;
      }>
    | SimplePhrase;

  /** English: "Customers" */
  "emptyState.customersTitle": SimplePhrase;

  /** English: "You'll manage your customers here. You can deploy any number of your %{integrationPluralLower} to each customer, or they can activate %{integrationPlural} themselves through the %{marketplaceSingular}." */
  "emptyState.customersText":
    | ComplexPhrase<{
        integrationPluralLower: string;
        marketplaceSingular: string;
      }>
    | SimplePhrase;

  /** English: "From each customer record, you can deploy or reconfigure their %{integrationPluralLower}, review logs, manage their users, and more." */
  "emptyState.customersTextTwo":
    | ComplexPhrase<{
        integrationPluralLower: string;
      }>
    | SimplePhrase;

  /** English: "Learn about customers" */
  "emptyState.customersDocsButton": SimplePhrase;

  /** English: "Customer users" */
  "emptyState.customerUsersTitle": SimplePhrase;

  /** English: "You can invite your customers to log in to Prismatic, so they can manage instances deployed to them and review their own executions and logs." */
  "emptyState.customerUsersText": SimplePhrase;

  /** English: "Note: You do not need to add customer users to Prismatic if your users authenticate through an embedded %{marketplaceSingular}." */
  "emptyState.customerUsersTextTwo":
    | ComplexPhrase<{
        marketplaceSingular: string;
      }>
    | SimplePhrase;

  /** English: "Learn about customer users" */
  "emptyState.customerUsersDocsButton": SimplePhrase;

  /** English: "Embedded %{marketplaceSingular} user authentication" */
  "emptyState.customerUsersDocsButtonTwo":
    | ComplexPhrase<{
        marketplaceSingular: string;
      }>
    | SimplePhrase;

  /** English: "Instance executions" */
  "emptyState.executionsTitle": SimplePhrase;

  /** English: "Each time an instance of %{integrationSingularArticle} %{integrationSingularLower} runs, that's called an execution. Execution details are available here." */
  "emptyState.executionsText":
    | ComplexPhrase<{
        integrationSingularLower: string;
        integrationSingularArticle: string;
      }>
    | SimplePhrase;

  /** English: "You can inspect execution logs and results of each step of the execution, which is useful for support and debugging purposes." */
  "emptyState.executionsTextTwo": SimplePhrase;

  /** English: "Learn about instance executions" */
  "emptyState.executionsDocsButton": SimplePhrase;

  /** English: "Instances" */
  "emptyState.instancesTitle": SimplePhrase;

  /** English: "In Prismatic, %{integrationPluralLower} are reusable - they can be deployed to multiple customers and configured to behave differently from one customer to the next." */
  "emptyState.instancesText":
    | ComplexPhrase<{
        integrationPluralLower: string;
      }>
    | SimplePhrase;

  /** English: "An instance is %{integrationSingularArticle} %{integrationSingularLower} that has been deployed to a specific customer using customer-specific configuration." */
  "emptyState.instancesTextTwo":
    | ComplexPhrase<{
        integrationSingularLower: string;
        integrationSingularArticle: string;
      }>
    | SimplePhrase;

  /** English: "Here you will see any %{integrationPluralLower} that have been configured in the %{marketplaceSingular} or deployed directly to your organization." */
  "emptyState.instancesText--customer":
    | ComplexPhrase<{
        integrationPluralLower: string;
        marketplaceSingular: string;
      }>
    | SimplePhrase;

  /** English: "Learn about instances" */
  "emptyState.instancesDocsButton": SimplePhrase;

  /** English: "%{integrationPlural}" */
  "emptyState.integrationsTitle":
    | ComplexPhrase<{
        integrationPlural: string;
      }>
    | SimplePhrase;

  /** English: "%{integrationPlural} are reusable workflows that connect your product to the other apps and services your customers use." */
  "emptyState.integrationsText":
    | ComplexPhrase<{
        integrationPlural: string;
      }>
    | SimplePhrase;

  /** English: "After building %{integrationSingularArticle} %{integrationSingularLower}, you can deploy it to one or more of your customers, or add it to your %{marketplaceSingular}, where customers can activate it themselves." */
  "emptyState.integrationsTextTwo":
    | ComplexPhrase<{
        marketplaceSingular: string;
        integrationSingularLower: string;
        integrationSingularArticle: string;
      }>
    | SimplePhrase;

  /** English: "Learn about %{integrationPluralLower}" */
  "emptyState.integrationsDocsButton":
    | ComplexPhrase<{
        integrationPluralLower: string;
      }>
    | SimplePhrase;

  /** English: "%{integrationPlural}" */
  "emptyState.integrationsTitle--embedded":
    | ComplexPhrase<{
        integrationPlural: string;
      }>
    | SimplePhrase;

  /** English: "Here you will see any %{integrationPluralLower} that your organization has built or can modify via the %{integrationSingularLower} designer." */
  "emptyState.integrationsText--embedded":
    | ComplexPhrase<{
        integrationPluralLower: string;
        integrationSingularLower: string;
      }>
    | SimplePhrase;

  /** English: "Marketplace" by default. Will be overwritten by organization branded element values. */
  "emptyState.integrationMarketplaceTitle":
    | ComplexPhrase<{
        marketplaceSingular: string;
      }>
    | SimplePhrase;

  /** English: "Your %{marketplaceSingular} is where your customers go to browse your %{integrationSingularLower} offerings and self-activate the ones they want. It can be white-labeled and embedded in your app to create a native %{integrationSingular} experience." */
  "emptyState.integrationMarketplaceText":
    | ComplexPhrase<{
        marketplaceSingular: string;
        integrationSingularLower: string;
      }>
    | SimplePhrase;

  /** English: "Here is where you set up which %{integrationPluralLower} are included in your %{marketplaceSingular} and how they appear." */
  "emptyState.integrationMarketplaceTextTwo":
    | ComplexPhrase<{
        marketplaceSingular: string;
        integrationPluralLower: string;
      }>
    | SimplePhrase;

  /** English: "The %{marketplaceSingular} displays %{integrationPluralLower} that have been enabled or available for configuration." */
  "emptyState.integrationMarketplaceText--customer":
    | ComplexPhrase<{
        marketplaceSingular: string;
        integrationPluralLower: string;
      }>
    | SimplePhrase;

  /** English: "Learn about the %{marketplaceSingular}" */
  "emptyState.integrationMarketplaceDocsButton":
    | ComplexPhrase<{
        marketplaceSingular: string;
      }>
    | SimplePhrase;

  /** English: "Embedding %{marketplaceSingular} in your app" */
  "emptyState.integrationMarketplaceDocsButtonTwo":
    | ComplexPhrase<{
        marketplaceSingular: string;
      }>
    | SimplePhrase;

  /** English: "Logs" */
  "emptyState.logsTitle": SimplePhrase;

  /** English: "If actions in your deployed instances generate log messages, you'll find those here." */
  "emptyState.logsText": SimplePhrase;

  /** English: "From this page you can search and filter logs so you can keep tabs on exactly what's going on with your customers' live %{integrationPluralLower}." */
  "emptyState.logsTextTwo":
    | ComplexPhrase<{
        integrationPluralLower: string;
      }>
    | SimplePhrase;

  /** English: "If actions in your deployed instances generate log messages, you'll find those here." */
  "emptyState.logsText--customer": SimplePhrase;

  /** English: "From this page you can search and filter logs so you can keep tabs on exactly what's going on with your %{integrationPluralLower}." */
  "emptyState.logsTextTwo--customer":
    | ComplexPhrase<{
        integrationPluralLower: string;
      }>
    | SimplePhrase;

  /** English: "Learn about logs" */
  "emptyState.logsDocsButton": SimplePhrase;

  /** English: "Log streams" */
  "emptyState.logStreamsTitle": SimplePhrase;

  /** English: "Log streams allow you to send Prismatic logs to an external logging service (like DataDog or New Relic) or your own proprietary logging system." */
  "emptyState.logStreamsText": SimplePhrase;

  /** English: "Learn about log streams" */
  "emptyState.logStreamsDocsButton": SimplePhrase;

  /** English: "Users" */
  "emptyState.usersTitle--embedded": SimplePhrase;

  /** English: "Here you will see users within your organization that have access to manage %{integrationPluralLower}." */
  "emptyState.usersText--embedded":
    | ComplexPhrase<{
        integrationPluralLower: string;
      }>
    | SimplePhrase;

  /** English: "Instance monitors" */
  "emptyState.instanceMonitorsTitle": SimplePhrase;
}

export const filterPhrases: FilterPhrases = {
  // filter bar
  "filterBar.breadcrumb.activeIntegrations": {
    _: "%{integrationPlural}",
    integrationPlural: "Active Integrations",
  },
  "filterBar.breadcrumb.instances": "Instances",
  "filterBar.breadcrumb.components": "Components",
  "filterBar.breadcrumb.integrationMarketplace": {
    _: "%{marketplaceSingular}",
    marketplaceSingular: "Marketplace",
  },
  "filterBar.clearFiltersButton": "Clear filters",
  "filterBar.openFiltersButton": "Filter",
  "filterBar.refreshButton": "Refresh",
  "filterBar.refreshTooltip":
    "Auto-polling is only available with default filters.",

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
  "emptyState.alertMonitorsText--customer": {
    _: "Here you will see any alerts that have been configured for your %{integrationPluralLower}.",
    integrationPluralLower: "integrations",
  },
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

  "emptyState.attachmentsTitle--embedded": "Attachments",
  "emptyState.attachmentsText--embedded": {
    _: "Place to store %{integrationSingularLower} documents that your team members can reference.",
    integrationSingularLower: "integration",
  },

  // components empty state
  "emptyState.componentsTitle": "Components",
  "emptyState.componentsText": "",

  "emptyState.componentsTitle--embedded": "Components",
  "emptyState.componentsText--embedded": {
    _: "Here you will see any components that have been built specifically for your organization to use in the %{integrationSingular} designer.",
    integrationSingular: "Integration",
  },

  // credentials empty state
  "emptyState.credentialsTitle": "Organization credential",
  "emptyState.credentialsText": {
    _: "Credentials that are saved at an organization level are either applicable to all of your customers (like a shared API key), or they're used by your team members for testing %{integrationPlural}.",
    integrationPlural: "Integrations",
  },
  "emptyState.credentialsDocsButton": "Learn About Credentials",
  "emptyState.credentialsDocsButtonTwo": "OAuth 2.0 in Prismatic",

  // customer credentials empty state
  "emptyState.customerCredentialsTitle": "Customer credentials",
  "emptyState.customerCredentialsText": {
    _: "When you deploy an instance of %{integrationSingularArticle} %{integrationSingularLower} to a customer, that customer's credentials are used to connect to third-party apps and services.",
    integrationSingularLower: "integration",
    integrationSingularArticle: "an",
  },

  // customers empty state
  "emptyState.customersTitle": "Customers",
  "emptyState.customersText": {
    _: "You'll manage your customers here. You can deploy any number of your %{integrationPluralLower} to each customer, or they can activate %{integrationPluralLower} themselves through the %{marketplaceSingular}.",
    marketplaceSingular: "Marketplace",
    integrationPluralLower: "integrations",
  },
  "emptyState.customersTextTwo": {
    _: "From each customer record, you can deploy or reconfigure their %{integrationPluralLower}, review logs, manage their users, and more.",
    integrationPluralLower: "integrations",
  },
  "emptyState.customersDocsButton": "Learn about customers",

  // customer users empty state
  "emptyState.customerUsersTitle": "Customer users",
  "emptyState.customerUsersText":
    "You can invite your customers to log in to Prismatic, so they can manage instances deployed to them and review their own executions and logs.",
  "emptyState.customerUsersTextTwo": {
    _: "Note: You do not need to add customer users to Prismatic if your users authenticate through an embedded %{marketplaceSingular}.",
    marketplaceSingular: "Marketplace",
  },
  "emptyState.customerUsersDocsButton": "Learn about customer users",
  "emptyState.customerUsersDocsButtonTwo": {
    _: "Embedded %{marketplaceSingular} user authentication",
    marketplaceSingular: "Marketplace",
  },

  // executions empty state
  "emptyState.executionsTitle": "Instance executions",
  "emptyState.executionsText": {
    _: "Each time an instance of %{integrationSingularArticle} %{integrationSingularLower} runs, that's called an execution. Execution details are available here.",
    integrationSingularLower: "integration",
    integrationSingularArticle: "an",
  },
  "emptyState.executionsTextTwo":
    "You can inspect execution logs and results of each step of the execution, which is useful for support and debugging purposes.",
  "emptyState.executionsDocsButton": "Learn about instance executions",

  // instances empty state
  "emptyState.instancesTitle": "Instances",
  "emptyState.instancesText": {
    _: "In Prismatic, %{integrationPluralLower} are reusable - they can be deployed to multiple customers and configured to behave differently from one customer to the next.",
    integrationPluralLower: "integrations",
  },
  "emptyState.instancesTextTwo": {
    _: "An instance is %{integrationSingularArticle} %{integrationSingularLower} that has been deployed to a specific customer using customer-specific configuration.",
    integrationSingularLower: "integration",
    integrationSingularArticle: "an",
  },
  "emptyState.instancesText--customer": {
    _: "Here you will see any %{integrationPluralLower} that have been configured in the %{marketplaceSingular} or deployed directly to your organization.",
    integrationPluralLower: "integrations",
    marketplaceSingular: "Marketplace",
  },
  "emptyState.instancesDocsButton": "Learn about instances",

  // integrations empty state
  "emptyState.integrationsTitle": {
    _: "%{integrationPlural}",
    integrationPlural: "Integrations",
  },
  "emptyState.integrationsText": {
    _: "%{integrationPlural} are reusable workflows that connect your product to the other apps and services your customers use.",
    integrationPlural: "Integrations",
  },
  "emptyState.integrationsTextTwo": {
    _: "After building %{integrationSingularArticle} %{integrationSingularLower}, you can deploy it to one or more of your customers, or add it to your %{marketplaceSingular}, where customers can activate it themselves.",
    marketplaceSingular: "Marketplace",
    integrationSingularLower: "integration",
    integrationSingularArticle: "an",
  },
  "emptyState.integrationsDocsButton": {
    _: "Learn about %{integrationPluralLower}",
    integrationPluralLower: "integrations",
  },

  "emptyState.integrationsTitle--embedded": {
    _: "%{integrationPlural}",
    integrationPlural: "Integrations",
  },
  "emptyState.integrationsText--embedded": {
    _: "Here you will see any %{integrationPluralLower} that your organization has built or can modify via the %{integrationSingularLower} designer.",
    integrationPluralLower: "integrations",
    integrationSingularLower: "integration",
  },

  // integration marketplace empty state
  "emptyState.integrationMarketplaceTitle": {
    _: "%{marketplaceSingular}",
    marketplaceSingular: "Marketplace",
  },
  "emptyState.integrationMarketplaceText": {
    _: "Your %{marketplaceSingular} is where your customers go to browse your %{integrationSingularLower} offerings and self-activate the ones they want. It can be white-labeled and embedded in your app to create a native %{integrationSingularLower} experience.",
    marketplaceSingular: "Marketplace",
    integrationSingularLower: "integration",
  },
  "emptyState.integrationMarketplaceTextTwo": {
    _: "Here is where you set up which %{integrationPluralLower} are included in your %{marketplaceSingular} and how they appear.",
    marketplaceSingular: "Marketplace",
    integrationPluralLower: "integrations",
  },
  "emptyState.integrationMarketplaceText--customer": {
    _: "The %{marketplaceSingular} displays %{integrationPluralLower} that have been enabled or available for configuration.",
    marketplaceSingular: "Marketplace",
    integrationPluralLower: "integrations",
  },
  "emptyState.integrationMarketplaceDocsButton": {
    _: "Learn about the %{marketplaceSingular}",
    marketplaceSingular: "Marketplace",
  },
  "emptyState.integrationMarketplaceDocsButtonTwo": {
    _: "Embedding %{marketplaceSingular} in your app",
    marketplaceSingular: "Marketplace",
  },

  // logs empty state
  "emptyState.logsTitle": "Logs",
  "emptyState.logsText":
    "If actions in your deployed instances generate log messages, you'll find those here.",
  "emptyState.logsTextTwo": {
    _: "From this page you can search and filter logs so you can keep tabs on exactly what's going on with your customers' live %{integrationPluralLower}.",
    integrationPluralLower: "integrations",
  },
  "emptyState.logsText--customer":
    "If actions in your deployed instances generate log messages, you'll find those here.",
  "emptyState.logsTextTwo--customer": {
    _: "From this page you can search and filter logs so you can keep tabs on exactly what's going on with your %{integrationPluralLower}.",
    integrationPluralLower: "integrations",
  },
  "emptyState.logsDocsButton": "Learn about logs",

  // log streams empty state
  "emptyState.logStreamsTitle": "Log streams",
  "emptyState.logStreamsText":
    "Log streams allow you to send Prismatic logs to an external logging service (like DataDog or New Relic) or your own proprietary logging system.",
  "emptyState.logStreamsDocsButton": "Learn about log streams",

  // users
  "emptyState.usersTitle--embedded": "Users",
  "emptyState.usersText--embedded": {
    _: "Here you will see users within your organization that have access to manage %{integrationPluralLower}.",
    integrationPluralLower: "integrations",
  },

  // instance monitors
  "emptyState.instanceMonitorsTitle": "Instance monitors",
};
