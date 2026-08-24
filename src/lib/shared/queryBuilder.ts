import type { ComplexPhrase, SimplePhrase } from "../../types";

export interface QueryBuilderPhrases {
  /** English: "Query Builder" */
  "queryBuilder.title": SimplePhrase;

  /** English: "Apply" */
  "queryBuilder.applyButton": SimplePhrase;

  /** English: "Clear" */
  "queryBuilder.clearButton": SimplePhrase;

  /** English: "Edit" */
  "queryBuilder.editButton": SimplePhrase;

  /** English: "Show fewer filters" */
  "queryBuilder.showFewerFiltersButton": SimplePhrase;

  /** English: "Show all filters" */
  "queryBuilder.showAllFiltersButton": SimplePhrase;

  /** English: "No filters, showing all executions" */
  "queryBuilder.emptyMessage": SimplePhrase;

  /** English: "Add a filter" */
  "queryBuilder.addFilterButton": SimplePhrase;

  /** English: "And" */
  "queryBuilder.andText": SimplePhrase;

  /** English: "Or" */
  "queryBuilder.orText": SimplePhrase;

  /** English: "+%{count} more" */
  "queryBuilder.moreText": ComplexPhrase<{
    count: number;
  }>;

  /** English: "Match" */
  "queryBuilder.matchText": SimplePhrase;

  /** English: "of the following" */
  "queryBuilder.ofTheFollowingText": SimplePhrase;

  /** English: "Condition" */
  "queryBuilder.conditionButton": SimplePhrase;

  /** English: "Group" */
  "queryBuilder.groupButton": SimplePhrase;

  /** English: "Add condition" */
  "queryBuilder.addConditionButton": SimplePhrase;

  /** English: "Add group" */
  "queryBuilder.addGroupButton": SimplePhrase;

  /** English: "Remove group" */
  "queryBuilder.removeGroupButton": SimplePhrase;

  /** English: "Remove condition" */
  "queryBuilder.removeConditionButton": SimplePhrase;

  /** English: "Field" */
  "queryBuilder.fieldLabel": SimplePhrase;

  /** English: "Condition" */
  "queryBuilder.conditionLabel": SimplePhrase;

  /** English: "Value" */
  "queryBuilder.valueLabel": SimplePhrase;

  /** English: "Select a field" */
  "queryBuilder.fieldPlaceholder": SimplePhrase;

  /** English: "Search fields" */
  "queryBuilder.searchFieldsPlaceholder": SimplePhrase;

  /** English: "Execution fields" */
  "queryBuilder.executionFieldsGroupLabel": SimplePhrase;

  /** English: "Trigger payload" */
  "queryBuilder.triggerPayloadGroupLabel": SimplePhrase;

  /** English: "True" */
  "queryBuilder.trueValue": SimplePhrase;

  /** English: "False" */
  "queryBuilder.falseValue": SimplePhrase;

  /** English: "Select a value" */
  "queryBuilder.valuePlaceholder": SimplePhrase;

  /** English: "Comma separated" */
  "queryBuilder.commaSeparatedPlaceholder": SimplePhrase;

  /** English: "is" */
  "queryBuilder.operator.isValue": SimplePhrase;

  /** English: "is not" */
  "queryBuilder.operator.isNotValue": SimplePhrase;

  /** English: "is any of" */
  "queryBuilder.operator.isAnyOfValue": SimplePhrase;

  /** English: "contains" */
  "queryBuilder.operator.containsValue": SimplePhrase;

  /** English: "is empty" */
  "queryBuilder.operator.isEmptyValue": SimplePhrase;

  /** English: "is on or after" */
  "queryBuilder.operator.isOnOrAfterValue": SimplePhrase;

  /** English: "is on or before" */
  "queryBuilder.operator.isOnOrBeforeValue": SimplePhrase;

  /** English: "Groups can be nested %{limit} levels deep." */
  "queryBuilder.depthError": ComplexPhrase<{
    limit: number;
  }>;

  /** English: "A query can hold %{limit} conditions." */
  "queryBuilder.conditionsError": ComplexPhrase<{
    limit: number;
  }>;

  /** English: "A condition can list %{limit} values." */
  "queryBuilder.valuesError": ComplexPhrase<{
    limit: number;
  }>;

  /** English: "This query is too complex. Remove conditions to simplify." */
  "queryBuilder.tooComplexError": SimplePhrase;
}

export const queryBuilderPhrases: QueryBuilderPhrases = {
  "queryBuilder.title": "Query Builder",
  "queryBuilder.applyButton": "Apply",
  "queryBuilder.clearButton": "Clear",
  "queryBuilder.editButton": "Edit",
  "queryBuilder.showFewerFiltersButton": "Show fewer filters",
  "queryBuilder.showAllFiltersButton": "Show all filters",
  "queryBuilder.emptyMessage": "No filters, showing all executions",
  "queryBuilder.addFilterButton": "Add a filter",
  "queryBuilder.andText": "And",
  "queryBuilder.orText": "Or",
  "queryBuilder.moreText": {
    _: "+%{count} more",
    count: 0,
  },
  "queryBuilder.matchText": "Match",
  "queryBuilder.ofTheFollowingText": "of the following",
  "queryBuilder.conditionButton": "Condition",
  "queryBuilder.groupButton": "Group",
  "queryBuilder.addConditionButton": "Add condition",
  "queryBuilder.addGroupButton": "Add group",
  "queryBuilder.removeGroupButton": "Remove group",
  "queryBuilder.removeConditionButton": "Remove condition",
  "queryBuilder.fieldLabel": "Field",
  "queryBuilder.conditionLabel": "Condition",
  "queryBuilder.valueLabel": "Value",
  "queryBuilder.fieldPlaceholder": "Select a field",
  "queryBuilder.searchFieldsPlaceholder": "Search fields",
  "queryBuilder.executionFieldsGroupLabel": "Execution fields",
  "queryBuilder.triggerPayloadGroupLabel": "Trigger payload",
  "queryBuilder.trueValue": "True",
  "queryBuilder.falseValue": "False",
  "queryBuilder.valuePlaceholder": "Select a value",
  "queryBuilder.commaSeparatedPlaceholder": "Comma separated",
  "queryBuilder.operator.isValue": "is",
  "queryBuilder.operator.isNotValue": "is not",
  "queryBuilder.operator.isAnyOfValue": "is any of",
  "queryBuilder.operator.containsValue": "contains",
  "queryBuilder.operator.isEmptyValue": "is empty",
  "queryBuilder.operator.isOnOrAfterValue": "is on or after",
  "queryBuilder.operator.isOnOrBeforeValue": "is on or before",
  "queryBuilder.depthError": {
    _: "Groups can be nested %{limit} levels deep.",
    limit: 0,
  },
  "queryBuilder.conditionsError": {
    _: "A query can hold %{limit} conditions.",
    limit: 0,
  },
  "queryBuilder.valuesError": {
    _: "A condition can list %{limit} values.",
    limit: 0,
  },
  "queryBuilder.tooComplexError":
    "This query is too complex. Remove conditions to simplify.",
};
