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
import low  from 'lowdb';
//db.default({name:'linfeng', arr:[1,2,3,4,5,6]});
// var LocalStorage = require('lowdb/adapters/LocalStorage');
import LocalStorage  from 'lowdb/adapters/LocalStorage';

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

db.set('posts',result)
    .write();

var filterResult = db.get('posts').map('name').value();

filterResult.forEach((name)=>{console.log(name)});

console.log(db);

require('../scss/b.scss');
require('../scss/c.scss');

