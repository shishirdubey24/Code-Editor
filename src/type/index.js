// NOTE: No TypeScript types here—just optional JSDoc for documentation

// If you're not using the Monaco type for anything else, remove this import entirely:
import { Monaco } from "@monaco-editor/react";
// Same for Id type import
// import { Id } from "../../convex/_generated/dataModel";

/**
 * @typedef {Object} Theme
 * @property {string} id
 * @property {string} label
 * @property {string} color
 */

/**
 * @typedef {Object} LanguageRuntime
 * @property {string} language
 * @property {string} version
 */

/**
 * @typedef {Object} Language
 * @property {string} id
 * @property {string} label
 * @property {string} logoPath
 * @property {string} monacoLanguage
 * @property {string} defaultCode
 * @property {LanguageRuntime} pistonRuntime
 */

/**
 * @typedef {Object} ExecuteCodeResponse
 * @property {{ output: string }} [compile]
 * @property {{ output: string, stderr: string }} [run]
 */

/**
 * @typedef {Object} ExecutionResult
 * @property {string} code
 * @property {string} output
 * @property {string|null} error
 */

/**
 * @typedef {Object} CodeEditorState
 * @property {string} language
 * @property {string} output
 * @property {boolean} isRunning
 * @property {string|null} error
 * @property {string} theme
 * @property {number} fontSize
 * @property {Monaco|null} editor
 * @property {ExecutionResult|null} executionResult
 * @property {(editor: Monaco) => void} setEditor
 * @property {() => string} getCode
 * @property {(language: string) => void} setLanguage
 * @property {(theme: string) => void} setTheme
 * @property {(fontSize: number) => void} setFontSize
 * @property {() => Promise<void>} runCode
 */

/**
 * @typedef {Object} Snippet
 * @property {string} _id
 * @property {number} _creationTime
 * @property {string} userId
 * @property {string} language
 * @property {string} code
 * @property {string} title
 * @property {string} userName
 */

// This file now contains only JSDoc typedefs for shape hints!
// No runtime code required.
