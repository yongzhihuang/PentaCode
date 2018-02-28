1. https://certbot.eff.org/
2.
sudo apt-get update
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
sudo apt-get install python-certbot-nginx

3. Auto, works when you have one virtual server on nginx

3. manual, or if you have multiple virtual servers under nginx
sudo letsencrypt certonly -a webroot --webroot-path=/usr/share/nginx/website.com/ -d website.com

4. Edit nginx config to add ssl entries
  - Add redirect to https in port 80 block
  return 301 https://$host$request_uri;

  - Add a new block for port 443
  server {
    server_name website.com;
    listen 443 ssl;
    listen [::]:443 ssl;
    root /usr/share/nginx/website.com;
    index index.php index.html index.htm;

    ssl_certificate /etc/letsencrypt/live/website.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/website.com/privkey.pem;
  }


5. sudo nginx -t

6. sudo service nginx restart
