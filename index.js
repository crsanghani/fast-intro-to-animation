function World(screen, key) {
  this.screen = screen;
  this.key = key;

  this.square = { x: 10, y: 10, width: 10, height: 10 };
};

World.prototype = {
  update: function() {
    if (this.key.isPressed()) {
      this.square.width += 1;
      this.square.height += 1;
    }
  },

  draw: function() {
    this.screen.fillRect(this.square.x,
                         this.square.y,
                         this.square.width,
                         this.square.height);
  }
};

function Key(window) {
  var pressed = false;

  window.addEventListener("keydown", function() {
    pressed = true;
  });

  window.addEventListener("keyup", function() {
    pressed = false;
  });

  this.isPressed = function() {
    return pressed;
  };
};

var screen = document.getElementById("screen").getContext("2d");
var world = new World(screen, new Key(window));

function tick() {
  world.update();
  world.draw();
  requestAnimationFrame(tick);
};

requestAnimationFrame(tick);
