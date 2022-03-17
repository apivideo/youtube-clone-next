export const filterTags = (videos) => {
  const tags = videos.flatMap((video) => video?.tags);
  const lowerVideos = tags.map((el) => el.toLowerCase()).sort();
  const result = lowerVideos.reduce(
    (acc, curr) => ((acc[curr] = (acc[curr] || 0) + 1), acc),
    {}
  );
  const keysSorted = Object.keys(result).sort(function (a, b) {
    return result[b] - result[a];
  });
  return keysSorted;
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
