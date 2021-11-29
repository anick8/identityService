
# Hashx Service for Wallets

Service to implement Wallet Operations.
Run using - npm install npm start (OR) node index.js

# Routes

## /createWallet	

create a Wallet.

Request Body -
-req.body.IdentityUUID : IdentityUUID of the Identity creating the Wallet.
req.body.WalletType : Type of the Wallet
req.body.Name : Name of the Wallet

   
Response Body -
{WalletUUID}
## /deleteWallet	

delete a Wallet.

Request Body -
-req.body.WalletUUID : WalletUUID of the Wallet to be deleted.
req.body.WalletType : Type of the Wallet
req.body.Name : Name of the Wallet

   
Response Body -
{WalletUUID}

## /readWallet	

read the wallet by WalletUUID 

Request Body -
-req.body.WalletUUID : WalletUUID of the Wallet
   
Response Body -
{WalletUUID,IdentityUUID,WalletName,WalletType,Balance}



## /readWallets	

read  wallets belonging to an IdentityUUID :

Request Body -
-req.body.IdentityUUID : IdentityUUID of the Wallet
   
Response Body -
{WalletUUID,IdentityUUID,WalletName,WalletType,Balance}



## /getWalletHistorybyWalletUUID	

get the Wallet History of WalletUUID :

Request Body -
-req.body.WalletUUID : wallet sent from
   
Response Body -
{TransactionUUID, ToUsername,FromWalletUUID                          ,ToWalletUUID, ToWalletType,Amount, TransactionStatus,TransactionType,Timestamp,Note}


## /getWalletHistorybyWalletUUIDAB	

get the Wallet History between Wallet A and B :

Request Body -
-req.body.FromWalletUUID : wallet sent from
-req.body.ToWalletUUID : wallet sent to   


Response Body -
{TransactionUUID, ToUsername,FromWalletUUID                          ,ToWalletUUID, ToWalletType,Amount, TransactionStatus,TransactionType,Timestamp,Note}



## /transferTokens

Creates a Wallet Transaction :

Request Body -
-req.body.Amount : Amount to be sent   
- req.body.FromWalletUUID : UUID of the wallet from which the amount is sent
- req.body.ToWalletUUID : UUID of the wallet to which the amount is sent
- req.body.ToWalletType : Type of the Wallet sent to
-   req.body.ToUsername : Username of the Wallet sent to.
-   req.body.TransactionStatus : status of the transaction.
- req.body.,TransactionType : Type of Transaction
- req.body.Note : Additional note that contains the transaction details

Response Body -
{'Balance', 'FromWalletUUID' , 'ToWalletUUID', 'TransactionUUID'}



# Response Format

[err,data,msg]

-   err : Error message from SQL try block
-   data : Data returned by SQL query
-   msg : Custom message defined in API

> Written with [StackEdit](https://stackedit.io/).
