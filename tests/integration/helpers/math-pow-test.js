import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | math-pow', function(hooks) {
  setupRenderingTest(hooks);

  test('can find exponent', async function(assert) {
    await render(hbs`{{math-pow 7 3}}`);
    assert.equal(this.element.textContent.trim(), '343');
  });
});
