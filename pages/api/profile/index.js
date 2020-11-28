var request = require('request');


export default (req, res) => {
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

  var options = {
    'method': 'GET',
    'url': 'https://rest.priceshoes.com/ecommerce/kiosko/login?IdSocio=071500011090',
    'headers': {
      'authorization': 'Basic a2lvc2NvczpLMSpzYzAkMjAxOCM=',
      'Content-Type': 'application/json',
      // 'Host': 'rest.priceshoes.com',
      // 'Cookie': 'BIGipServerpool_BUS_7805=2214701248.32030.0000'
    }
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    res.json({ data: JSON.parse(response.body)})
  });
}



