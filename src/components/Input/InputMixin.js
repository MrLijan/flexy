export default {
  props: {
    placeholder: {
      type: String,
      required: false,
    },
  },

  data() {
    return {
      value: '',
    };
  },

  methods: {
    log(value) {
      console.log(value);
    },
  },
};
