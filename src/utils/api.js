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

export const defaultShorten = [
  {
    originalLink: "https://www.frontendmentor.io",
    shortenLink: "https://rel.ink/k4lKyk",
  },
  {
    originalLink: "https://twitter.com/frontendmentor",
    shortenLink: "https://rel.ink/gxOXp9",
  },
  {
    originalLink: "https://www.linkedin.com/company/frontend-mentor",
    shortenLink: "https://rel.ink/gob3X9",
  },
]