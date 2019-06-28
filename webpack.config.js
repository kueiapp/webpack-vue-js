var path = require('path'); // load from node.modules

// vue-loader 15.* 需要另外安裝這個才能運作
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
	// all settings

	// 撰寫中的高版本JS程式
  entry: ['./src/main.js','./src/myvue.js'], 
  
  // 輸出的檔案位置
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.compiled.js',
  },

  // loader的模組，例如 Babel
  module: {
	  rules: [
	  	// this will apply to both plain `.js` files
      // AND `<script>` blocks in `.vue` files
	    {
	      test: /\.m?js$/,
	      exclude: /(node_modules|bower_components)/,
	      use: {
	        loader: 'babel-loader',
	        options: {
	          presets: ['@babel/preset-env']
	        }
	      }
	    },
	    // this will apply to both plain `.vue` files
	    {
		    test: /\.vue$/,
		    loader: 'vue-loader'
			},
			// this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
	  ]
	},
	
	plugins: [
      // make sure to include the plugin for vue-loader 15.*
      new VueLoaderPlugin()
  ],

	// 從node_modules讀檔案解析，不加入會無法編譯並出現下列錯誤
	// You are using the runtime-only build of Vue where the template compiler is not available.
	resolve: {
    extensions: ['.js','.vue'],
    alias: {
      'vue':'vue/dist/vue.js',//指定 vue 對應使用的真實 js 檔案, node_modules可省略
    }
  }

};