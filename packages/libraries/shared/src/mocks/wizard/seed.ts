const mockData = {
  visitors: '<script>console.log("Embed code for visitors")</script>',
  users: '<script>console.log("Embed code for logged in users")</script>'
};

function seed() {
  const { EMBED } = { EMBED: 'embed' };
  sessionStorage.setItem(EMBED, JSON.stringify(mockData));

  return { EMBED };
}

export { seed };
