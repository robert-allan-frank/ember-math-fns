import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | math-multiply', function(hooks) {
  setupRenderingTest(hooks);

  test('can multiply two numbers', async function(assert) {
    await render(hbs`{{math-multiply 1 2}}`);
    assert.equal(this.element.textContent.trim(), '2');
  });

  test('can multiply n numbers', async function(assert) {
    await render(hbs`{{math-multiply 1 2 3 4 5}}`);
    assert.equal(this.element.textContent.trim(), '120');
  });
});
