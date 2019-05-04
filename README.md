# Conway's Game Of Life

Conway's game of life implemented in webassembly using Rust and Javascript

## Setup
- At project root
```
wasm-pack build
```

- At `pkg/`
```
npm link
```

- at `www/`
```
npm link game-of-life
npm start
```