import Card from "./card.js";

export default {
  data() {
    return {
      name: "App",
    };
  },
  template: `
        <div>
           <test-btn></test-btn>
        </div>
    `,
  components: {
    "app-card": Card,
    "test-btn":{
      template: `<button class="py-1 px-4 my-2 rounded hover:bg-gray-200 ">Test Button</button>`,
    }
  },
};
