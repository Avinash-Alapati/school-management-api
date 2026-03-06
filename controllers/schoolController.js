const db = require("../config/db");
const calculateDistance = require("../utils/distance");

exports.addSchool = (req, res) => {

  const { name, address, latitude, longitude } = req.body;

  if (!name || !address || latitude == null || longitude == null) {
    return res.status(400).json({
      message: "All fields are required"
    });
  }

  const query =
    "INSERT INTO schools (name,address,latitude,longitude) VALUES (?,?,?,?)";

  db.query(query, [name, address, latitude, longitude], (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      message: "School added successfully",
      id: result.insertId
    });

  });
};


exports.listSchools = (req, res) => {

  const { latitude, longitude } = req.query;

  if (!latitude || !longitude) {
    return res.status(400).json({
      message: "Latitude and longitude required"
    });
  }

  db.query("SELECT * FROM schools", (err, schools) => {

    if (err) {
      return res.status(500).json(err);
    }

    const userLat = parseFloat(latitude);
    const userLon = parseFloat(longitude);

    const schoolsWithDistance = schools.map((school) => {

      const distance = calculateDistance(
        userLat,
        userLon,
        school.latitude,
        school.longitude
      );

      return {
        ...school,
        distance
      };

    });

    schoolsWithDistance.sort((a, b) => a.distance - b.distance);

    res.json(schoolsWithDistance);

  });
};