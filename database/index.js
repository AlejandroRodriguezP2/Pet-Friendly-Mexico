const mysql = require('mysql2');
const mysqlConfig = require('./config.js');
const connection = mysql.createConnection(mysqlConfig);


const getVetProfiles = function() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM vetProfiles', (err, data) => {
      if(err) {
        return reject(err);
      }
      return resolve(data);
    })
  })
};


<<<<<<< HEAD
=======
const getPetProfiles = function() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM petProfiles', (err, data) => {
      if(err){
        return reject(err);
      }
      return resolve(data);
    })
  })
};
>>>>>>> 72caff336d0e2b57eae768ca19d5c11fcd2ae451


const postServicesProfiles = function(firstName, lastName, phoneNumber, address, businessName, businessType) {
 return new Promise((resolove, reject) => {
   connection.query('INSERT INTO servicesProfiles(firstName, lastName, phoneNumber, address, businessName, businessType) VALUES (?, ?, ?, ?, ?, ?)',
     [firstName, lastName, phoneNumber, address, businessName, businessType], (err, data) => {
       if(err) {
         return reject(err);
       }
       return resolve(data);
     })
  })
};


<<<<<<< HEAD
const postPetProfile = function(petName, age, breed, vaccines, dewormed, smallDescription) {
 return new Promise((resolve, reject) => {
   connection.query('INSERT INTO petProfiles(petName, age, breed, vaccines, dewormed, smallDescription) VALUES (?, ?, ?, ?, ?, ?)',
   [petName, age, breed, vaccines, dewormed, smallDescription], (err, data) => {
     if(err) {
       return reject(err);
     }
     return resolve(data);
   })
 })
};


module.exports = {
  getVetProfiles,
=======

const postPetProfile = function(petName, age, breed, vaccines, dewormed, smallDescription) {
 return new Promise((resolve, reject) => {
   connection.query('INSERT INTO petProfiles(petName, age, breed, vaccines, dewormed, smallDescription) VALUES(?, ?, ?, ?, ?, ?)',
     [petName, age, breed, vaccines, dewormed, smallDescription], (err, data) => {
       if(err) {
         return reject(err);
       }
       return resolve(data);
     })
  })
};

module.exports = {
  getVetProfiles,
  getPetProfiles,
>>>>>>> 72caff336d0e2b57eae768ca19d5c11fcd2ae451
  postServicesProfiles,
  postPetProfile
};
