# Usando a imagem oficial do Node.js
FROM node:14

# Criando o diretório de trabalho
WORKDIR /app

# Copiando package.json e package-lock.json
COPY package*.json ./

# Instalando as dependências
RUN npm install

# Copiando o restante do código
COPY . .

# Expondo a porta que a aplicação irá rodar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]
