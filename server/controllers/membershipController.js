const {Membership} = require('../models/membership');

/**
 * This returns all the memberships currently stored
 * @param req Request
 * @param res Response
 * @returns {Promise<void>}
 */
const getMembershipRecords = async (req, res) => {
    try {
        const membershipRecords = await Membership.find();
        res.status(200).json({ membershipRecords });
    } catch (error) {
        throw error
    }
}

module.exports.getMembershipRecords = getMembershipRecords;