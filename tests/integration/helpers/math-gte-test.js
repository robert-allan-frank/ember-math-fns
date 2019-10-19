import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | math-gte', function(hooks) {
  setupRenderingTest(hooks);

  test('can compare two numbers', async function(assert) {
    await render(hbs`{{math-gte 2 1}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('can compare two equal numbers', async function(assert) {
    await render(hbs`{{math-gte 2 2}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('can find not greater than equal to', async function(assert) {
    await render(hbs`{{math-gte 1 2}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });

  test('can compare n numbers', async function(assert) {
    await render(hbs`{{math-gte 5 4 3 2 1}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('can compare n equal numbers', async function(assert) {
    await render(hbs`{{math-gte 1 1 1 1 1}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('can find not greater than for n numbers', async function(assert) {
    await render(hbs`{{math-gte 1 1 1 1 2}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });
});
