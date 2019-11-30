import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | math-negate', function(hooks) {
  setupRenderingTest(hooks);

  test('can negate a positive number', async function(assert) {
    await render(hbs`{{math-negate 3}}`);
    assert.equal(this.element.textContent.trim(), '-3');
  });

  test('can negate a negative number', async function(assert) {
    await render(hbs`{{math-negate -3}}`);
    assert.equal(this.element.textContent.trim(), '3');
  });
});
