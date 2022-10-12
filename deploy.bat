cd ./dist
echo "" > .nojekll
git init
git checkout -B master
git add -A
git commit -m "latest site deloy"
git push -f https://github.com/GordienkoAnastasia/open-layer-app.git master:www_dist
cd ..