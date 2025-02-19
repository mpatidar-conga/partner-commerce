import { Configuration } from '@congacommerce/core';

export const environment: Configuration = {
  production: false,
  defaultImageSrc: 'https://loremflickr.com/320/240/hardware',
  defaultCountry: 'US',
  defaultLanguage: 'en-US',
  enableErrorLogging: true,
  enableErrorReporting: true,
  enableMultiCurrency: false,
  enableQueryLogs: true,
  enablePerformanceLogs: true,
  defaultCurrency: 'USD',
  bufferTime: 10,
  maxBufferSize: 100,
  disableBuffer: false,
  subqueryLimit: 10,
  disableCache: false,
  encryptResponse: false,
  cartRetryLimit: 10,
  productIdentifier: 'Id',
  type: 'Salesforce',
  debounceTime: 1000,
  useIndexedDB: false,
  skipPricing: true,
  skipRules: false,
  expandDepth: 7,
  hashRouting: false,
  packageNamespace: 'Apttus_WebStore',
  // *** TODO: Replace with Salesforce environment variables ***
  storefront: 'P-Commerce',
  organizationId: '00D790000008jFd',
  sentryDsn: 'https://6ad10246235742dc89f89b4c3f53f4aa@sentry.io/1230495',
  endpoint: 'https://dcdomain--dc2.sandbox.my.site.com/pcom'
};
