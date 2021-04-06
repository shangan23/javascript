/**
 * In the example below, we use the singleton pattern to construct a really naive logging service.
 * The above code makes use of the IIFE or Immediately Invoked Function Expression to return 
 * the object with the info, warning, and error methods on it.
 */
const LoggingService = (function () {
  const infoMessage = 'Info: '
  const warningMessage = 'Warning: '
  const errorMessage = 'Error: '
  return {
    info: function (str) {
      console.log(`${infoMessage}${str}`)
    },
    warning: function (str) {
      console.log(`${warningMessage}${str}`)
    },
    error: function (str) {
      console.log(`${errorMessage}${str}`)
    },
  }
})()

// someOtherFile.js
LoggingService.info('one') // Info: one
LoggingService.warning('two') // Warning: two
LoggingService.error('three') // Error: three
