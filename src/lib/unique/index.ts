import { notFoundPhrases, NotFoundPhrases } from "./404";
import {
  appMarketplaceNotFoundPhrases,
  AppMarketplaceNotFoundPhrases,
} from "./app.marketplace-not-found";
import { componentsPhrases, ComponentsPhrases } from "./components";
import {
  integrationMarketplacePhrases,
  IntegrationMarketplacePhrases,
} from "./integration-marketplace";
import { integrationIdPhrases, IntegrationIdPhrases } from "./integration.id";
import {
  integrationIdAlertMonitorsPhrases,
  IntegrationIdAlertMonitorsPhrases,
} from "./integration.id.alert-monitors";
import {
  integrationIdConfigurationsPhrases,
  IntegrationIdConfigurationsPhrases,
} from "./integration.id.configurations";
import {
  integrationIdExecutionsPhrases,
  IntegrationIdExecutionsPhrases,
} from "./integration.id.executions";
import {
  integrationIdLogsPhrases,
  IntegrationIdLogsPhrases,
} from "./integration.id.logs";
import {
  integrationIdTestPhrases,
  IntegrationIdTestPhrases,
} from "./integration.id.test";
import { integrationsPhrases, IntegrationsPhrases } from "./integrations";

export { notFoundPhrases, NotFoundPhrases };
export { appMarketplaceNotFoundPhrases, AppMarketplaceNotFoundPhrases };
export { componentsPhrases, ComponentsPhrases };
export { integrationMarketplacePhrases, IntegrationMarketplacePhrases };
export { integrationIdPhrases, IntegrationIdPhrases };
export { integrationIdAlertMonitorsPhrases, IntegrationIdAlertMonitorsPhrases };
export {
  integrationIdConfigurationsPhrases,
  IntegrationIdConfigurationsPhrases,
};
export { integrationIdExecutionsPhrases, IntegrationIdExecutionsPhrases };
export { integrationIdLogsPhrases, IntegrationIdLogsPhrases };
export { integrationIdTestPhrases, IntegrationIdTestPhrases };
export { integrationsPhrases, IntegrationsPhrases };

export type UniquePhrases = NotFoundPhrases &
  AppMarketplaceNotFoundPhrases &
  ComponentsPhrases &
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
  ...integrationMarketplacePhrases,
  ...integrationIdPhrases,
  ...integrationIdAlertMonitorsPhrases,
  ...integrationIdConfigurationsPhrases,
  ...integrationIdExecutionsPhrases,
  ...integrationIdLogsPhrases,
  ...integrationIdTestPhrases,
  ...integrationsPhrases,
};
