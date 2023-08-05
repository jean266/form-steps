
const { src, dest, watch } = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const plumber = require("gulp-plumber");

function css ( callback ) {
    
    src("src/scss/**/*.scss") // Identificar el archivo de SASS  
        .pipe( plumber() ) 
        .pipe( sass() ) // Compilarlo
        .pipe( dest( "public/build/css") ); // Almacenarla en el disco

    callback();
}

function js ( callback ) {

    src("src/js/**/*.js")
        .pipe( plumber() )
        .pipe( dest( "public/build/js") );

    callback();
}

function dev ( callback ) { 
    watch("src/scss/**/*.scss", css)
    watch("src/js/**/*.js", js)

    callback();
}

exports.css = css;
exports.dev = dev;