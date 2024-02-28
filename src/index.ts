export {};

// A mapped type may not declare properties or methods in TS

// EXAMPLE 1 - Use a type alias instead

enum EmailStatus {
  Read = 'READ',
  Unread = 'UNREAD',
  Draft = 'DRAFT',
}

// 👇️ use type alias
type Status = {
  [key in EmailStatus]: string;
};

// // ---------------------------------------------------

// // EXAMPLE 2 - Creating a type with string values

// type Person = {
//   name: 'Bobby Hadz';
//   country: 'Germany';
// };

// // 👇️ use type alias
// type UpdatedPerson = {
//   [key in keyof Person]: string;
// };

// ---------------------------------------------------

// // EXAMPLE 3 - Only use type aliases with mapped types

// type EmailStatuses = 'Read' | 'Unread' | 'Draft';

// // 👇️ make sure you use type here (not interface)
// type StatusFromUnion = {
//   [key in EmailStatuses]: string;
// };
