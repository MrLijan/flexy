import DeButtonGhost from '../../components/Button/de-button-ghost.vue';
import BaseIcon from '../../components/Icon/BaseIcon.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Buttons/Ghost Button',
  component: DeButtonGhost,
  subcomponents: { BaseIcon },
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
  components: { DeButtonGhost },
  template: `<de-button-ghost v-bind="$props">
        {{ $props.label }}
        <base-icon slot="icon" :src="$props.icon" />
    </de-ghost-button`,
});

export const GhostButton = Template.bind({});
GhostButton.args = {
  label: 'Im primary button',
  icon: 'discord',
};
