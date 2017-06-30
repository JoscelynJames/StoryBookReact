#!/bin/sh

set -e

git checkout master
git push

git checkout cart-01-header-footer
git rebase master
git push -u origin cart-01-header-footer --force-with-lease

git checkout cart-02-props
git rebase cart-01-header-footer
git push -u origin cart-02-props --force-with-lease

git checkout cart-03-item-list
git rebase cart-02-props
git push -u origin cart-03-item-list --force-with-lease

git checkout cart-04-add-item
git rebase cart-03-item-list
git push -u origin cart-04-add-item --force-with-lease

git checkout cart-05-calculate-total
git rebase cart-04-add-item
git push -u origin cart-05-calculate-total --force-with-lease

git checkout cart-06-deploy
git rebase cart-05-calculate-total
git push -u origin cart-06-deploy --force-with-lease

git checkout timer
git rebase master
git push -u origin timer --force-with-lease

git checkout todo-app
git rebase master
git push -u origin todo-app --force-with-lease

git checkout cart-10-fetch-items
git rebase cart-06-deploy
git push -u origin cart-10-fetch-items --force-with-lease

git checkout cart-11-post-item
git rebase cart-10-fetch-items
git push -u origin cart-11-post-item --force-with-lease

git checkout cart-20-redux
git rebase cart-11-post-item
git push -u origin cart-20-redux --force-with-lease

# --- TESTS

git checkout test-01-failing
git rebase master
git push -u origin test-01-failing --force-with-lease

git checkout test-02-passing
git rebase test-01-failing
export CI=true
yarn test
git push -u origin test-02-passing --force-with-lease

git checkout master
echo "Done!"
