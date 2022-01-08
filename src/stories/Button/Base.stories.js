import DeButton from '../../components/Button/de-button.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Buttons/Base Button',
  component: DeButton,
  argTypes: {},
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DeButton },
  template: '<de-button v-bind="$props"></de-button>',
});

export const BaseButton = Template.bind({});
BaseButton.args = {
  label: 'Liram',
};
