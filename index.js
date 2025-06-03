const crypto = require("crypto");

// SHA256 hashing algo is mainly used on Bitcoin and is based on SHA-2
const data = "basanta is a beast";
const hash = crypto.createHash("sha256").update(data).digest("hex");
console.log(`SHA256: ${hash}`);

// Keccak256 hasing with 'keccak' is mainly used in Ethereum based hashing like generation of the public private keys!
const { keccak256 } = require("js-sha3");
const keccakHash = keccak256(data);
console.log(`Keccak256 hash: ${keccakHash}`);
