import {describe, expect, test} from "bun:test";
import { type Report, type Dependency, DependencyType } from "@dragee-io/asserter-type";
import TemplateDddAsserter from "../..";

const asserter = TemplateDddAsserter.handler

describe('Sample Asserter', () => {
    test('assert with no dragees', () => {
        const report: Report = asserter([]);

        expect(report.pass).toBeTrue();
        expect(report.namespace).toBe('template');
    });
    
    test('assert with dragees', () => {
        const dependancy: Dependency = {
            'dragee1': DependencyType.FIELD
        };
        const report: Report = asserter([{
            name: 'dragee1',
            profile: 'template/test',
            depends_on: []
        },{
            name: 'dragee2',
            profile: 'template/test',
            depends_on: [dependancy]
        }]);

        expect(report.pass).toBeFalse();
        expect(report.errors).toEqual(['To be implemented', 'To be implemented']);
        expect(report.namespace).toBe('template');
    });
})