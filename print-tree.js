// Script to print project structure
const fs = require('fs');
const path = require('path');

function printTree(dir, prefix = '', isLast = true) {
    const files = fs.readdirSync(dir);
    const filtered = files.filter(f => 
        !f.includes('node_modules') && 
        !f.includes('.git') &&
        !f.includes('.angular') &&
        !f.includes('dist')
    );
    
    filtered.forEach((file, index) => {
        const filePath = path.join(dir, file);
        const isLastFile = index === filtered.length - 1;
        const stats = fs.statSync(filePath);
        
        console.log(prefix + (isLast ? '└── ' : '├── ') + file);
        
        if (stats.isDirectory()) {
            printTree(
                filePath, 
                prefix + (isLast ? '    ' : '│   '), 
                isLastFile
            );
        }
    });
}

console.log('C:\\prj\\weather\\');
printTree('C:\\prj\\weather');
