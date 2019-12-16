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
  return cert.imprint(config.metadata);
}

export async function metadataExpose() {
  return cert.expose(config.metadata, [["name"]]);
}

export async function metadataDisclose() {
  return cert.disclose(config.metadata, [["name"]]);
}
