# **Learn Lerna with Nx**

## **1. Install Lerna**
To initialize a Lerna monorepo, run:
```sh
npx lerna init
```

---

## **2. Create a Package**
Create a package named `demo-is-odd`:
```sh
npx lerna create demo-is-odd
```
Navigate to the package:
```sh
cd packages/demo-is-odd
```

---

## **3. Setup TypeScript and Jest**
Install dependencies:
```sh
npm add -D typescript jest
```
Initialize TypeScript:
```sh
npx tsc --init
```

---

## **4. Configure `.gitignore`**
Add the following lines:
```
**/dist
node_modules
```

---

## **5. Configure `tsconfig.json`**
In `tsconfig.json`, set:
```json
{
  "compilerOptions": {
    "declaration": true,
    "outDir": "./dist"
  }
}
```

---

## **6. Modify `package.json`**
Change:
```json
"main": "lib/demo-is-odd.js"
```
To:
```json
"main": "dist/demo-is-odd.js"
```
Add TypeScript declaration file:
```json
"types": "dist/demo-is-odd.d.ts"
```
Replace:
```json
"files": ["lib"]
```
With:
```json
"files": ["dist"]
```
Update scripts:
```json
"scripts": {
  "build": "tsc",
  "test": "jest"
}
```

---

## **7. Write Code & Tests**
### **Write Logic (`demo-is-odd.ts`)**
```ts
export function isOdd(n: number): boolean {
  return n % 2 !== 0;
}
```
### **Write Test (`demo-is-odd.test.js`)**
```js
const { isOdd } = require('../dist/demo-is-odd.js');

test('isOdd should return true', () => {
  expect(isOdd(1)).toBe(true);
  expect(isOdd(3)).toBe(true);
  expect(isOdd(4)).toBe(false);
});
```

---

## **8. Run Build & Test**
Navigate to the root folder and run:
```sh
npx lerna run build --scope=demo-is-odd
npx lerna run test --scope=demo-is-odd
```

---

## **9. Create `demo-is-even` Package**
Repeat **all the above steps** for `demo-is-even`:
```sh
npx lerna create demo-is-even
```

Modify `demo-is-even.ts` to use `demo-is-odd`:
```ts
import { isOdd } from 'demo-is-odd';

export function isEven(n: number): boolean {
  return !isOdd(n);
}
```

Add dependency in `demo-is-even/package.json`:
```json
"dependencies": {
  "demo-is-odd": "*"
}
```

---

## **10. Setup Nx in Lerna**
To integrate Nx with Lerna:
```sh
npx nx init
```
Generate dependency graph:
```sh
npx nx graph
```

---

## **11. Run Tests with Dependencies**
Ensure dependencies run first:
```sh
npx lerna run test
```

---

## **12. Run Everything**
To build and test everything:
```sh
npx lerna run build
npx lerna run test
```
