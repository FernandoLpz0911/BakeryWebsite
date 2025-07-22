import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "x9wsmxe4",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-07-22",
});

export default client;
