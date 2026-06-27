// Single source of truth for links + product data (mirrors stdout/src/tools/registry.ts).

export const WEB_APP = "https://stdout-tools.web.app/";
export const GITHUB = "https://github.com/cminhho/stdout";
export const BREW_CMD = "brew install --cask cminhho/tap/stdout";

export const TOOL_COUNT = 59; // verified from registry.ts (9 groups)

export const NAV = [
  { name: "Features", href: "#features" },
  { name: "Privacy", href: "#privacy" },
  { name: "Tools", href: "#tools" },
  { name: "Install", href: "#install" },
];

export interface ToolGroup {
  name: string;
  count: number;
  tools: string[];
}

// 7+15+10+7+6+4+4+4+2 = 59
export const TOOL_GROUPS: ToolGroup[] = [
  { name: "Formatters", count: 7, tools: ["JSON", "XML", "HTML", "SQL", "CSS", "JavaScript"] },
  { name: "Converters", count: 15, tools: ["JSON ↔ YAML", "CSV ↔ JSON", "XML ↔ JSON", "JSON → Types", "Timestamp", "Number Base", "Color"] },
  { name: "Encode & Crypto", count: 10, tools: ["Base64", "URL", "JWT Debugger", "Hash (MD5/SHA)", "HMAC", "QR Code", "Gzip"] },
  { name: "Validators", count: 7, tools: ["Regex Tester", "JSONPath", "XPath", "Schema Diff", "Payload Compare", "Cron Builder"] },
  { name: "Generators", count: 6, tools: ["UUID", "Password", "Random String", "Mock Data", "ASCII Art", "Log"] },
  { name: "Web Resources", count: 4, tools: ["Markdown Preview", "Lorem Ipsum", "URL Parser", "MIME Types"] },
  { name: "String & Utilities", count: 4, tools: ["Text Diff", "String Utilities", "Escaper", "Text Inspector"] },
  { name: "Networking & Other", count: 4, tools: ["cURL Builder", "HAR Viewer", "CSV Viewer", "Math Calculator"] },
  { name: "Image & Media", count: 2, tools: ["SVG Viewer", "Image Resizer"] },
];
