import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | math-gt', function(hooks) {
  setupRenderingTest(hooks);

  test('can compare two numbers', async function(assert) {
    await render(hbs`{{math-gt 2 1}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('can find not greater than', async function(assert) {
    await render(hbs`{{math-gt 1 2}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });

  test('can compare n numbers', async function(assert) {
    await render(hbs`{{math-gt 5 4 3 2 1}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('can find not greater than for n numbers', async function(assert) {
    await render(hbs`{{math-gt 4 3 2 1 5}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });

  test('ensures at least two values are present', async function(assert) {
    await render(hbs`{{math-gt 1}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });
});
