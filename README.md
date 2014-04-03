lfnw-chrome
===========

This is a test of single source multi-platform app solutions using Chrome app framework, Cordova, AngularJS, and Topcoat. I repeat this is only a test.

## Building
1. Get the code: `git clone git@github.com:gabema/lfnw-chrome.git`
2. Generate the mobile projects: `cca create mobile --link-to=chrome/www`
3. Prepare the mobile projects: `cd mobile; cca prepare`
4. Run the app in an android emulator or iOS simulator (from the mobile directory): `cca emulate <ios>|<android>`