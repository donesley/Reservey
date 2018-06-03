import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | classrooms/classroom/reservations', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:classrooms/classroom/reservations');
    assert.ok(controller);
  });
});
