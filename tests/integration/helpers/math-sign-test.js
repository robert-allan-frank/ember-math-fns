import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | math-sign', function(hooks) {
  setupRenderingTest(hooks);

  test('can get no sign for zero', async function(assert) {
    await render(hbs`{{math-sign 0}}`);
    assert.equal(this.element.textContent.trim(), '0');
  });

  test('can get positive sign for positive number', async function(assert) {
    await render(hbs`{{math-sign 10}}`);
    assert.equal(this.element.textContent.trim(), '1');
  });

  test('can get negative sign for negative number', async function(assert) {
    await render(hbs`{{math-sign -10}}`);
    assert.equal(this.element.textContent.trim(), '-1');
  });
});
