Vue.component("Modal", {
  props: ["title"],

  data() {
    return {};
  },

  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
  },

  template: `
        <div class='modal'>
            <h1> {{ title }} </h1>
            <slot></slot>
            <button @click='closeModal()'> X </button>
        </div>
    `,
});

new Vue({
  el: "#app",

  data() {
    return {
      showModal: false,
      showTitle: false,
      titleInput: "",
      titleModal: "",
    };
  },

  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    sendTitle() {
      this.titleModal = this.titleInput;
    },
    toggleTitle() {
      this.showTitle = !this.showTitle;
    },
  },

  computed: {
    titleModalChanged() {
      return this.titleModal;
    },
  },
});
