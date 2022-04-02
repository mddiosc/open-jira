import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../../database";
import { Entry, IEntry } from "../../../../models";

type Data = { message: string } | IEntry;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getEntry(req, res);
    case "PUT":
      return putEntry(req, res);
    case "DELETE":
      return deleteEntry(req, res);

    default:
      return res.status(400).json({ message: "Method not allowed" });
  }
}

const getEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect();

  try {
    const entry = await Entry.findOne({ _id: req.query.id });
    await db.disconnect();
    if (!entry) {
      return res.status(404).json({ message: "Entry not found" });
    }
    return res.status(200).json(entry);
  } catch (error) {
    await db.disconnect();
    return res
      .status(500)
      .json({ message: "Algo salio mal, revisar consola del servidor" });
  }
};

const putEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;
  await db.connect();
  const entry = await Entry.findById(id);
  if (!entry) {
    await db.disconnect();
    return res.status(404).json({ message: "Entry not found" });
  }
  const { description = entry.description, status = entry.status } = req.body;

  try {
    const updateEntry = await Entry.findByIdAndUpdate(
      id,
      { description, status },
      { runValidators: true, new: true }
    );
    await db.disconnect();
    return res.status(200).json(updateEntry!);
  } catch (error) {
    await db.disconnect();
    console.log(error);
    return res
      .status(500)
      .json({ message: "Algo salio mal, revisar consola del servidor" });
  }
};

const deleteEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;
  if (!id) {
    return res.status(400).json({ message: "Id is required" });
  }
  try {
    await db.connect();
    await Entry.findByIdAndDelete(id);
    await db.disconnect();
    return res.status(200).json({ message: "Entry deleted" });
  } catch (error) {
    await db.disconnect();
    console.log(error);
    return res
      .status(500)
      .json({ message: "Algo salio mal, revisar consola del servidor" });
  }
};
