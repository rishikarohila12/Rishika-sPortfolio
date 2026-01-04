import Message from "../models/Message.js";

export const sendMessage = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await Message.create({ name, email, message });
    res.status(200).json({ success: true });
  } catch {
    res.status(500).json({ success: false });
  }
};
