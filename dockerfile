FROM node:18-alpine

WORKDIR /app

# Copia apenas os arquivos de dependência primeiro
COPY package*.json ./

RUN npm install

# Não copia o código fonte ainda (será feito via volume)
EXPOSE 3000

CMD ["npm", "start"]