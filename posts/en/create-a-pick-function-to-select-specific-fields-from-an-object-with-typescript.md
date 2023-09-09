---
title: 'Create a Pick Function to Select Specific Fields from an Object with TypeScript'
date: '2023-03-01'
tags: ['typescript', 'javascript']
slug: "create-a-pick-function-to-select-specific-fields-from-an-object-with-typescript"
excerpt: 'Create a Pick Function to Select Specific Fields from an Object
In JavaScript and TypeScript, working with objects is a common task. Sometimes, you may need to extract only certain properties from an object while leaving out the rest. This is where a "Pick" function comes in handy.'
---

## Create a Pick Function to Select Specific Fields from an Object

In JavaScript and TypeScript, working with objects is a common task. Sometimes, you may need to extract only certain properties from an object while leaving out the rest. This is where a "Pick" function comes in handy.

The pick function defined as follows:

```js
const pick = <Target, KeysToPick extends keyof Target>(
  targetObj: Target,
  keys: KeysToPick[]
) => keys.reduce((acc, key) => ({ ...acc, [key]: targetObj[key] }), {})
```

This function allows you to select and extract specific fields from an object, making your code more efficient and easier to manage.

## How the pick Function Works
The pick function takes two arguments:
1. `targetObj`: This is the source object from which you want to pick specific fields.
2. `keys`: An array of keys that represent the fields you want to select from the `targetObj`.

The function uses the `reduce` method to iterate through the `keys` array and build a new object (`acc`) containing only the selected fields from the source object `targetObj`. It does this by creating a new property for each selected key and copying the corresponding value from `targetObj` to the new object.

## Example usage:
```js
const user = {
  id: 1,
  name: "John Doe",
  email: "johndoe@example.com",
  age: 30,
};

const selectedFields = pick(user, ["name", "email"]);

console.log(selectedFields); // { name: "John Doe", "email": "johndoe@example.com" }
```

In this example, we have an object user, and we want to select only the "name" and "email" fields. When we use the pick function, it returns a new object containing only these selected fields:

```javascript
{
  name: "John Doe",
  email: "johndoe@example.com"
}
```

## Benefits of Using the pick Function
1. **Code Clarity**: The pick function makes your code more readable and self-explanatory. Instead of manually extracting fields from objects, you can use this utility function.

2. **Avoiding Unnecessary Data**: By picking only the fields you need, you can reduce unnecessary data transfer and processing, leading to improved performance in your applications, especially if you are sending this data to the user.

3. **Type Safety**: In TypeScript, the function provides type safety by ensuring that the selected keys exist on the source object, reducing the risk of runtime errors.

In conclusion, the `pick` function is a valuable tool for selecting specific fields from objects in JavaScript and TypeScript. It promotes cleaner code, enhances performance, and ensures type safety when working with objects.