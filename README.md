# How to run this app

1. create .env file in the project root and put there required variables:

```
NUXT_PUBLIC_API_BASE_URL - Base URL of the API, e.g. https://test.yourdomain.org
NUXT_PUBLIC_API_X_PB_SCOPE_PRODUCT - scope token for product
NUXT_PUBLIC_API_X_PB_SCOPE_ACCESSORY - scope token for accessory
```

2. npm install
3. npm run dev
4. app should be running on localhost:3000
5. As this is assumed to be part of the bigger application, the structure of the app is done appropriately. Therefore, to see figma design, please manually visit `http://localhost:3000/product/iphone-xr-256gb-zluta`
