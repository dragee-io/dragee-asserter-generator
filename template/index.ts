import { findRules } from '@dragee-io/type/asserter';

export default {
    namespace: 'template',
    rules: findRules('template', `${import.meta.dir}/src/rules/`)
};
