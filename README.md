# Crypto rate bot

A Telegram inline bot to getting list of cryptocurrency exchange rates for fiat.
Its on [serverless](https://serverless.com/) and can be deployed to AWS Lambda.

The code is written on nodejs 8 and compiled down to nodejs 6 by babel, because AWS Lambda does not support nodejs 8 yet.

[https://t.me/CryptoRateTeller_bot](https://t.me/CryptoRateTeller_bot)

## Installation on your server
Generate token using https://t.me/BotFather.
Put the token in serverless.yml under environment section.
Also don't forget to set AWS_DYNAMO_ENDPOINT and right role name

#### Install packages
```
npm i
npm install serverless -g
```
#### To deploy to AWS Lambda
```
serverless deploy

# Install telegram webhook
curl -F "url=https://[RETURNED_LINK]/dev/cryptorateteller" https://api.telegram.org/bot[TELEGRAM_TOKEN]/setWebhook
```

## Testing
```
npm run test
```

## Debugging
#### Logs
```
serverless logs -f cryptorateteller
```
#### Test with debugger
```
npm run test-debug
```


## Usage
#### Go to an user or group and type to bot currency that you want to know exchange rate for
```
@CryptoRateTeller_bot uah
```
Currently supported UAH, USD, EUR

#### Reply example

1 BTC **472901.66 UAH**

1 XRP  **81.91 UAH**

1 ETH **32242.44 UAH**

1 EOS **292.3573 UAH**

1 KRB **47.57 UAH**

1 IOT **123.29 UAH**

1 LTC **7921.10 UAH**

1 UAH **1.00 UAH**

1 ZEC **22245.29 UAH**
