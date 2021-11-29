const requestLibrary = require('./requestLibrary')
exports.getProfile = async (body) => {
    try{
        res = await requestLibrary.getIdentityByUserName({'IdentityUUID':body.IdentityUUID})
        if(res.err) return{'err':res.err,'data':null,'msg':res.msg}
        return{'err':null,'data':res.data,'msg':' got Profile & '+res.msg}    
    }
    catch(err)
    {
    return{'err':err,'data':null,'msg':'Code Failed at calling getProfile'}
    }
}
exports.getIdentityByUserUUID = async (body) => {
  try{
    res = await requestLibrary.getIdentityByUserUUID({'UserUUID':body.UserUUID})
    if(res.err) return{'err':res.err,'data':null,'msg':res.msg}
    return{'err':null,'data':res.data,'msg':'Successfully got Identity By UserUUID & '+res.msg}    
  }
  catch(err)
  {
    return{'err':err,'data':null,'msg':'Code Failed at calling getIdentityByUserUUID'}
  }
}
exports.getIdentityByUsername = async (body) => {
  try{
    res = await requestLibrary.getIdentityByUsername({'Username':body.Username})
    if(res.err) return{'err':res.err,'data':null,'msg':res.msg}
    return{'err':null,'data':res.data,'msg':'Successfully got Identity By Username & '+res.msg}    
  }
  catch(err)  
  {
    return{'err':err,'data':null,'msg':'Code Failed at calling get Identity By Username'}
  }
}
exports.getAllIdentities = async (body) => {
  try{
    res = await requestLibrary.getAllIdentities({'Username':body.Username})
    if(res.err) return{'err':res.err,'data':null,'msg':res.msg}
    return{'err':null,'data':res.data,'msg':'Successfully Username & '+res.msg}    
  }
  catch(err)
  {
    return{'err':err,'data':null,'msg':'Code Failed at calling getWallet'}
  }
}
