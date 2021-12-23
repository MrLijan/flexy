export default {
  props: {
    label: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      value: null,
    };
  },

  methods: {
    log(value) {
      console.log(value);
    },
  },
};
