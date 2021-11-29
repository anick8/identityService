const requestLibrary = require('./requestLibrary')
exports.createIdentity = async (body) => {
  try{
    res = await requestLibrary.checkUsername({'Username':body.Username})
    if(res.err) return{'err':res.err,'data':null,'msg':res.msg}
    if(!res.data.err)return{'err':null,'data':{'err':'Username already exists'},'msg':res.msg}
    resCI = await requestLibrary.createIdentity({'Username':body.Username,'ProfileImageURL':body.ProfileImageURL,'ProfileBio':body.ProfileBio,'UserUUID':body.UserUUID})
    if(resCI.err) return{'err':resCI.err,'data':null,'msg':resCI.msg}
    return{'err':null,'data':resCI.data,'msg':'Successfully Username & '+resCI.msg}    
  }
  catch(err)
  {
    return{'err':err,'data':null,'msg':'Code Failed at calling getWallet'}
  }
}
exports.updateUsername = async (body) => {
  try{
    res = await requestLibrary.checkUsername({'Username':body.Username})
    if(res.err) return{'err':res.err,'data':null,'msg':res.msg}
    if(!res.data.err)return{'err':null,'data':{'err':'Username already exists'},'msg':res.msg}
    resCI = await requestLibrary.updateUsername({'Username':body.Username,'IdentityUUID':body.IdentityUUID})
    if(resCI.err) return{'err':resCI.err,'data':null,'msg':resCI.msg}
    return{'err':null,'data':resCI.data,'msg':'Successfully Username & '+resCI.msg}    
  }
  catch(err)
  {
    return{'err':err,'data':null,'msg':'Code Failed at calling getWallet'}
  }
}
exports.updateIdentity = async (body) => {
  try{
    resUP = await requestLibrary.updateProfile({'ProfileImageUR':body.ProfileImageURL,'ProfileBio':body.ProfileBio,'IdentityUUID':body.IdentityUUID})
    if(resUP.err) return{'err':resUP.err,'data':null,'msg':resUP.msg}
    return{'err':null,'data':resUP.data,'msg':'Successfully Username & '+resUP.msg}    
  }
  catch(err)
  {
    return{'err':err,'data':null,'msg':'Code Failed at calling getWallet'}
  }
}

exports.updateShowcase = async (body) => {
  try{
    res = await requestLibrary.updateShowcase({'Showcase':body.Showcase,'IdentityUUID':body.IdentityUUID})
    if(res.err) return{'err':res.err,'data':null,'msg':res.msg}
    return{'err':null,'data':res.data,'msg':'Successfully Username & '+res.msg}    
  }
  catch(err)
  {
    return{'err':err,'data':null,'msg':'Code Failed at calling updateShowcase'}
  }
}
exports.deleteIdentity = async (body) => {
  try{
    resMP = await requestLibrary.matchPassword({'UserUUID':body.UserUUID,'SaltedHash':body.SaltedHash})
    if(resMP.err) return{'err':resMP.err,'data':null,'msg':resMP.msg} 
    if(!resMP.data.PasswordMatch)return{'err':null,'data':{'err':'Password Invalid'},'msg':res.msg}
    
    resDI = await requestLibrary.deleteIdentity({'IdentityUUID':body.IdentityUUID})
    if(resDI.err) return{'err':resDI.err,'data':null,'msg':resDI.msg}
    if(resDI.data.err)return{'err':null,'data':{'err':'Deletion Failed'},'msg':resDI.msg}
    return{'err':null,'data':resDI.data,'msg':'Successfully deleted username & '+resDI.msg}
  }
  catch(err)
  {
    return{'err':err,'data':null,'msg':'Code Failed at calling getWallet'}
  }
}