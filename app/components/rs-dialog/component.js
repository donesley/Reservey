import Component from '@ember/component';
import layout from './template';
import { get } from '@ember/object';

export default Component.extend({
	layout,

	actions: {
		onConfirm() {
			get(this, 'onConfirm')();
		},
		onToggleDialog() {
			this.toggleProperty('isShowingDialog');
		}
	}
});
