export interface IJWT{
    sign(payload: string): Promise<string>;
    verify(token: string): string;
}