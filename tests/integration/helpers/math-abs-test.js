import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | math-abs', function(hooks) {
  setupRenderingTest(hooks);

  test('can get absolute value of zero', async function(assert) {
    await render(hbs`{{math-abs 0}}`);
    assert.equal(this.element.textContent.trim(), '0');
  });

  test('can get absolute value of negative number', async function(assert) {
    await render(hbs`{{math-abs -1}}`);
    assert.equal(this.element.textContent.trim(), '1');
  });

  test('can get absolute value of positive number', async function(assert) {
    await render(hbs`{{math-abs 1}}`);
    assert.equal(this.element.textContent.trim(), '1');
  });
});
