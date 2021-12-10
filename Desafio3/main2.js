new Vue({
  el: "#app",
  data() {
    return {
      name: "",
      tasks: [],
      newTask: { title: "", time: 0 },
    };
  },
  methods: {
    addTask() {
      this.tasks.push({ title: this.newTask.title, time: this.newTask.time });
      this.newTask.title = "";
      this.newTask.time = 0;
    },
  },
});
