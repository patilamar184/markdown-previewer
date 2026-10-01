const editor = document.getElementById('editor');
const preview = document.getElementById('preview');
const copyBtn = document.getElementById('copy-btn');

// Default initial markdown text to show on load
const defaultMarkdown = `# Welcome to Markdown Previewer!

This is a **live** markdown previewer built with HTML, CSS, and JavaScript.

## Features:
- Real-time HTML rendering
- Clean split-screen layout
- Responsive design

### Code Example:
\`\`\`javascript
function greet() {
    console.log("Hello, World!");
}
\`\`\`

> "Simplicity is the soul of efficiency." — Austin Freeman
`;

// Set initial values
editor.value = defaultMarkdown;
preview.innerHTML = marked.parse(defaultMarkdown);

// Listen for typing events to update the preview in real time
editor.addEventListener('input', () => {
    const markdownText = editor.value;
    preview.innerHTML = marked.parse(markdownText);
});

// Copy raw HTML output to clipboard
copyBtn.addEventListener('click', () => {
    const htmlContent = preview.innerHTML;
    navigator.clipboard.writeText(htmlContent).then(() => {
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyBtn.textContent = 'Copy HTML';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
});