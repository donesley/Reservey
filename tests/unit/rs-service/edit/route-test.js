import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | rs-service/edit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:rs-service/edit');
    assert.ok(route);
  });
});
