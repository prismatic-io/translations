import { NotFoundPhrases, notFoundPhrases } from "./404";
import {
  AppMarketplaceNotFoundPhrases,
  appMarketplaceNotFoundPhrases,
} from "./app.marketplace-not-found";
import { ComponentsPhrases, componentsPhrases } from "./components";
import { DashboardPhrases, dashboardPhrases } from "./dashboard";
import { IntegrationIdPhrases, integrationIdPhrases } from "./integration.id";
import {
  IntegrationIdAlertMonitorsPhrases,
  integrationIdAlertMonitorsPhrases,
} from "./integration.id.alert-monitors";
import {
  IntegrationIdConfigurationsPhrases,
  integrationIdConfigurationsPhrases,
} from "./integration.id.configurations";
import {
  IntegrationIdExecutionsPhrases,
  integrationIdExecutionsPhrases,
} from "./integration.id.executions";
import {
  IntegrationIdLogsPhrases,
  integrationIdLogsPhrases,
} from "./integration.id.logs";
import {
  IntegrationIdTestPhrases,
  integrationIdTestPhrases,
} from "./integration.id.test";
import {
  IntegrationMarketplacePhrases,
  integrationMarketplacePhrases,
} from "./integration-marketplace";
import type { IntegrationsPhrases } from "./integrations";
import { integrationsPhrases } from "./integrations";

export {
  AppMarketplaceNotFoundPhrases,
  appMarketplaceNotFoundPhrases,
  ComponentsPhrases,
  componentsPhrases,
  DashboardPhrases,
  dashboardPhrases,
  IntegrationIdAlertMonitorsPhrases,
  IntegrationIdConfigurationsPhrases,
  IntegrationIdExecutionsPhrases,
  IntegrationIdLogsPhrases,
  IntegrationIdPhrases,
  IntegrationIdTestPhrases,
  IntegrationMarketplacePhrases,
  integrationIdAlertMonitorsPhrases,
  integrationIdConfigurationsPhrases,
  integrationIdExecutionsPhrases,
  integrationIdLogsPhrases,
  integrationIdPhrases,
  integrationIdTestPhrases,
  integrationMarketplacePhrases,
  NotFoundPhrases,
  notFoundPhrases,
};

export type UniquePhrases = NotFoundPhrases &
  AppMarketplaceNotFoundPhrases &
  ComponentsPhrases &
  DashboardPhrases &
  IntegrationMarketplacePhrases &
  IntegrationIdPhrases &
  IntegrationIdAlertMonitorsPhrases &
  IntegrationIdConfigurationsPhrases &
  IntegrationIdExecutionsPhrases &
  IntegrationIdLogsPhrases &
  IntegrationIdTestPhrases &
  IntegrationsPhrases;

export const uniquePhrases: UniquePhrases = {
  ...notFoundPhrases,
  ...appMarketplaceNotFoundPhrases,
  ...componentsPhrases,
  ...dashboardPhrases,
  ...integrationMarketplacePhrases,
  ...integrationIdPhrases,
  ...integrationIdAlertMonitorsPhrases,
  ...integrationIdConfigurationsPhrases,
  ...integrationIdExecutionsPhrases,
  ...integrationIdLogsPhrases,
  ...integrationIdTestPhrases,
  ...integrationsPhrases,
};
