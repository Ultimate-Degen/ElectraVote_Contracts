import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { execSync } = require('child_process');

try {
  execSync('npx hardhat run scripts/deployVoterRegistration.js --network scroll --show-stack-traces', { stdio: 'inherit' });
} catch (error) {
  console.error("Error executing Hardhat script:", error);
}
