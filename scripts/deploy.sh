git fetch --all
git reset --hard origin/master

rm -r node_modules
yarn

yarn build

pm2 restart bantr-client
