// Starter data
const settings = {
  darkMode: true,
  notifications: false,
  autoSave: true,
  spellCheck: false,
  grammarCheck: true
};

// Start coding here...
const enabledSettingsEntries = Object.entries(settings).filter(([key, value]) => value === true);
const enabledSettingsList = enabledSettingsEntries.map(([key, value]) => `${key}: ${value}`);
console.log("Enabled settings:", enabledSettingsList);

const trueCount = enabledSettingsEntries.length;
console.log("Number of enabled settings:", trueCount);

console.log("Filtered entries (enabled settings):", enabledSettingsEntries);

const filteredSettingsObject = Object.fromEntries(enabledSettingsEntries);
console.log("Filtered settings object:", filteredSettingsObject);
