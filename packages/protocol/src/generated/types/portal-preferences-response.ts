/* eslint-disable */
// Generated from packages/protocol/schemas/portal-preferences-response.schema.json. Do not edit by hand.

export interface PortalPreferencesResponse {
  schema: "mypaytag.portal.preferences.v1";
  user: PortalUser;
  groups: PreferenceGroup[];
}
export interface PortalUser {
  maskedDisplay?: string;
}
export interface PreferenceGroup {
  paytagRef: string;
  maskedDisplay?: string;
  chain: string;
  network: string;
  asset: string;
  payingDapp?: DappSummary;
  routes: ReceiveRoute[];
}
export interface DappSummary {
  id: string;
  displayName: string;
}
export interface ReceiveRoute {
  routeId: string;
  payToDappId: string;
  payToDappName: string;
  appUrl?: string;
  priority: number;
  isDefault: boolean;
  state: "active" | "disabled" | "revoked";
}
