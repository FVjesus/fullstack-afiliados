# Laravel backend

### Objetivo
O principal objetivo deste backend é cadastrar um conjunto de informações via arquivo e posteriormente disponibilizá-las

### Tecnologias utilizadas

- PHP 7.4
- Laravel 8
- MySql 5.7.26

### Como executar apenas o backend

Para executar apenas o backend você precisará garantir que exista uma instância de banco de dados
Em execução e conectada ao backend, você pode realizar a configuração da conexão no arquivo `.env` e no arquivo `config/database.php`.
Com as configurações feitas o próximo passo é instalar as dependências.

Comando para instalar as dependências:

    `composer install`

Esse processo irá demorar um pouco. Ao finalizar o próximo passo é executar as migrations para que o banco de dados seja preparado para o funcionamento do projeto

    `php artisan migrate`

Após executar as migrations sua aplicação está pronta utilize o seguinte comando para executá-la:

    `php artisan serve`

### Como funciona a aplicação

Este servidor possui três rotas.
* /api/main
* /api/transactions
* /api/sellers

- ### /api/main
  Esta rota utiliza o método `POST` para receber o arquivo que passará pelo parsing e cadastro das informações no banco de dados

- ### /api/transactions
  Esta rota utiliza o método `GET` para retornar uma lista das transações realizadas

- ### /api/sellers
  Esta rota utiliza o método `GET` para retornar uma lista dos vendedores com o valor da movimentação total realizada por cada um deles

