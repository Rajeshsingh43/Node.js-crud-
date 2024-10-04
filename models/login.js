const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const loginSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required:true,
    },
})



loginSchema.pre('save', async function (next) {
    const login= this;

    // Hash the password only if it has been modified (or is new)
    if (!login.isModified('password')) return next();

    try {
        // Generate salt
        const salt = await bcrypt.genSalt(10);

        // Hash the password with the generated salt
        const hashedPassword = await bcrypt.hash(person.password, salt,);

        // Override the plain password with the hashed one
        person.password = hashedPassword;
        next();

    } catch (error) {
        return next(error);
    }
});

// Method to compare the candidate password with the hashed password
loginSchema.methods.comparePassword = async function (candidatePassword) {
    try {
        // Use bcrypt to compare the provided password with the hashed password
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    } catch (error) {
        throw error;
    }
}

const login = mongoose.model('login', loginSchema);
module.exports = login;