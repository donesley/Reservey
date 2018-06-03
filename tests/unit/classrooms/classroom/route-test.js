import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | classrooms/classroom', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:classrooms/classroom');
    assert.ok(route);
  });
});
