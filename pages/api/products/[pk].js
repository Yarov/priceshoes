import axios from 'axios'

export default async (req, res) => {
  const {
    query: { pk },
  } = req
  const request = await axios.get(`https://www.priceshoes.com/searchsuiteautocomplete/ajax/index/\?q\=${pk}`)
  res.statusCode = 200
  res.json({...request.data.products})
}