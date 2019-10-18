import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | math-lt', function(hooks) {
  setupRenderingTest(hooks);

  test('can compare two numbers', async function(assert) {
    await render(hbs`{{math-lt 1 2}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('can find not less than', async function(assert) {
    await render(hbs`{{math-lt 2 1}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });

  test('can compare n numbers', async function(assert) {
    await render(hbs`{{math-lt 1 2 3 4 5}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('can find not less than for n numbers', async function(assert) {
    await render(hbs`{{math-lt 2 3 4 5 1}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });
});
