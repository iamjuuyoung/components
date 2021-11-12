<template>
  <div class="list-item">
    <input type="text" readonly :value="task.title" />
    <KInputTimer />
  </div>
</template>

<script>
import { KInputTimer } from '@krafton-infosys/k-components';

  export default {
    name: 'Task',
    components: {
      KInputTimer,
    },
    props: {
      task: {
        type: Object,
        required: true,
        default: () => ({ id: '', state: '', title: '' }),
        validator: task => ['id', 'state', 'title'].every(key => key in task),
      },
    },
  };
</script>