const user = require('../models/user');

/**
 * This returns all the users currently stored
 * @param req Request
 * @param res Response
 * @returns {Promise<void>}
 */
const getUserRecords = async (req, res) => {
    try {
        const userRecords = await user.find();
        res.status(200).json({ userRecords });
    } catch (error) {
        throw error
    }
}

/**
 * This updates a user record, from data in the request
 * @param req Request
 * @param res Response
 * @returns {Promise<void>}
 */
const updateUserRecord = async (req, res) => {
    try {
        const { params: { id }, body, } = req;
        const updateUserRecord = await user.findByIdAndUpdate({ _id: id }, body);
        const allUserRecords = await user.find();
        res.status(200).json({
            message: 'User record updated',
            userRecord: updateUserRecord,
            userRecords: allUserRecords,
        });
    }
    catch (error) {
        throw error;
    }
}

module.exports.getUserRecords = getUserRecords;
module.exports.updateUserRecord = updateUserRecord;