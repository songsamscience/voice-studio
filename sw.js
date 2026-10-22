/* 송쌤과학 AI 보이스 스튜디오 서비스 워커 — GitHub Pages 처럼 머리글을 못 바꾸는 곳에서 교차 출처 격리(COOP/COEP)를 붙여 wasm 여러 스레드를 쓰게 한다. 캐시는 하지 않는다(모델은 Cache Storage 가 따로) */
self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()))
self.addEventListener('fetch', (e) => {
  const r = e.request
  if (r.cache === 'only-if-cached' && r.mode !== 'same-origin') return
  e.respondWith(fetch(r).then((res) => {
    if (res.status === 0 || res.type === 'opaque') return res
    const h = new Headers(res.headers)
    h.set('Cross-Origin-Opener-Policy', 'same-origin')
    h.set('Cross-Origin-Embedder-Policy', 'credentialless')
    h.set('Cross-Origin-Resource-Policy', 'cross-origin')
    return new Response(res.body, { status: res.status, statusText: res.statusText, headers: h })
  }))
})
