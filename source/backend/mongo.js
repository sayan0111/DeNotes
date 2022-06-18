const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://sayan011:mongoSayansc3qwerty@cluster0.m5bxi.mongodb.net/?retryWrites=true&w=majority

`;

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

mongoose
  .connect(url)
  .then((result) => {
    console.log("connected");

    Note.find({}).then((result) => {
      result.forEach((note) => {
        console.log(note);
      });
      mongoose.connection.close();
    });
    return note.save();
  })
  .then(() => {
    console.log("note saved!");
    return mongoose.connection.close();
  })
  .catch((err) => console.log(err));
