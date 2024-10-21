// // (function () {
// document.getElementById("myElement");
// let p = new Promise((resolve, reject) => {
//   console.log("promise is pending");
//   setTimeout(() => {
//     console.log("bceeaba");
//     resolve(true);
//   }, 1000);
// });
// // });
// console.log("buegrsjanfkjewh");

(function () {
  // document.getElementById("myElement");
  let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promiseAPI 1");
      resolve(true);
    }, 1000);
  });
  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("promiseAPI 2")
      resolve("promiseAPI 2");
      resolve(true);
    }, 2000);
  });
  let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promiseAPI 3");
      resolve(true);
    }, 3000);
  });
  let promiseAPI = Promise.all([p1, p2, p3]);
  // let promiseAPI = Promise.allSettled([p1, p2, p3]);
  // let promiseAPI = Promise.race([p1, p2, p3]);
  // let promiseAPI = Promise.any([p1, p2, p3]);
  // let promiseAPI = Promise.resolve(1);
  // let promiseAPI = Promise.reject(1);
  // promiseAPI.then((value) => {
  console.log("---> ", value);
});
// })();
