exports.extractToken = (req) => req.headers?.authorization?.split(" ")[1];
