const profile = require('../Models/profile');


const createProfile = async(req,res) => {
    try {
        const newProfile = new profile(req.body);
        await newProfile.save();
        res.send({
            message: "Profile created successfully",
            success: true,
            data: null,
          });
    } catch (error) {
        res.send({
            message: error.message,
            success: false,
            data: null,
          });
    }
}

const updateProfile = async (req, res) => {
    try {
       await profile.findByIdAndUpdate(req.body._id, req.body);
      res.send({
        message: "Profile updated successfully",
        data: null,
        success: true,
      });
    } catch (error) {
      res.send({
        message: "Profile updation failed",
        data: error,
        success: false,
      });
    }
  };



exports.createProfile = createProfile;
exports.updateProfile = updateProfile;
