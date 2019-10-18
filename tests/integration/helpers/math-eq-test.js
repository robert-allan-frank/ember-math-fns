import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | math-eq', function(hooks) {
  setupRenderingTest(hooks);

  test('can compare two numbers', async function(assert) {
    await render(hbs`{{math-eq 1 1}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('can compare two not equal numbers', async function(assert) {
    await render(hbs`{{math-eq 1 2}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });

  test('can compare n numbers', async function(assert) {
    await render(hbs`{{math-eq 1 1 1 1 1}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('can compare n not equal numbers', async function(assert) {
    await render(hbs`{{math-eq 1 1 1 1 2}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });
});
