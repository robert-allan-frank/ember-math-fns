import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | math-divide', function(hooks) {
  setupRenderingTest(hooks);

  test('can divide two numbers', async function(assert) {
    await render(hbs`{{math-divide 2 1}}`);
    assert.equal(this.element.textContent.trim(), '2');
  });

  test('can divide n numbers', async function(assert) {
    await render(hbs`{{math-divide 15 5 3}}`);
    assert.equal(this.element.textContent.trim(), '1');
  });

  test('can ensure at least one number is present', async function(assert) {
    await render(hbs`{{math-divide}}`);
    assert.equal(this.element.textContent.trim(), '0');
  });
});
