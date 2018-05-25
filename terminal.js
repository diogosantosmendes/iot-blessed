var blessed = require('blessed'),
  gui = require("./lib/gui/index");

// Create a screen object.
var screen = blessed.screen({ smartCSR: true, fullUnicode: true });
// Quit on Escape, or Control-C.
screen.key(['escape', 'C-c'], (ch, key) => {
  return process.exit(0);
});

/*************************************************
 *********** Initialize components ***************
 ************************************************/
let box = gui.base.box(screen);
let cloud_select = gui.cloud_select.menu(screen);
let one_menu = gui.one_menu.menu(screen);

/*************************************************
 ***************** Change menus ******************
 ************************************************/
cloud_select.on('submit', () => {
  if (cloud_select.selected == 2) {
    box.remove(cloud_select);
    box.append(one_menu);
    one_menu.getFocus();
    screen.render();
  }
});

one_menu.on('submit', () => {
  if (one_menu.selected == 3) {
    box.remove(one_menu);
    box.append(cloud_select);
    cloud_select.getFocus();
    screen.render();
  }
});

//************************************************
// Initialize terminal
box.append(cloud_select);
screen.append(box);
cloud_select.getFocus();

// Render the screen.
screen.render();