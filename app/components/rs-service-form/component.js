import Component from '@ember/component';
import { w } from '@ember/string';

export default Component.extend({
  tagName: '',

  status: null,
  statuses: w('Student Teacher Administrator Service'),

  actions: {
    click(param) {
      this.sendAction('action', param);
    },
    changeStatus(status) {
      this.set('status', status);
    }
  }
});