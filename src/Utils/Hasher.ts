import { createHash, createHmac } from "crypto";

class Hasher {
    static hash(payload: string, algorithm = 'sha256') : string {
        const hasher = createHash(algorithm);
        hasher.update(payload);
        return hasher.digest('hex');
    }

    static hmacHash(payload: string, key: Buffer, algorithm = 'sha256') : string {
        const hasher = createHmac(algorithm, key);
        hasher.update(payload);
        return hasher.digest('hex');
    }    
}

export default Hasher;