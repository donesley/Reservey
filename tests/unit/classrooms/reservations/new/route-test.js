import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | classrooms/reservations/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:classrooms/reservations/new');
    assert.ok(route);
  });
});
