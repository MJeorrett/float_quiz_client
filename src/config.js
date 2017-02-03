import runtimeEnv from '@mars/heroku-js-runtime-env'

const env = runtimeEnv()
const apiKey = env.REACT_APP_API_KEY
const apiUrl = env.REACT_APP_API_URL + '?access_token=' + apiKey

const config = {
  api_url: apiUrl
}

export default config
