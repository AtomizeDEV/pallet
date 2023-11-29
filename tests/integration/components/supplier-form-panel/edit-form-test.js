import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | supplier-form-panel/edit-form', function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
        // Set any properties with this.set('myProperty', 'value');
        // Handle any actions with this.set('myAction', function(val) { ... });

        await render(hbs`<SupplierFormPanel::EditForm />`);

        assert.dom(this.element).hasText('');

        // Template block usage:
        await render(hbs`
      <SupplierFormPanel::EditForm>
        template block text
      </SupplierFormPanel::EditForm>
    `);

        assert.dom(this.element).hasText('template block text');
    });
});
