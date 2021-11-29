const axios = require('axios')
const PROD = 1
module.exports = {
  getIdentityByIdentityUUID:async (data) => {
    try {
        console.log(data);
        res = await axios({method: 'post',
        url: PROD ? 'https://hashx-api-identity-read.herokuapp.com/readIdentity':'http://localhost:8080/readIdentity',
        data: data})
        return {'err':null,'data':res.data.data,'msg':'readIdentity Request Successful & ' + res.data.msg}
      }
      catch (err) {
        return {'err':err,'data':null,'msg':'Error Calling the DataBase Layer APIs' + err}
      }
  },

  getIdentityByUserUUID:async (data) => {
    try {
        console.log(data);
        res = await axios({method: 'post',
        url: PROD ? 'https://hashx-api-identity-read.herokuapp.com/readIdentities':'http://localhost:8080/readIdentities',
        data: data})
        return {'err':null,'data':res.data.data,'msg':'readIdentities Request Successful & ' + res.data.msg}
      }
      catch (err) {
        return {'err':err,'data':null,'msg':'Error Calling the DataBase Layer APIs' + err}
      }
  },
  getIdentityByUsername: async (data) => {
    try {
          console.log(data);
          res = await axios({method: 'post',
          url: PROD ? 'https://hashx-api-identity-read.herokuapp.com/findIdentity': 'http://localhost:8080/findIdentity',
          data: data})
          return {'err':null,'data':res.data.data,'msg':'findIdentity Request Successful & ' + res.data.msg}
        }
    catch (err) {
          console.log(err);
                 return {'err':err,'data':null,'msg':'Error Calling the DataBase Layer APIs : ' + err}
    }
  },
  getAllIdentities: async (data) => {
    try {
            console.log("calling api")
            res = await axios({method: 'post',
            url: PROD? 'https://hashx-api-identity-read.herokuapp.com/findIdentities':'http://localhost:8080/findIdentities',
            data: data})  
            return {'err':null,'data':res.data.data,'msg':'findIdentities Request Successful & ' + res.data.msg}
          }
    catch (err) {
      return {'err':err,'data':null,'msg':'Error Calling the DataBase Layer APIs : ' + err}
    }
  },
  checkUsername: async (data) => {
    try {
            res = await axios({method: 'post',
            url: PROD? 'https://hashx-api-identity-read.herokuapp.com/checkUsername':'http://localhost:8080/https:/checkUsername',
            data: data})
            return {'err':null,'data':res.data.data,'msg':'checkUsername Request Successful & ' + res.data.msg}
          }
    catch (err) {
      return {'err':err,'data':null,'msg':'Error Calling the DataBase Layer APIs : ' + err}
    }
  },
  createIdentity: async (data) => {
    try {
            res = await axios({method: 'post',
            url: PROD? 'https://hashx-api-identity-cud.herokuapp.com/createIdentity ':'http://localhost:8080/createIdentity ',
            data: data})
            return {'err':null,'data':res.data.data,'msg':'createIdentity  Request Successful & ' + res.data.msg}
          }
    catch (err) {
      return {'err':err,'data':null,'msg':'Error Calling the DataBase Layer APIs : ' + err}
    }
  },
  updateUsername: async (data) => {
    try {
            res = await axios({method: 'post',
            url: PROD? 'https://hashx-api-identity-cud.herokuapp.com/updateUsername':'http://localhost:8080/updateUsername',
            data: data})
            return {'err':null,'data':res.data.data,'msg':'readIdentityByUsername Request Successful & ' + res.data.msg}
          }
    catch (err) {
      return {'err':err,'data':null,'msg':'Error Calling the DataBase Layer APIs : ' + err}
    }
  },
  updateShowcase: async (data) => {
    try {
            res = await axios({method: 'post',
            url: PROD? 'https://hashx-api-identity-cud.herokuapp.com/readIdentityByUsername':'http://localhost:8080/readIdentityByUsername',
            data: data})
            return {'err':null,'data':res.data.data,'msg':'readIdentityByUsername Request Successful & ' + res.data.msg}
          }
    catch (err) {
      return {'err':err,'data':null,'msg':'Error Calling the DataBase Layer APIs : ' + err}
    }
  },
  matchPassword: async (data) => {
    try {
            res = await axios({method: 'post',
            url: PROD? 'https://hashx-api-password-read.herokuapp.com/matchPassword':'http://localhost:8080/matchPassword',
            data: data})
            return {'err':null,'data':res.data.data,'msg':'matchPassword Request Successful & ' + res.data.msg}
          }
    catch (err) {
      return {'err':err,'data':null,'msg':'Error Calling the DataBase Layer APIs : ' + err}
    }
  },
  updateProfile: async (data) => {
    try {
            res = await axios({method: 'post',
            url: PROD? 'https://hashx-api-identity-cud.herokuapp.com/updateProfile':'http://localhost:8080/updateProfile',
            data: data})
            return {'err':null,'data':res.data.data,'msg':'updateProfile Request Successful & ' + res.data.msg}
          }
    catch (err) {
      return {'err':err,'data':null,'msg':'Error Calling the DataBase Layer APIs : ' + err}
    }
  },
  deleteIdentity: async (data) => {
    try {
            res = await axios({method: 'post',
            url: PROD? 'https://hashx-api-identity-cud.herokuapp.com/deleteIdentity':'http://localhost:8080/deleteIdentity',
            data: data})
            return {'err':null,'data':res.data.data,'msg':'deleteIdentity Request Successful & ' + res.data.msg}
          }
    catch (err) {
      return {'err':err,'data':null,'msg':'Error Calling the DataBase Layer APIs : ' + err}
    }
  },

}