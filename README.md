# causal-inference.js

> Opensource causal-inference package for the web

## Installation

```
npm install --save causal-inference
```

## Usage

### Creating an AB test

```javascript
// import package
const { getEffectAB } = require("causal-inference.js");

//calculate ab effect
const difference = getEffectAB(controlGroupMean, testGroupMean);

// ...
```

## Work Plan

| Methods          | Status | Description                                             |
| ---------------- | ------ | ------------------------------------------------------- |
| getEffectAB      | WIP    | Get effect of AB test of data array or just mean values |
| getABControlSize | WIP    | Provide control group size for AB test                  |
| distributeGroups | WIP    | Distribute groups to avoid effect of externalities      |

## Contributing

##### Feel free to contribute to this project, my email is luis.egvillarreal@gmail.com for any questions.

### Running Tests

```bash
npm test
```
