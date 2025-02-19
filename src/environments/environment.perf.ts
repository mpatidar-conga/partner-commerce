// environment.perf.ts
import { Configuration } from '@congacommerce/core';
export const environment: Configuration = {
  production: true,
  defaultImageSrc: './assets/images/default.png',
  defaultCountry: 'US',
  defaultLanguage: 'en-US',
  enableErrorLogging: false,
  enableErrorReporting: false,
  enableMultiCurrency: false,
  enableQueryLogs: true,
  enablePerformanceLogs: true,
  defaultCurrency: 'USD',
  bufferTime: 20,
  maxBufferSize: 100,
  disableBuffer: false,
  subqueryLimit: 10,
  disableCache: false,
  encryptResponse: false,
  cartRetryLimit: 3,
  productIdentifier: 'Id',
  type: 'Salesforce',
  debounceTime: 1000,
  proxy: 'https://apttus-proxy.herokuapp.com',
  useIndexedDB: true,
  pricingMode: 'turbo',
  skipPricing: true,
  skipRules: false,
  expandDepth: 8,
  hashRouting: true,
  packageNamespace: 'Apttus_WebStore',
  // *** TODO: Replace with Salesforce environment variables ***
  storefront: 'Posteitaliane',
  organizationId: '00DJ0000003HSZL',
  sentryDsn: 'https://6ad10246235742dc89f89b4c3f53f4aa@sentry.io/1230495',
  endpoint: 'https://sandbox-ldvtesting.cs10.force.com/customer'
};