const plugin = require("tailwindcss/plugin");

const animationDelay = plugin(function({matchUtilities, theme}) {
  matchUtilities({
    'animation-delay': (value) => ({
      animationDelay: value,
    }),
  }, {
    values: theme('transitionDelay'),
    supportsNegativeValues: true,
    // Allow arbitrary values
    arbitrary: true,
  });
});

module.exports = animationDelay;
