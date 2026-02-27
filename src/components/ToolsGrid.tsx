import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

interface Tool {
  name: string;
  description: string;
  category: string;
}

const tools: Tool[] = [
  { name: "JSON Format/Validate", description: "Format, validate & beautify JSON", category: "Formatters" },
  { name: "XML Format/Validate", description: "Beautify, minify & validate XML", category: "Formatters" },
  { name: "HTML Beautify/Minify", description: "Beautify, minify & validate HTML", category: "Formatters" },
  { name: "SQL Formatter", description: "Format and beautify SQL queries", category: "Formatters" },
  { name: "CSS Beautifier/Minifier", description: "Beautify or minify CSS", category: "Formatters" },
  { name: "JS Beautifier/Minifier", description: "Beautify or minify JavaScript", category: "Formatters" },
  { name: "CSS Inliner (Email)", description: "Inline CSS for email templates", category: "Formatters" },
  { name: "JSONPath Tester", description: "Test JSONPath expressions", category: "Testers" },
  { name: "Regex Tester", description: "Test regex with live matching", category: "Testers" },
  { name: "Java Regex Tester", description: "Test Java-style regular expressions", category: "Testers" },
  { name: "XPath Tester", description: "Run XPath expressions against XML", category: "Testers" },
  { name: "Schema Diff", description: "Compare two JSON schemas", category: "Comparators" },
  { name: "Payload Comparator", description: "Compare JSON payloads & highlight diffs", category: "Comparators" },
  { name: "Text Diff", description: "Compare texts and highlight differences", category: "Comparators" },
  { name: "JSON ↔ YAML", description: "Convert between JSON and YAML", category: "Converters" },
  { name: "CSV ↔ JSON", description: "Convert between CSV and JSON", category: "Converters" },
  { name: "JSON → Table", description: "Visualize JSON data as a table", category: "Converters" },
  { name: "JSON → Types", description: "Generate TypeScript types from JSON", category: "Converters" },
  { name: "JSON ↔ Query String", description: "Convert JSON and URL query strings", category: "Converters" },
  { name: "XML ↔ JSON", description: "Convert between XML and JSON", category: "Converters" },
  { name: "CSV → XML", description: "Convert CSV to XML format", category: "Converters" },
  { name: ".env Converter", description: "Convert .env to Netlify, Docker, YAML", category: "Converters" },
  { name: "CSS Units", description: "Convert between CSS units", category: "Converters" },
  { name: "Color Converter", description: "Convert HEX, RGB, HSL colors", category: "Converters" },
  { name: "Number Base", description: "Convert between bin, oct, dec, hex", category: "Converters" },
  { name: "Epoch Timestamp", description: "Convert Unix timestamps and dates", category: "Converters" },
  { name: "URL Encode/Decode", description: "Encode and decode URL components", category: "Encoders" },
  { name: "Base64 Encode/Decode", description: "Encode and decode Base64 strings", category: "Encoders" },
  { name: "HTML Entity Encode/Decode", description: "Encode and decode HTML entities", category: "Encoders" },
  { name: "Image ↔ Base64", description: "Convert images to/from Base64", category: "Encoders" },
  { name: "Gzip", description: "Compress and decompress with Gzip", category: "Encoders" },
  { name: "Convert File Encoding", description: "Decode/encode text charsets", category: "Encoders" },
  { name: "JWT Debugger", description: "Decode and inspect JWT tokens", category: "Security" },
  { name: "Credit Card Generator", description: "Luhn check & generate test cards", category: "Security" },
  { name: "Certificate Inspector", description: "Inspect X.509 certificates", category: "Security" },
  { name: "Message Digester", description: "MD5, SHA-1, SHA-256 hashes", category: "Security" },
  { name: "HMAC Generator", description: "Generate HMAC signatures", category: "Security" },
  { name: "Password Generator", description: "Generate secure passwords", category: "Generators" },
  { name: "UUID Generator", description: "Generate UUIDs (v1, v4, v7)", category: "Generators" },
  { name: "Random String", description: "Cryptographically secure strings", category: "Generators" },
  { name: "Mock Payload", description: "Generate mock JSON from schema", category: "Generators" },
  { name: "Lorem Ipsum", description: "Generate placeholder text", category: "Generators" },
  { name: "QR Code", description: "Generate QR codes from text/URLs", category: "Generators" },
  { name: "Log Generator", description: "Generate synthetic log data", category: "Generators" },
  { name: "ASCII Art", description: "Turn text into ASCII art", category: "Generators" },
  { name: "XSD Generator", description: "Generate XSD schema from XML", category: "Generators" },
  { name: "String Utilities", description: "camelCase, snake_case conversions", category: "Text" },
  { name: "String Escaper", description: "Escape text for JSON, XML, SQL, etc.", category: "Text" },
  { name: "List Collator", description: "Merge, sort, and deduplicate lists", category: "Text" },
  { name: "Text Analyzer", description: "Count words, characters, sentences", category: "Text" },
  { name: "Markdown Preview", description: "Live Markdown preview with GFM", category: "Text" },
  { name: "Cron Parser", description: "Build & parse cron expressions", category: "Utilities" },
  { name: "URL Parser", description: "Parse and inspect URLs", category: "Utilities" },
  { name: "MIME Types", description: "Reference table of MIME types", category: "Utilities" },
  { name: "XSLT Transformer", description: "Transform XML using XSLT", category: "Utilities" },
  { name: "Math Calculator", description: "Evaluate math expressions", category: "Utilities" },
  { name: "SVG Viewer", description: "View, edit, and export SVGs", category: "Viewers" },
  { name: "Image Resizer", description: "Resize images with conversion", category: "Viewers" },
  { name: "cURL Builder", description: "Build cURL commands visually", category: "Viewers" },
  { name: "HAR Viewer", description: "Inspect HAR files", category: "Viewers" },
  { name: "CSV Viewer", description: "View and search CSV files", category: "Viewers" },
];

const categories = Array.from(new Set(tools.map(t => t.category)));

const ToolsGrid = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return tools.filter(t => {
      const matchesSearch = !search || t.name.toLowerCase().includes(search.toLowerCase()) || t.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = !activeCategory || t.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <section id="tools" className="relative py-24 px-6">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            59 Developer Tools
          </h2>
          <p className="text-muted-foreground text-base max-w-md mx-auto">
            Everything you need, right in your browser.
          </p>
        </motion.div>

        {/* Search */}
        <div className="max-w-sm mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search tools..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-surface text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring/20 transition-all"
            />
          </div>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              !activeCategory
                ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                : "glass-surface text-muted-foreground hover:text-foreground"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                  : "glass-surface text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          {filtered.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.02, 0.3) }}
              className="p-4 rounded-xl glass-card group cursor-default"
            >
              <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors mb-1">
                {tool.name}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {tool.description}
              </p>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground text-sm mt-12">No tools match your search.</p>
        )}
      </div>
    </section>
  );
};

export default ToolsGrid;
