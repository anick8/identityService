const cud = require('./cudLogicLibrary')
const get = require('./getLogicLibrary')
exports.getProfile = async (req) => {
  var body = req.body; 
  console.log(body);
  result = await get.createWallet(body)
  if (result.err)return{'err':result.err,'data':null,'msg':result.msg}
  return{'err':null,'data':result.data,'msg':result.msg}
}
exports.getIdentityByUserUUID = async (req) => {
  var body = req.body; 
  console.log(body);
  result = await get.getIdentityByUserUUID(body)
  if (result.err) return{'err':result.err,'data':null,'msg':result.msg}
  return{'err':null,'data':result.data,'msg':result.msg}
    
}
exports.getIdentityByUsername = async (req) => {
  var body = req.body; 
  console.log(body);
  result = await get.getIdentityByUsername(body)
  if (result.err) return{'err':result.err,'data':null,'msg':result.msg}
  return{'err':null,'data':result.data,'msg':result.msg}    
}
exports.getAllIdentities = async (req) => {
  var body = req.body; 
  console.log(body);
  result = await get.getAllIdentities(body)
  if (result.err) return{'err':result.err,'data':null,'msg':result.msg}
  return{'err':null,'data':result.data,'msg':result.msg}    
}
exports.createIdentity = async (req) => {
  var body = req.body; 
  console.log(body);
  result = await cud.createIdentity(body)
  if (result.err) return{'err':result.err,'data':null,'msg':result.msg}
  return{'err':null,'data':result.data,'msg':result.msg}    
}
exports.updateUsername = async (req) => {
  var body = req.body; 
  console.log(body);
  result = await cud.updateUsername(body)
  if (result.err) return{'err':result.err,'data':null,'msg':result.msg}
  return{'err':null,'data':result.data,'msg':result.msg}    
}
exports.updateIdentity = async (req) => {
  var body = req.body; 
  console.log(body);
  result = await cud.updateIdentity(body)
  if (result.err) return{'err':result.err,'data':null,'msg':result.msg}
  return{'err':null,'data':result.data,'msg':result.msg}    
}
exports.updateShowcase = async (req) => {
  var body = req.body; 
  console.log(body);
  result = await cud.updateShowcase(body)
  if (result.err) return{'err':result.err,'data':null,'msg':result.msg}
  return{'err':null,'data':result.data,'msg':result.msg}    
}
exports.deleteIdentity = async (req) => {
  var body = req.body; 
  console.log(body);
  result = await cud.deleteIdentity(body)
  if (result.err) return{'err':result.err,'data':null,'msg':result.msg}
  return{'err':null,'data':result.data,'msg':result.msg}    
}


  