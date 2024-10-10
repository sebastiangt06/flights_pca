# Usa la imagen oficial de Node.js
FROM node:18

# Establece el directorio de trabajo
WORKDIR /usr/src/app

# Copia los archivos de package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Construye la aplicación de React
RUN npm run build

# Instala el servidor para servir la aplicación de React
RUN npm install -g serve

# Expone el puerto 5173
EXPOSE 5173

# Comando para servir la aplicación
CMD ["serve", "-s", "build"]
