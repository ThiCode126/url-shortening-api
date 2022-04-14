const axios = require('axios');


export const getShortLink = async (link) => {
  const dataRequest = await axios.post("https://api.shrtco.de/v2/shorten?url=" + link)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      return error
    })

  return dataRequest
}