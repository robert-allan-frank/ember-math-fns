import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | math-floor', function(hooks) {
  setupRenderingTest(hooks);

  test('does not round integer', async function(assert) {
    await render(hbs`{{math-floor 1}}`);
    assert.equal(this.element.textContent.trim(), '1');
  });

  test('can round decimal down', async function(assert) {
    await render(hbs`{{math-floor 1.1}}`);
    assert.equal(this.element.textContent.trim(), '1');
  });
});
