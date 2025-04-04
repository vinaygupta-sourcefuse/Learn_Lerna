# Learn_Lerna

To install lerna

```npx lerna init```


create a demo-is-odd package

```npx lerna create demo-is-odd```

```cd packages/demo-is-odd```

for use 'tsc' to build and use 'jest' to test 

```npm add -D typescript jest```

```npx tsc --init```

inside .gitignore file
**/dist
node_modules

then enable in tsconfig file

declartion : true;
outDir : ./dist

change package.json

  "main": "lib/demo-is-odd.js",
to
  "main": "dist/demo-is-odd.js",

and add
  "types" : "dist/demo-is-odd.d.ts",

and replace
 "files": [
    "lib"
  ],

  with

   "files": [
    "dist"
  ],

and change scripts to 

 "scripts": {
    "build":"tsc",
    "test": "jest"
  },

  this



after write test case in demo-is-odd.test.js
```
const {isOdd} = require('../dist/demo-is-odd.js');

test('isOdd should return true', () => {
  expect(isOdd(1)).toBe(true);
  expect(isOdd(3)).toBe(true);
  expect(isOdd(4)).toBe(false);
})
```

and after writing the logic in demo-is-odd.ts
```
export function isOdd(n: number): boolean {
  return n % 2 !== 0;
}
```

now run these in root folder

```npx lerna run build --scope=demo-is-odd```
```npx lerna run test --scope=demo-is-odd```




do same for the demo-is-even package

all these above steps



and after this setup nx to our lerna workspace

```npx nx init```

```npx run graph```


for creating a dependepcy 

change code in demo-is-even.ts

```
import {isOdd } from 'demo-is-odd';

export function isEven(n : number): boolean {
  return !isOdd(n);
}
```

and add a dependency in package.json file of demo-is-even package
```
 "dependencies": {
    "demo-is-odd": "*"
  },
  
```