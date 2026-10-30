const fs = require('fs');
const vm = require('vm');
const htmlPath = 'www/index.html';
if (!fs.existsSync(htmlPath)) throw new Error('Missing www/index.html at repository root.');
const html = fs.readFileSync(htmlPath, 'utf8');
const scripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)].map(m => m[1]).filter(Boolean);
if (!scripts.length) throw new Error('No inline application script found.');
for (const script of scripts) new vm.Script(script, { filename: htmlPath });
const programme = JSON.parse(fs.readFileSync('www/assets/v4-programme-8-weeks.json', 'utf8'));
if (!programme.weeks || Object.keys(programme.weeks).length !== 8) throw new Error('The programme must contain 8 weeks.');
for (let w = 1; w <= 8; w++) {
  const week = programme.weeks[String(w)];
  if (!week || Object.keys(week).length !== 7) throw new Error(`Week ${w} must contain all 7 days.`);
  for (let d = 0; d <= 6; d++) {
    if (!week[String(d)] || !Array.isArray(week[String(d)].ex)) throw new Error(`Week ${w}, day ${d} is missing.`);
  }
  if (week['0'].ex.length < 3) throw new Error(`Week ${w} Sunday recovery content is missing.`);
}
for (const p of ['www/assets/weekly-workout-template.xlsx', 'www/assets/8-week-programme-upload.xlsx']) {
  if (!fs.existsSync(p) || fs.statSync(p).size < 1000) throw new Error(`Missing or invalid workbook: ${p}`);
}
console.log('V4 source validation passed: inline JavaScript syntax, 8 x 7 programme days, Sunday recovery, and bundled workbooks.');
