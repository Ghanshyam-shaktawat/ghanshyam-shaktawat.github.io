export default {
    root: 'src/',
    publicDir: '../public/',
    base: './',
    server:{
        fs: {
            allow: ['/']
        }
    },
    build:
    {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true
    }
}