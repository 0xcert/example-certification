import { Cert } from "@0xcert/cert";
import { config } from "./config";

const cert = new Cert({
  schema: config.schema
});

export function getSchema() {
  return config.schema;
}

export function getMetadata() {
  return config.metadata;
}

export async function schemaIdentify() {
  return cert.identify();
}

export async function metadataNotarize() {
  return cert.notarize(config.metadata);
}

export async function metadataImprint() {
  config.imprint = await cert.imprint(config.metadata);
  return config.imprint;
}

export async function metadataExpose() {
  config.exposedMetadata = cert.expose(config.metadata, [["name"]]);
  return config.exposedMetadata;
}

export async function metadataDisclose() {
  config.exposedEvidence = await cert.disclose(config.metadata, [["name"]]);
  return config.exposedEvidence;
}

export async function verify() {
  const calculatedImprint = await cert.calculate(
    config.exposedMetadata,
    config.exposedEvidence
  );
  if (!calculatedImprint) {
    return false;
  }
  return config.imprint === calculatedImprint;
}
