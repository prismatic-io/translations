import { ChipPhases, chipPhases } from "./chip";
import { CommonPhrases, commonPhrases } from "./common";
import { ConfigWizardPhrases, configWizardPhrases } from "./configWizard";
import {
  CustomerConnectionsPhrases,
  customerConnectionsPhrases,
} from "./customerConnections";
import { DataTablePhrases, dataTablePhrases } from "./dataTable";
import { DateTimePhrases, dateTimePhrases } from "./dateTime";
import { DetailPhrases, detailPhrases } from "./detail";
import { DialogPhrases, dialogPhrases } from "./dialog";
import { ExecutionPhrases, executionPhrases } from "./executions";
import { FilterPhrases, filterPhrases } from "./filter";
import { HeaderPhrases, headerPhrases } from "./header";
import { InputPhrases, inputPhrases } from "./input";
import { LogSeverityPhrases, logSeverityPhrases } from "./logSeverity";
import { NoResultsPhrases, noResultsPhrases } from "./noResults";
import { NullStatePhrases, nullStatePhrases } from "./nullState";
import {
  OAuthConnectionPhrases,
  oAuthConnectionPhrases,
} from "./oauthConnection";
import { PopoverPhrases, popoverPhrases } from "./popover";
import { TabPhrases, tabPhrases } from "./tab";
import { TooltipPhrases, tooltipPhrases } from "./tooltip";
import { TriggerDetailsPhrases, triggerDetailsPhrases } from "./triggerDetails";
import { UserPhrases, userPhrases } from "./user";

export { chipPhases, ChipPhases };
export { commonPhrases, CommonPhrases };
export { configWizardPhrases, ConfigWizardPhrases };
export { customerConnectionsPhrases, CustomerConnectionsPhrases };
export { dataTablePhrases, DataTablePhrases };
export { dateTimePhrases, DateTimePhrases };
export { detailPhrases, DetailPhrases };
export { dialogPhrases, DialogPhrases };
export { executionPhrases, ExecutionPhrases };
export { filterPhrases, FilterPhrases };
export { headerPhrases, HeaderPhrases };
export { nullStatePhrases, NullStatePhrases };
export { inputPhrases, InputPhrases };
export { logSeverityPhrases, LogSeverityPhrases };
export { noResultsPhrases, NoResultsPhrases };
export { oAuthConnectionPhrases, OAuthConnectionPhrases };
export { popoverPhrases, PopoverPhrases };
export { tabPhrases, TabPhrases };
export { tooltipPhrases, TooltipPhrases };
export { triggerDetailsPhrases, TriggerDetailsPhrases };
export { userPhrases, UserPhrases };

export type SharedPhrases = ChipPhases &
  CommonPhrases &
  ConfigWizardPhrases &
  CustomerConnectionsPhrases &
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
  TriggerDetailsPhrases &
  UserPhrases &
  DateTimePhrases &
  NullStatePhrases;

export const sharedPhrases: SharedPhrases = {
  ...chipPhases,
  ...commonPhrases,
  ...configWizardPhrases,
  ...customerConnectionsPhrases,
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
  ...userPhrases,
  ...dateTimePhrases,
  ...nullStatePhrases,
};
