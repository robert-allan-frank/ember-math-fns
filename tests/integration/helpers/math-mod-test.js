import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | math-mod', function(hooks) {
  setupRenderingTest(hooks);

  test('can find remainder', async function(assert) {
    await render(hbs`{{math-mod 12 3}}`);
    assert.equal(this.element.textContent.trim(), '0');

    await render(hbs`{{math-mod 13 3}}`);
    assert.equal(this.element.textContent.trim(), '1');

    await render(hbs`{{math-mod 14 3}}`);
    assert.equal(this.element.textContent.trim(), '2');

    await render(hbs`{{math-mod 15 3}}`);
    assert.equal(this.element.textContent.trim(), '0');
  });
});
