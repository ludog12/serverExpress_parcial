const mongoose = require ("mongoose");

const connectDB=()=> mongoose.connect("mongodb+srv://LudmilaGonzalez:123456ild@cluster0.qxkppqm.mongodb.net/?retryWrites=true&w=majority")

module.exportsS= connectDB