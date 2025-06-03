const crypto = require("crypto");

// SHA256 hashing algo is mainly used on Bitcoin and is based on SHA-2
const data = "basanta is a beast";
const hash = crypto.createHash("sha256").update(data).digest("hex");
console.log(`SHA256: ${hash}`);

// Keccak256 hasing with 'keccak' is mainly used in Ethereum based hashing like generation of the public private keys!
const { keccak256 } = require("js-sha3");
const keccakHash = keccak256(data);
console.log(`Keccak256 hash: ${keccakHash}`);

// --------------- Section 2 ----------------

console.log("\n \n ------------------------ gg ------------------ \n \n");

// ECDSA practice with examples
const EC = require("elliptic").ec;
const ec = new EC();

const key = ec.genKeyPair();

// let's printout the key!
console.log("key: ", key);

// rest
console.log("\n \n ------------------------ gg ------------------ \n \n");

const message = "Hi, Fuck You!";

// First hashing the message!
const hashedMessage = crypto.createHash("sha256").update(message).digest("hex");

const signature = key.sign(hashedMessage);

console.log("Signature: ", {
  r: signature.r.toString("hex"),
  s: signature.s.toString("hex"),
});

// verifying the signature
const pubKey = key.getPublic();
const validSignature = ec
  .keyFromPublic(pubKey)
  .verify(hashedMessage, signature);
console.log(`ValidSignature: ${validSignature}`);
