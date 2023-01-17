---
title: 'How to generate UUID without Lib in JavaScript'
date: '2023-01-14'
tags: ['javascript', 'crypto']
slug: 'how-to-generate-uuid-without-lib-in-javascript'
excerpt: 'Generate UUID Without Lib in JavaScript using Web Crypto API from native browser APi'
---

## Web Crypto API

If your website is hosted in a web security environment (**https**) or at localhost, you could use the [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API) to generate random uuid in a very simple way:

```jsx
const uuid = crypto.randomUUID()

console.log(uuid) // 'f38aa0c4-3458-41cc-9256-0145ee39d069'
```

If your are using node.js, you don't need a security environment. For more details check out the [mdn docs](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API).