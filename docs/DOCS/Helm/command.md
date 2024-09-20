---
title: command
icon:  file
---


## install helm

```bash
MIRROR="files."
VERSION=v3.13.3
ARCH=$(uname -m)
if [ "${ARCH}" = "x86_64" ]; then
    ARCH_IN_FILE_NAME=linux-amd64
elif [ "${ARCH}" = "aarch64" ]; then
    ARCH_IN_FILE_NAME=linux-arm64
else
    echo "NOT SUPPORT: ${ARCH}"
fi
FILE_NAME=helm-${VERSION}-${ARCH_IN_FILE_NAME}.tar.gz
curl -sSLo ${FILE_NAME} "https://${MIRROR}get.helm.sh/${FILE_NAME}"
tar zxf ${FILE_NAME}
mkdir -p ${HOME}/bin
mv -f ${ARCH_IN_FILE_NAME}/helm ${HOME}/bin
rm -rf ./${FILE_NAME}
rm -rf ./${ARCH_IN_FILE_NAME}
chmod u+x ${HOME}/bin/helm

```

## Push a helm chart to a registry

```bash
helm plugin install https://github.com/chartmuseum/helm-push
```

```bash
helm cm-push \
    $CHART_CODE_RELATIVE_PATH \
    $CHART_MUSEUM_URL \
    --username=$CHART_MUSEUM_USERNAME \
    --password=$CHART_MUSEUM_PASSWORD \
    --context-path=$CHART_MUSEUM_CONTEXT_PATH \
    --force
```
