import fs from "fs";
import path from "path";
import { Podcast } from "../utils/podcast-inferface";

const filePath = "../data/podcasts.json";

const pathData = path.join(__dirname, filePath);

export const repositoryPodcast = async (
  podcastName?: string
): Promise<Podcast[]> => {
  const rawData = fs.readFileSync(pathData, "utf8");
  let jsonFile = JSON.parse(rawData);

  if (podcastName) {
    jsonFile = jsonFile.filter(
      (podcast: Podcast) => podcast.podcastName === podcastName
    );
  }

  return jsonFile;
};
