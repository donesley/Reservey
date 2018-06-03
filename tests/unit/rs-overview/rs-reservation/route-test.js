import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | rs-overview/rs-reservation', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:rs-overview/rs-reservation');
    assert.ok(route);
  });
});
