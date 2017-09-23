const SolrNode = require('solr-node');
const people = require('./people.json');

var client = new SolrNode({
  host: '127.0.0.1',
  port: '8983',
  core: 'mycore',
  protocol: 'http'
});

// Add
//Solr adds ID to each document by default, however, if you specify an id, solr will use that instead.

// const data = {
//   website: 'pentacode',
//   url: 'http://www.penta-code.com',
//   author: 'whyzhi',
//   twitter: 'https://www.twitter.com/pentacodevids',
//   youtube: 'https://www.youtube.com/pentacode',
//   facebook: 'https://www.facebook.com/pentacode'
// };

// client.update(data, function(err, result) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log('Response:', result.responseHeader);
// });

//-------------------------------------------------------------------------------------------

// // Add a bunch of docs
// people.forEach((person) => {
//   client.update(person, function(err, result) {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log('Response:', result.responseHeader);
//   });
// });

//-------------------------------------------------------------------------------------------

// // Delete
// const stringQuery = 'id:2';    // delete document with id 2
// const deleteAllQuery = '*';    // delete all
// const objectQUery = {id: 'd7497504-22d9-4a22-9635-88dd437712ff'};   // Object query
// client.delete(deleteAllQuery, function(err, result) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log('Response:', result.responseHeader);
// });

//-------------------------------------------------------------------------------------------

// Search
const authorQuery = {
  author: 'whyzhi'
};

// const genderQuery = {
//   gender: 'Female'
// };

// Build a search query var
const searchQuery = client.query()
  .q(authorQuery)
  .addParams({
    wt: 'json',
    indent: true
  })
  // .start(1)
  // .rows(1)

client.search(searchQuery, function (err, result) {
  if (err) {
    console.log(err);
    return;
  }

  const response = result.response;
  console.log(response);

  if (response && response.docs) {
    response.docs.forEach((doc) => {
      console.log(doc);
    })
  }
});