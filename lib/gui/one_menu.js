exports.menu = (screen) => {
  let blessed = require('blessed');

  let form = blessed.form({
    keys: true,
    width: '95%', height: '60%',
    content: "   OpenNebula menu",
    top: '35%',
    style: { bold: true }
  });

  let button_option1 = blessed.button({
    keys: true,
    shrink: true,
    top: 2, left: 3,
    content: ' ■ ',
    style: {
      bg: 'cyan', fg: 'cyan',
      focus: { bold: true, fg: 'yellow' }
    }
  });
  let button_option2 = blessed.button({
    keys: true,
    shrink: true,
    top: 4, left: 3,
    content: ' ■ ',
    style: {
      bg: 'cyan', fg: 'cyan',
      focus: { bold: true, fg: 'yellow' }
    }
  });
  let button_option3 = blessed.button({
    keys: true,
    shrink: true,
    top: 8, left: 3,
    content: ' ■ ',
    style: {
      bg: 'cyan', fg: 'cyan',
      focus: { bold: true, fg: 'yellow' }
    }
  });

  let text_option1 = blessed.text({
    top: 2, left: 8,
    content: 'Create VirtualMachine'
  });
  let text_option2 = blessed.text({
    top: 4, left: 8,
    content: 'Destroy VirtualMachine'
  });
  let text_option3 = blessed.text({
    top: 8, left: 8,
    content: 'Back'
  });

  button_option1.key('enter', () => { form.selected = 1; form.submit(); });
  button_option2.key('enter', () => { form.selected = 2; form.submit(); });
  button_option3.key('enter', () => { form.selected = 3; form.submit(); });

  form.append(button_option1);
  form.append(button_option2);
  form.append(button_option3);

  form.append(text_option1);
  form.append(text_option2);
  form.append(text_option3);

  form.getFocus = () => {
    button_option1.focus();
  }
  form.selected = 1;

  return form;
}