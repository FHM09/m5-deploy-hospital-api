# Requisitos
- [Node.js](https://nodejs.org/en/download/package-manager)
- [PostgreSQL](https://www.postgresql.org/download/)

## Clonando o Projeto
Executar no terminal:

```bash
git clone <github tempalte url> <project_name>
```

## Instalando Dependências
Instalar as dependências de desenvolvimento e produção:

```bash
cd <project_name>
npm install
```

##Criar a base de dados no postgres

```
psql -c 'CREATE DATABASE "nome-do-meu-db"';
```

## Variáveis de Ambiente

Duplicar o arquivo `.env.example` e renomear a cópia para `.env`, sobrescrevendo os valores das variáveis de ambiente do arquivo `.env` com suas credenciais:

| Nome da Variável | Descrição | Obrigatoriedade |
| ---------------- | --------- | --------------- |
| DATABASE_URL     | Credenciais do banco de dados utilizado | obrigatório |
| JWT_SECRET       | Chave secreta utilizada pela autenticação JWT | obrigatório |

## Executando as Migrações

Execute o comando abaixo na **_raiz do projeto_**:

```
npm run migrate
```

## Inicializando o Servidor

O servidor da API será executado, por padrão, na porta 3000:

```
npm run dev
```

Navegue até http://localhost:3000 para acessar a API