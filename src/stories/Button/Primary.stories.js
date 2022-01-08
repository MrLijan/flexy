import DeButtonPrimary from '../../components/Button/de-button-primary.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Buttons/Primary Button',
  component: DeButtonPrimary,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    label: {
      description: 'The text that shown in the button',
    },
    icon: {
      description: 'The icon name of the icon (e.g. - discord)',
    },
    disabled: {
      description: 'If the button is disabled or not',
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DeButtonPrimary },
  template: '<de-button-primary v-bind="$props" @click="clicked"></de-button-primary>',
});

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  label: 'Im primary button',
  icon: 'arrow-right',
};
