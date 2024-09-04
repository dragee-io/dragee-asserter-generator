import { type Dragee, type RuleResult } from '@dragee-io/asserter-type';
import { TemplateRule } from '../template-rule.model.ts';

export default new TemplateRule('Sample rule', (dragees: Dragee[]): RuleResult[] =>
    dragees.map(() => {
        return { pass: false, message: 'To be implemented' };
    })
);
