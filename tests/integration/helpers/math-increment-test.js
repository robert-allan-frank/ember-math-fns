import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | math-increment', function(hooks) {
  setupRenderingTest(hooks);

  test('can increment a positive number', async function(assert) {
    await render(hbs`{{math-increment 1}}`);
    assert.equal(this.element.textContent.trim(), '2');
  });

  test('can increment a negative number', async function(assert) {
    await render(hbs`{{math-increment -10}}`);
    assert.equal(this.element.textContent.trim(), '-9');
  });
});
