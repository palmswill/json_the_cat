const request = require("request");

const url = `https://api.thecatapi.com/v1/breeds/search?`;

const fetchBreedDescription = (breedName, callback) => {
  let error;
  let body;
  request(`${url}name=${breedName}`, (err, res, body) => {
    if (!err) {
      let result = JSON.parse(body)[0];
      if (result) {
        callback(null, JSON.parse(body)[0].description);
      } else {
        callback("cat not found", null);
      }
    }

    if (err) callback(err, null);
  });
};

module.exports = { fetchBreedDescription };
