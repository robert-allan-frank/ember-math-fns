import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | math-min', function(hooks) {
  setupRenderingTest(hooks);

  test('can find min value', async function(assert) {
    await render(hbs`{{math-min 1 2 3 2 1}}`);
    assert.equal(this.element.textContent.trim(), '1');
  });
});
