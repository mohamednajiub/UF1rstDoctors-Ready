var gulp = require("gulp"),
  uglify = require("gulp-uglify"),
  //   sass = require("gulp-sass"),
  gulpSass = require("gulp-sass"),
  nodeSass = require("node-sass"),
  imagemin = require("gulp-imagemin");

const sass = gulpSass(nodeSass);

const build = () => {
  return gulp.src("index.html").pipe(gulp.dest("./build/"));
};

const styles = () => {
  return gulp
    .src(["node_modules/bootstrap/scss/bootstrap.scss", "sass/**/*.scss"])
    .pipe(sass())
    .on("error", (err) => {
      console.log(err.message);
    })
    .pipe(gulp.dest("./build/css"));
};

const scripts = () => {
  return gulp
    .src([
      "node_modules/bootstrap/dist/js/bootstrap.min.js",
      "node_modules/jquery/dist/jquery.min.js",
      "node_modules/popper.js/dist/umd/popper.min.js",
      "js/*.js",
    ])
    .pipe(gulp.dest("./build/js"));
};

const image = () => {
  return gulp.src("img/**/*").pipe(imagemin()).pipe(gulp.dest("./build/img"));
};

const fontAwesome = () => {
  return gulp
    .src("node_modules/font-awesome/css/font-awesome.min.css")
    .pipe(gulp.dest("./build/css"));
};

const fonts = () => {
  return gulp
    .src("node_modules/font-awesome/fonts/*")
    .pipe(gulp.dest("./build/fonts"));
};

const watch = () => {
  gulp.watch("index.html", [build]);
  gulp.watch(
    ["node_modules/bootstrap/scss/bootstrap.scss", "sass/**/*.scss"],
    [styles]
  );
  gulp.watch("js/*.js", [scripts]);
  gulp.watch("img/**/*", [image]);
};

const dev = gulp.series(
  gulp.series(build, styles, image, scripts, fontAwesome, fonts)
);

exports.default = dev;
