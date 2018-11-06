    var gulp = require('gulp'); // Подключаем Gulp
    var less = require('gulp-less'); //Подключаем less пакет
    var browserSync = require('browser-sync'); // Подключаем Browser Sync
    var gcmq = require('gulp-group-css-media-queries');//подключаем group-css-media-queries
    var plumber = require('gulp-plumber'); // Обработка ошибок (error handling)
    var sass = require('gulp-sass');//подключаем  sass
    var babel = require('gulp-babel');//подключаем babel для перевода es6 в es5
    var babeljsx = require('gulp-babel');//подключаем babel для перевода jsx в js

    var imagemin = require('gulp-imagemin'); // Сжатие изображение
    var uglify = require("gulp-uglify"); // Минимизация javascript
    var rename = require("gulp-rename"); // Переименование файлов
    var htmlmin = require('gulp-htmlmin');//минимизируем html




//    var smartgrid = require('smart-grid'); 

// var settings = {
//     outputStyle: 'less', 
//     columns: 12, 
//     offset: '30px', 
//     container: {
//         maxWidth: '1200px', 
//         fields: '30px' 
//     },
//     breakPoints: {
//         lg: {
//             width: '1100px', 
//             fields: '30px' 
//         },
//         md: {
//             width: '960px',
//             fields: '15px'
//         },
//         sm: {
//             width: '780px',
//             fields: '15px'
//         },
//         xs: {
//             width: '560px',
//             fields: '15px'
//         }
     
//     }
// }; 
// smartgrid('app/lib', settings);


    // https://habrahabr.ru/post/259225/
    //функция перехватывает ошибки , но gulp watch не подвисает и его не надо перезапускать
    function wrapPipe(taskFn) {  
        return function(done) {
         var onSuccess = function() {
           done();
         };
         var onError = function(err) {
           done(err);
         }
         var outStream = taskFn(onSuccess, onError);
         if(outStream && typeof outStream.on === 'function') {
           outStream.on('end', onSuccess);
         }
        }
    }

    //реагируем на ошибки
    gulp.task('less', wrapPipe(function(success, error) { // Создаем таск less
    return  gulp.src('app/less/*.less')                   // Берем источник
            .pipe(less().on('error', error))              // Преобразуем less в CSS посредством gulp-less
            .pipe(gulp.dest('app/css-do-group'))          // Выгружаем результата в папку app/css-do-group
    }));

    gulp.task('sass', wrapPipe(function(success, error) { // Создаем таск sass
    return  gulp.src('app/sass/*.sass')                   // Берем источник
            .pipe(sass().on('error', error))              // Преобразуем sass в CSS посредством gulp-less
            .pipe(gulp.dest('app/css-do-group'))          // Выгружаем результата в папку app/css-do-group
    }));

    gulp.task('scss', wrapPipe(function(success, error) { // Создаем таск scss
    return  gulp.src('app/scss/*.scss')                   // Берем источник
            .pipe(sass().on('error', error))              // Преобразуем scss в CSS посредством gulp-scss
            .pipe(gulp.dest('app/css-do-group'))          // Выгружаем результата в папку app/css-do-group
    }));


gulp.task('default', function () { //группируем css стили 
    gulp.src('app/css-do-group/*.css') // берём источник
    .pipe(gcmq())           // выполняем группировку
    .pipe(gulp.dest('app/css/css-do-postcss'))// выгружаем результат
   // .pipe(browserSync.reload({stream: true}))  // Обновляем CSS на странице при изменении
});



gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

//  //  сжатие JS-файлов c перехватом ошибок
// gulp.task("scripts", function() {
//     return gulp.src('app/js-do-min/**/*.js') // директория откуда брать исходники 
//         .pipe(plumber())// не прекращает процесс при ошибке
//         .pipe(uglify()) // вызов плагина uglify - сжатие кода
//         .pipe(rename({ suffix: '.min' })) // вызов плагина rename - переименование файла с приставкой .min
//         .pipe(gulp.dest("app/js/jsx")); // директория продакшена, т.е. куда сложить готовый файл
// });

// //  отслеживам ES6 и превращаем в es5
// gulp.task("es6", function() {
//     return gulp.src('app/ES6/**/*.js') // директория откуда брать исходники 
//         .pipe(plumber())// не прекращает процесс при ошибке
//         .pipe(babel({presets: ['es2015']}))
//         .pipe(gulp.dest("app/js-do-min")); // директория продакшена, т.е. куда сложить готовый файл
// });

// //  отслеживам jsx и превращаем в es6
// gulp.task("jsx", function() {
//     return gulp.src('app/jsx/**/*.jsx') // директория откуда брать исходники 
//         .pipe(plumber())// не прекращает процесс при ошибке
//         .pipe(babeljsx({presets: ['react']}))
//         .pipe(gulp.dest("app/ES6")); // директория продакшена, т.е. куда сложить готовый файл
// });




// // Сжимаем картинки
// gulp.task('imgs', function() {
//     return gulp.src("app/img-do-min/**/*.+(jpg|jpeg|png|gif)")
//         .pipe(imagemin({
//             progressive: true,
//             svgoPlugins: [{ removeViewBox: false }],
//             interlaced: true
//         }))
//         .pipe(gulp.dest("app/img"))
// });

// //минимизируем html
// gulp.task('htmlminify', function() {
//   return gulp.src('app/html-do-min/**/*.html')
//     .pipe(htmlmin({collapseWhitespace: true}))
//     .pipe(gulp.dest('app/html'));
// });


gulp.task('watch', [ 'browser-sync','less'], function() {
	gulp.watch('app/less/*.less', ['less']); // Наблюдение за less файлами
    gulp.watch('app/sass/*.sass', ['sass']); // Наблюдение за sass файлами
    gulp.watch('app/scss/*.scss', ['scss']); // Наблюдение за sass файлами
//    gulp.watch('app/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
//    gulp.watch('app/html-do-min/**/*.html', ['htmlminify']); // Наблюдение за html файлами
//    gulp.watch('app/html/**/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
//    gulp.watch('app/ES6/**/*.js', ['es6']); // Наблюдение за js файлами
//    gulp.watch('app/jsx/**/*.jsx', ['jsx']); // Наблюдение за js файлами
//    gulp.watch('app/js-do-min/**/*.js', ['scripts']); // Наблюдение за js файлами
//    gulp.watch('app/js/js/**/*.js', browserSync.reload);   // Наблюдение за JS файлами в папке js
    gulp.watch('app/css-do-group/*.css', ['default']); // Наблюдение за css файлами
//    gulp.watch("app/img-do-min/**/*.+(jpg|jpeg|png|gif)", ["imgs"]);//наблюдаем за картинками
    gulp.watch('app/css/css/css/*.css', browserSync.reload);   // Наблюдение за css файлами в папке css
    gulp.watch('app/src/**/*.js', browserSync.reload);   // Наблюдение за js файлами в папке js
});

