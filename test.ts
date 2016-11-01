import { helper } from './helperModules';
import { foo as secondModule } from './helperModules';

var giveName: string;
let myFirstVariable: string | number = start(giveName);

function start(name: string) {
    return myFirstVariable + 'hahaahahhaa';
};

giveName = 'Smile: ';

console.log(myFirstVariable, helper, secondModule);
