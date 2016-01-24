Minimal Express + Nginx + Pm2 Starter Kit

#Files
`default`: Nginx config file to proxy node app to port 80

`myapp`: Express project with PM2 config file

#Installation
Refer to this video for detailed tutorial

1. Install Node on your server, I recommend Digital Ocean's pre-installed droplets
2. Install Nginx and place `default` to `/etc/nginx/sites-available` directory
3. Go to `/usr/share/nginx/` and use express-generator to start an app `express myapp` OR you can just upload the `myapp` directory found in this repo then type `npm install`
4. Install pm2 `npm install pm2 -g` and use the configuration file found in the `myapp` directory, start pm2 by `pm2 start pm2config.json`
5. Head over to your server and celebrate!
