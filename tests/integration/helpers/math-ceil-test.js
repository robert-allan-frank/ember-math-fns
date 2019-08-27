import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | math-ceil', function(hooks) {
  setupRenderingTest(hooks);

  test('does not round integer', async function(assert) {
    await render(hbs`{{math-ceil 1}}`);
    assert.equal(this.element.textContent.trim(), '1');
  });

  test('can round decimal up', async function(assert) {
    await render(hbs`{{math-ceil 1.1}}`);
    assert.equal(this.element.textContent.trim(), '2');
  });
});
