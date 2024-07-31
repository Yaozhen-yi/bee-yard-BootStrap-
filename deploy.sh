echo 'deploying to GitHub Pages'
git add -A
git commit -m 'Deploy'
git push origin `git subtree split --prefix dist main`:gh-pages --force