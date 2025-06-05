setTimeout(() => {
  console.log("timer fired");
}, 1000);

export default {
  async fetch(request, env, ctx) {
    return new Response("Hello World");
  },
};
