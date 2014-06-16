#!/bin/bash
apt-get -y update
apt-get -y install mongodb mongodb-server
apt-get -y install git
 
echo "Installing NVM"
git clone https://github.com/creationix/nvm.git /home/vagrant/.nvm/
echo "source /home/vagrant/.nvm/nvm.sh" >> /home/vagrant/.bashrc
source /home/vagrant/.nvm/nvm.sh 

echo "Installing node.js v0.10"
nvm install 0.10
echo "nvm use 0.10" >> /home/vagrant/.bashrc

cd /opt
npm install cube

sh startcube.sh
