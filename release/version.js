const fs = require('fs');

/**
 * @type {'major' | 'minor' | 'patch'}
 */
const type = 'patch';

const package = fs.readFileSync('package.json')
const json = JSON.parse(package);
let version = json['version'] ?? '0.0.0';

let version_numbers = version.split('.').map(Number)
if (type === 'patch') {
    version_numbers[2] += 1;
} else if (type === 'minor') {
    version_numbers[2] = 0;
    version_numbers[1] += 1;
} else {
    version_numbers[2] = 0;
    version_numbers[1] = 0;
    version_numbers[0] += 1;
}

version = version_numbers.join('.');
json['version'] = version;
fs.writeFileSync('package.json', JSON.stringify(json, null, 4));