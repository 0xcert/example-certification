export const config = {
  schema: {
    $schema: "http://json-schema.org/draft-07/schema",
    description:
      "A digital assets that have a unique combination of different properties.",
    properties: {
      $evidence: {
        description:
          "A URI pointing to the evidence JSON with data needed to certify this asset.",
        type: "string"
      },
      $schema: {
        description: "A path to JSON Schema definition file.",
        type: "string"
      },
      description: {
        description:
          "A property that holds a detailed description of an asset.",
        type: "string"
      },
      image: {
        description:
          "A public property that can be a valid URI pointing to a resource with mime type image/* representing the asset to which this digital assets represents. Consider making any images at a width between 320 and 1080 pixels and aspect ratio between 1.91:1 and 4:5 inclusive.",
        type: "string"
      },
      name: {
        description: "A property that holds a name of an asset.",
        type: "string"
      }
    },
    required: ["$schema", "description", "image", "name"],
    title: "Crypto collectible asset",
    type: "object"
  },
  metadata: {
    $evidence: "https://troopersgame.com/dog/evidence.json",
    $schema: "https://conventions.0xcert.org/88-crypto-collectible-schema.json",
    name: "Magic Sword",
    description:
      "A weapon for the Troopers game which can severely injure the enemy.",
    image: "https://troopersgame.com/dog.jpg"
  }
};
