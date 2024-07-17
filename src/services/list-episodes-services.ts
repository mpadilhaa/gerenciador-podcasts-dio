import { repositoryPodcast } from "../repositories/podcast-repositories";

export const serviceListEpisodes = async () => {
  const data = await repositoryPodcast();

  return data;
};
