#!/usr/bin/env bash
set -uo pipefail

# Runs tsc --extendedDiagnostics for each TS version and prints a summary table.
# Usage: mise run benchmark

extract() {
  local label="$1"
  local output="$2"
  echo "$output" | grep "^${label}:" | awk -F: '{gsub(/^[ \t]+/, "", $2); print $2}' | head -1 || echo "-"
}

run_benchmark() {
  local name="$1"
  local tsc="$2"
  local config="$3"

  local version
  version=$("$tsc" --version 2>/dev/null | awk '{print $NF}')

  local output
  output=$("$tsc" -p "$config" --extendedDiagnostics 2>&1) || true

  local types instantiations memory check_time total_time
  types=$(extract "Types" "$output")
  instantiations=$(extract "Instantiations" "$output")
  memory=$(extract "Memory used" "$output")
  check_time=$(extract "Check time" "$output")
  total_time=$(extract "Total time" "$output")

  # Fall back to Total time if Check time not available (TS 4.1)
  if [ "$check_time" = "-" ]; then
    check_time="$total_time"
  fi

  printf "%-12s  %-10s  %12s  %14s  %12s  %12s  %12s\n" \
    "$name" "$version" "$types" "$instantiations" "$memory" "$check_time" "$total_time"
}

echo ""
echo "TypeScript Type-Checking Benchmark"
echo "==================================="
echo ""

# Source typecheck (tsconfig.typetest.json)
echo "Source (tsconfig.typetest.json):"
echo ""
printf "%-12s  %-10s  %12s  %14s  %12s  %12s  %12s\n" \
  "NAME" "VERSION" "TYPES" "INSTANTIATIONS" "MEMORY" "CHECK" "TOTAL"
printf "%-12s  %-10s  %12s  %14s  %12s  %12s  %12s\n" \
  "----" "-------" "-----" "--------------" "------" "-----" "-----"

run_benchmark "ts-5.8" "node_modules/typescript/bin/tsc" "tsconfig.typetest.json"

echo ""

# Compat tests (tsconfig.compat.json against built dist/)
echo "Compat (tsconfig.compat.json against dist/):"
echo ""
printf "%-12s  %-10s  %12s  %14s  %12s  %12s  %12s\n" \
  "NAME" "VERSION" "TYPES" "INSTANTIATIONS" "MEMORY" "CHECK" "TOTAL"
printf "%-12s  %-10s  %12s  %14s  %12s  %12s  %12s\n" \
  "----" "-------" "-----" "--------------" "------" "-----" "-----"

run_benchmark "ts-4.1" "node_modules/typescript-41/bin/tsc" "tsconfig.compat-legacy.json"
run_benchmark "ts-4.9" "node_modules/typescript-49/bin/tsc" "tsconfig.compat.json"
run_benchmark "ts-5.0" "node_modules/typescript-50/bin/tsc" "tsconfig.compat.json"
run_benchmark "ts-5.2" "node_modules/typescript-52/bin/tsc" "tsconfig.compat.json"
run_benchmark "ts-5.5" "node_modules/typescript-55/bin/tsc" "tsconfig.compat.json"
run_benchmark "ts-5.8" "node_modules/typescript/bin/tsc" "tsconfig.compat.json"

echo ""
