const elements = require("./elements.js");
const compounds = {
    sodiumChloride: {
        name: elements["sodium"]["name"] + " " + elements["chloride"]["name"],
        
        atomicWeight: elements["sodium"]["atomicWeight"] + elements["chloride"]["atomicWeight"]
    }
};

module.exports = compounds;