export default {
  entry: 'tmp/esm5/ngx-lib-libtest.js',
  dest: 'dist/bundles/ngx-lib-libtest.umd.js',
  name: 'ngxLibTest',
  format: 'umd',
  globals: {
    // Angular dependencies
    '@angular/animations': 'ng.animations',
    '@angular/core': 'ng.core',
    '@angular/platform-browser': 'ng.platform-browser',

    // Other dependencies
    'ethers': 'ethers',
  }
}
