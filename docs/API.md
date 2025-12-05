# Documentação da API

Este documento descreve os endpoints principais da API.

Base URL: `/api`

## Autenticação
- POST `/api/auth/login` - Faz login do usuário (recebe `email` e `password`).
- POST `/api/auth/register` - Registra novo usuário.

## Usuários
- GET `/api/users` - Lista usuários.
- GET `/api/users/:id` - Obtém usuário por ID.
- POST `/api/users` - Cria novo usuário.
- PUT `/api/users/:id` - Atualiza usuário.
- DELETE `/api/users/:id` - Remove usuário.

## Produtos
- GET `/api/products` - Lista produtos.
- GET `/api/products/:id` - Obtém produto por ID.
- POST `/api/products` - Cria produto.
- PUT `/api/products/:id` - Atualiza produto.
- DELETE `/api/products/:id` - Remove produto.

## Pedidos
- GET `/api/orders` - Lista pedidos.
- GET `/api/orders/:id` - Obtém pedido por ID.
- POST `/api/orders` - Cria pedido.
- PUT `/api/orders/:id` - Atualiza pedido.
- DELETE `/api/orders/:id` - Remove pedido.

> Observação: Documente modelos de request/response, códigos de status e exemplos reais quando for adicionar a documentação completa.
