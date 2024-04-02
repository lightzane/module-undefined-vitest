export function test() {
  return import.meta.url;
  // returns path/to/main.ts
}

console.log('output from npm start:', test());
