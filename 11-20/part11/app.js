var app = Vue.createApp({
  data() {
    return {
      skills: [
        { name: "HTML", experience: 5 },
        { name: "CSS", experience: 10 },
        { name: "JS", experience: 15 }
      ],
      newSkill: {}
    };
  },

  methods: {
    addSkill() {
      this.skills.push({ name: this.newSkill, experience: 0 });
      this.newSkill = {};
    },
    removeSkill(i) {
      this.skills.splice(i, 1);
    }
  }
});

app.mount("#app");
