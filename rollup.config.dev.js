const path = require('path')
const resolve =require('rollup-plugin-node-resolve')
const commonjs= require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const json = require('rollup-plugin-json')
const vue = require('rollup-plugin-vue')
const postcss= require('rollup-plugin-postcss')

const inputPath = path.resolve(__dirname, './src/index.js')
const outputUmdPath = path.resolve(__dirname, './dist/torres.datav.js')
const outputEsPath = path.resolve(__dirname, './dist/torres.datav.es.js')
module.exports={
  input:inputPath,
  output:[{
    file:outputUmdPath, //输出路径
    format:'umd', //输出umd模块
    name:'torresDatav',
    globals:{
      'vue':'Vue'
    }
  },{
    file:outputEsPath, //输出路径
    format:'es', //输出es模块
  }],
  plugins:[
    vue(),
    resolve(),
    commonjs(),
    babel({
      exclude:'node_modules/**'  //指定文件不进行Babel编译
    }),
    json(),
    postcss({
      plugins:[]
    })
  ],
  external:[
    'vue'
  ]
}