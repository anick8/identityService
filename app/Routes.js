
var utils = require('../common/utils');
var identityService = require('./identityService');
module.exports = (app, console) => {
    
    app.post('/getProfile',async (req, res) => {
        result  = await identityService.getProfile(req);
        utils.handleresultdict(res,result)
       }
    )
    app.post('/getIdentityByUserUUID',async (req, res) => {
        result  = await identityService.getIdentityByUserUUID(req);
        utils.handleresultdict(res,result)
       }
    )
    app.post('/getIdentityByUsername',async (req, res) => {
        result  = await identityService.getWallets(req);
        utils.handleresultdict(res,result)
       }
    )
    app.post('/getAllIdentities',async (req, res) => {
        result  = await identityService.getAllIdentities(req);
        utils.handleresultdict(res,result)
       }
    )
    app.post('/createIdentity',async (req, res) => {
        result  = await identityService.createIdentity(req);
        utils.handleresultdict(res,result)
       }
    )
    app.post('/updateUsername',async (req, res) => {
        result  = await identityService.updateUsername(req);
        utils.handleresultdict(res,result)
       }
    )
    app.post('/updateIdentity',async (req, res) => {
        result  = await identityService.updateIdentity(req);
        utils.handleresultdict(res,result)
       }
    )
    app.post('/updateShowcase',async (req, res) => {
        result  = await identityService.updateShowcase(req);
        utils.handleresultdict(res,result)
       }
    )
    app.post('/deleteIdentity',async (req, res) => {
        result  = await identityService.deleteIdentity(req);
        utils.handleresultdict(res,result)
       }
    )



    
};
