import { Configuration } from '@congacommerce/core';

export const environment: Configuration = {
  production: false,
  defaultImageSrc: './assets/images/default.png',
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
  // *** TODO: Replace with details of your Salesforce org ***
  storefront: 'Storefront Name',
  organizationId: 'Salesforce Org Id',
  endpoint: 'Community Site Url'
};
