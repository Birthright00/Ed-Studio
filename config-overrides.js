module.exports = function override(config, env) {
    // Add rule for processing .html files
    config.module.rules.push({
      test: /\.html$/i,
      use: 'raw-loader',
    });
  
    return config;
  };
  