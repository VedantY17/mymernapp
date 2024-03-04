const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://vedantny:devil45@cluster0.fj9ayso.mongodb.net/mymernproject?retryWrites=true&w=majority&appName=Cluster0";
const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");

    const fetched_data = mongoose.connection.db.collection("smartphones");
    const data = await fetched_data.find({}).toArray();

    const smartphoneCategory = mongoose.connection.db.collection("smartphoneCategories");
    const catData = await smartphoneCategory.find({}).toArray();

    if (data.length === 0 || catData.length === 0) {
      console.log("No data found in the 'smartphoneCategories' collection.");
    } else {
      global.smartphones = data;
      global.smartphoneCategories = catData;

    }

  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

module.exports = mongoDB;
