import ApiVideoClient from "@api.video/nodejs-client";

const handler = async (req, res) => {
  const defaultApiKey = process.env.API_KEY;

  const { apiKey, videoId } = req.body;
  const apiKeyToApply = apiKey ? apiKey : defaultApiKey;

  const client = new ApiVideoClient({
    apiKey: apiKeyToApply,
  });

  const result = await client.videos.get(videoId);
  res.status(200).json({ ...result });
  return;
};
export default handler;
