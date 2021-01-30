// var app = Vue.createApp({
//   data() {
//     return {
//       name: ""
//     };
//   },

//   methods: {
//     clear() {
//       this.name = "";
//     }
//   }
// });

// app.mount("#app");

var data = {
  name: "",
  age: 10
};

var handler = {
  set(target, key, value) {
    console.log(target);
    console.log(key);
    console.log(value);

    if (key === "name") {
      var outputElement = document.querySelector("#outputName");
      outputElement.innerHTML = value;
    }
  }
};

var proxyData = new Proxy(data, handler);

proxyData.name = "Mamun";

// data.name = "Rimon";
