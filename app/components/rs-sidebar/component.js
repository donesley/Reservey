import Component from '@ember/component';
import { not } from '@ember/object/computed';
import { set, get } from '@ember/object';
import { run } from '@ember/runloop';
import { inject as service } from '@ember/service';
import InboundActions from 'ember-component-inbound-actions/inbound-actions';
import config from 'ember-get-config';

const transitionDelayMs = 150;

const {
	rootURL
} = config;

export default Component.extend(InboundActions, {
	tagName: '',
    rootURL,
    svc: service('sidebar'),

	init() {
		// eslint-disable-next-line prefer-rest-params, no-underscore-dangle
		this._super(...arguments);

		set(this, 'svc.toggleExpand', this.actions.toggleExpand.bind(this));
	},

	expanded: true,
	collapsed: not('expanded'),
	isExpanding: false,

	actions: {
		toggleExpand() {
			this.toggleProperty('isExpanding');
			this.toggleProperty('expanded');

			run.debounce(this, () => {
				if (!(get(this, 'isDestroyed') || get(this, 'isDestroying'))) {
					this.toggleProperty('isExpanding');
				}
			}, transitionDelayMs);
		}
    }
});