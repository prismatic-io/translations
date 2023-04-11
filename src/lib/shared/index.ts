import { chipPhases, ChipPhases } from "./chip";
import { commonPhrases, CommonPhrases } from "./common";
import { configWizardPhrases, ConfigWizardPhrases } from "./configWizard";
import { dataTablePhrases, DataTablePhrases } from "./dataTable";
import { detailPhrases, DetailPhrases } from "./detail";
import { dialogPhrases, DialogPhrases } from "./dialog";
import { executionPhrases, ExecutionPhrases } from "./executions";
import { filterPhrases, FilterPhrases } from "./filter";
import { headerPhrases, HeaderPhrases } from "./header";
import { inputPhrases, InputPhrases } from "./input";
import { logSeverityPhrases, LogSeverityPhrases } from "./logSeverity";
import { noResultsPhrases, NoResultsPhrases } from "./noResults";
import {
  oAuthConnectionPhrases,
  OAuthConnectionPhrases,
} from "./oauthConnection";
import { popoverPhrases, PopoverPhrases } from "./popover";
import { tabPhrases, TabPhrases } from "./tab";
import { tooltipPhrases, TooltipPhrases } from "./tooltip";
import { triggerDetailsPhrases, TriggerDetailsPhrases } from "./triggerDetails";

export { chipPhases, ChipPhases };
export { commonPhrases, CommonPhrases };
export { configWizardPhrases, ConfigWizardPhrases };
export { dataTablePhrases, DataTablePhrases };
export { detailPhrases, DetailPhrases };
export { dialogPhrases, DialogPhrases };
export { executionPhrases, ExecutionPhrases };
export { filterPhrases, FilterPhrases };
export { headerPhrases, HeaderPhrases };
export { inputPhrases, InputPhrases };
export { logSeverityPhrases, LogSeverityPhrases };
export { noResultsPhrases, NoResultsPhrases };
export { oAuthConnectionPhrases, OAuthConnectionPhrases };
export { popoverPhrases, PopoverPhrases };
export { tabPhrases, TabPhrases };
export { tooltipPhrases, TooltipPhrases };
export { triggerDetailsPhrases, TriggerDetailsPhrases };

export type SharedPhrases = ChipPhases &
  CommonPhrases &
  ConfigWizardPhrases &
  DataTablePhrases &
  DetailPhrases &
  DialogPhrases &
  ExecutionPhrases &
  FilterPhrases &
  HeaderPhrases &
  InputPhrases &
  LogSeverityPhrases &
  NoResultsPhrases &
  OAuthConnectionPhrases &
  PopoverPhrases &
  TabPhrases &
  TooltipPhrases &
  TriggerDetailsPhrases;

export const sharedPhrases: SharedPhrases = {
  ...chipPhases,
  ...commonPhrases,
  ...configWizardPhrases,
  ...dataTablePhrases,
  ...detailPhrases,
  ...dialogPhrases,
  ...executionPhrases,
  ...filterPhrases,
  ...headerPhrases,
  ...inputPhrases,
  ...logSeverityPhrases,
  ...noResultsPhrases,
  ...oAuthConnectionPhrases,
  ...popoverPhrases,
  ...tabPhrases,
  ...tooltipPhrases,
  ...triggerDetailsPhrases,
};
