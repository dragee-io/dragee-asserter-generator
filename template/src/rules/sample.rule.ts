/**
 * **sample-rule :**
 * Template placeholder basic sample rule
 * 
 * Rule comments need to respect {@link https://github.com/microsoft/tsdoc | TSDoc} specification in order to 
 * be correctly parsed for documentation.
 * 
 * ## Examples
 * 
 * Example of incorrect dragees for this rule: 
 * 
 * ```json
 * {
 *     "name": "DrageeName",
 *     "profile": "template/dragee_profile"
 * }
 * ```
 * Example of correct dragees for this rule: 
 * 
 * ```json
 * {
 *     "name": "DrageeName",
 *     "profile": "template/dragee_profile"
 * }
 * ```
 * 
 * @module Sample Rule
 * 
 */
import { type Dragee, type RuleResult, RuleSeverity } from '@dragee-io/asserter-type';
import { TemplateRule } from '../template-rule.model.ts';

export default new TemplateRule(
    'Sample rule',
    RuleSeverity.ERROR,
    (dragees: Dragee[]): RuleResult[] =>
        dragees.map(dragee => {
            return {
                pass: false,
                error: { drageeName: dragee.name, message: 'To be implemented' }
            };
        })
);
