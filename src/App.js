import React, { useEffect } from 'react'

import axios from 'axios'

export default function App() {
  useEffect(() => {

    var config = {
      method: 'get',
      url: 'https://www.priceshoes.com/searchsuiteautocomplete/ajax/index/?q=153502',
      mode: 'no-cors',
      headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'X-NewRelic-ID': 'Vg4GVFBRDRAGXVNVBAkEUFc=',
        'X-Requested-With': 'XMLHttpRequest',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.80 Safari/537.36',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://www.priceshoes.com/',
        'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
      },
      withCredentials: true,
      credentials: 'same-origin',
    };

    axios(config)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  }, [])

  return (
    <div>
      <h1>PriceShoes</h1>
    </div>
  )
}
