const mongoose = require("mongoose");

const ResourceSchema = new mongoose.Schema({
  Food: {
    type: String,
  },
  AffordableHousing: {
    type: String,
  },
  RentalAssistance: {
    type: String,
  },
  TempSNDV:{
    type: String,
  },
  TempSDV:{
    type: String,
  },
  Clothing: {
    type: String,
  }
});

module.exports = mongoose.model("Resource", ResourceSchema);