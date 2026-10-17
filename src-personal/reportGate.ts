// Email capture for the landscape report. Off until a provider is chosen.
// To enable: fill every field below, set enabled: true, rebuild. The privacy
// policy section and the form both read from here, so they cannot drift apart.
// The provider must send a double opt-in confirmation (required in Germany).
export const reportGate = {
  enabled: false,
  // Form endpoint from the provider's embedded-form code (POST).
  action: '',
  // Name of the field the provider expects for the address, e.g. 'EMAIL'.
  emailField: 'EMAIL',
  provider: {
    name: '',        // e.g. 'Brevo'
    company: '',     // legal entity and postal address, from the provider's DPA
    privacyUrl: '',
    transfers: '',   // one sentence on third-country transfers, from the DPA; '' if EU-only
  },
};

if (reportGate.enabled) {
  const missing = [
    !reportGate.action && 'action',
    !reportGate.provider.name && 'provider.name',
    !reportGate.provider.company && 'provider.company',
    !reportGate.provider.privacyUrl && 'provider.privacyUrl',
  ].filter(Boolean);
  if (missing.length) throw new Error(`reportGate enabled but missing: ${missing.join(', ')}`);
}
