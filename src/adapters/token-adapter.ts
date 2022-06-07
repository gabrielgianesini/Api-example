export interface GeneratorTokenData {
  generationUser: string;
}
export interface VerifyTokenData {
  authToken: string;
}

export interface TokenAdapter {
  generationToken: (data: GeneratorTokenData) => Promise<string>;
  verifyToken: (data: VerifyTokenData) => Promise<boolean>;
}
