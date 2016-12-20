function startGame() {
  myGameArea.start();
}

var myGameArea = {
  canvas : document.createElement("canvas"),

  start : function() {
    debugger;
    this.canvas.width = 620;
    this.canvas.height = 480;
    this.context = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);
    this.frameNo = 0;
  },

  clear : function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
};
