const log = require('log-beautify')

log.setSymbols({
  info: 'ℹ',
});

module.exports = {
  info: (msg) => {
    // TODO : Repair log-beautify
    console.log(msg);
    log.info(msg);
  },
  error: (msg) => {
    console.log(msg);
    log.error(msg);
  },
  success: (msg) => {
    console.log(msg);
    log.success(msg);
  },
  warning: (msg) => {
    console.log(msg);
    log.warning(msg);
  },
};
