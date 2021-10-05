
<template>
  <table>
    <tr>
      <th
        v-for="(label, index) in header"
        :key="index"
      >
        {{ label }}
      </th>
    </tr>
    <KTableRow
      v-for="(values, index) in items"
      :key="index"
      :values="values"
    />
  </table>
</template>


<script>
import KTableRow from '../KTableRow/KtableRow.vue'
export default {
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
    KTableRow
  }
}
</script>

<style>
th {
  text-align: left;
  padding: 8px;
  font-size: 13px;
  color: #8d8d92;
}
</style>
