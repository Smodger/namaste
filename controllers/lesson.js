const Lesson = require('../models/Lesson');
//Simple version, without validation or sanitation
exports.createLessons = function(req, res) {
    res.send('Greetings from the Test controller!');
};
