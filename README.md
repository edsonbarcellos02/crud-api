# -crud.api
* Api de Crud em node.js e NeDb

* Instalando as dependências do projeto, (Execute o comando abaixo dentro da pasta do projeto):
 - $ npm install

* Executando o projeto:
 - $ node index || $ nodemon index

# Listar usuários:
 - (GET) http://127.0.0.1:3000/users

# Cadastrar usuário:
 * Obs: "enviar o body em X-WWW-Form-Urlencoded"
	- (POST) http://127.0.0.1:3000/users
	-	{
			name: João,
			email: joao@api.com,
			senha: 123456
		}

# Listando um usuário pelo id:
- (GET)http://127.0.0.1:3000/users/8fT3KCsJVighHrFJ

# Editando dados de usuário:
 * Obs: "enviar o body em X-WWW-Form-Urlencoded"
	- (PUT)http://127.0.0.1:3000/users/8fT3KCsJVighHrFJ
	-{
		name:Maria Joana,
		email:maria@teste.com,
		senha:123456789,
		genero:F,
	}

# Excluindo usuário:
- (DELETE)http://127.0.0.1:3000/users/8fT3KCsJVighHrFJ
