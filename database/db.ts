import mongoose from "mongoose";

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */

const mongooConnection = {
  isConnected: 0,
};

export const connect = async () => {
  if (mongooConnection.isConnected) {
    console.log("ya estabamos conectado");
    return;
  }

  if (mongoose.connections.length > 0) {
    mongooConnection.isConnected = mongoose.connections[0].readyState;
    if (mongooConnection.isConnected === 1) {
      console.log("usando conexión anterior");
    }

    await mongoose.disconnect();
  }

  await mongoose.connect(process.env.MONGO_URL || "");
  mongooConnection.isConnected = 1;
  console.log("conectado a MongoDB", process.env.MONGO_URL);
};

export const disconnect = async () => {
  if (mongooConnection.isConnected === 0) return;
  await mongoose.disconnect();
  console.log("desconectado de MongoDB", process.env.MONGO_URL);
};
