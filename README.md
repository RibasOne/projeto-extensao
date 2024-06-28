# Projeto para O mágico Flávio

Este é o README do projeto. Aqui você encontrará informações importantes sobre o projeto, como sua descrição, instalação e uso.

## Descrição

O projeto para o mágico Flávio é uma aplicação web que tem como objetivo facilitar a gestão da agenda do mágico, e uma forma de entrar em contato com ele. Ele poderá criar, acompanhar seus eventos e excluir diretamente em sua agenda. 

## Instalação

Para instalar o projeto, siga as instruções abaixo:

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Execute o comando `npm install` para instalar as dependências do projeto.
3. Configure as variáveis de ambiente necessárias, como as credenciais do banco de dados.
4. Execute o comando `npm run start` para iniciar a aplicação.

## Funcionalidades

1. Autenticação de Usuário: Autentica usuários a partir do banco de dados.
2. Administração de Eventos: Página para adicionar e deletar eventos.
3. Listagem de Eventos: Lista eventos armazenados no banco de dados na página admin.html.
4. Envio de Emails: Função para enviar emails organizada em controllers e routes.

## Como adicionar ou remover eventos na agenda

1. Acessar a tela de admin através da URL e realizar login, `/admin` ou `/login`
2. Os dados para logar no site foram enviado no arquivo IMPORTANTE.txt