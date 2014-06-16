# -*- mode: ruby -*-
# vi: set ft=ruby :
require 'json'

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  # Every Vagrant virtual environment requires a box to build off of.
  config.vm.hostname = "apizor-cube"
  config.vm.box = "chef/debian-7.4"
  config.vm.network "private_network", ip: "192.168.56.50"

  
  config.proxy.http     = ENV['http_proxy'] if !ENV['http_proxy'].nil? 
  config.proxy.https    = ENV['https_proxy'] if !ENV['https_proxy'].nil?
  config.proxy.no_proxy = ENV['no_proxy'] if !ENV['no_proxy'].nil?

  # Stuff related to this project
  config.vm.provision "shell", path: "bootstrap.sh"

end
