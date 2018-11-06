var path = require('path');
require("babel-polyfill");
 
module.exports = {
   entry: ['babel-polyfill', './src/index.js' ],// входная точка - исходный файл
   output:{
       path: path.resolve(__dirname, './js'),     // путь к каталогу выходных файлов - папка public
       publicPath: '/js/',
       filename: "bundle.js"       // название создаваемого файла
   },
   module:{
       rules:[   //загрузчик для js
           {
               test: /\.js?$/, // определяем тип файлов
               exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
               loader: "babel-loader",   // определяем загрузчик
               options:{
                   presets:["env", "react"]    // используемые плагины
               }
           }
       ]
   }
}