// js/magazine-render.js
(function () {
  const POSTS = (window.MAG_POSTS || []).filter(Boolean);
  const app = document.getElementById("app");
  const qs = new URLSearchParams(location.search);
  const slugFromQuery = qs.get("slug");
  let slug = slugFromQuery || (POSTS[0] && POSTS[0].slug) || null;

  if (!POSTS.length) {
    app.innerHTML = "<p>게시물이 없습니다.</p>";
    return;
  }

  function brify(text) {
    // 데이터의 개행을 <br>로 변환 (원문 느낌 유지)
    return String(text || "").replace(/\n/g, "<br>");
  }

  function renderBlocks(blocks) {
    const frag = document.createDocumentFragment();

    blocks.forEach(b => {
      if (b.type === "image") {
        const fig = document.createElement("figure");
        const img = document.createElement("img");
        img.src = b.src;
        img.alt = b.alt || "";
        img.loading = "lazy";
        fig.appendChild(img);
        frag.appendChild(fig);
        return;
      }

      if (b.type === "text" || b.type === "text-final") {
        const box = document.createElement("div");
        box.className = b.type === "text-final" ? "txt-box-final" : "txt-box";

        if (b.h3) {
          const h = document.createElement("h3");
          h.textContent = b.h3;
          box.appendChild(h);
        }
        if (b.p) {
          const p = document.createElement("p");
          p.innerHTML = brify(b.p);
          box.appendChild(p);
        }
        frag.appendChild(box);
        return;
      }
    });

    return frag;
  }

  function renderPost(s) {
    const post = POSTS.find(p => p.slug === s) || POSTS[0];
    document.title = `${post.title} - 인센트 매거진`;

    // 상단 타이틀
    const pgTitle = document.createElement("div");
    pgTitle.className = "pg-title point";
    pgTitle.textContent = "MAGAZINE";

    // 본문 박스
    const postBox = document.createElement("div");
    postBox.className = "post-box";

    // 인트로
    const intro = document.createElement("div");
    intro.className = "txt-intro";
    const h1 = document.createElement("h1");
    h1.textContent = post.title;
    const sub = document.createElement("p");
    sub.textContent = post.subtitle || "";
    intro.append(h1, sub);

    // 블록들
    const blocksFrag = renderBlocks(post.blocks);

    // 조립
    postBox.appendChild(intro);
    postBox.appendChild(blocksFrag);

    app.innerHTML = ""; // 비우고 교체
    app.appendChild(pgTitle);
    app.appendChild(postBox);
  }

  renderPost(slug);

  // ?slug= 변경(뒤로가기 등) 대응
  window.addEventListener("popstate", () => {
    const s = new URLSearchParams(location.search).get("slug");
    if (s && s !== slug) {
      slug = s;
      renderPost(slug);
    }
  });
})();
