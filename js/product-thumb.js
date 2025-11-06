
// ===============================
// 아래부터 썸네일이미지용
// ===============================

const thumbList = [
  // ===== PERFUME (20) =====
  {
    brand: "Maison Margiela",
    name: "메종 마르지엘라 레플리카 레이지 선데이 모닝 오 드 뚜왈렛",
    category: "PERFUME",
    image: "./img/product-list/rank-s/perfume/lst1-maisonmargiela-replica-lazy-sundaymorning.jpg",
    tags: { scent: "플로랄", mood: "편안함", lasting: "가볍고 은은하게" },
    rating: 4.89,
    variants: [
      { size: "30ml", price: 108000 },
      { size: "100ml", price: 199000 }
    ]
  },
  {
    brand: "Diptyque",
    name: "딥티크 오르페옹 오 드 퍼퓸",
    category: "PERFUME",
    image: "./img/product-list/rank-s/perfume/lst2-diptyque-ambre-eau-de-parfum.jpg",
    tags: { scent: "우디", mood: "자신감있는", lasting: "오래가고 진하게" },
    rating: 4.75,
    variants: [
      { size: "75ml", price: 289000 },
      { size: "125ml", price: 388000 }
    ]
  },
  {
    brand: "Lanvin",
    name: "랑방 에끌라 드 아르페쥬 오 드 퍼퓸",
    category: "PERFUME",
    image: "./img/product-list/rank-s/perfume/lst3-lanvin-eclat-darpege-eau-de-parfum.jpg",
    tags: { scent: "플로랄", mood: "로맨틱한", lasting: "가볍고 은은하게" },
    rating: 4.58,
    variants: [
      { size: "100ml", price: 56000 },
      { size: "50ml",  price: 39000 },
      { size: "30ml",  price: 28000 }
    ]
  },
  {
    brand: "Jennifer Lopez",
    name: "제니퍼로페즈 글로우 바이제이로 EDT",
    category: "PERFUME",
    image: "./img/product-list/rank-s/perfume/lst4-jenniferlopez-glow-by-jlo-edt.jpg",
    tags: { scent: "프레시", mood: "에너제틱한", lasting: "가볍고 은은하게" },
    rating: 4.56,
    variants: [
      { size: "100ml", price: 102000 },
      { size: "50ml",  price: 72000 },
      { size: "30ml",  price: 55000 }
    ]
  },
  {
    brand: "Santa Maria Novella",
    name: "산타 마리아 노벨라 피렌체 1221 에디션 오 드 코롱",
    category: "PERFUME",
    image: "./img/product-list/rank-s/perfume/lst5-santamarianovella-pfirenze1221-edt.jpg",
    tags: { scent: "오리엔탈", mood: "자신감있는", lasting: "오래가고 진하게" },
    rating: 4.48,
    variants: [
      { size: "100ml", price: 190000 }
    ]
  },
  {
    brand: "Daniel's Truth",
    name: "다니엘 트루스 오일 퍼퓸 밤쉘",
    category: "PERFUME",
    image: "./img/product-list/rank-s/perfume/lst6-danielstruth-oil-perfume-babel.jpg",
    tags: { scent: "우디", mood: "편안함", lasting: "오래가고 진하게" },
    rating: 4.44,
    variants: [
      { size: "10ml", price: 59000 }
    ]
  },
  {
    brand: "Diptyque",
    name: "딥티크 플레르 드 뽀 오 드 퍼퓸",
    category: "PERFUME",
    image: "./img/product-list/rank-s/perfume/lst7-diptyque-fleur-depeau-eau-de-parfum.jpg",
    tags: { scent: "기타", mood: "편안함", lasting: "가볍고 은은하게" },
    rating: 4.38,
    variants: [
      { size: "75ml",  price: 289000 },
      { size: "125ml", price: 388000 }
    ]
  },
  {
    brand: "Jo Malone",
    name: "조 말론 블랙베리 앤 베이 코롱",
    category: "PERFUME",
    image: "./img/product-list/rank-s/perfume/lst8-jomalone-blackberry-and-bay-cologne.jpg",
    tags: { scent: "프레시", mood: "에너제틱한", lasting: "가볍고 은은하게" },
    rating: 4.32,
    variants: [
      { size: "9ml",   price: 43000 },
      { size: "30ml",  price: 116000 },
      { size: "50ml",  price: 169000 },
      { size: "100ml", price: 239000 }
    ]
  },
  {
    brand: "Clean",
    name: "클린 웜 코튼 EDP",
    category: "PERFUME",
    image: "./img/product-list/rank-s/perfume/lst9-clean-warm-cotton-edp.jpg",
    tags: { scent: "프레시", mood: "편안함", lasting: "가볍고 은은하게" },
    rating: 4.22,
    variants: [
      { size: "60ml",  price: 54000 },
      { size: "100ml", price: 160000 }
    ]
  },
  {
    brand: "Byredo",
    name: "바이레도 블랑쉬 오 드 퍼퓸",
    category: "PERFUME",
    image: "./img/product-list/rank-s/perfume/lst10-byredo-blanche-eau-de-parfum.jpg",
    tags: { scent: "플로랄", mood: "편안함", lasting: "가볍고 은은하게" },
    rating: 4.16,
    variants: [
      { size: "50ml",  price: 280000 },
      { size: "100ml", price: 390000 }
    ]
  },
  {
    brand: "Le Labo",
    name: "르라보 상탈 33 오 드 퍼퓸",
    category: "PERFUME",
    image: "./img/product-list/rank-s/perfume/lst11-lelabo-santal33.jpg",
    tags: { scent: "우디", mood: "자신감있는", lasting: "오래가고 진하게" },
    rating: 4.88,
    variants: [
      { size: "15ml",  price: 138000 },
      { size: "50ml",  price: 310000 },
      { size: "100ml", price: 458000 }
    ]
  },
  {
    brand: "Le Labo",
    name: "르라보 어나더 13 오 드 퍼퓸",
    category: "PERFUME",
    image: "./img/product-list/rank-s/perfume/lst12-lelabo-another13.jpg",
    tags: { scent: "기타", mood: "편안함", lasting: "오래가고 진하게" },
    rating: 4.85,
    variants: [
      { size: "15ml",  price: 138000 },
      { size: "50ml",  price: 322000 },
      { size: "100ml", price: 458000 }
    ]
  },
  {
    brand: "Creed",
    name: "크리드 어벤투스 오 드 퍼퓸",
    category: "PERFUME",
    image: "./img/product-list/rank-s/perfume/lst13-creed-aventus.jpg",
    tags: { scent: "우디", mood: "자신감있는", lasting: "오래가고 진하게" },
    rating: 4.83,
    variants: [
      { size: "50ml",  price: 360000 },
      { size: "100ml", price: 520000 }
    ]
  },
  {
    brand: "Byredo",
    name: "바이레도 집시 워터 오 드 퍼퓸",
    category: "PERFUME",
    image: "./img/product-list/rank-s/perfume/lst14-byredo-gypsywater.jpg",
    tags: { scent: "우디", mood: "신비로운", lasting: "가볍고 은은하게" },
    rating: 4.78,
    variants: [
      { size: "50ml",  price: 280000 },
      { size: "100ml", price: 390000 }
    ]
  },
  {
    brand: "Tom Ford",
    name: "톰 포드 오드 우드 오 드 퍼퓸",
    category: "PERFUME",
    image: "./img/product-list/rank-s/perfume/lst15-tomford-oudwood.jpg",
    tags: { scent: "오리엔탈", mood: "자신감있는", lasting: "오래가고 진하게" },
    rating: 4.77,
    variants: [
      { size: "30ml",  price: 215000 },
      { size: "50ml",  price: 340000 },
      { size: "100ml", price: 460000 }
    ]
  },
  {
    brand: "Byredo",
    name: "바이레도 모하비 고스트 오 드 퍼퓸",
    category: "PERFUME",
    image: "./img/product-list/rank-s/perfume/lst16-byredo-mojaveghost.jpg",
    tags: { scent: "플로랄", mood: "자신감있는", lasting: "가볍고 은은하게" },
    rating: 4.75,
    variants: [
      { size: "50ml",  price: 280000 },
      { size: "100ml", price: 390000 }
    ]
  },
  {
    brand: "Byredo",
    name: "바이레도 발 다프리크 오 드 퍼퓸",
    category: "PERFUME",
    image: "./img/product-list/rank-s/perfume/lst17-byredo-baldafrique.jpg",
    tags: { scent: "프레시", mood: "에너제틱한", lasting: "가볍고 은은하게" },
    rating: 4.73,
    variants: [
      { size: "50ml",  price: 280000 },
      { size: "100ml", price: 390000 }
    ]
  },
  {
    brand: "Dior",
    name: "디올 소바쥬 오 드 뚜왈렛",
    category: "PERFUME",
    image: "./img/product-list/rank-s/perfume/lst18-dior-sauvage.jpg",
    tags: { scent: "프레시", mood: "에너제틱한", lasting: "오래가고 진하게" },
    rating: 4.71,
    variants: [
      { size: "30ml",  price: 112000 },
      { size: "60ml",  price: 159000 },
      { size: "100ml", price: 183000 }
    ]
  },
  {
    brand: "Tom Ford",
    name: "톰 포드 블랙 오키드 오 드 퍼퓸",
    category: "PERFUME",
    image: "./img/product-list/rank-s/perfume/lst19-tomford-blackorchid.jpg",
    tags: { scent: "오리엔탈", mood: "신비로운", lasting: "오래가고 진하게" },
    rating: 4.66,
    variants: [
      { size: "30ml",  price: 195000 },
      { size: "50ml",  price: 260000 },
      { size: "100ml", price: 360000 }
    ]
  },
  {
    brand: "Kilian",
    name: "킬리안 엔젤스 셰어",
    category: "PERFUME",
    image: "./img/product-list/rank-s/perfume/lst20-kilian-angelsshare.jpg",
    tags: { scent: "오리엔탈", mood: "로맨틱한", lasting: "오래가고 진하게" },
    rating: 4.64,
    variants: [
      { size: "50ml", price: 375000 }
    ]
  },

  // ===== BODY (10) =====
  {
    brand: "Le Labo",
    name: "르라보 어나더 13 퍼퓨밍 바디 로션",
    category: "BODY",
    image: "./img/product-list/rank-s/body/lst1-lelabo-bodylotion-another13.jpg",
    tags: { scent: "기타", mood: "편안함", lasting: "가볍고 은은하게" },
    rating: 4.83,
    variants: [
      { size: "237ml", price: 92000 }
    ]
  },
  {
    brand: "Byredo",
    name: "바이레도 모하비 고스트 핸드 크림",
    category: "BODY",
    image: "./img/product-list/rank-s/body/lst2-byredo-handcream-mojaveghost.jpg",
    tags: { scent: "플로랄", mood: "자신감있는", lasting: "가볍고 은은하게" },
    rating: 4.76,
    variants: [
      { size: "30ml", price: 50000 }
    ]
  },
  {
    brand: "Byredo",
    name: "바이레도 블랑쉬 핸드 크림",
    category: "BODY",
    image: "./img/product-list/rank-s/body/lst3-byredo-handcream-blanche.jpg",
    tags: { scent: "플로랄", mood: "편안함", lasting: "가볍고 은은하게" },
    rating: 4.74,
    variants: [
      { size: "30ml", price: 40000 }
    ]
  },
  {
    brand: "Aesop",
    name: "이솝 레저렉션 아로마틱 핸드 밤",
    category: "BODY",
    image: "./img/product-list/rank-s/body/lst4-aesop-resurrection-handbalm.jpg",
    tags: { scent: "프레시", mood: "편안함", lasting: "가볍고 은은하게" },
    rating: 4.69,
    variants: [
      { size: "75ml", price: 36000 }
    ]
  },
  {
    brand: "Byredo",
    name: "바이레도 발 다프리크 바디 로션",
    category: "BODY",
    image: "./img/product-list/rank-s/body/lst5-byredo-bodylotion-baldaffrique.jpg",
    tags: { scent: "프레시", mood: "에너제틱한", lasting: "가볍고 은은하게" },
    rating: 4.69,
    variants: [
      { size: "225ml", price: 91000 }
    ]
  },
  {
    brand: "Diptyque",
    name: "딥티크 핸드 & 바디 로션 플레르 드 뽀",
    category: "BODY",
    image: "./img/product-list/rank-s/body/lst6-diptyque-bodylotion-fleurdepeau.jpg",
    tags: { scent: "기타", mood: "편안함", lasting: "가볍고 은은하게" },
    rating: 4.68,
    variants: [
      { size: "350ml", price: 95000 }
    ]
  },
  {
    brand: "Dior",
    name: "디올 뉴 디올 르 밤 핸드 크림",
    category: "BODY",
    image: "./img/product-list/rank-s/body/lst7-dior-handcream-lebaume.jpg",
    tags: { scent: "프레시", mood: "편안함", lasting: "가볍고 은은하게" },
    rating: 4.67,
    variants: [
      { size: "50ml", price: 69000 }
    ]
  },
  {
    brand: "Aesop",
    name: "이솝 레저렉션 아로마틱 핸드 워시",
    category: "BODY",
    image: "./img/product-list/rank-s/body/lst8-aesop-resurrection-handwash.jpg",
    tags: { scent: "프레시", mood: "에너제틱한", lasting: "가볍고 은은하게" },
    rating: 4.67,
    variants: [
      { size: "500ml", price: 53000 }
    ]
  },
  {
    brand: "Le Labo",
    name: "르라보 핸드 포마드 히노키",
    category: "BODY",
    image: "./img/product-list/rank-s/body/lst9-lelabo-handpomade-hinoki.jpg",
    tags: { scent: "우디", mood: "편안함", lasting: "가볍고 은은하게" },
    rating: 4.63,
    variants: [
      { size: "40ml", price: 42000 }
    ]
  },
  {
    brand: "Diptyque",
    name: "딥티크 퍼퓸 핸드 크림 도 손",
    category: "BODY",
    image: "./img/product-list/rank-s/body/lst10-diptyque-handcream-doson.jpg",
    tags: { scent: "플로랄", mood: "로맨틱한", lasting: "가볍고 은은하게" },
    rating: 4.63,
    variants: [
      { size: "45ml", price: 68000 }
    ]
  },

  // ===== HAIR (10) =====
  {
    brand: "Dior",
    name: "디올 미스 디올 블루밍 부케 헤어 미스트",
    category: "HAIR",
    image: "./img/product-list/rank-s/hair/lst11-dior-hairmist-missdior-bloomingbouquet.jpg",
    tags: { scent: "플로랄", mood: "로맨틱한", lasting: "가볍고 은은하게" },
    rating: 4.75,
    variants: [
      { size: "30ml", price: 72000 }
    ]
  },
  {
    brand: "Chanel",
    name: "샤넬 코코 마드모아젤 헤어 미스트",
    category: "HAIR",
    image: "./img/product-list/rank-s/hair/lst12-chanel-hair-cocomademoiselle.jpg",
    tags: { scent: "오리엔탈", mood: "자신감있는", lasting: "가볍고 은은하게" },
    rating: 4.74,
    variants: [
      { size: "35ml", price: 98000 }
    ]
  },
  {
    brand: "Diptyque",
    name: "딥티크 헤어 미스트 플레르 드 뽀",
    category: "HAIR",
    image: "./img/product-list/rank-s/hair/lst13-diptyque-hairmist-fleurdepeau.jpg",
    tags: { scent: "기타", mood: "편안함", lasting: "가볍고 은은하게" },
    rating: 4.73,
    variants: [
      { size: "30ml", price: 98000 }
    ]
  },
  {
    brand: "Byredo",
    name: "바이레도 블랑쉬 헤어 퍼퓸",
    category: "HAIR",
    image: "./img/product-list/rank-s/hair/lst14-byredo-hair-blanche.jpg",
    tags: { scent: "플로랄", mood: "편안함", lasting: "가볍고 은은하게" },
    rating: 4.72,
    variants: [
      { size: "75ml", price: 132000 }
    ]
  },
  {
    brand: "Diptyque",
    name: "딥티크 헤어 미스트 오 로즈",
    category: "HAIR",
    image: "./img/product-list/rank-s/hair/lst15-diptyque-hairmist-eaurose.jpg",
    tags: { scent: "플로랄", mood: "로맨틱한", lasting: "가볍고 은은하게" },
    rating: 4.71,
    variants: [
      { size: "30ml", price: 98000 }
    ]
  },
  {
    brand: "Chanel",
    name: "샤넬 가브리엘 샤넬 헤어 미스트",
    category: "HAIR",
    image: "./img/product-list/rank-s/hair/lst16-chanel-hair-gabrielle.jpg",
    tags: { scent: "플로랄", mood: "자신감있는", lasting: "가볍고 은은하게" },
    rating: 4.70,
    variants: [
      { size: "35ml", price: 98000 }
    ]
  },
  {
    brand: "Diptyque",
    name: "딥티크 헤어 미스트 로 파피에",
    category: "HAIR",
    image: "./img/product-list/rank-s/hair/lst17-diptyque-hairmist-lopapier.jpg",
    tags: { scent: "우디", mood: "신비로운", lasting: "가볍고 은은하게" },
    rating: 4.68,
    variants: [
      { size: "30ml", price: 98000 }
    ]
  },
  {
    brand: "Saint Laurent",
    name: "입생로랑 리브르 헤어 미스트",
    category: "HAIR",
    image: "./img/product-list/rank-s/hair/lst18-ysl-hairmist-libre.jpg",
    tags: { scent: "오리엔탈", mood: "자신감있는", lasting: "가볍고 은은하게" },
    rating: 4.66,
    variants: [
      { size: "30ml", price: 74000 }
    ]
  },
  {
    brand: "Saint Laurent",
    name: "입생로랑 몽 파리 헤어 미스트",
    category: "HAIR",
    image: "./img/product-list/rank-s/hair/lst19-ysl-hairmist-monparis.jpg",
    tags: { scent: "플로랄", mood: "로맨틱한", lasting: "가볍고 은은하게" },
    rating: 4.64,
    variants: [
      { size: "30ml", price: 74000 }
    ]
  },
  {
    brand: "Diptyque",
    name: "딥티크 헤어 미스트 오 데 썽",
    category: "HAIR",
    image: "./img/product-list/rank-s/hair/lst20-diptyque-hairmist-eaudessens.jpg",
    tags: { scent: "우디", mood: "자신감있는", lasting: "가볍고 은은하게" },
    rating: 4.62,
    variants: [
      { size: "30ml", price: 98000 }
    ]
  },

  // ===== ETC (9) =====
  {
    brand: "Diptyque",
    name: "딥티크 베이 룸 스프레이",
    category: "ETC",
    image: "./img/product-list/rank-s/etc/lst21-diptyque-roomspray-baies.jpg",
    tags: { scent: "프레시", mood: "로맨틱한", lasting: "가볍고 은은하게" },
    rating: 4.71,
    variants: [
      { size: "150ml", price: 99000 }
    ]
  },
  {
    brand: "Jo Malone",
    name: "조 말론 우드 세이지 앤 씨 솔트 리미티드 디퓨저",
    category: "ETC",
    image: "./img/product-list/rank-s/etc/lst23-jomalone-diffuser-woodsage-limited.jpg",
    tags: { scent: "프레시", mood: "편안함", lasting: "오래가고 진하게" },
    rating: 4.70,
    variants: [
      { size: "165ml", price: 145000 }
    ]
  },
  {
    brand: "Diptyque",
    name: "딥티크 차량용 디퓨저 케이스 & 리필 세트 로즈",
    category: "ETC",
    image: "./img/product-list/rank-s/etc/lst24-diptyque-cardiffuser-rose.jpg",
    tags: { scent: "플로랄", mood: "로맨틱한", lasting: "오래가고 진하게" },
    rating: 4.73,
    variants: [
      { size: "set", price: 145000 }
    ]
  },
  {
    brand: "Diptyque",
    name: "딥티크 차량용 디퓨저 케이스 & 리필 세트 34번가 생제르망",
    category: "ETC",
    image: "./img/product-list/rank-s/etc/lst27-diptyque-cardiffuser-34boulevard.jpg",
    tags: { scent: "우디", mood: "신비로운", lasting: "오래가고 진하게" },
    rating: 4.71,
    variants: [
      { size: "set", price: 145000 }
    ]
  },
  {
    brand: "Diptyque",
    name: "딥티크 로즈 룸 스프레이",
    category: "ETC",
    image: "./img/product-list/rank-s/etc/lst29-diptyque-roomspray-rose.jpg",
    tags: { scent: "플로랄", mood: "로맨틱한", lasting: "가볍고 은은하게" },
    rating: 4.74,
    variants: [
      { size: "150ml", price: 99000 }
    ]
  },
  {
    brand: "Acqua Di Parma",
    name: "아쿠아 디 파르마 차량용 디퓨저 레더 케이스 다크 그레이",
    category: "ETC",
    image: "./img/product-list/rank-s/etc/lst22-acquadiparma-cardiffuser-darkgrey.jpg",
    rating: 4.72,
    variants: [
      { size: "case", price: 170000 }
    ]
  },
  {
    brand: "Acqua Di Parma",
    name: "아쿠아 디 파르마 차량용 디퓨저 레더 케이스 로얄 블루",
    category: "ETC",
    image: "./img/product-list/rank-s/etc/lst25-acquadiparma-cardiffuser-royalblue.jpg",
    rating: 4.78,
    variants: [
      { size: "case", price: 170000 }
    ]
  },
  {
  brand: "Jo Malone",
  name: "조 말론 라임 바질 앤 만다린 센트 서라운드 디퓨저",
  category: "ETC",
  image: "./img/product-list/rank-s/etc/lst26-jomalone-diffuser-limebasil.jpg",
  rating: 4.69,
  variants: [
    { size: "165ml", price: 130000 }
  ]
},
  {
    brand: "Acqua Di Parma",
    name: "아쿠아 디 파르마 차량용 디퓨저 레더 케이스 옐로우",
    category: "ETC",
    image: "./img/product-list/rank-s/etc/lst28-acquadiparma-cardiffuser-yellow.jpg",
    rating: 4.75,
    variants: [
      { size: "case", price: 170000 }
    ]
  },
  {
    brand: "Acqua Di Parma",
    name: "아쿠아 디 파르마 차량용 디퓨저 레더 케이스 레드",
    category: "ETC",
    image: "./img/product-list/rank-s/etc/lst30-acquadiparma-cardiffuser-red.jpg",
    rating: 4.77,
    variants: [
      { size: "case", price: 170000 }
    ]
  },
// ===== new PERFUME (6) — rating 없음 → "-" =====
{
  brand: "Tamburins",
  name: "탬버린즈 퍼퓸 리미티드 퍼피",
  category: "PERFUME",
  image: "./img/product-list/new-thumb/perfume/new1-tamburins-limited-puppy.jpg",
  tags: { scent: "오리엔탈", mood: "자신감있는", lasting: "오래가고 진하게" },
  rating: "-",
  variants: [
    { size: "50ml", price: 250000 }
  ]
},
{
  brand: "Tamburins",
  name: "탬버린즈 퍼퓸 리미티드 선샤인",
  category: "PERFUME",
  image: "./img/product-list/new-thumb/perfume/new2-tamburins-limited-sunshine.jpg",
  tags: { scent: "프레시", mood: "에너제틱한", lasting: "가볍고 은은하게" },
  rating: "-",
  variants: [
    { size: "50ml", price: 250000 }
  ]
},
{
  brand: "Byredo",
  name: "바이레도 알토 아스트랄 오 드 퍼퓸",
  category: "PERFUME",
  image: "./img/product-list/new-thumb/perfume/new3-byredo-astral-oud.jpg",
  tags: { scent: "오리엔탈", mood: "자신감있는", lasting: "오래가고 진하게" },
  rating: "-",
  variants: [
    { size: "50ml",  price: 355000 },
    { size: "100ml", price: 495000 }
  ]
},
{
  brand: "Yves Saint",
  name: "입생로랑 베이비캣 오 드 빠르펭",
  category: "PERFUME",
  image: "./img/product-list/new-thumb/perfume/new4-yves-saint-laurent-babycat.jpg",
  tags: { scent: "오리엔탈", mood: "자신감있는", lasting: "오래가고 진하게" },
  rating: "-",
  variants: [
    { size: "75ml",  price: 420000 },
    { size: "125ml", price: 540000 }
  ]
},
{
  brand: "Diptyque",
  name: "딥티크 플레르 드 뽀 오 드 뚜왈렛",
  category: "PERFUME",
  image: "./img/product-list/new-thumb/perfume/new5-diptyque-fleur-de-peau.jpg",
  tags: { scent: "기타", mood: "편안함", lasting: "가볍고 은은하게" },
  rating: "-",
  variants: [
    { size: "75ml",  price: 229000 },
    { size: "125ml", price: 318000 }
  ]
},
{
  brand: "Le Labo",
  name: "르라보 오스만투스 19",
  category: "PERFUME",
  image: "./img/product-list/new-thumb/perfume/new6-le-labo-osmanthus19.jpg",
  tags: { scent: "플로랄", mood: "로맨틱한", lasting: "가볍고 은은하게" },
  rating: "-",
  variants: [
    { size: "15ml",  price: 138000 },
    { size: "50ml",  price: 310000 },
    { size: "100ml", price: 458000 }
  ]
},

// ===== BODY =====
{
  brand: "Byredo",
  name: "바이레도 유자 트리 핸드 로션",
  category: "BODY",
  image: "./img/product-list/new-thumb/body/new1-byredo-yuzu-tree-hand-lotion.jpg",
  tags: { scent: "프레시", mood: "에너제틱한", lasting: "가볍고 은은하게" },
  rating: "-",
  variants: [
    { size: "450ml", price: 79000 }
  ]
},
{
  brand: "Acqua Di Parma",
  name: "아쿠아 디 파르마 핸드 앤 바디 로션 부옹조르노",
  category: "BODY",
  image: "./img/product-list/new-thumb/body/new2-acquadiparma-buongiorno-hand-body-lotion.jpg",
  tags: { scent: "프레시", mood: "에너제틱한", lasting: "가볍고 은은하게" },
  rating: "-",
  variants: [
    { size: "300ml", price: 105000 }
  ]
},
{
  brand: "Jo Malone",
  name: "조말론 라임 바실 앤 만다린 바디 앤 핸드 로션",
  category: "BODY",
  image: "./img/product-list/new-thumb/body/new2-acquadiparma-buongiorno-hand-body-lotion.jpg",
  tags: { scent: "프레시", mood: "에너제틱한", lasting: "가볍고 은은하게" },
  rating: "-",
  variants: [
    { size: "250ml", price: 115000 }
  ]
},
{
  brand: "Diptyque",
  name: "딥디크 프레쉬 로션 포 더 바디",
  category: "BODY",
  image: "./img/product-list/new-thumb/body/new4-diptyque-fresh-lotion-body.jpg",
  tags: { scent: "프레시", mood: "편안함", lasting: "가볍고 은은하게" },
  rating: "-",
  variants: [
    { size: "200ml", price: 89000 }
  ]
},
{
  brand: "Diptyque",
  name: "딥디크 플레르 드 포 핸드 앤 바디 로션",
  category: "BODY",
  image: "./img/product-list/new-thumb/body/new5-diptyque-fleur-de-peau-hand-body-lotion.jpg",
  tags: { scent: "기타", mood: "편안함", lasting: "가볍고 은은하게" },
  rating: "-",
  variants: [
    { size: "350ml", price: 95000 }
  ]
},
{
  brand: "Tamburins",
  name: "탬버린즈 샤워리 바디 로션 포그",
  category: "BODY",
  image: "./img/product-list/new-thumb/body/new6-tamburins-showery-fog.jpg",
  tags: { scent: "프레시", mood: "편안함", lasting: "가볍고 은은하게" },
  rating: "-",
  variants: [
    { size: "250ml", price: 48000 }
  ]
},
{
  brand: "Tamburins",
  name: "탬버린즈 샤워리 바디 로션 님버스",
  category: "BODY",
  image: "./img/product-list/new-thumb/body/new7-tamburins-showery-nimbus.jpg",
  tags: { scent: "프레시", mood: "에너제틱한", lasting: "가볍고 은은하게" },
  rating: "-",
  variants: [
    { size: "250ml", price: 48000 }
  ]
},

// ===== HAIR =====
{
  brand: "Diptyque",
  name: "딥티크 리미티드 에디션 퍼퓸 샴푸 포 헤어",
  category: "HAIR",
  image: "./img/product-list/new-thumb/hair/new1-diptyque-perfumed-shampoo-limited.jpg",
  tags: { scent: "프레시", mood: "편안함", lasting: "가볍고 은은하게" },
  rating: "-",
  variants: [
    { size: "195ml", price: 87000 }
  ]
},
{
  brand: "Diptyque",
  name: "딥티크 필로시코스 헤어 미스트",
  category: "HAIR",
  image: "./img/product-list/new-thumb/hair/new2-diptyque-philosykos-hair-mist.jpg",
  tags: { scent: "우디", mood: "편안함", lasting: "가볍고 은은하게" },
  rating: "-",
  variants: [
    { size: "30ml", price: 94000 }
  ]
},
{
  brand: "Diptyque",
  name: "딥티크 일리오 리미티드 에디션 헤어 미스트",
  category: "HAIR",
  image: "./img/product-list/new-thumb/hair/new3-diptyque-ilio-limited-hair-mist.jpg",
  tags: { scent: "프레시", mood: "에너제틱한", lasting: "가볍고 은은하게" },
  rating: "-",
  variants: [
    { size: "30ml", price: 93000 }
  ]
},
{
  brand: "Prada",
  name: "프라다 패러독스 헤어 미스트",
  category: "HAIR",
  image: "./img/product-list/new-thumb/hair/new4-prada-paradoxe-hair-mist.jpg",
  tags: { scent: "오리엔탈", mood: "자신감있는", lasting: "가볍고 은은하게" },
  rating: "-",
  variants: [
    { size: "30ml", price: 72000 }
  ]
},
{
  brand: "Dior",
  name: "디올 미스 디올 오 드 퍼퓸 헤어 미스트",
  category: "HAIR",
  image: "./img/product-list/new-thumb/hair/new5-dior-miss-dior-edp-hair-mist.jpg",
  tags: { scent: "플로랄", mood: "로맨틱한", lasting: "가볍고 은은하게" },
  rating: "-",
  variants: [
    { size: "30ml", price: 71000 }
  ]
},

// ===== ETC =====
{
  brand: "Le Labo",
  name: "르라보 페티 그레인 21 홈 프래그런스",
  category: "ETC",
  image: "./img/product-list/new-thumb/etc/new1-le-labo-petitgrain21-home-fragrance.jpg",
  tags: { scent: "프레시", mood: "편안함", lasting: "오래가고 진하게" },
  rating: "-",
  variants: [
    { size: "100ml", price: 169000 }
  ]
},
{
  brand: "Nonfiction",
  name: "논픽션 랍상송 룸 스프레이",
  category: "ETC",
  image: "./img/product-list/new-thumb/etc/new2-nonfiction-lapsang-song-room-spray.jpg",
  tags: { scent: "우디", mood: "편안함", lasting: "가볍고 은은하게" },
  rating: "-",
  variants: [
    { size: "50ml",  price: 34000 },
    { size: "150ml", price: 65000 }
  ]
},
{
  brand: "Diptyque",
  name: "딥티크 리미티드 에디션 클래식 시트로넬 캔들",
  category: "ETC",
  image: "./img/product-list/new-thumb/etc/new3-diptyque-citronnelle-candle-190g.jpg",
  tags: { scent: "프레시", mood: "에너제틱한", lasting: "가볍고 은은하게" },
  rating: "-",
  variants: [
    { size: "190g", price: 108000 }
  ]
},
{
  brand: "Aesop",
  name: "이솝 무라사키 아로마틱 인센스",
  category: "ETC",
  image: "./img/product-list/new-thumb/etc/new4-aesop-murasaki-aromatique-incense.jpg",
  tags: { scent: "우디", mood: "신비로운", lasting: "오래가고 진하게" },
  rating: "-",
  variants: [
    { size: "33 sticks (13g)", price: 47000 }
  ]
},
{
  brand: "Aesop",
  name: "이솝 이스트로스 콤팩트 룸 스프레이",
  category: "ETC",
  image: "./img/product-list/new-thumb/etc/new5-aesop-istros-compact-roomspray-50.jpg",
  tags: { scent: "플로랄", mood: "로맨틱한", lasting: "가볍고 은은하게" },
  rating: "-",
  variants: [
    { size: "50ml", price: 49000 }
  ]
},
{
  brand: "Aesop",
  name: "이솝 키테라 콤팩트 룸 스프레이",
  category: "ETC",
  image: "./img/product-list/new-thumb/etc/new6-aesop-kythera-compact-roomspray-50.jpg",
  tags: { scent: "오리엔탈", mood: "자신감있는", lasting: "오래가고 진하게" },
  rating: "-",
  variants: [
    { size: "50ml", price: 60000 }
  ]
},
// {
//   brand: "Aesop",
//   name: "이솝 올루스 콤팩트 룸 스프레이",
//   category: "ETC",
//   image: "./img/product-list/new-thumb/etc/new7-aesop-olous-compact-roomspray-50.jpg",
//   tags: { scent: "프레시", mood: "에너제틱한", lasting: "가볍고 은은하게" },
//   rating: "-",
//   variants: [
//     { size: "50ml", price: 53000 }
//   ]
// }




];

