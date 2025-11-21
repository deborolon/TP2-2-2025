export const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Documentación de API de Productos para TP2',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:8080/',
      },
    ],
  },
  apis: ['./src/**/*.js'], //correcto
  //apis: ['./src/routes/**/*route.js'], //ERROR de directorios!
}