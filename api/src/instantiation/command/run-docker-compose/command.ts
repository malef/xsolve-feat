import {EnvVariablesSet} from '../../sets/env-variables-set';
import {SimpleCommand} from '../../executor/simple-command';

export class RunDockerComposeCommand extends SimpleCommand {

    constructor(
        readonly absoluteGuestEnvDirPath: string,
        readonly envVariables: EnvVariablesSet,
        readonly args: string[],
    ) {
        super();
    }

}
