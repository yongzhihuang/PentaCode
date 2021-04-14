const bitcoinAPI = 'https://api.pro.coinbase.com/products/btc-usd/ticker';

//https://discord.com/api/webhooks/831655512751472670/LnnsiQXKPSLAsFfrd19vcCQ4hPRy_sKi56JUMa5MIzoVifkdNjTbnOPTEn-6sR_k5-0H

async function sendDiscordMessage(msg) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: 'pentacode',
      avatar_url: '',
      content: msg,
      allowed_mentions: {
        parse: ['users', 'roles']
      }
    })
  };
  
  return fetch('https://discord.com/api/webhooks/831655512751472670/LnnsiQXKPSLAsFfrd19vcCQ4hPRy_sKi56JUMa5MIzoVifkdNjTbnOPTEn-6sR_k5-0H', options)
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  const options = {
    headers: {
      'User-Agent': 'foo/1.0',
      'content-type': 'application/json;chartset=UTF-8'
    }
  };

  const response = await fetch(bitcoinAPI, options);
  const BTCDataJson = await response.json();
  const coinDataString = JSON.stringify(BTCDataJson);

  const msg = `Bitcoin price is currently $${BTCDataJson.price}`;
  await sendDiscordMessage(msg);
  return new Response(coinDataString, options)
}
