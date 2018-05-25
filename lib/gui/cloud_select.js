exports.menu = (screen) => {
  let blessed = require('blessed');

  let form = blessed.form({
    keys: true,
    width: '95%', height: '60%',
    content: "   Select the cloud manager provider:",
    top: '35%'
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

  let text_option1 = blessed.text({
    top: 2, left: 8, tags: true,
    content: '{bold}OpenStack{/bold}  (not working)',
  });
  let text_option2 = blessed.text({
    top: 4, left: 8, tags: true,
    content: '{bold}OpenNebula{/bold}'
  });

  button_option1.key('enter', () => { form.selected = 1; form.submit(); });
  button_option2.key('enter', () => { form.selected = 2; form.submit(); });

  form.append(button_option1);
  form.append(button_option2);
  form.append(text_option1);
  form.append(text_option2);

  form.getFocus = () => {
    button_option1.focus();
  }
  form.selected = 1;

  return form;
}