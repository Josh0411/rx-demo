

 function getTime() {
     return new Promise((resolve, reject) => {
         setTimeout(() => { resolve(new Date()) });
     });
 }

 async function main(name='linfeng') {
     var result = await getTime();

     console.log(name + '@' + result.toString());


 }

 main();
