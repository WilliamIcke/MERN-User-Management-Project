const axios = require("axios");
const baseUrl = 'http://localhost:3001';

/**
 * This is the API call to retrieve the user records from the server
 * @returns {Promise<*>}
 */
export const getUserRecords = async () => {
    try {
        const users = await axios.get(
            baseUrl + '/user/'
        )
        return users
    } catch (error) {
        throw new Error(error)
    }
}

/**
 * This is the API call to retrieve the membership records from the server
 * @returns {Promise<*>}
 */
 export const getMembershipRecords = async () => {
    try {
        const memberships = await axios.get(
            baseUrl + '/membership/'
        )
        return memberships
    } catch (error) {
        throw new Error(error)
    }
}

/**
 * This call updates a user record using form data along with user ID
 * @param userRecord
 * @returns {Promise<*>}
 */
export const updateUserRecord = async (userRecord) => {
    try {
        const updatedUserRecord = await axios.put(
            baseUrl + '/user/' + userRecord._id,
            userRecord
        )
        return updatedUserRecord
    } catch (error) {
        throw new Error(error)
    }
}