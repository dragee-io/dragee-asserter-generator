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
import { type RuleResult, RuleSeverity } from '@dragee-io/type/asserter';
import type { Dragee } from '@dragee-io/type/common';

export default {
    label: 'Sample rule',
    severity: RuleSeverity.ERROR,
    handler: (dragees: Dragee[]): RuleResult[] =>
        dragees.map(dragee => {
            return {
                pass: false,
                error: { drageeName: dragee.name, message: 'To be implemented' }
            };
        })
};
