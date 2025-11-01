// 용량별 추정가 (KRW). size의 첫 항목 = 네가 준 price(정확가), 나머지는 isEstimate:true
const priceVariants = [
  // --- PERFUME ---
  { name: "메종 마르지엘라 레플리카 레이지 선데이 모닝 오 드 뚜왈렛", variants: [ {size:"50ml",priceKR:98000,isEstimate:false}, {size:"100ml",priceKR:177000,isEstimate:true} ] },
  { name: "딥티크 오르페옹 오 드 퍼퓸", variants: [ {size:"50ml",priceKR:269000,isEstimate:false}, {size:"100ml",priceKR:487000,isEstimate:true} ] },
  { name: "랑방 에끌라 드 아르페쥬 오 드 퍼퓸", variants: [ {size:"50ml",priceKR:64000,isEstimate:false}, {size:"100ml",priceKR:116000,isEstimate:true} ] },
  { name: "제니퍼로페즈 글로우 바이제이로 EDT", variants: [ {size:"50ml",priceKR:55000,isEstimate:false}, {size:"100ml",priceKR:100000,isEstimate:true} ] },
  { name: "산타 마리아 노벨라 피렌체 1221 에디션 오 드 코롱", variants: [ {size:"50ml",priceKR:145000,isEstimate:false}, {size:"100ml",priceKR:263000,isEstimate:true} ] },
  { name: "다니엘 트루스 오일 퍼퓸 밤쉘", variants: [ {size:"50ml",priceKR:54000,isEstimate:false}, {size:"100ml",priceKR:98000,isEstimate:true} ] },
  { name: "딥티크 플레르 드 뽀 오 드 퍼퓸", variants: [ {size:"50ml",priceKR:269000,isEstimate:false}, {size:"100ml",priceKR:487000,isEstimate:true} ] },
  { name: "조 말론 블랙베리 앤 베이 코롱", variants: [ {size:"50ml",priceKR:110000,isEstimate:false}, {size:"100ml",priceKR:199000,isEstimate:true} ] },
  { name: "클린 웜 코튼 EDP", variants: [ {size:"50ml",priceKR:57000,isEstimate:false}, {size:"100ml",priceKR:103000,isEstimate:true} ] },
  { name: "바이레도 블랑쉬 오 드 퍼퓸", variants: [ {size:"50ml",priceKR:280000,isEstimate:false}, {size:"100ml",priceKR:507000,isEstimate:true} ] },
  { name: "르라보 상탈 33 오 드 퍼퓸", variants: [ {size:"50ml",priceKR:225000,isEstimate:false}, {size:"100ml",priceKR:407000,isEstimate:true} ] },
  { name: "르라보 어나더 13 오 드 퍼퓸", variants: [ {size:"50ml",priceKR:253000,isEstimate:false}, {size:"100ml",priceKR:457000,isEstimate:true} ] },
  { name: "크리드 어벤투스 오 드 퍼퓸", variants: [ {size:"50ml",priceKR:384000,isEstimate:false}, {size:"100ml",priceKR:695000,isEstimate:true} ] },
  { name: "바이레도 집시 워터 오 드 퍼퓸", variants: [ {size:"50ml",priceKR:180000,isEstimate:false}, {size:"100ml",priceKR:326000,isEstimate:true} ] },
  { name: "톰 포드 오드 우드 오 드 퍼퓸", variants: [ {size:"50ml",priceKR:323000,isEstimate:false}, {size:"100ml",priceKR:585000,isEstimate:true} ] },
  { name: "바이레도 모하비 고스트 오 드 퍼퓸", variants: [ {size:"50ml",priceKR:185000,isEstimate:false}, {size:"100ml",priceKR:335000,isEstimate:true} ] },
  { name: "바이레도 발 다프리크 오 드 퍼퓸", variants: [ {size:"50ml",priceKR:175000,isEstimate:false}, {size:"100ml",priceKR:317000,isEstimate:true} ] },
  { name: "디올 소바쥬 오 드 뚜왈렛", variants: [ {size:"50ml",priceKR:114000,isEstimate:false}, {size:"100ml",priceKR:206000,isEstimate:true} ] },
  { name: "톰 포드 블랙 오키드 오 드 퍼퓸", variants: [ {size:"50ml",priceKR:168000,isEstimate:false}, {size:"100ml",priceKR:304000,isEstimate:true} ] },
  { name: "킬리안 엔젤스 셰어", variants: [ {size:"50ml",priceKR:232000,isEstimate:false}, {size:"100ml",priceKR:420000,isEstimate:true} ] },

  // --- BODY ---
  { name: "르라보 어나더 13 퍼퓨밍 바디 로션", variants: [ {size:"50ml",priceKR:92000,isEstimate:false}, {size:"100ml",priceKR:167000,isEstimate:true} ] },
  { name: "바이레도 모하비 고스트 핸드 크림", variants: [ {size:"50ml",priceKR:50000,isEstimate:false}, {size:"100ml",priceKR:91000,isEstimate:true} ] },
  { name: "바이레도 블랑쉬 핸드 크림", variants: [ {size:"50ml",priceKR:40000,isEstimate:false}, {size:"100ml",priceKR:73000,isEstimate:true} ] },
  { name: "이솝 레저렉션 아로마틱 핸드 밤", variants: [ {size:"50ml",priceKR:36000,isEstimate:false}, {size:"100ml",priceKR:65000,isEstimate:true} ] },
  { name: "바이레도 발 다프리크 바디 로션", variants: [ {size:"50ml",priceKR:80000,isEstimate:false}, {size:"100ml",priceKR:145000,isEstimate:true} ] },
  { name: "딥티크 핸드 & 바디 로션 플레르 드 뽀", variants: [ {size:"50ml",priceKR:84000,isEstimate:false}, {size:"100ml",priceKR:152000,isEstimate:true} ] },
  { name: "디올 뉴 디올 르 밤 핸드 크림", variants: [ {size:"50ml",priceKR:67000,isEstimate:false}, {size:"100ml",priceKR:121000,isEstimate:true} ] },
  { name: "이솝 레저렉션 아로마틱 핸드 워시", variants: [ {size:"50ml",priceKR:47000,isEstimate:false}, {size:"100ml",priceKR:85000,isEstimate:true} ] },
  { name: "르라보 핸드 포마드 히노키", variants: [ {size:"50ml",priceKR:38000,isEstimate:false}, {size:"100ml",priceKR:69000,isEstimate:true} ] },
  { name: "딥티크 퍼퓸 핸드 크림 도 손", variants: [ {size:"50ml",priceKR:65000,isEstimate:false}, {size:"100ml",priceKR:118000,isEstimate:true} ] },

  // --- HAIR ---
  { name: "디올 미스 디올 블루밍 부케 헤어 미스트", variants: [ {size:"30ml",priceKR:66000,isEstimate:false}, {size:"50ml",priceKR:104000,isEstimate:true} ] },
  { name: "샤넬 코코 마드모아젤 헤어 미스트", variants: [ {size:"30ml",priceKR:82000,isEstimate:false}, {size:"50ml",priceKR:129000,isEstimate:true} ] },
  { name: "딥티크 헤어 미스트 플레르 드 뽀", variants: [ {size:"30ml",priceKR:80000,isEstimate:false}, {size:"50ml",priceKR:126000,isEstimate:true} ] },
  { name: "바이레도 블랑쉬 헤어 퍼퓸", variants: [ {size:"30ml",priceKR:62000,isEstimate:false}, {size:"50ml",priceKR:98000,isEstimate:true} ] },
  { name: "딥티크 헤어 미스트 오 로즈", variants: [ {size:"30ml",priceKR:80000,isEstimate:false}, {size:"50ml",priceKR:126000,isEstimate:true} ] },
  { name: "샤넬 가브리엘 샤넬 헤어 미스트", variants: [ {size:"30ml",priceKR:80000,isEstimate:false}, {size:"50ml",priceKR:126000,isEstimate:true} ] },
  { name: "딥티크 헤어 미스트 로 파피에", variants: [ {size:"30ml",priceKR:84000,isEstimate:false}, {size:"50ml",priceKR:132000,isEstimate:true} ] },
  { name: "입생로랑 리브르 헤어 미스트", variants: [ {size:"30ml",priceKR:55000,isEstimate:false}, {size:"50ml",priceKR:87000,isEstimate:true} ] },
  { name: "입생로랑 몽 파리 헤어 미스트", variants: [ {size:"30ml",priceKR:58000,isEstimate:false}, {size:"50ml",priceKR:92000,isEstimate:true} ] },
  { name: "딥티크 헤어 미스트 오 데 썽", variants: [ {size:"30ml",priceKR:74000,isEstimate:false}, {size:"50ml",priceKR:118000,isEstimate:true} ] },

  // --- ETC (향 제품만 계산) ---
  { name: "딥티크 베이 룸 스프레이", variants: [ {size:"150ml",priceKR:81000,isEstimate:false}, {size:"250ml",priceKR:128000,isEstimate:true} ] },
  { name: "조 말론 우드 세이지 앤 씨 솔트 리미티드 디퓨저", variants: [ {size:"165ml",priceKR:119000,isEstimate:false}, {size:"250ml",priceKR:174000,isEstimate:true} ] },
  { name: "딥티크 차량용 디퓨저 케이스 & 리필 세트 로즈", variants: [ {size:"1set",priceKR:153000,isEstimate:false} ] },
  { name: "조 말론 라임 바질 앤 만다린 센트 서라운드 디퓨저", variants: [ {size:"165ml",priceKR:130000,isEstimate:false}, {size:"250ml",priceKR:190000,isEstimate:true} ] },
  { name: "딥티크 차량용 디퓨저 케이스 & 리필 세트 34번가 생제르망", variants: [ {size:"1set",priceKR:146000,isEstimate:false} ] },
  { name: "딥티크 로즈 룸 스프레이", variants: [ {size:"150ml",priceKR:127000,isEstimate:false}, {size:"250ml",priceKR:201000,isEstimate:true} ] },

  // --- ETC (향 없는 케이스류: 추정 불가) ---
  { name: "아쿠아 디 파르마 차량용 디퓨저 레더 케이스 다크 그레이", variants: [ {size:"케이스",priceKR:250000,isEstimate:false} ] },
  { name: "아쿠아 디 파르마 차량용 디퓨저 레더 케이스 로얄 블루", variants: [ {size:"케이스",priceKR:449000,isEstimate:false} ] },
  { name: "아쿠아 디 파르마 차량용 디퓨저 레더 케이스 옐로우", variants: [ {size:"케이스",priceKR:151000,isEstimate:false} ] },
  { name: "아쿠아 디 파르마 차량용 디퓨저 레더 케이스 레드", variants: [ {size:"케이스",priceKR:396000,isEstimate:false} ] },

  // --- NEW · PERFUME ---
  { name: "탬버린즈 퍼퓸 리미티드 퍼피", variants: [ {size:"50ml",priceKR:250000,isEstimate:false}, {size:"100ml",priceKR:452000,isEstimate:true} ] },
  { name: "탬버린즈 퍼퓸 리미티드 선샤인", variants: [ {size:"50ml",priceKR:250000,isEstimate:false}, {size:"100ml",priceKR:452000,isEstimate:true} ] },
  { name: "바이레도 알토 아스트랄 오 드 퍼퓸", variants: [ {size:"50ml",priceKR:355000,isEstimate:false}, {size:"100ml",priceKR:642000,isEstimate:true} ] },
  { name: "입생로랑 베이비캣 오 드 빠르펭", variants: [ {size:"50ml",priceKR:360000,isEstimate:false}, {size:"100ml",priceKR:651000,isEstimate:true} ] },
  { name: "딥티크 플레르 드 뽀 오 드 뚜왈렛", variants: [ {size:"50ml",priceKR:196000,isEstimate:false}, {size:"100ml",priceKR:354000,isEstimate:true} ] },
  { name: "르라보 오스만투스 19", variants: [ {size:"50ml",priceKR:73000,isEstimate:false}, {size:"100ml",priceKR:131000,isEstimate:true} ] },

  // --- NEW · BODY ---
  { name: "바이레도 유자 트리 핸드 로션", variants: [ {size:"50ml",priceKR:91000,isEstimate:false}, {size:"100ml",priceKR:165000,isEstimate:true} ] },
  { name: "아쿠아 디 파르마 핸드 앤 바디 로션 부옹조르노", variants: [ {size:"50ml",priceKR:129000,isEstimate:false}, {size:"100ml",priceKR:234000,isEstimate:true} ] },
  { name: "조말론 라임 바질 앤 만다린 바디 앤 핸드 로션", variants: [ {size:"50ml",priceKR:59000,isEstimate:false}, {size:"100ml",priceKR:107000,isEstimate:true} ] },
  { name: "딥디크 프레쉬 로션 포 더 바디", variants: [ {size:"50ml",priceKR:126000,isEstimate:false}, {size:"100ml",priceKR:229000,isEstimate:true} ] },
  { name: "딥디크 플레르 드 포 핸드 앤 바디 로션", variants: [ {size:"50ml",priceKR:91000,isEstimate:false}, {size:"100ml",priceKR:165000,isEstimate:true} ] },
  { name: "탬버린즈 샤워리 바디 로션 포그", variants: [ {size:"50ml",priceKR:39000,isEstimate:false}, {size:"100ml",priceKR:71000,isEstimate:true} ] },
  { name: "탬버린즈 샤워리 바디 로션 님버스", variants: [ {size:"50ml",priceKR:39000,isEstimate:false}, {size:"100ml",priceKR:71000,isEstimate:true} ] },
];

