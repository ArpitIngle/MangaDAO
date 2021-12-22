import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xD4aB80121DBF9f15F37ACD5Be594325B050687dA",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Manga Panel",
        description: "This NFT will give you access to MangaDAO!",
        image: readFileSync("public/manga.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()