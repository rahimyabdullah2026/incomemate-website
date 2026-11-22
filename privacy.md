---
title: IncomeMate Privacy Policy
---

# Privacy Policy

Policy date: 2026-10-10. This notice applies to IncomeMate 1.0.0, the free native iOS app.

Publisher: Abdullah Rahimy, an individual in Louisiana, USA.

Contact: [incomemate26@gmail.com](mailto:incomemate26@gmail.com).

## Scope

This notice covers the native app and its support email, not the separate web prototype. This page is hosted on GitHub Pages, which may keep its own server logs; IncomeMate does not add analytics or cookies to it. IncomeMate keeps personal financial records locally. It has no IncomeMate account, automated ledger upload to the publisher, bank connection or publisher cloud-sync service. The app has no in-app analytics, advertising, App Tracking Transparency requests, cross-app advertising tracking or third-party runtime SDKs.

Local storage does not mean that nothing can leave your device. Apple services, files you choose to share, backup destinations and support email are separate flows described below. The publisher has no app service through which to read your local ledger.

## Local Financial Records

The app uses the following local information for recordkeeping, reports and assistive features:

- Ledger names, currencies, UUIDs and record relationships.
- Transaction amounts, income or expense type, dates and creation or other audit metadata.
- Categories, payment methods or income sources, counterparties and notes.
- Recurring rules, spending targets and history, local coaching and dismissal state.
- Review drafts, including Siri-originated fields, source and ownership metadata, and replay or duplicate-prevention IDs.
- Receipt images, attachment metadata and derived OCR fields such as amount, date and merchant.
- Preferences, including appearance, reminders, active ledger, Siri choices and app-lock settings or protection state.

Money is stored as exact minor-unit amounts. Local IDs relate records; they are not advertising identifiers. Transaction dates are stored as instants and displayed or grouped with your device calendar and timezone.

Receipt copies stored by the app are resized and re-encoded with embedded EXIF, location and device metadata removed. Visible sensitive information, such as names, merchant addresses or account fragments, remains in the image. Normalization is not redaction. Apple Vision performs receipt OCR on the device; review extracted fields before saving.

## Statement Import

Statement PDFs and selected page images contain personal financial data. Apple PDFKit and Vision extract fields locally for your review. Original bytes, extracted text, crops and previews are transient and cleared on finish, cancellation, backgrounding or app lock. The importer does not retain original source files as attachments or save Photos asset IDs, full card/account numbers or cardholder names. Your original Files/Photos copies remain under your control. Apple Files, Photos, iCloud or another system-selected provider may fetch source content externally; that is OS/provider activity, not IncomeMate app networking.

An imported transaction may include an optional statementImportID, an opaque source-derived SHA-256 digest for exact reimport protection within its ledger. It is retained with the transaction and preserved in schema-9 password-encrypted .imbk backups. IncomeMate uses it for this recordkeeping function, not analytics or third-party use. It is correlated financial data, not a promise of anonymity; the identity does not store full source bank-account data. Deleting the transaction removes its local identity, subject to the existing deletion and external-copy limits below. Backups preserve saved transaction fields and IDs, not original statement PDFs or source images.

## Voice, Siri And Permissions

In-app voice entry uses transient audio and a transcript to propose transaction fields. The app saves fields you confirm, rather than retaining the audio or transcript as a ledger record. Its Speech request asks for on-device recognition. This is not a guarantee that all Apple voice or Siri processing and traffic stays local.

Siri and Shortcuts invocation is a separate flow. Your spoken transaction inputs, and optional payment-method choices and identifiers, are passed to Apple's framework. Static shortcut donation is limited to existence and phrase metadata, not transaction values; actual invocation is not limited to that static information. IncomeMate's own final dialogs are fixed and do not echo amounts. Apple's prompts, speech and displays are controlled by Apple. Siri creates a local review draft, not a directly posted transaction, and Siri entry can be disabled in the app.

Camera, photo or file selection, microphone, speech and notification features use relevant system permissions or selection controls. You may deny or revoke access and use manual transaction entry. App Lock uses Apple LocalAuthentication and local protection state. IncomeMate receives the authentication result, not your biometric templates or device passcode.

## Sharing, Backups And Protection

CSV exports are plaintext. A recipient or app you choose can read the exported financial information. Saving a receipt copy to Photos creates a separate image outside IncomeMate. Shared files and image copies are subject to the recipient's or provider's own handling and retention.

User-created .imbk backups are password-encrypted. You choose their destination in Files, which may include iCloud Drive or another file provider that stores or syncs the copy. This is not IncomeMate cloud sync. The publisher cannot recover a lost backup passphrase.

Important: the current .imbk archive does not contain receipt image bytes or an attachment index. Do not rely on it to preserve or restore receipt images. Preserve independent image copies before replacing data, deleting the app or changing devices.

App data can also be eligible for ordinary iOS device backups, including an OS-managed iCloud backup, depending on system settings and exclusions. iOS storage and file protection, optional App Lock and password encryption of .imbk files are different protections. IncomeMate does not password-encrypt every preference, CSV export or external image copy, and no security measure guarantees protection against every risk.

## Retention And Removal

Local records are retained for your ongoing use. Review drafts marked expired after 14 days are not silently deleted; expiration is not a deletion schedule.

Deleting selected records or using a ledger reset or deletion affects the selected local records. Do not treat these actions as guaranteed complete erasure of every related file or setting. Deleting the app removes its installed app data through iOS; offloading the app retains its documents and data. OS backup copies and some Keychain state can remain.

These actions do not erase Photos images, exported files, shared copies, device or cloud backups, or support email. Manage those copies separately with their owners or providers. The publisher cannot remotely retrieve or erase your local records.

## Support Email

If you email support, the publisher receives your sender email address, name if supplied, message, attachments and limited troubleshooting information you deliberately provide. This information is used to handle the request and justified legal or security obligations, not marketing. There is no collected support form in the app.

Gmail/Google processes support mail and may process or store it outside your country under its service arrangements. This notice does not claim a specific international-transfer safeguard or EU/UK compliance certification. Support correspondence is retained only as long as needed to handle the request and justified legal/security obligations; no fixed retention period is promised.

Support will never request backup passphrases, bank credentials, database files or unredacted receipts or financial screenshots. Use fictional examples and remove sensitive details before emailing. If you voluntarily send sensitive information, contact support to request its removal, subject to applicable obligations and provider-copy limitations.

## Apple And Other Providers

Apple controls its OS, Siri, App Store diagnostics and optional TestFlight or distribution-feedback services under Apple's settings and policies. The publisher may receive diagnostic or feedback reports made available through Apple's distribution tools. These are separate from in-app analytics; do not include real financial records in feedback.

External pages, mail services, file providers and recipients have their own data practices. The absence of tracking SDKs in IncomeMate is not a promise that those services receive no information or perform no tracking.

## Rights And Questions

Depending on applicable law, you may have rights concerning access, correction, deletion, a copy of information, restriction or objection to processing, and complaints to a relevant authority. Contact [incomemate26@gmail.com](mailto:incomemate26@gmail.com) about publisher-held support information or this notice. Rights and response requirements depend on applicable law, not a universal timeline or automatic-deletion promise. Local financial records are controlled on your device and cannot be retrieved by the publisher. Mandatory privacy, data and consumer rights are not waived.
