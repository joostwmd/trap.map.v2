const btoa = require('btoa')
const fetch = require('cross-fetch');


const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const tokenEndpoint = "https://accounts.spotify.com/api/token"




//PUBLIC TOKEN
const fetchPublicToken = async () => {
  const result = await fetch(`${tokenEndpoint}`, {
      method : 'POST',
      headers : {
          'Content-Type' : 'application/x-www-form-urlencoded',
          'Authorization' : 'Basic ' + btoa(`${client_id}:${client_secret}`)
      },
      body : 'grant_type=client_credentials'
  })

  const data = await result.json()
  return data.access_token
}

module.exports = {fetchPublicToken}