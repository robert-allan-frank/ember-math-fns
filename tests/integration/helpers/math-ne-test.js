import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | math-ne', function(hooks) {
  setupRenderingTest(hooks);

  test('can compare two numbers', async function(assert) {
    await render(hbs`{{math-ne 1 2}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('can compare two equal numbers', async function(assert) {
    await render(hbs`{{math-ne 1 1}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });

  test('can compare n numbers', async function(assert) {
    await render(hbs`{{math-ne 1 2 3 4 5}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('can compare n equal numbers', async function(assert) {
    await render(hbs`{{math-ne 1 1 1 1 1}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });

  test('ensures at least two values are present', async function(assert) {
    await render(hbs`{{math-ne 1}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });
});
