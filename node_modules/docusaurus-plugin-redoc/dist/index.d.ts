import type { LoadContext, Plugin, OptionValidationContext } from '@docusaurus/types';
import { PluginOptions } from './options';
export { PluginOptions };
export default function redocPlugin(context: LoadContext, opts: PluginOptions): Plugin<Record<string, unknown> | null>;
export declare function validateOptions({ options, }: OptionValidationContext<PluginOptions>): Promise<void>;
//# sourceMappingURL=index.d.ts.map