#!/usr/bin/env node

// 🔍 Node.js скрипт за проверка на интегритета
const fs = require('fs');
const path = require('path');

console.log('🔍 Angular Project Integrity Check\n');

let errors = 0;
let warnings = 0;

// Проверка на файлове
const requiredFiles = [
  'angular.json',
  'package.json',
  'tsconfig.json',
  'tsconfig.app.json',
  'src/index.html',
  'src/main.ts',
  'src/styles.css',
  'src/app/app.component.ts',
  'src/app/app.component.html',
  'src/app/app.component.css',
  'src/app/services/weather.service.ts',
  'src/app/models/weather.model.ts'
];

console.log('📁 Проверка на структурата...');
requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`  ✅ ${file}`);
  } else {
    console.log(`  ❌ ${file} - ЛИПСВА!`);
    errors++;
  }
});

// Проверка на JSON файлове
console.log('\n📋 Проверка на JSON файлове...');
const jsonFiles = ['package.json', 'angular.json', 'tsconfig.json'];

jsonFiles.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf8');
    JSON.parse(content);
    console.log(`  ✅ ${file} - валиден JSON`);
  } catch (e) {
    console.log(`  ❌ ${file} - невалиден JSON: ${e.message}`);
    errors++;
  }
});

// Проверка на зависимости
console.log('\n📦 Проверка на зависимости...');
if (fs.existsSync('node_modules')) {
  console.log('  ✅ node_modules съществува');
  
  // Проверка за ключови пакети
  const keyPackages = [
    '@angular/core',
    '@angular/common',
    '@angular/platform-browser',
    'typescript',
    'rxjs'
  ];
  
  keyPackages.forEach(pkg => {
    if (fs.existsSync(path.join('node_modules', pkg))) {
      console.log(`  ✅ ${pkg} инсталиран`);
    } else {
      console.log(`  ⚠️  ${pkg} НЕ е инсталиран`);
      warnings++;
    }
  });
} else {
  console.log('  ⚠️  node_modules ЛИПСВА - изпълнете: npm install');
  warnings++;
}

// Резултат
console.log('\n========================================');
console.log('📊 РЕЗУЛТАТ:');
console.log(`  Грешки: ${errors}`);
console.log(`  Предупреждения: ${warnings}`);

if (errors === 0) {
  console.log('\n✅ Проектът е готов за стартиране!');
  console.log('\nЗа да стартирате:');
  console.log('  1. npm install (ако има предупреждения)');
  console.log('  2. npm start');
} else {
  console.log('\n❌ Проектът има проблеми! Моля, коригирайте грешките.');
}

process.exit(errors > 0 ? 1 : 0);
