const request = require("request");

const args= process.argv.slice(2);

const url = `https://api.thecatapi.com/v1/breeds/search?name=${args[0]}`;

request(url, (err, res, body) => {
  if (!err) {
    if ((res.statusCode = 200)) {
      const data=JSON.parse(body);
      if (data.length){
        console.log(data)
      }
      else{
        console.log("cat not found!")
      }
    }
  }
  if (err) console.log(err.code)
});
