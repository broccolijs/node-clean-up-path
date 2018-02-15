#!/usr/bin/env node

"use strict";

/* eslint-disable no-console */

let isResolvedPosix = require("./").isResolvedPosix;
let isResolvedWin32 = require("./").isResolvedWin32;
let path = require("path");

let n = 1000000;

console.time("isResolvedPosix");
for (let i = 0; i < n; i++) {
  if (!isResolvedPosix("/foo/bar/baz")) throw "never happens";
}
console.timeEnd("isResolvedPosix");

console.time("isResolvedWin32");
for (let i = 0; i < n; i++) {
  if (!isResolvedWin32("c:\\foo\\bar\\baz")) throw "never happens";
}
console.timeEnd("isResolvedWin32");

// "Can't we just unconditionally call path.resolve on any absolute path name?"

console.time("path.posix.resolve");
for (let i = 0; i < n; i++) {
  if (path.posix.resolve("/foo/bar/baz") === "x") throw "never happens";
}
console.timeEnd("path.posix.resolve");

console.time("path.win32.resolve");
for (let i = 0; i < n; i++) {
  if (path.win32.resolve("c:\\foo\\bar\\baz") === "x") throw "never happens";
}
console.timeEnd("path.win32.resolve");
