// Sets
var s = new Set();
s.add("hello").add("goodbye").add("hello");
console.log(s.size);
console.log(s.has("hello"));
console.log(s);

// Maps
var m = new Map();
m.set("hello", 42);
m.set(s, 34);
m.set("weak?", { extra: 42 });
console.log(m.get(s));
console.log(m.get("hello"));
console.log(m.get("hellO"));
console.log(m.get("weak?"));
console.log(m);

// Weak Maps
var wm = new WeakMap();
var key1 = new String("weak?");
var key2 = new String("weak?");
wm.set(key1, { extra: 42 });
console.log(wm);
console.log(wm.size);
console.log("key1 : " + wm.get(key1));
console.log("key2 : " + wm.get(key2));


// Weak Sets
var ws = new WeakSet();
var obj = { data: 42 };
ws.add(key1);
ws.add(obj);
console.log(ws.has({ data: 42 }));
console.log(ws.has(obj));
console.log(ws.has(key1));
console.log(ws.has(key2));
// Because the added object has no other references, it will not be held in the set
/**
 * This can be useful in situations where you want to "tag" objects without
 * actually mutating them (setting a property on them). Lots of algorithms
 * contain some sort of "if x was already seen" condition (a JSON.stringify
 * cycle detection might be a good example), and when you work with user-provided
 * values the use of a Set/WeakSet would be advisable. The advantage of a WeakSet
 * here is that its contents can be garbage-collected while your algorithm
 * is still running, so it helps to reduce memory consumption
 * (or even prevents leaks) when you are dealing with lots of data that is
 * lazily (possibly even asynchronously) produced.
 */