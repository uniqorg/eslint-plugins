import { TSESTree, AST_NODE_TYPES } from '@typescript-eslint/types';
import { BABEL_PARSER_AST_NODE_TYPES, TBABEL_PARSER_AST_NODE_TYPES } from '../types/babel-ast-nodes';
import { createRule } from '../util';

export type Options = [{ esmodule?: boolean }];
export type MessageIds = 'requireShouldBeLiteral' | 'legacyImportShouldBeLiteral' | 'importShouldBeLiteral';

function isRequire(node: TSESTree.CallExpression) {
    return node &&
        node.callee &&
        node.callee.type === AST_NODE_TYPES.Identifier &&
        node.callee.name === 'require' &&
        node.arguments.length >= 1;
}

/** This function supports @babel/parser */
function isDynamicImport(node: TSESTree.CallExpression) {
    return node &&
        node.callee &&
        // from @babel/parser
        node.callee.type === BABEL_PARSER_AST_NODE_TYPES.Import as string
}

function isStaticValue(arg: TSESTree.CallExpressionArgument | TSESTree.Expression) {
    return arg.type === AST_NODE_TYPES.Literal ||
        (arg.type === AST_NODE_TYPES.TemplateLiteral && arg.expressions.length === 0);
}


export default createRule<Options, MessageIds>({
    defaultOptions: [{}],
    name: 'no-dynamic-import',

    meta: {
        type: 'suggestion',
        docs: {
            description: 'Using this rule to disable the use of dynamic require for CommonJS or ESM import.',
            recommended: false
        },
        messages: {
            requireShouldBeLiteral: 'Calls to require() should use string literals',
            legacyImportShouldBeLiteral: 'Calls to import() should use string literals',
            importShouldBeLiteral: 'Calls to import() should use string literals',
        },
        schema: [
            {
                type: 'object',
                properties: {
                    esmodule: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },

    create(context) {

        const [{ esmodule } = { esmodule: false }] = context.options;

        return {
            CallExpression(node) {
                if (!node.arguments[0] || isStaticValue(node.arguments[0])) {
                    return;
                }

                if (isRequire(node)) {
                    return context.report({
                        node,
                        messageId: 'requireShouldBeLiteral',
                        // message: 'Calls to require() should use string literals',
                    });
                }
                if (esmodule && isDynamicImport(node)) {
                    return context.report({
                        node,
                        messageId: 'legacyImportShouldBeLiteral',
                    });
                }
            },
            ImportExpression(node) {
                if (!esmodule || isStaticValue(node.source)) {
                    return;
                }
                return context.report({
                    node,
                    messageId: 'importShouldBeLiteral',
                });
            },
        };
    },
})
