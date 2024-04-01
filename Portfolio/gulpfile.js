const {src,dest, watch,parallel} = require('gulp');

//imagenes
const cache = require('gulp-cache');
const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');

//css
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');

//Js
const terser = require('gulp-terser-js');


//Compilar y almacena SCSS
function css(done) {
    console.log('compilando');
    src('src/scss/**/*.scss') //Identifircar Sass
        .pipe(sourcemaps.init())
        .pipe(sass()) //Compilar
        .pipe(postcss([autoprefixer(),cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('build/css')); //Almacenarlo en el disco duro
    done();
}

//Escucha los cambios de CSS Y JS
function dev(done){
    
    watch('src/scss/**/*.scss',css);
    watch('src/scss/js/**/*.js',javascaript);

    done();
}
//Compilar y almacena JS
function javascaript(done){
    src('src//scss/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('build/js'));
    done();
}
//Transaformar Imagenes
function versionWebp(done){
    const opciones = {
        quality: 50
    }
    src('img/**/*.{png,jpg,svg,ico}')
    .pipe(webp(opciones))
    .pipe(dest('build/img'));

    done();
}


function imagenes(done){
    const opciones = {
        optimizationLevel: 3
    }
    src('img/**/*.{png,jpg,svg,ico}')
        .pipe(cache((imagemin(opciones))))
        .pipe(dest('build/img'));
    done();
}

exports.css = css
exports.js = javascaript;
exports.imagenes = imagenes;
exports.dev = parallel(css,javascaript,dev,versionWebp,imagenes)