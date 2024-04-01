export function test() {
  return module.filename;
  // returns path/to/main.ts
}

console.log('output from npm start:', test());
