import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({

    tagName: '',
    session: service('session'),

    actions: {
        dropdownthis() {
            this.toggleProperty('dropdown');
        },
        invalidateSession() {
            this.get('session').invalidate();
        },
        validateSession() {
            this.get('session').validate();
        },
        authenticate() {
            let { identification, password } = this.getProperties('identification', 'password');
            this.get('session').authenticate('authenticator:oauth2', identification, password).catch((reason) => {
                this.set('errorMessage', reason.error || reason);
            });
        },
        onToggleDialog() {
            this.toggleProperty('isShowingDialog');
        },
        createIssue() {
            const classroom = this.get('classroom');
            const issue = this.get('issue');

            const newIssue = this.store.createRecord('mallfunctions', { classroom: classroom, issue: issue });
            newIssue.save();

            this.set('responseMessage', `We save your issue for classroom: ${this.get('name')} and will get make sure it gets looked into`);
            this.setProperties({name: '', issue: ''});
            this.toggleProperty('isShowingDialog');
        }
    }
});
