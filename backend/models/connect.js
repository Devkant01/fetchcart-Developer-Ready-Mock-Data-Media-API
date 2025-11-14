const mongoose = require("mongoose");
const { db_connection } = require("../config/config");

let isConnected = false;

async function connect() {
    if (isConnected) return;
    try {
        await mongoose.connect(db_connection);
        isConnected = true;
        console.log("Database connected successfully");
    } catch (e) {
        console.log("Failed to Connect DB ", e.message);
    }
}

module.exports = { mongoose, connect };