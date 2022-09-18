const log = require('log-beautify');

log.setSymbols({
  info: 'ℹ',
});

module.exports = {
  info: (msg) => {
    log.info(msg);
  },
  error: (msg) => {
    log.error(msg);
  },
  success: (msg) => {
    log.success(msg);
  },
  warning: (msg) => {
    log.warning(msg);
  },
};
