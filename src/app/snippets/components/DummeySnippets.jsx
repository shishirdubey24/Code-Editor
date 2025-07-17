// src/lib/dummyData.js

export const dummySnippets = [
  {
    id: "1",
    title: "Hello World",
    code: "console.log('Hello!')",
    language: "javascript",
    userName: "Alice",
    createdAt: "2024-06-30T12:00:00Z",
  },
  {
    id: "2",
    title: "Python Example",
    code: "print('Hello!')",
    language: "python",
    userName: "Bob",
    createdAt: "2024-06-29T12:00:00Z",
  },
];

export const dummyComments = [
  {
    id: "c1",
    snippetId: "1",
    content: "Nice snippet!",
    userName: "Charlie",
    createdAt: "2024-07-01T08:00:00Z",
    parentId: null,
  },
  {
    id: "c2",
    snippetId: "1",
    content: "Thanks!",
    userName: "Alice",
    createdAt: "2024-07-01T09:00:00Z",
    parentId: "c1",
  },
  {
    id: "c3",
    snippetId: "2",
    content: "Python forever 🔥",
    userName: "Dave",
    createdAt: "2024-07-01T10:00:00Z",
    parentId: null,
  },
];
