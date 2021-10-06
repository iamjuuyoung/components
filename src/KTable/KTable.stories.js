import KTable from './KTable.vue';

import { action } from '@storybook/addon-actions';

export default {
  component: KTable,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  title: 'KTable',
  //👇 Our events will be mapped in Storybook UI
  argTypes: {
    onPinTask: {},
    onArchiveTask: {},
  },
};

export const actionsData = {
  onPinTask: action('pin-task'),
  onArchiveTask: action('archive-task'),
};

const Template = (args, { argTypes }) => ({
  components: { KTable },
  props: Object.keys(argTypes),
  // Storybook provides all the args in a $props variable.
  // Each arg is also available as their own name.
  template: '<KTable :items="[]" :header="[]" />',
});
export const Default = Template.bind({});

Default.args = {
  items: [1,2,3],
  header: ['d', 'a', 'c']
};