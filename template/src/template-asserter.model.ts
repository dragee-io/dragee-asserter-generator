import { Asserter, findRules } from "@dragee-io/asserter-type";

export class TemplateAsserter extends Asserter {
    constructor() {
        super("template", findRules(import.meta.dir + '/rules/'));
    }
}