import { helper, foo as secondModule } from './helperModules';

var giveName: string = 'Smile: ';
let myFirstVariable: string | number = start(giveName);

function start(name: string) {
    return name + 'hahaahahhaa';
};

console.log(myFirstVariable, helper, secondModule);
