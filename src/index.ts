// x402-social-media-data: the social.duoleads.com client of duo-data-utilities, published on its own.
// The shared client code lives in src/lib (generated from https://github.com/hiesem/duo-data-utilities).
export {
  assertSocialPath,
  buildSocialQuery,
  createSocialClient,
  createSocialClient as createClient,
  DEFAULT_SOCIAL_BASE_URL,
  DEFAULT_SOCIAL_MAX_PRICE_USD,
  SOCIAL_MCP_URL,
} from "./lib/social.js";
export type { SocialClient, SocialClientOptions, SocialPaidResult } from "./lib/social.js";
export * from "./lib/social-generated.js";
export { DuoApiError, PriceGuardError } from "./lib/errors.js";
export { BASE_NETWORK, BASE_USDC_ADDRESS } from "./lib/price-guard.js";
export type { EvmSigner, SettlementReceipt } from "./lib/transport.js";
export { SDK_USER_AGENT, SDK_VERSION } from "./lib/version.js";
