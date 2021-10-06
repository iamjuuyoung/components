import { openBlock, createElementBlock, Fragment, renderList, toDisplayString, resolveComponent, createElementVNode, createBlock } from 'vue';

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
  return (openBlock(), createElementBlock("tr", null, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.values, (value, index) => {
      return (openBlock(), createElementBlock("td", { key: index }, toDisplayString(value), 1 /* TEXT */))
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
  const _component_KTableRow = resolveComponent("KTableRow");

  return (openBlock(), createElementBlock("table", null, [
    createElementVNode("tr", null, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.header, (label, index) => {
        return (openBlock(), createElementBlock("th", { key: index }, toDisplayString(label), 1 /* TEXT */))
      }), 128 /* KEYED_FRAGMENT */))
    ]),
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.items, (values, index) => {
      return (openBlock(), createBlock(_component_KTableRow, {
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
  return (openBlock(), createElementBlock("tr", null, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.values, (value, index) => {
      return (openBlock(), createElementBlock("td", { key: index }, toDisplayString(value), 1 /* TEXT */))
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
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("input", {
      type: "text",
      readonly: "",
      value: $props.task.title
    }, null, 8 /* PROPS */, _hoisted_2)
  ]))
}

script.render = render;
script.__file = "src/Task/Task.vue";

export { script$2 as KTable, script$1 as KTableRow, script as Task };
//# sourceMappingURL=index.esm.js.map
