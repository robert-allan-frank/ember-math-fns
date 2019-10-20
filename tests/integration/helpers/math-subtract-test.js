import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | math-subtract', function(hooks) {
  setupRenderingTest(hooks);

  test('can subtract two numbers', async function(assert) {
    await render(hbs`{{math-subtract 2 1}}`);
    assert.equal(this.element.textContent.trim(), '1');
  });

  test('can subtract n numbers', async function(assert) {
    await render(hbs`{{math-subtract 15 5 4 3 2 1}}`);
    assert.equal(this.element.textContent.trim(), '0');
  });

  test('can ensure at least one number is present', async function(assert) {
    await render(hbs`{{math-subtract}}`);
    assert.equal(this.element.textContent.trim(), '0');
  });
});
