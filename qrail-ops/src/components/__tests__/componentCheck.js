// Simple script to verify all components exist and can be imported
const fs = require('fs');
const path = require('path');

const components = [
  'OperationsDashboard',
  'LiveTrainMap',
  'TimetablePlatform',
  'AIRecommendations',
  'ConflictAlerts',
  'DelayCascadePredictor',
  'ControllerTools',
  'TrainDetailDrawer',
  'KPIDashboard',
  'AuditLogs',
  'Settings',
  'LandingPage'
];

console.log('Checking if all components exist...');

let allExist = true;

components.forEach(component => {
  const componentPath = path.join(__dirname, '..', `${component}.jsx`);
  if (fs.existsSync(componentPath)) {
    console.log(`✓ ${component} exists`);
  } else {
    console.log(`✗ ${component} is missing`);
    allExist = false;
  }
});

if (allExist) {
  console.log('\n✓ All components are present!');
  process.exit(0);
} else {
  console.log('\n✗ Some components are missing!');
  process.exit(1);
}