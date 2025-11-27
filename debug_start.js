process.on('uncaughtException', (err) => {
  console.error('uncaughtException:', err && err.stack ? err.stack : err);
  process.exit(1);
});
process.on('unhandledRejection', (reason, p) => {
  console.error('unhandledRejection:', reason);
  process.exit(1);
});
process.on('exit', (code) => {
  console.error('process exit with code:', code);
});

require('./bin/www');
