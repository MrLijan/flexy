import DeButton from '../../components/Button/de-button.vue';
import DeButtonPrimary from '../../components/Button/de-button-primary.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Buttons',
  component: DeButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Base = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DeButton },
  template: '<de-button>LIRAM</de-button>',
});

const Primary = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DeButtonPrimary },
  template: '<de-button-primary>LIRAM</de-button-primary>',
});

// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/vue/writing-stories/args
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };

export const BaseButton = Base.bind({});
BaseButton.args = {};

export const PrimaryButton = Primary.bind({});
PrimaryButton.args = {};
