#!/usr/bin/env bash
set -xeo pipefail

BUILD=$1

if [ -z "$BUILD" ] || [ ! -d "$BUILD" ] ; then
  echo 'No build is found' >&2
  exit 1
fi

if [ -n "$DEPLOY_PATH" ] && [ -d "$DEPLOY_PATH" ]; then
  rsync -rlzv "$BUILD" "$DEPLOY_PATH"
elif [ -n "$DEPLOY_SSH_TARGET" ] && [ -n "$DEPLOY_SSH_PATH" ]; then
  rsync -rlzv -e 'ssh' "$BUILD" "${DEPLOY_SSH_TARGET}:${DEPLOY_SSH_PATH}"
elif [ -n "$DEPLOY_FTP_DOMAIN" ] && [ "$DEPLOY_FTP_PATH" ] && [ -n "$DEPLOY_FTP_USERNAME" ] && [ -n "$DEPLOY_FTP_PASSWORD" ]; then
  cd $BUILD
  ncftpput -mR -v -u "$DEPLOY_FTP_USERNAME" -p "$DEPLOY_FTP_PASSWORD" "$DEPLOY_FTP_DOMAIN" "$DEPLOY_FTP_PATH" ./
else
  echo 'No deployment target is found' >&2
fi
