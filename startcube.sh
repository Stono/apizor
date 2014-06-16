#!/bin/bash

sudo mkdir -p /var/log/cube
sudo chown vagrant:vagrant /var/log/cube
node /opt/node_modules/cube/bin/collector.js 2>&1 >> /var/log/cube/collector.log &
node /opt/node_modules/cube/bin/evaluator.js 2>&1 >> /var/log/cube/evaluator.log &

echo "Cube Started!"
