### Repo to reproduce a bug

To reproduce:

```sh
node scripts/upload-image.mjs
```

The error:

ie: replaced my local path with \*\*

```sh
Error: Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream
    at createError (**/issue-upload-api/node_modules/@medusajs/medusa-js/node_modules/axios/lib/core/createError.js:16:15)
    at dispatchHttpRequest (**/issue-upload-api/node_modules/@medusajs/medusa-js/node_modules/axios/lib/adapters/http.js:96:23)
    at new Promise (<anonymous>)
    at httpAdapter (**/issue-upload-api/node_modules/@medusajs/medusa-js/node_modules/axios/lib/adapters/http.js:48:10)
    at dispatchRequest (**/issue-upload-api/node_modules/@medusajs/medusa-js/node_modules/axios/lib/core/dispatchRequest.js:58:10)
    at Axios.request (**/issue-upload-api/node_modules/@medusajs/medusa-js/node_modules/axios/lib/core/Axios.js:108:15)
    at Function.wrap [as request] (**/issue-upload-api/node_modules/@medusajs/medusa-js/node_modules/axios/lib/helpers/bind.js:9:15)
    at **/issue-upload-api/node_modules/retry-axios/dist/index.js:1:1819
    at async $.request (file://**/issue-upload-api/node_modules/@medusajs/medusa-js/dist/index.mjs:1:2663)
    at async file://**/issue-upload-api/scripts/upload-image.mjs:12:23 {
  config: {
    transitional: {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false
    },
    adapter: [Function: httpAdapter],
    transformRequest: [ [Function: transformRequest] ],
    transformResponse: [ [Function: transformResponse] ],
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: [Function: validateStatus],
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      'Idempotency-Key': '610ba596-7153-4330-8482-93929430473c',
      'User-Agent': 'axios/0.24.0'
    },
    baseURL: 'http://localhost:9000',
    raxConfig: {
      instance: [Function],
      retry: 2,
      backoffType: 'exponential',
      shouldRetry: [Function: shouldRetry],
      currentRetryAttempt: 2,
      retryDelay: 100,
      httpMethodsToRetry: [Array],
      noResponseRetries: 2,
      checkRetryAfter: true,
      maxRetryAfter: 300000,
      statusCodesToRetry: [Array]
    },
    method: 'post',
    withCredentials: true,
    url: '/admin/uploads',
    json: true,
    data: FormData {
      files: '**/issue-upload-api/tmp/image.jpg'
    }
  },
  request: undefined,
  response: undefined,
  isAxiosError: true,
  toJSON: [Function: toJSON]
}

```
