/* 
  quando estiver usando o vite para criar o projeto vc deve instalar o tailwincss com esse comando npm install -D tailwindcss postcss autoprefixer
  o postcss e para o tailwind meio que se integrar com o vite
*/

module.exports = {
  content: ['./src/**/*.tsx'], // aqui pode ser necessário alterar a extensão para a extensão que vc tiver usando
  theme: {
    extend: {
      // tem como vc extender e adicionar novas cores no tailwind por aqui
      colors: {
        brand: {
          500: '#8257e6',
        },
      },
    },
  },
  plugins: [],
}
