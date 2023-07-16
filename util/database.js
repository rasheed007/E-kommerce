// // const Sequelize = require('sequelize');

// // const sequelize = new Sequelize('node-complete', 'root', 'Olarasheed123', {
// //     dialect: 'mysql',
// //     host: 'localhost'
// // });

// // module.exports = sequelize

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

// let _db;


// const mongoConnect = callback => {
//     MongoClient.connect('mongodb+srv://rasheed123:olarasheed123@cluster0.6dtruno.mongodb.net/shop?retryWrites=true&w=majority')
//     .then(client => {
//         console.log('Connected ma nigga!!');
//         _db = client.db()
//         callback(client);
//     })
//     .catch(err => {
//         console.log(err);
//     });
// };

// const getDb = () => {
//     if (_db) {
//         return _db;
//     }
//     throw 'No database found';
// };

// exports.mongoConnect = mongoConnect;
// exports.getDb = getDb;

