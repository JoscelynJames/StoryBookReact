#!/bin/sh

set -e

git checkout master
git push

git checkout shopping-cart-v01
git rebase master
git push origin shopping-cart-v01 --force-with-lease

git checkout shopping-cart-v02
git rebase shopping-cart-v01
git push origin shopping-cart-v02 --force-with-lease

git checkout shopping-cart-v03
git rebase shopping-cart-v02
git push origin shopping-cart-v03 --force-with-lease

git checkout shopping-cart-v04
git rebase shopping-cart-v03
git push origin shopping-cart-v04 --force-with-lease
