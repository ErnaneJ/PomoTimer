#!/usr/bin/env sh

set -e

npm run build

git checkout master
git add -A
git commit -m 'deploy'

git push -f git@github.com:ErnaneJ/PomoTimer.git master

cd -