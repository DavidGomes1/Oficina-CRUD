# Oficina-CRUD

Tarefa para avaliação técnica de candidatos ao time de desenvolvimento.

# Passo a passo para rodar o projeto

# 1- Preparação do Ambiente

Certifique-se de que a máquina tenha as seguintes ferramentas instaladas:

Node.js (para o frontend em React)

PHP: Versão 8.3.11 (para o backend em Laravel)

Composer (para gerenciar dependências do Laravel)

MySQL: Versão 8.0.39

# 2- Instalar o MySQL

Instalar o MySQL

Baixar e instalar o MySQL do site oficial ou usar um gerenciador de pacotes como Homebrew no macOS ou APT no Ubuntu.

Configurar o MySQL, criando um banco de dados e um usuário com as permissões apropriadas.

# 3- Configurar o .ENV

Já tem o arquivo .ENV disponível, só alterar o necessário.

# 4- Configurar o frontend

Navegue até o diretório do frontend e instale as dependências com o comando:

cd oficina-frontend

npm install

# 5- Configurar o backend

Navegue até o diretório do backend e instale as dependências com Composer:

cd oficina-backend

composer install

# 6- Rodar o back

php artisan serve

# 7- Rodar o front

npm start

# Observações

Não é uma boa prática deixar o arquivo .ENV exposto, mas como é apenas um teste, deixei liberado para facilitar.
