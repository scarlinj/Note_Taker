const routes = require('./routes');
// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');
const express = require('express');
// const res = require('express/lib/response');
const PORT = process.env.PORT || 3001;
const app = express();
const fs = require('fs');
const path = require('path');
// const { notes } = require('./public/lib/notes')

// parse incoming string or array data
app.use(express.urlencoded({
    extended: true
}));
// parse incoming JSON data
app.use(express.json());

// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);

app.use(express.static('public'));
app.use('/', routes);

// Module code below, to reference:
// 
// function filterByQuery(query, animalsArray) {
//     let personalityTraitsArray = [];
//     // Note that we save the animalsArray as filteredResults here:
//     let filteredResults = animalsArray;
//     if (query.personalityTraits) {
//         // Save personalityTraits as a dedicated array.
//         // If personalityTraits is a string, place it into a new array and save.
//         if (typeof query.personalityTraits === 'string') {
//             personalityTraitsArray = [query.personalityTraits];
//         } else {
//             personalityTraitsArray = query.personalityTraits;
//         }
//         // Loop through each trait in the personalityTraits array:
//         personalityTraitsArray.forEach(trait => {
//             // Check the trait against each animal in the filteredResults array.
//             // Remember, it is initially a copy of the animalsArray,
//             // but here wes're updating it for each trait in the .forEach() loop.
//             // For each trait being targeted by the filter, the filteredResults
//             // array will then contain only the entries that contain the trait,
//             // so at the end we'll have an array of animals that have every one 
//             // of the traits when the .forEach() loop is finished.
//             filteredResults = filteredResults.filter(
//                 animal => animal.personalityTraits.indexOf(trait) !== -1
//             );
//         });
//     }
//     if (query.diet) {
//         filteredResults = filteredResults.filter(animal => animal.diet === query.diet);
//     }
//     if (query.species) {
//         filteredResults = filteredResults.filter(animal => animal.species === query.species);
//     }
//     if (query.name) {
//         filteredResults = filteredResults.filter(animal => animal.name === query.name);
//     }
//     return filteredResults;
// }

// function findById(id, animalsArray) {
//     const result = animalsArray.filter(animal => animal.id === id)[0];
//     return result;
// }

// function createNewAnimal(body, animalsArray) {
//     const animal = body;

//     // our function's main code will go here!
//     animalsArray.push(animal);
//     fs.writeFileSync(
//         path.join(__dirname, './data/animals.json'),
//         JSON.stringify({
//             animals: animalsArray
//         }, null, 2)
//     );
//     // return finished code to post route for response
//     return animal;
// }

// function validateAnimal(animal) {
//     if (!animal.name || typeof animal.name !== 'string') {
//         return false;
//     }
//     if (!animal.species || typeof animal.species !== 'string') {
//         return false;
//     }
//     if (!animal.diet || typeof animal.diet !== 'string') {
//         return false;
//     }
//     if (!animal.personalityTraits || !Array.isArray(animal.personalityTraits)) {
//         return false;
//     }
//     return true;
// }

// app.get('/routes/apiRoutes/index', (req, res) => {
//     res.json(notes);
//     console.log(req.query);
// });

// app.get('./public/lib/notes', (req, res) => {
//     let results = notes;
//     if (req.query) {
//         results = filterByQuery(req.query, results);
//     }
//     // res.json(notes);
//     console.log(req.query)
//     res.json(results);
//   });

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});