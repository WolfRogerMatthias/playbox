// Use trailing slash so webpack resolves the directory, not this file
const postsContext = require.context('./posts/', false, /^\.\/.*\.md$/);

export const posts = postsContext.keys().map((key) => {
  const slug = key.replace(/^\.\/|\.md$/g, '');
  const fileContent = postsContext(key);

  return {
    slug,
    fileUrl: fileContent, // This is the URL to fetch the content from
  };
});
