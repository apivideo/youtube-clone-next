import ApiVideoClient from "@api.video/nodejs-client";

const handler = async (req, res) => {
  const defaultApiKey = process.env.API_KEY;

  const { apiKey, sortBy, sortOrder, currentPage, tags, title, metadata } =
    req.body;
  const apiKeyToApply = apiKey ? apiKey : defaultApiKey;
  const client = new ApiVideoClient({
    apiKey: apiKeyToApply,
  });

  let result = await client.videos.list({ title });
  res.status(200).json({ ...result });
  return;
};
export default handler;
