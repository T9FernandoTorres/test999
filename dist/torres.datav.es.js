import { openBlock, createElementBlock, createStaticVNode } from 'vue';

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  name: "TorresLoading"
};

const _hoisted_1 = { class: "torres-loading" };
const _hoisted_2 = /*#__PURE__*/createStaticVNode("<svg width=\"200\" height=\"200\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"22\" fill=\"none\" stroke-width=\"3\" stroke=\"#3be6cb\" stroke-dasharray=\"34\" stroke-linecap=\"round\"><animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 25 25;360 25 25\" dur=\"1.5s\" repeatCount=\"indefinite\"></animateTransform><animate attributeName=\"stroke\" values=\"#3be6cb;#02bcfe;#3be6cb\" dur=\"2s\" repeatCount=\"indefinite\"></animate></circle><circle cx=\"25\" cy=\"25\" r=\"12\" fill=\"none\" stroke-width=\"3\" stroke=\"#02bcfe\" stroke-dasharray=\"19\" stroke-linecap=\"round\"><animateTransform attributeName=\"transform\" type=\"rotate\" values=\"360 25 25;0 25 25\" dur=\"1.5s\" repeatCount=\"indefinite\"></animateTransform><animate attributeName=\"stroke\" values=\"#02bcfe;#3be6cb;#02bcfe\" dur=\"2s\" repeatCount=\"indefinite\"></animate></circle></svg>", 1);
const _hoisted_3 = [
  _hoisted_2
];

function render(_ctx, _cache) {
  return (openBlock(), createElementBlock("div", _hoisted_1, _hoisted_3))
}

script.render = render;
script.__file = "src/components/TorresLoading/TorresLoading.vue";

function TorresLoading (Vue) {
  Vue.component(script.name, script);
}

function index (Vue) {
  Vue.use(TorresLoading);
}

export default index;
