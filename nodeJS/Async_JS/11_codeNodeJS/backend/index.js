// console.log("Hello world!");

// npm install packageName
// npm i packageName

// npm uninstall packageName

// to install a package as a dev dependencies
// npm i packageName --save-dev


// package.json -> metadata, script, and your dependencies
// package-lock.json -> dependencies, dependencies of dependencies

// 4.21.00
// 4.21.01
// 4.21.02
// 4.21.03
// 4.22.00
// 4.23.00
// 4.24.00
// xx.yy.zz
// zz -> patch update
// yy -> minor update
// xx -> major update
// 4.24.00
// 5.00.00
// 6.00.00

// 20.17.01
// 20.17.03

// 20.18.00
// 20.19.00

// 22.00.00
// 23.00.00


// 20.17.01 -> this will not be updated automatically, it is going to stick to this particular version.
// ^20.17.01 -> In carrot sign, if you update a package, it will update your patch updates and minor. But not the major ones
// 20.17.02
// 20.17.03
// 20.17.04
// 20.18.00
// 20.19.00

// ~20.17.01 -> In tilda sign, it will only update the patch updates. But update any minor or major
// 20.17.01
// 20.17.02
// 20.17.03
// 20.18.00 -> it will not update this one