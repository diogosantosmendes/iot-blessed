exports.box = (screen) => {
  let blessed = require('blessed');

  let box = blessed.box({
    width: '100%', height: '97%',
    border: { type: 'line' },
    style: { bg: 'black', border: { fg: 'yellow' } }
  });

  let text_welcome = blessed.text({
    content: '         _____ _                 _    _____                            _   _             \n        / ____| |               | |  / ____|                          | | (_)            \n       | |    | | ___  _   _  __| | | |     ___  _ __ ___  _ __  _   _| |_ _ _ __   __ _ \n       | |    | |/ _ \\| | | |/ _` | | |    / _ \\| `_ ` _ \\| ´_ \\| | | | __| | ´_ \\ / _` |\n       | |____| | (_) | |_| | (_| | | |___| (_) | | | | | | |_) | |_| | |_| | | | | (_| |\n        \\_____|_|\\___/ \\__._|\\__._|  \\_____\\___/|_| |_| |_|  __/ \\__._|\\__|_|_| |_|\\__  |\n                                                          | |                       __/ |\n                                                          |_|                      |___/',
    style: { bold: true, fg: 'yellow' }
  });

  box.append(text_welcome);

  return box;
}