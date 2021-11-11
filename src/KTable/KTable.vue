
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
  </table>
</template>


<script>
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
