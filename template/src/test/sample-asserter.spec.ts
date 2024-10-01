import {describe, expect, test} from "bun:test";
import { type Dependency, DependencyType } from "@dragee-io/type/common";
import { type Report, asserterHandler } from "@dragee-io/type/asserter";
import templateAsserter from "../..";

describe('Sample Asserter', () => {
    test('assert with no dragees', () => {
        const report: Report = asserterHandler(templateAsserter, []);
        expect(report.pass).toBeTrue();
        expect(report.namespace).toBe('template');
    });
    
    test('assert with dragees', () => {
        const dependancy: Dependency = {
            'dragee1': DependencyType.FIELD
        };
        const report: Report = asserterHandler(templateAsserter, [{
            name: 'dragee1',
            profile: 'template/test',
            depends_on: []
        },{
            name: 'dragee2',
            profile: 'template/test',
            depends_on: [dependancy]
        }]);

        expect(report.pass).toBeFalse();
        expect(report.errors).toEqual([            
            {
                drageeName: 'dragee1',
                message: 'To be implemented',
                ruleId: "template/sample-rule"
            },{
                drageeName: 'dragee2',
                message: 'To be implemented',
                ruleId: "template/sample-rule"
            }]
        );
        expect(report.namespace).toBe('template');
    });
})