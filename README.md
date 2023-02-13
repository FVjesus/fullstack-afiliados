# Fullstack Afiliados
>  This is a challenge by [Coodesh](https://coodesh.com/)

## Objetivo

O objetivo desta aplicação é realizar a importação, armazenamento e disponibilização de informações sobre transações.

## Tecnologias utilizadas

- React.Js
- Typescript
- React Query
- PHP 7.4
- Laravel 8
- MySql 5.7.26

### Como executar a aplicação

Os seguintes comandos irão executar a aplicação eles devem ser executados na pasta principal do projeto

`docker-compose up -d`

Na primeira execução irá demorar um pouco. Após finalizar a montagem dos contêineres execute:

`docker exec fullstack-afiliados-backend-1 php artisan migrate
`
Este comando irá preparar o banco de dados para receber as informações

Para interromper a aplicação execute

   `docker-compose down`

Obs: Caso o backend não execute corretamente execute `composer install` dentro do diretório backend, e refaça o passo a passo acima

