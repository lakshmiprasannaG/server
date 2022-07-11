const { router } = require('./app/router.js');

const { bodyParser, searchParamsParser } = require('./app/handlers/paramParser.js');
const { logHandler } = require('./app/handlers/logHandler.js');
const { createFileHandler } = require('./app/handlers/staticFileHandler.js');
const { notFoundHandler } = require('./app/handlers/notFoundHandler.js');

const app = (staticSrcPath) => {
  const handlers = [
    logHandler,
    bodyParser,
    searchParamsParser,
    createFileHandler(staticSrcPath),
    notFoundHandler
  ];

  return router(handlers);
};

module.exports = { app };
