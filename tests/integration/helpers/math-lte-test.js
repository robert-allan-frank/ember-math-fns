import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | math-lte', function(hooks) {
  setupRenderingTest(hooks);

  test('can compare two numbers', async function(assert) {
    await render(hbs`{{math-lte 1 2}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('can compare two equal numbers', async function(assert) {
    await render(hbs`{{math-lte 2 2}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('can find not less than equal to', async function(assert) {
    await render(hbs`{{math-lte 2 1}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });

  test('can compare n numbers', async function(assert) {
    await render(hbs`{{math-lte 1 2 3 4 5}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('can compare n equal numbers', async function(assert) {
    await render(hbs`{{math-lte 1 1 1 1 1}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('can find not less than for n numbers', async function(assert) {
    await render(hbs`{{math-lte 2 2 2 2 1}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });
});
