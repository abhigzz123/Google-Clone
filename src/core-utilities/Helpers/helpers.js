// Custom helper functions to be used in the application.
import { CUSTOM_SEARCH_ENDPOINT } from "../constants";

export const populateCustomSearchParams = (apiKey, engineId, term) => {
  let endpoint = CUSTOM_SEARCH_ENDPOINT;
  endpoint = endpoint.replace("CUSTOM_SEARCH_API_KEY", apiKey);
  endpoint = endpoint.replace("CUSTOM_SEARCH_ENGINE_ID", engineId);
  endpoint = endpoint.replace("CUSTOM_SEARCH_TERM", term);
  return endpoint;
};
