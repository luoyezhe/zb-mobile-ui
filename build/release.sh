set -e
echo "[ZbMobileUi for Vue 2.0]Enter release version: "
read VERSION

read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "Releasing $VERSION ..."

  # build
  VERSION=$VERSION npm run build:lib

  # commit
  git tag v$VERSION
  git commit -am "[release] $VERSION"

  # publish
  git push origin develop
  git push origin refs/tags/v$VERSION
  if [[ $VERSION =~ [beta] ]]
  then
    npm publish --tag beta
  else
    npm publish
  fi
fi
