let users = [];

for (let i = 0; i < 3; i++) {
    users[i] = structureUserInfo('Artem')('Admin');
}

users.forEach((item) => console.log(item));

/**
 * This function collects information of a user
 * 
 * @example structureUserInfo('Artem')('Admin') // {role: 'Admin', name: 'Artem'}
 * @param {string} name property name
 * @returns {Function} funtion ()
 * @param {string} role property role
 * @returns {object} Returns object with properties role & name
 */
function structureUserInfo(name) {
    let user = {};

    return function (role) {
        if (isString(name) && isString(role) && !startsWithaDigit(name) && !startsWithaDigit(role)){
            user.role = role;
            user.name = name;
            return user;
        }

        console.info(`Incorrect data input, enter this information as string.`);
        return null;
    }
}

/**
 * This function checks if a variable is string or isn't
 * 
 * @param {string} variable a variable
 * @returns {boolean} Response from condition
 */
function isString(variable) {
    return typeof variable === 'string';
}

/**
 * This function checks if a string starts with a number or not
 * 
 * @param {string} str a string
 * @returns {boolean} Response from regular expression
 */
function startsWithaDigit(str) {
    return /^\d/.test(str);
}