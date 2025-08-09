const { execSync } = require('child_process');
const os = require('os');

console.log('==========================================');
console.log('         ПРОВЕРКА НА ВЕРСИИТЕ');
console.log('==========================================\n');

// Функция за безопасно изпълнение на команди
function checkVersion(name, command) {
    try {
        const version = execSync(command, { encoding: 'utf8' }).trim();
        console.log(`✅ ${name}: ${version}`);
        return version;
    } catch (error) {
        console.log(`❌ ${name}: Не е инсталиран или не е в PATH`);
        return null;
    }
}

// Проверка на версии
console.log('🔍 Инсталирани инструменти:\n');

const nodeVersion = checkVersion('Node.js', 'node --version');
checkVersion('npm', 'npm --version');
checkVersion('nvm', 'nvm version');
checkVersion('.NET SDK', 'dotnet --version');
checkVersion('Git', 'git --version');

// Angular CLI
try {
    execSync('ng version', { encoding: 'utf8' });
    console.log('✅ Angular CLI: Инсталиран глобално');
} catch {
    console.log('⚠️  Angular CLI: Не е инсталиран глобално');
    try {
        execSync('node_modules\\.bin\\ng.cmd version', { encoding: 'utf8' });
        console.log('   ✅ Намерен локално в проекта');
    } catch {
        console.log('   ❌ Не е намерен и локално');
    }
}

// Системна информация
console.log('\n==========================================');
console.log('         СИСТЕМНА ИНФОРМАЦИЯ');
console.log('==========================================\n');

console.log(`ОС: ${os.type()} ${os.release()}`);
console.log(`Архитектура: ${os.arch()}`);
console.log(`Node.js процес: ${process.version}`);
console.log(`Платформа: ${process.platform}`);
console.log(`Памет: ${Math.round(os.totalmem() / 1024 / 1024 / 1024)}GB`);

// Проверка на Node версията
if (nodeVersion) {
    const versionNumber = parseFloat(nodeVersion.replace('v', ''));
    console.log('\n==========================================');
    console.log('            АНАЛИЗ');
    console.log('==========================================\n');
    
    if (versionNumber < 18) {
        console.log('⚠️  ВНИМАНИЕ: Node.js версията е твърде стара!');
        console.log(`   Текуща: ${nodeVersion}`);
        console.log('   Необходима: v18.13 или по-нова за Angular 17');
        console.log('\n📝 Препоръки:');
        console.log('   1. Актуализирайте Node.js от https://nodejs.org/');
        console.log('   2. Или използвайте: node simple-server.js');
    } else {
        console.log('✅ Node.js версията е подходяща за Angular 17');
    }
}

console.log('\n');
