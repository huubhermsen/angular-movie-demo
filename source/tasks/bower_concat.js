module.exports = {
    all: {
        dest: '<%= config.path.test %>/<%= config.asset.js %>/lib/bower.js',
        exclude: ['modernizr', 'normalize-scss'],
        mainFiles: {
            'greensock': [
                'src/uncompressed/TweenMax.js'
            ]
        }
    },
    modernizr: {
        dest: '<%= config.path.test %>/<%= config.asset.js %>/ext/modernizr.js',
        include: ['modernizr']
    }
}
