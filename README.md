lfnw-chrome
===========

This is a test of single source multi-platform app solutions using Chrome app framework, Cordova, AngularJS, and Topcoat. I repeat this is only a test.

## Building
1. Configure your [environment](https://github.com/MobileChromeApps/mobile-chrome-apps/blob/master/docs/Installation.md).
2. Get the code: `git clone git@github.com:gabema/lfnw-chrome.git`
3. Generate the mobile projects: `cd lfnw-chrome; cca create mobile --link-to=chrome/www`
4. Prepare the mobile projects: `cd mobile; cca prepare`
5. Run the app in an android emulator or iOS simulator (from the mobile directory): `cca emulate <ios>|<android>` or `cca run <ios>|<android> --device`
