export { SorobanResurrect } from './soroban-resurrect.js'
export {
  extractKeysFromFootprint,
  classifyLedgerKey,
  classifySacKey,
  encodeLedgerKey,
  extractFootprintFromTransaction,
  extractFootprintFromTransactionStreaming,
  classifyDeferredKeys,
  STREAMING_PARSER_MEMORY_TARGET,
  STREAMING_THRESHOLD_BYTES,
} from './footprint-parser.js'
export type { FootprintKeys, DeferredArchivedKey } from './footprint-parser.js'
export {
  SorobanResurrectError,
} from './types.js'
export type {
  ArchivedKey,
  SacKeyType,
  RestorePriority,
  SorobanResurrectConfig,
  SimulationCheckResult,
  RestoreTransactionResult,
  RestoreBatchResult,
  RestoreAllBatchesResult,
  ConcurrentRestoreResult,
  ContractKeyGroup,
  ExecutionResult,
  FailedRestoreState,
  PreFlightConfig,
  FeeBumpMetadata,
} from './types.js'
export {
  ExponentialBackoff,
  FixedDelay,
  JitterBackoff,
  CircuitBreaker,
  DEFAULT_RETRY_POLICY,
} from './retry-policy.js'
export type { RetryPolicy } from './retry-policy.js'
export {
  SimulationCache,
} from './simulation-cache.js'
export type { SimulationCacheConfig, CacheStatistics } from './simulation-cache.js'

export {
  FootprintCache,
} from './footprint-cache.js'
export type { FootprintCacheConfig, FootprintCacheStatistics } from './footprint-cache.js'

export { VersionNegotiator, PROTOCOL_COMPATIBILITY_MATRIX, MIN_SUPPORTED_PROTOCOL, MAX_SUPPORTED_PROTOCOL } from './version-negotiator.js'
export type { ProtocolSupport, ServerVersionInfo, XdrEncodingOptions } from './version-negotiator.js'

export { VERSION } from './version.js'

export { RpcFailoverManager } from './rpc-failover.js'
export type { RpcEndpointHealth, RpcFailoverConfig } from './rpc-failover.js'

export { WalletAdapterError, loadOptionalWalletDependency, bytesToBase64 } from './wallet-adapter.js'
export type { SorobanWalletAdapter, SignTransactionOptions, WalletConnectionResult, WalletAdapterErrorCode } from './wallet-adapter.js'

export { XBullAdapter } from './xbull-adapter.js'
export { LobstrAdapter } from './lobstr-adapter.js'
export {
  WalletConnectAdapter,
  STELLAR_CAIP2_NAMESPACE,
  STELLAR_MAINNET_CHAIN_ID,
  STELLAR_TESTNET_CHAIN_ID,
  SOROBAN_WC_METHODS,
  SOROBAN_WC_EVENTS,
} from './walletconnect-adapter.js'
export type { WalletConnectAdapterConfig, WalletMetadata } from './walletconnect-adapter.js'
export { LedgerAdapter } from './ledger-adapter.js'
export type { LedgerAdapterConfig } from './ledger-adapter.js'

// ─── New in this release ────────────────────────────────────────────────────

/** Lightweight dependency injection container */
export { Container, Token, BindingBuilder, ContainerError } from './container.js'

/** Structured logging interface and built-in implementations */
export { NOOP_LOGGER, consoleLogger, onLogToLogger } from './logger.js'
export type { Logger } from './logger.js'

/** OpenTelemetry instrumentation */
export { SdkTelemetry, SpanStatus } from './telemetry.js'
export type { TelemetryConfig, OtelTracer, OtelSpan, OtelPropagator } from './telemetry.js'

/** Prometheus-compatible metrics */
export { MetricsRegistry, SdkMetrics } from './metrics.js'
export type { MetricsConfig } from './metrics.js'
