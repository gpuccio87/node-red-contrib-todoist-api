module.exports = function (RED) {
  function AddTokenNode(n) {
    RED.nodes.createNode(this, n);
    this.token = n.token;
  }
  RED.nodes.registerType("add-todoist-api-token-v2", AddTokenNode, {
    credentials: {
      token: { type: "text" }
    }
  });
};
