import {
  getSchema,
  getMetadata,
  schemaIdentify,
  metadataImprint,
  metadataNotarize,
  metadataExpose,
  metadataDisclose
} from "./src/example";

const divConsole = document.getElementById("console");
const btnShowSchema = document.getElementById("btnShowSchema");
const btnShowMetadata = document.getElementById("btnShowMetadata");
const btnSchemaId = document.getElementById("btnSchemaId");
const btnAssetImprint = document.getElementById("btnAssetImprint");
const btnNotarizeMetadata = document.getElementById("btnNotarizeMetadata");
const btnGenerateMetadata = document.getElementById("btnGenerateMetadata");
const btnGenerateEvidence = document.getElementById("btnGenerateEvidence");

btnShowSchema.addEventListener("click", async () => {
  printMessage(JSON.stringify(getSchema(), null, 2));
});

btnShowMetadata.addEventListener("click", async () => {
  printMessage(JSON.stringify(getMetadata(), null, 2));
});

btnSchemaId.addEventListener("click", async () => {
  const schemaId = await schemaIdentify().catch(e => {
    printError(e);
  });
  if (schemaId) {
    printMessage("SchemaId: " + schemaId);
  }
});

btnAssetImprint.addEventListener("click", async () => {
  const assetImprint = await metadataImprint().catch(e => {
    printError(e);
  });
  if (assetImprint) {
    printMessage("Asset imprint: " + assetImprint);
  }
});

btnNotarizeMetadata.addEventListener("click", async () => {
  const evidence = await metadataNotarize().catch(e => {
    printError(e);
  });
  if (evidence) {
    printMessage("Evidence: " + JSON.stringify(evidence, null, 2));
  }
});

btnGenerateMetadata.addEventListener("click", async () => {
  const evidence = await metadataExpose().catch(e => {
    printError(e);
  });
  if (evidence) {
    printMessage("Selective metadata: " + JSON.stringify(evidence, null, 2));
  }
});

btnGenerateEvidence.addEventListener("click", async () => {
  const evidence = await metadataDisclose().catch(e => {
    printError(e);
  });
  if (evidence) {
    printMessage(
      "Selective exposed evidence: " + JSON.stringify(evidence, null, 2)
    );
  }
});

function printError(message: any) {
  if (typeof message !== "string") {
    message = JSON.stringify(message, null, 2);
  }
  const div = document.createElement("div");
  div.innerText = "Error: " + message;
  div.className = "error";
  divConsole.prepend(div);
}

function printWarning(message: any) {
  if (typeof message !== "string") {
    message = JSON.stringify(message, null, 2);
  }
  const div = document.createElement("div");
  div.innerText = "Warning: " + message;
  div.className = "warning";
  divConsole.prepend(div);
}

function printMessage(message: any) {
  if (typeof message !== "string") {
    message = JSON.stringify(message, null, 2);
  }
  const div = document.createElement("div");
  div.innerText = message;
  divConsole.prepend(div);
}
