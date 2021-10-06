'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script$3 = {
  name: 'KTableRow',
  props: {
    values: {
      type: Array,
      required: true
    }
  }
};

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("tr", null, [
    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.values, (value, index) => {
      return (vue.openBlock(), vue.createElementBlock("td", { key: index }, vue.toDisplayString(value), 1 /* TEXT */))
    }), 128 /* KEYED_FRAGMENT */))
  ]))
}

script$3.render = render$3;
script$3.__file = "src/KTableRow/KtableRow.vue";

var script$2 = {
  name: 'KTable',
  props: {
    header: {
      type: Array
    },
    items: {
      type: Array,
      required: true
    }
  },
  components: {
    KTableRow: script$3
  }
};

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_KTableRow = vue.resolveComponent("KTableRow");

  return (vue.openBlock(), vue.createElementBlock("table", null, [
    vue.createElementVNode("tr", null, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.header, (label, index) => {
        return (vue.openBlock(), vue.createElementBlock("th", { key: index }, vue.toDisplayString(label), 1 /* TEXT */))
      }), 128 /* KEYED_FRAGMENT */))
    ]),
    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.items, (values, index) => {
      return (vue.openBlock(), vue.createBlock(_component_KTableRow, {
        key: index,
        values: values
      }, null, 8 /* PROPS */, ["values"]))
    }), 128 /* KEYED_FRAGMENT */))
  ]))
}

script$2.render = render$2;
script$2.__file = "src/KTable/KTable.vue";

var script$1 = {
  name: 'KTableRow',
  props: {
    values: {
      type: Array,
      required: true
    }
  }
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("tr", null, [
    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.values, (value, index) => {
      return (vue.openBlock(), vue.createElementBlock("td", { key: index }, vue.toDisplayString(value), 1 /* TEXT */))
    }), 128 /* KEYED_FRAGMENT */))
  ]))
}

script$1.render = render$1;
script$1.__file = "src/KTableRow/KTableRow.vue";

var script = {
    name: 'Task',
    props: {
      task: {
        type: Object,
        required: true,
        default: () => ({ id: '', state: '', title: '' }),
        validator: task => ['id', 'state', 'title'].every(key => key in task),
      },
    },
  };

const _hoisted_1 = { class: "list-item" };
const _hoisted_2 = ["value"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    vue.createElementVNode("input", {
      type: "text",
      readonly: "",
      value: $props.task.title
    }, null, 8 /* PROPS */, _hoisted_2)
  ]))
}

script.render = render;
script.__file = "src/Task/Task.vue";

exports.KTable = script$2;
exports.KTableRow = script$1;
exports.Task = script;
//# sourceMappingURL=index.js.map
