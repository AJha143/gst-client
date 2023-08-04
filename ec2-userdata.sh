sudo apt update

# install npm and nodeJS
sudo apt-get install curl
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs

# install Nginx webserver
sudo apt install -y nginx

sudo mkdir /var/www/jenkins-react-app

