export interface IcpXdrConversionRateCertifiedResponse {
  certificate: Array<number>;
  data: IcpXdrConversionRate;
  hash_tree: Array<number>;
}
export interface IcpXdrConversionRate {
  xdr_permyriad_per_icp: bigint;
  timestamp_seconds: bigint;
}
export default interface Service {
  get_icp_xdr_conversion_rate: () => Promise<IcpXdrConversionRateCertifiedResponse>;
}
