import Legends from "../model/legend.model.js";

export const getFighter = async (req, res) => {
  try {
    const fighter = await Legends.find();
    res.status(200).json(fighter);
  } catch (e) {
    console.log("Error: ", e);
    res.status(500).json(e);
  }
};
