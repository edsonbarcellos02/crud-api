# -crud.api
- Api de Crud em node.js e NeDb

* Execute o comando abaixo dentro da pasta do projeto para instalas todas as dependências:
 - $ npm install

* Executando o projeto, use o comando abaixo ainda dentro da pasta do projeto:
 - $ node index || $ nodemon index

# Listar todos os usuários
 - (GET) http://127.0.0.1:3000/users

# Cadastrar novo usuário
 * Obs: "enviar o bady em X-WWW-Form-Urlencoded"
	- (POST) http://127.0.0.1:3000/users
		{
			name: João,
			email: joao@api.com,
			senha: 123456
		}

# Listando um usuário pelo id:
- (GET)http://127.0.0.1:3000/users/8fT3KCsJVighHrFJ

# Editando dados de um usuário:
 * Obs: "enviar o bady em X-WWW-Form-Urlencoded"
	- (PUT)http://127.0.0.1:3000/users/8fT3KCsJVighHrFJ
	{
		name:Maria Joana,
		email:maria@teste.com,
		senha:123456789,
		genero:F,
	}

# Excluindo um usuário:
- (DELETE)http://127.0.0.1:3000/users/8fT3KCsJVighHrFJ