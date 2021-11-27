module.exports = eleventyConfig => {
  // Copy our static assets to the output folder
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('fonts');
  eleventyConfig.addPassthroughCopy('images');
  eleventyConfig.setTemplateFormats([
    "md",
    "css"
  ]);

  return {
    dir: {
      output: 'docs'
    }
  };
};
