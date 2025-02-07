const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../Models/Listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlast";

main().then(() => {
    console.log("connected to server");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "678f3c00add534aa4b06aaf3"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();
