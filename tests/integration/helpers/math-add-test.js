import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | math-add', function(hooks) {
  setupRenderingTest(hooks);

  test('can add two numbers', async function(assert) {
    await render(hbs`{{math-add 1 2}}`);
    assert.equal(this.element.textContent.trim(), '3');
  });

  test('can add n numbers', async function(assert) {
    await render(hbs`{{math-add 1 2 3 4 5}}`);
    assert.equal(this.element.textContent.trim(), '15');
  });
});
