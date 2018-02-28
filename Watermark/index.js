const watermark = require('image-watermark');

var options = {
  'text' : 'For more expert charts visit: http://cryptodam.us/chat',
  'align': 'ltr',
  'color' : 'rgb(255, 255, 255)'
};

watermark.embedWatermark('chart.png', options);
