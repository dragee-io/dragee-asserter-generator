import { findRules } from '@dragee-io/asserter-type';

export default {
    namespace: 'template',
    rules: findRules('template', `${import.meta.dir}/src/rules/`)
};
