import User from "../Models/User.js";

export const registerUser = async (req, res) => {
  const { startString } = req.body;

  try {
    const existingUser = await User.findOne({ startString });

    if (existingUser) {
      return res.status(200).json({
        message: "User already exists",
        redirect: true,
      });
    }

    const newString = new User({ startString });
    await newString.save();
    res.status(201).json({
      message: "String registered successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error registering user",
      success: false,
    });
  }
};

export const addText = async (req, res) => {
  const { startString, textString } = req.body;

  try {
    const user = await User.findOne({ startString });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    user.textString = textString;
    await user.save();

    res.status(200).json({
      message: "Text added successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error adding text",
      success: false,
    });
  }
};


