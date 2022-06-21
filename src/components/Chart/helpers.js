import { URL_BASE_API } from "../../Constants/constants";

// Make requests to CryptoCompare API
export async function makeApiRequest(path, method, token, body) {
  try {
    const response = await fetch(`${URL_BASE_API}${path}`, {
      method: method,
      body,
      headers: new Headers({
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      }),
    });
    if (response && response.status === 401) {
      window.location.href = "/login";
    }
    return response.json();
  } catch (error) {
    throw new Error(`request error: ${error}`);
    // window.location.reload()
  }
}

export function parseFullSymbol(fullSymbol) {
  const match = fullSymbol.split(":");

  if (!match) {
    return null;
  }

  return {
    exchange: match[0],
    fromSymbol: match[1].substr(0, 3),
    toSymbol: match[1].substr(3, 3),
  };
}

export const timeframe = (resolution) => {
  if (resolution === "1D") return 16408;

  if (resolution === "D") return 32769;

  if (resolution === "M") return 49153;

  if (resolution === "W") return 10080;

  if (parseInt(resolution) >= 60) {
    return (parseInt(resolution) / 60) | 0x4000;
  } else {
    return parseInt(resolution);
  }
};

export function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    let key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

export function findSymbolFromListSymbol(objectArray, property) {
  return objectArray.filter((symbol) => {
    const isFullSymbolContainsInput =
      symbol.symbolName.toLowerCase().indexOf(property.toLowerCase()) !== -1;
    return isFullSymbolContainsInput;
  });
}

export const handleSaveToPC = (jsonData, filename) => {
  const fileData = JSON.stringify(jsonData);
  const blob = new Blob([fileData], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = `${filename}.json`;
  link.href = url;
  link.click();
};
