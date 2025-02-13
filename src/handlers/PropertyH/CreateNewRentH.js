const createProperty = require("../../controllers/PropertyC/CreateNewRent");

const createPropertyH = async (req, res) => {
  const form = req.body;
  try {
    const response = await createProperty(form);
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "Failed to create", error: error.message });
  }
};

module.exports = createPropertyH;