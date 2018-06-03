import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | rs-agenda', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:rs-agenda');
    assert.ok(route);
  });
});
