#!/usr/bin/env sh
echo 'Deploying the application'
set -x
npm run start &
sleep 2
echo $! > .pidfile
set +x 