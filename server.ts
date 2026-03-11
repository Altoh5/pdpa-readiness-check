const port = parseInt(process.env.PORT ?? '3000');
const htmlPath = process.cwd() + '/index.html';

console.log(`Serving from: ${htmlPath}`);

Bun.serve({
  port,
  async fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === '/health') return new Response('ok');
    return new Response(Bun.file(htmlPath), {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  },
});

console.log(`PDPA Readiness Check running on http://localhost:${port}`);
