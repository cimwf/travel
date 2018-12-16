const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/queryContent', { 
      target: 'http://m.springtour.com/m/home',
      changeOrigin: true
    }),
    proxy('/queryPositionContents', { 
      target: 'http://m.springtour.com/m/home',
      changeOrigin: true
    }),
    proxy('/queryFindArticle', { 
      target: 'http://m.springtour.com/m/find',
      changeOrigin: true
    }),
    proxy('/site', { 
      target: 'http://m.springtour.com',
      changeOrigin: true
    }),
    proxy('/gateway', { 
      target: 'https://m.maizuo.com',
      changeOrigin: true
    }),
    proxy('/GetTourProduct', { 
      target: 'http://m.springtour.com/site/tour',
      changeOrigin: true
    }),
    proxy('/queryProductCoupon', { 
      target: 'http://m.springtour.com/m',
      changeOrigin: true
    }),
    proxy('/query', { 
      target: 'https://m.springtour.com/m/search',
      changeOrigin: true
    }),
    proxy('/queryMinPrice', { 
      target: 'https://m.springtour.com/m/search',
      changeOrigin: true
    }),
  );
};