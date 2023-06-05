// import createImageUrlBuilder from "@sanity/image-url";
import { createClient, createPreviewSubscriptionHook } from "next-sanity";
// import SanityClient from "next-sanity-client";

// const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
// const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
// const token = process.env.NEXT_PUBLIC_SANITY_TOKEN;

export const config = {
  projectId: "cvjuutjf",
  dataset: "production",
  useCdn: true, // set to `true` to fetch from edge cache
};

// export const sanity = new SanityClient(config);
export const sanity = createClient({ ...config });

export const urlFor = (source) => createImageUrlBuilder(config).image(source);
