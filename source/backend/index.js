// const { response, request } = require("express");
// const express = require("express");
// const Note = require('./models/note')
// require('dotenv').config()
// const app = express();
// let notes = [
//   {
//     id: 1,
//     content: "Graph Theory",
//     date: "2022-05-30T17:30:31.098Z",
//     important: true,
//   },
//   {
//     id: 2,
//     content: "Laplace",
//     date: "2022-05-30T18:39:34.091Z",
//     important: false,
//   },
//   {
//     id: 3,
//     content: "Polynomials",
//     date: "2022-05-30T19:20:14.298Z",
//     important: true,
//   },
// ];

// const mongoose = require('mongoose')

// // DO NOT SAVE YOUR PASSWORD TO GITHUB!!
// const url =
//   `mongodb+srv://sayan011:mongoSayansc3qwerty@cluster0.m5bxi.mongodb.net/?retryWrites=true&w=majority`

// mongoose.connect(url)

// const noteSchema = new mongoose.Schema({
//   content: String,
//   date: Date,
//   important: Boolean,
// })

// // const Note = mongoose.model('Note', noteSchema)


// noteSchema.set('toJSON', {
//   transform: (document, returnedObject) => {
//     returnedObject.id = returnedObject._id.toString()
//     delete returnedObject._id
//     delete returnedObject.__v
//   }
// })




// const PORT = 3001
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })
// app.use(express.json())

// app.get("/", (request, response) => {
//   response.send("<h1>He He</h1>");
// });

// // app.get("/api/notes", (request, response) => {
// //   const note = request.body
// //   console.log(note)
// //   response.json(notes);

// // });

// app.get('/api/notes', (request, response) => {
//   Note.find({}).then(notes => {
//     response.json(notes)
//   })
// })





// app.get("/api/notes/:id", (request, response) => {
//   const id = Number(request.params.id);
//   const note = notes.find((note) => {
//     console.log(note.id, typeof note.id, id, typeof id, note.id === id);
//     return note.id === id;

//     if (note) {
//       response.json(note);
//     } else {
//       response.status(404).end();
//     }
//   });
//   console.log(note);
//   response.json(note);
// });
// const generateId = () => {
//   const maxId = notes.length > 0
//     ? Math.max(...notes.map(n => n.id))
//     : 0
//   return maxId + 1
// }

// app.post('/api/notes', (request, response) => {
//   const body = request.body

//   if (!body.content) {
//     return response.status(400).json({ 
//       error: 'content missing' 
//     })
//   }

//   const note = {
//     content: body.content,
//     important: body.important || false,
//     date: new Date(),
//     id: generateId(),
//   }

//   notes = notes.concat(note)

//   response.json(note)
// })

// app.delete('/api/notes/:id',(request,response)=>{
//   const id=Number(request.params.id)
//   notes=notes.filter(notes=>note.id !==id)

//   response.status(204).end()
// })

// app.listen(PORT, () => {
//   console.log(`Server Running on port ${PORT}`);
// });

const mongoose = require('mongoose');
require('./app/routes/app.routes.js')(app);

const express = require('express');
const bodyParser = require('body-parser');

const app = express();



mongoose.Promise = global.Promise;


mongoose.connect(YOUR_MONGODB_URL, {
  useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to the database");    
}).catch(err => {
  console.log('Could not connect to the database. Error...', err);
  process.exit();
});


mongoose.connect(YOUR_MONGODB_URL, 
  {
    useNewUrlParser: true,
  }
)
.then(() => {
  console.log("Successfully connected to the database");
})
.catch((err) => {
  console.log("Could not connect to the database. Error...", err);
  process.exit();
});

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get("/", (req, res) => {
res.json({ message: "Server is running :D" });
});

let PORT = 8080;

app.listen(PORT, () => {
console.log(`Server is listening on port ${PORT}`);
});




