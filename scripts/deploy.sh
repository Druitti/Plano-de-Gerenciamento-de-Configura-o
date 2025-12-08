#!/usr/bin/env bash

# Script de deploy via Docker (exemplo)
# Requisitos:
# - Ter Docker instalado e configurado
# - Ter variáveis DOCKER_REGISTRY, DOCKER_REPO e DOCKER_TAG definidas (podem ser setadas no CI)
# Exemplo de uso local:
#   DOCKER_REGISTRY="docker.io" DOCKER_REPO="meu-usuario/projeto" DOCKER_TAG="v1.0.0" ./scripts/deploy.sh

set -e

REGISTRY=${DOCKER_REGISTRY:-docker.io}
REPO=${DOCKER_REPO:-youruser/plano-gc}
TAG=${DOCKER_TAG:-latest}

IMAGE="$REGISTRY/$REPO:$TAG"

echo "Build da imagem Docker: $IMAGE"
docker build -t "$IMAGE" .

echo "Push da imagem para o registro"
docker push "$IMAGE"

echo "Deploy concluído (imagem construída e enviada): $IMAGE"

# Observação: a atualização do ambiente de produção depende de como hosts/serviços consomem a imagem.
# Exemplos:
# - Em um host: docker pull $IMAGE && docker run -d --name app -p 80:3000 $IMAGE
# - Em Kubernetes: atualizar Deployment para usar a nova tag
