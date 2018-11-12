'use strict';

module.exports = function(User) {

    User.validatesUniquenessOf('mobileNumber', {message: 'Mobile number already registered'})
};
