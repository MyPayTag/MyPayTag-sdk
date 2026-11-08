/* eslint-disable */
// Generated from packages/protocol/schemas/portal-preferences-update-request.schema.json. Do not edit by hand.

export interface PortalPreferencesUpdateRequest {
  schema: "mypaytag.portal.preferences.update.v1";
  group: {
    paytagRef: string;
    chain: string;
    network: string;
    asset: string;
    payingDappId?: string;
  };
  /**
   * @minItems 1
   */
  orderedRouteIds: [string, ...string[]];
}
