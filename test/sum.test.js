const app1 = require("../index");
const http = require("http");
const supertest = require("supertest");
const times = require('async/times');

let request;


beforeAll(async ()=>{
  request = supertest(http.createServer(await app1()));
})


const axios = require('axios');
const req ={ 
  "IdentityUUID": "0ea9ec09c2eefe9d35b17c72b309914c16bc442990e1b44db9cfe3199a33232c",
    "WalletType": 1,
    "WalletName" : "Test"
}
 
var WalletUUID;

test("Create Wallet", (done) => {
  var asyncTask = (done) => {
      request
      .post("/createWallet")
      .send(req)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end(res => {
        WalletUUID = res.data.WalletUUID;
        done();
      })
  };
  times(2, asyncTask, done);

});


test("Get Wallet", async (done) => {
  request
    .post("/getWallet")
    .send(req)
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200)
    .end(function (res) {
      expect(res.WalletUUID).toBe(WalletUUID);
      done();
    });
});



test("Delete Wallet", async(done) => {
     request
      .post("/deleteWallet")
      .send(req)
      .expect(200)
      .end(function (res) {
        expect(res.WalletUUID).toBe(WalletUUID);
        done();
      });
  });





//afterEach(()=> app.close());  // close the server after each test