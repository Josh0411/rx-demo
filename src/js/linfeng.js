function getTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(new Date()) });
    });
}

async function main(name = 'linfeng') {
    var result = await getTime();

    console.log(name + '@' + result.toString());


}

main();


// var low = require('lowdb');
import low from 'lowdb';
//db.default({name:'linfeng', arr:[1,2,3,4,5,6]});
// var LocalStorage = require('lowdb/adapters/LocalStorage');
import LocalStorage from 'lowdb/adapters/LocalStorage';

const adapter = new LocalStorage('test_linfeng_db')
const db = low(adapter)

db.defaults({ posts: [] })
    .write();

// Data is automatically saved to localStorage
/*db.get('posts')
    .push({ title: 'lowdb' })
    .write();*/

var result = [];
for (let i = 1; i <= 5; i++) {
    result.push({ id: i, name: "linfeng" + i });
}

db.set('posts', result)
    .write();

var filterResult = db.get('posts').map('name').value();

filterResult.forEach((name) => { console.log(name) });

console.log(db);

require('../scss/b.scss');
require('../scss/c.scss');
var fw = require('./framework');
fw.say();

var $ = require('jquery');





let pro = Promise.resolve();
var arr = ['http://jbcdn2.b0.upaiyun.com/2017/10/e50c839ae2521394149c8730da784227.jpg', 'http://jbcdn2.b0.upaiyun.com/2017/10/2aaf2f6050bc72c25fa8203c9056ac7f.png', 'http://self-storage.b0.upaiyun.com/2017/10/09/150756387698667375.png'];
var loadImg = (url) => {
    return new Promise((resolve, reject) => {
        var img = document.createElement('img');
        img.src = url;
        img.onload = () => {
            resolve(img);
        };
    });
};

/*for (let i = 0; i < 3; i++) {
    pro = pro.then(() => loadImg(arr[i])).then((img) => {
        console.log(img);
    });
}*/

arr.reduce((result,value)=>{
    return result.then(() => loadImg(value));
},Promise.resolve());



require.ensure([],()=>{
    var utils = require('../utils/utils.js');
    console.log(utils.add(2,3));
});