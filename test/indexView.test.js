/* Import of pug module for Jest snapshot testing */
const pug = require('pug');

/* Creating a render of the index.pug view */
const renderPug = data => pug.renderFile('views/index.pug', data);

/* Conducting the snapshot testing of the rendered view */
test('Rendering of index.pug correctly', () => {
    expect(renderPug({
        title: 'Express'
    })).toMatchSnapshot();
})
