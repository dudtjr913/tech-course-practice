export default $elements = {
  $titleH3: document.createElement('h3'),
  $textDiv: document.createElement('div'),

  createContainer(id = '') {
    const $section = document.createElement('section');
    $section.id = id;

    return $section;
  },

  createUserInputForm(id = '') {
    const $form = document.createElement('form');
    const $input = document.createElement('input');
    $form.id = id;

    return $form.appendChild($input);
  },
};
