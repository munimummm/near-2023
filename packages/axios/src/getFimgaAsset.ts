import axios from 'axios';
require('dotenv').config();
const FigmaToken = process.env.NEXT_PUBLIC_FIGMA_TOKEN;
const FigmaFileKey = process.env.NEXT_PUBLIC_FIGMA_FILE_KEY;
const FimgmaNodeId = process.env.NEXT_PUBLIC_FIGMA_NODE_ID;

const headers = {
  'X-FIGMA-TOKEN': FigmaToken,
};

const figmaFiles = (fileId) =>
  axios.create({
    baseURL: `https://api.figma.com/v1/files/${FigmaFileKey}/nodes?ids=${FimgmaNodeId}`,
    headers,
  });

const getDocument = async (fileId: string) => {
  const { data } = await figmaFiles(fileId).get(fileId);

  return data;
};
