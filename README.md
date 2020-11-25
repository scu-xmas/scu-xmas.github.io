# xmas2020
Stuff for xmas 2020 testing can live in here.

## Run instructions
Set up node/npm. Lots of instructions on google for this - on mac it is installed but you might need NVM (node version manager) to avoid version conflicts.

Once node is installed and on your PATH, type the following:<br>
**npm install**

then, to start the project locally:<br>
**npm run watch**

### Script rundown
This will be good enough for most things:<br>
**npm run watch**

~~Change document google fonts:~~ Removed (Graphik added)<br>
**npm run fonts**

Run browser-sync server:<br>
**npm run sync**

Process everything, purge and minify:<br>
**npm run dev**

Process everything, while watching for changes:<br>
**npm run watch:dev**

Process everything, purge and minify for PROD:<br>
**npm run prod**