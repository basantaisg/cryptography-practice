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

// ECDSA practice with examples
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

// generating a keypair!
const key = ec.genKeyPair();

const message = "Hey fuck off!";
const msgHash = crypto.createHash("sha256").update(message).digest();

const signature = key.sign(msgHash);

console.log(
  `Signature: ${{
    r: signature.r.toString("hex"),
    s: signature.s.toString("hex"),
  }}`
);

// verifying signature:

const pubKey = key.getPublic();
const valid = ec.keyFromPublic(pubKey).verify(msgHash, signature);
console.log(`Signature valid: ${valid}`);
