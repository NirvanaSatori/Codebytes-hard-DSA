// for (var i = 0; i < 3; i++) {
//     setTimeout(function() { console.log(i); }, 1000 + i);
//   }

// (function() {
//     var a = b = 5;
//   })();
  
//   console.log(b);

// async function getData() {
//     return await Promise.resolve('Hello!');
//   }
  
//   const data = getData();
//   console.log(data);

function resolveAfter10Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 10000);
    });
  }
console.log(resolveAfter10Seconds())