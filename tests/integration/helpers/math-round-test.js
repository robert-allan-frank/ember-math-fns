import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | math-round', function(hooks) {
  setupRenderingTest(hooks);

  test('does not round integer', async function(assert) {
    await render(hbs`{{math-round 1}}`);
    assert.equal(this.element.textContent.trim(), '1');
  });

  test('can round decimal up', async function(assert) {
    await render(hbs`{{math-round 1.2}}`);
    assert.equal(this.element.textContent.trim(), '1');
  });

  test('can round decimal down', async function(assert) {
    await render(hbs`{{math-round 1.8}}`);
    assert.equal(this.element.textContent.trim(), '2');
  });
});
