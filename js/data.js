// Diseases Data (Expanded & MSD Manual level)
const diseaseNodes = [
    { id: "d_pneumonia", name: "Pneumonia (CAP/HAP)", type: "disease", group: "Respiratory", subGroup: "Infection", desc: "폐 실질 조직에 발생하는 염증성 감염입니다. 발열, 오한, 화농성 가래를 동반한 빈번한 기침, 흉막성 흉통 및 호흡곤란이 주 증상입니다. 지역사회 획득 폐렴(CAP)의 가장 흔한 원인균은 폐렴구균(S. pneumoniae)입니다. 마이코플라스마나 레지오넬라와 같은 비전형 원인균은 서서히 발병하며 마른기침을 유발합니다. 병원 획득 폐렴(HAP)은 고령자 및 면역저하자에서 흔하며, 보통 녹농균(P. aeruginosa) 및 MRSA 커버가 필요합니다." },
    { id: "d_meningitis", name: "Bacterial Meningitis", type: "disease", group: "CNS", subGroup: "Infection", desc: "뇌수막 및 척수막을 침범하는 급성 감염입니다. 흔히 발열, 뇌막 자극 징후(경부 강직), 및 의식 저하의 3대 증상을 보입니다. 연령에 따라 주요 질병 양상이 다르며, 신생아는 B군 연쇄상구균(S. agalactiae), 청소년은 수막구균(N. meningitidis), 전 연령대 평균으로는 폐렴구균(S. pneumoniae)이 가장 많습니다. 세프트리악손과 반코마이신을 포함하는 즉각적인 병합 경험적 항생제 투여가 필수적인 응급 질환입니다." },
    { id: "d_endocarditis", name: "Infective Endocarditis", type: "disease", group: "Cardiovascular", subGroup: "Infection", desc: "주로 심장 판막을 침범하는 감염성 질환입니다. 지속적인 원인 불명의 발열, 새롭게 들리는 심잡음과 함께 혈관색전 소견(오슬러 결절, 제인웨이 병변)이 특징적입니다. 황색포도상구균(S. aureus)은 흔히 급성 우심계 심내막염을 유발하며 사망률이 높습니다. 반면 녹색연쇄상구균(Viridans strep)은 기존 손상된 판막에서 아급성 심내막염을 주로 일으킵니다. 확진을 위해서는 다회 혈액 배양 및 심초음파(Duke 진단 기준)가 필요합니다." },
    { id: "d_uti", name: "Urinary Tract Infection", type: "disease", group: "Genitourinary", subGroup: "Infection", desc: "요도를 통해 발생한 요로계 감염으로, 방광염(배뇨통, 빈뇨) 및 급성 신우신염(심부 발열, 늑골척추각 압통)을 아우릅니다. 대장균(E. coli)이 발생 원인의 약 80%를 차지하는 주 병원체입니다. 성활동기가 활발한 젊은 여성에서는 S. saprophyticus, 요로 결석(Struvite) 동반 환자에서는 Proteus mirabilis 감염 빈도가 증가합니다." },
    { id: "d_skin", name: "SSTI (Cellulitis/Abscess)", type: "disease", group: "Dermatologic", subGroup: "Infection", desc: "피부 및 연조직 감염을 뜻합니다. 연조직염(봉와직염, Cellulitis)은 주위로 번지는 홍반, 열감, 붓기를 동반하는 피부의 진피와 피하조직 감염으로, 대개 S. pyogenes가 유발합니다. 피부 농양(Abscess)은 통증을 동반한 화농성 결절로, 주고 황색포도상구균(MRSA 포함)이 원인이며 절개 및 배농 치료가 핵심입니다. 심부 조직을 파괴하는 괴사성 근막염은 강력한 항생제와 신속한 응급 수술이 요구됩니다." },
    { id: "d_std", name: "STIs (Gonorrhea/Chlamydia)", type: "disease", group: "Genitourinary", subGroup: "Infection", desc: "점막 접촉을 통해 전파되는 성매개 감염 질환입니다. 남성에게 화농성 배뇨 및 요도염, 여성에게 화농성 자궁경부염 및 골반염(PID)을 유발합니다. 임질균(N. gonorrhoeae)과 클라미디아(C. trachomatis)는 종종 동반 감염이 확인되므로 함께 치료해야 합니다. 치료 없이 방치될 경우 난관 손상에 의한 자궁외 임신, 골반강 유착, 불임 등 영구적인 중증 복합증상으로 악화될 수 있습니다." },
    { id: "d_tb", name: "Tuberculosis", type: "disease", group: "Respiratory", subGroup: "Mycobacterial", desc: "결핵균(M. tuberculosis) 전파로 발생하는 감염 질환입니다. 잠복결핵 후 저항력이 떨어질 때 발현되는 재활성화 결핵(Reactivation TB)은 주로 산소 분압이 높은 상엽 폐 조직을 침범하여 발생하며 만성 기침, 혈담 내지 객혈, 식은땀, 미열 및 체중 감소를 유발합니다. 육아종 내부에 건락성 괴사가 형성되는 것이 특징입니다. 완치를 위해서는 최소 6개월 이상 동시 다제 병용 치료(항결핵제: RIPE 요법 등)가 진행되어야 합니다." },
    { id: "d_pud", name: "Peptic Ulcer Disease", type: "disease", group: "Gastrointestinal", subGroup: "Gastric", desc: "상부 위장관 내벽이 손상되어 파이면서 궤양이 형성되는 소화 질환입니다. 주원인인 헬리코박터 파일로리(H. pylori) 균이 요소분해효소로 위산을 중화시켜 점막 내에 만성 염증을 유발하여 발생합니다. 주된 증상은 상복부와 명치의 극심한 통증입니다 십이지장 궤양은 식사 후 오히려 통증이 완화되는 반면 위궤양은 악화되는 경향이 있습니다. 양성자 펌프 억제제(PPI) 중심의 3자 병합 요법 처방으로 제균합니다." },
    { id: "d_cdiff", name: "C. diff Colitis", type: "disease", group: "Gastrointestinal", subGroup: "Enteric", desc: "항생제 관련 가장 널리 알려진 의료 관련 병원성 감염 장염입니다. 광범위 항생제(Clindamycin 등) 투약으로 체내 주요 장관 세균총이 파괴된 후 C. difficile 이 병적으로 증식하여 발병합니다. 균산생 장독소와 세포독소가 원인으로, 혈변보다는 주로 심한 악취성 설사나 고열, 탈수가 나타나며 심한 경우 위막성 대장염(Pseudomembranous colitis) 내지 독성 거대결장으로 이어집니다. 경구 Vancomycin 또는 Fidaxomicin으로 치료합니다." },
    { id: "d_intraabd", name: "Intra-abdominal Infection", type: "disease", group: "Gastrointestinal", subGroup: "Enteric", desc: "맹장염(충수염), 대장 게실염 및 복강 내 심부 농양이나 장 천공으로 인한 복막염을 아우르는 감염입니다. 염증 부위의 장벽 틈새 등으로 대장균(E. coli) 등 호기성 그람음성 막대균 집단과 최다 정상 서식군인 혐기성 박테로이데스(B. fragilis) 균이 대량 동시 오염 유출되므로 압도적 혼합 다균성 감염을 유발합니다. 반드시 그람음성과 혐기성 균주를 모두 표적하는 광범위 항생제 병합 처방이 필요합니다." },
    { id: "d_zoonotic", name: "Zoonotic & Arthropod Infections", type: "disease", group: "Systemic", subGroup: "Zoonotic", desc: "인수공통감염 및 절지동물 매개를 통해 발생하는 특수 전염 질환군입니다. 라임병(Lyme disease)은 진드기가 옮기는 스피로헤타 보렐리아 감염으로 과녁 모양의 유주성 홍반 소견으로 시작되며, 후기에는 만성 관절염으로 진행될 수 있습니다. 록키산 홍반열(RMSF)은 극심한 두통과 함께 손목/발목에서 체간부로 번지는 점상출혈 증세를 유발합니다. 대다수 증상 억제에 세균 내 침투 요건이 있는 테트라사이클린계(Doxycycline 등) 처방이 주축을 이룹니다." },
    { id: "d_food", name: "Foodborne Gastroenteritis", type: "disease", group: "Gastrointestinal", subGroup: "Enteric", desc: "장내 감염 내지 미리 생성된 독소를 함유한 오염 식품의 섭취에 의해 촉발되는 감염성 식중독 증후군입니다. 포도상구균 등 위장 조직 진입 없이 오로지 음식물에 독소를 잔존시킨 경우 수 시간 내 응급 구역, 구토를 일으키며, 살모넬라, 캄필로박터 등 장 점막염과 직접적 독소 병변을 유도하는 세균의 경우엔 장액성, 혹은 심각한 혈변 점액성 이질로 길게 이어집니다. 보존적 대증 치료가 우선되나 침습성 병변에 국한해 제한적 항생제를 사용합니다." },
    { id: "d_tetanus", name: "Tetanus", type: "disease", group: "CNS", subGroup: "Toxin-mediated", desc: "오염된 토양 등에서 자상을 통해 체내에 진입한 파상풍균(C. tetani)이 신경 독소를 뿜어 일으키는 심각한 급성 감염 질환입니다. 역행으로 중추 척수에 스며든 독소가 주축성 골격 억제계 신경전달물질(GABA)의 분비 방출을 단절시킵니다. 그로 인해 전신의 길항근육에 극도의 강직성 마비 현상인 후궁반장(활강 변형 강직) 및 심각한 아관긴급(개구장애)이 연발성 근육 과수축과 함께 유발되며 응급 집중치료 관리를 해야 합니다." },
    { id: "d_botulism", name: "Botulism", type: "disease", group: "CNS", subGroup: "Toxin-mediated", desc: "보툴리눔 맹독성 체외 독소 분비로 촉발되는 식중독성 급성 전신 하행성 마비 질환입니다. 운동 신경근 접합부 말단에서 신경전달물질인 융합 아세틸콜린의 체내 배출 이동만을 완전히 억제 차단합니다. 증상 경과는 대개 복시, 연하곤란 등의 뇌신경 장애 기전 전조증으로 두부에서 시작하여 점차적으로 사지의 이완 탈력, 횡격막 마비로 인한 치명성 심정지로 급속 하강 진행하는 치명률이 막대한 초응급 질환입니다." },
    { id: "d_pertussis", name: "Pertussis (Whooping Cough)", type: "disease", group: "Respiratory", subGroup: "Infection", desc: "백일해(Pertussis)는 공기, 비말 등을 통해 전파되는 매우 고위험군의 급성 호흡기 전염병입니다. 특징적으로 만성 발작 국면을 동반하여 연속되는 발작성 밭은 기침 폭발, 그리고 가쁘게 흡기하며 나는 심한 쇳소리(Whoop), 구토가 대표적입니다. 점막 세포에 결합하는 독소로 인해 식균 대식 능통이 방해되어 극도의 림프구 증다증이 유발됩니다. 조기 Macrolide 요법이 감염성 배출 억제에 주요하게 이용됩니다." },
    { id: "d_syphilis", name: "Syphilis", type: "disease", group: "Systemic", subGroup: "Infection", desc: "나선형 스피로헤타 병원체 매독균(T. pallidum)에 의한 감염이며 성적 접촉으로 유발되는 만성 전신 염증 감염증입니다. 1기 병변으로 국소 부위의 통증이 전혀 없는 염증성 궤양 굳은 하감(Chancre)이 동시다발적으로 생기며, 혈행 진출인 2기에 이르면 수포 편평 콘딜로마 및 무증상 전신 피부 발진 지표를 드러냅니다. 방치 시 치명적 척수, 심혈관 고무종 파괴를 불러일으키나, 전 기수에 걸쳐 페니실린 G(Penicillin G)가 부동의 가장 강력하고 확실한 절대 대안으로 기능합니다." }
];

// Bacteria Data (Enhanced with Clinical characteristics for all requested bacteria)
const bacteriaNodes = [
    // --- Gram (+) Cocci ---
    { id: "s_aureus_mssa", name: "S. aureus (MSSA)", type: "bacteria", group: "Gram (+)", subGroup: "Cocci", desc: "포도송이 모양의 그람양성 알균입니다. 카탈라아제 및 코아굴라아제 양성 반응을 보입니다. 단백질 A를 통해 대식세포의 식균 작용을 억제하며 피부 감염, 심부 농양, 급성 심내막염, 골수염, 독소충격증후군(TSS)의 주요 원인균입니다. 항포도상구균 페니실린(Nafcillin) 및 1세대 세팔로스포린(Cefazolin)에 감수성이 있습니다." },
    { id: "s_aureus_mrsa", name: "S. aureus (MRSA)", type: "bacteria", group: "Gram (+)", subGroup: "Cocci", desc: "메티실린 내성 황색포도상구균입니다. mecA 유전자 획득으로 페니실린 결합 단백질(PBP2a) 구조가 변형되어 대부분의 베타락탐계 항생제에 내성을 보입니다. 원내 감염 폐렴, 카테터 관련 감염 및 괴사성 근막염의 주원인이며, 주로 반코마이신(Vancomycin), 댑토마이신(Daptomycin) 등으로 치료합니다." },
    { id: "s_epidermidis", name: "S. epidermidis", type: "bacteria", group: "Gram (+)", subGroup: "Cocci", desc: "정상 피부 상재균인 카탈라아제 양성, 코아굴라아제 음성 그람양성 구균입니다. 중심정맥관, 인공 심장 판막, 정형외과적 보형물 등 인공 삽입물 표면에 세포외 다당류 바이오필름을 형성하여 감염을 유발하는 능력이 뛰어납니다. 다제내성인 경우가 많아 일차적으로 반코마이신이 요구됩니다." },
    { id: "s_pneumoniae", name: "S. pneumoniae", type: "bacteria", group: "Gram (+)", subGroup: "Cocci", desc: "창 모양(Lancet-shaped)을 띠는 알파 용혈성 그람양성 쌍구균입니다. 두꺼운 다당류 피막이 주요 병인이며, 성인 지역사회 획득 폐렴(CAP), 세균성 뇌수막염, 중이염, 부비동염의 가장 흔한 원인균입니다. 비장 절제 환자의 경우 전격성 패혈증 발생 위험이 크게 높아집니다." },
    { id: "viridans_strep", name: "Viridans streptococci", type: "bacteria", group: "Gram (+)", subGroup: "Cocci", desc: "주로 구강 및 인두에 상재하는 알파 용혈성 연쇄상구균입니다. 자당을 분해하여 생성한 덱스트란을 이용해 심장 판막의 피브린-혈소판 응집체에 부착합니다. 발치 등 치과 치료 후 혈류로 유입되어, 특히 기존에 손상된 판막에서 녹색연쇄상구균성 아급성 세균성 심내막염을 유발하는 주요 원인균입니다." },
    { id: "s_pyogenes", name: "Group A Strep (S. pyogenes)", type: "bacteria", group: "Gram (+)", subGroup: "Cocci", desc: "A군 베타 용혈성 연쇄상구균입니다. M 단백질을 통해 식균 작용을 억제하며 급성 인두염, 단독, 연조직염을 흔히 유발합니다. 외독소에 의해 성홍열, 괴사성 근막염, 독성충격증후군이 발생할 수 있습니다. 감염 후 합병증으로 급성 류마티스열 및 연쇄상구균 감염 후 사구체신염(PSGN)이 나타날 수 있습니다." },
    { id: "s_agalactiae", name: "Group B Strep (S. agalactiae)", type: "bacteria", group: "Gram (+)", subGroup: "Cocci", desc: "B군 베타 용혈성 연쇄상구균으로, 건강한 여성의 질 및 위장관에 흔히 집락합니다. 분만 시 신생아에게 수직 감염되어 치명적인 신생아 수막염, 폐렴, 주요 패혈증을 일으키는 원인균입니다. 이를 예방하기 위해 임신 후기 선별 검사 및 진통 중 예방적 페니실린 투여가 권고됩니다." },
    { id: "enterococcus", name: "Enterococcus", type: "bacteria", group: "Gram (+)", subGroup: "Cocci", desc: "주로 위장관에 서식하는 감마 용혈성 알균입니다. 고농도 염분 및 담즙에서도 생존하는 억센 상재균으로 요로 감염, 담도염, 아급성 심내막염을 주로 유발합니다. 고유하게 세팔로스포린계열 항생제에 내성을 가지며, 임상적으로 반코마이신 내성 장구균(VRE)의 출현이 주요 원내 감염 문제로 대두되고 있습니다." },

    // --- Gram (+) Rods ---
    { id: "b_anthracis", name: "Bacillus anthracis", type: "bacteria", group: "Gram (+)", subGroup: "Rods", desc: "포자를 형성하는 호기성 그람양성 막대균으로 독특한 폴리 펩타이드(poly-D-glutamate) 피막을 갖습니다. 탄저 독소(부종인자, 치사인자)를 분비합니다. 접촉 시 흑색 가피를 특징으로 하는 무통성 피부 탄저병을 일으키며, 포자 흡입 시에는 종격동 확장 및 출혈을 동반한 치명적인 폐 탄저병을 유발합니다." },
    { id: "b_cereus", name: "Bacillus cereus", type: "bacteria", group: "Gram (+)", subGroup: "Rods", desc: "자연계에 널리 분포하는 포자 형성 호기성 막대균입니다. 조리 후 실온 방치된 볶음밥 등 음식물 섭취로 인한 식중독의 주원인입니다. 구토형 장독소는 섭취 수 시간 내에 급성 구역과 구토를, 설사형은 잠복기 이후 체내 증식하며 수양성 설사를 유발합니다. 수액 보충 중심의 보존적 치료로 호전됩니다." },
    { id: "l_monocytogenes", name: "L. monocytogenes", type: "bacteria", group: "Gram (+)", subGroup: "Rods", desc: "냉장 온도에서도 증식 가능한 통성 세포내 기생 그람양성 막대균입니다. 살균되지 않은 유제품이나 냉장 가공육을 통해 감염됩니다. 세포 내 엑틴 중합(actin rockets)을 이용해 세포 간 이동을 하며 정상 면역을 회피합니다. 신생아, 고령자 임산부 및 면역저하자에서 치명적인 뇌수막염과 패혈증을 유발하므로 앰피실린 병합 치료가 필수적입니다." },
    { id: "c_diphtheriae", name: "C. diphtheriae", type: "bacteria", group: "Gram (+)", subGroup: "Rods", desc: "V나 Y 형태의 각진 배열을 하는 호기성 곤봉 모양 그람양성 막대균입니다. 디프테리아 독소가 리보솜의 단백질 번역(EF-2 억제)을 차단하여 감염을 일으킵니다. 인두 부위에 회백색 위막(pseudomembrane)을 형성해 심각한 기도 폐쇄를 유발하며, 전신 흡수 시 치명적인 심근염과 뇌신경 마비를 일으킵니다. 톡소이드 백신(DTaP)으로 예방됩니다." },
    { id: "c_difficile", name: "C. difficile", type: "bacteria", group: "Gram (+)", subGroup: "Rods", desc: "정상 장내 환경에 소수 서식하는 혐기성 포자 형성 막대균입니다. 광범위 항생제 사용으로 정상 세균총이 파괴되었을 때 과도하게 증식하여 발병합니다. 독소 A(장독소)와 독소 B(세포독소)가 장 점막과 세포 골격을 파괴해 심한 악취를 띠는 수양성 설사, 위막성 대장염(Pseudomembranous colitis), 독성 거대결장 등을 일으킵니다. 경구용 반코마이신으로 치료합니다." },
    { id: "c_perfringens", name: "C. perfringens", type: "bacteria", group: "Gram (+)", subGroup: "Rods", desc: "포자를 형성하는 환경 혐기성 막대균으로 심부 외상을 통해 주로 감염됩니다. 독력 인자인 알파 독소(Lecithinase)가 세포막 인지질을 광범위하게 분해하여 근육 괴사와 용혈을 유도, 조직 내 비정상 가스 형성을 동반하는 가스 괴저(Gas gangrene)를 유발합니다. 경우에 따라 후기 발현형 장독소 매개 식중독을 일으키기도 합니다." },
    { id: "c_tetani", name: "C. tetani", type: "bacteria", group: "Gram (+)", subGroup: "Rods", desc: "북채(테니스 라켓) 모양의 말단 포자를 지닌 혼탁한 환경 혐기성균입니다. 깊이 찔린 자상을 통해 침투 후 파상풍 독소(Tetanospasmin)를 분비합니다. 독소는 척수로 역행성 이동을 하여 억제성 신경전달물질(GABA)의 분비를 차단함으로써 치료하기 어려운 전신 강직성 근경련(파상풍)을 유발합니다. 백신 예방 및 발생 시 항독소 처치가 필요합니다." },
    { id: "c_botulinum", name: "C. botulinum", type: "bacteria", group: "Gram (+)", subGroup: "Rods", desc: "혐기성 포자 형성 막대균입니다. 주로 살균이 덜 된 밀폐 통조림이나 꿀 속에서 증식하며 치명적인 보툴리눔 독소를 분비합니다. 말초 신경근 접합부 말단에서 신경전달물질인 융합 아세틸콜린 배출을 억제해, 초기 뇌신경 마비(복시, 배뇨곤란)부터 전신 사지 이완성 마비(하행성), 및 호흡근 정지에 이르게 하는 위험한 병원체입니다." },

    // --- Branching Gram (+) ---
    { id: "actinomyces", name: "Actinomyces", type: "bacteria", group: "Gram (+)", subGroup: "Branching", desc: "구강 및 장관 점막에 서식하는 미호기성/혐기성 실 모양의 그람양성 균입니다. 발치 기왕력 또는 외상 후 주로 안면과 턱 주위에 통증이 적고 단단하게 융기된 덩어리(방선균증)를 형성하며 특징적으로 '유황 과립(sulfur granules)'을 띠는 고름을 피부 누공을 통해 배출합니다. 페니실린 요법이 기본이 됩니다." },
    { id: "nocardia", name: "Nocardia", type: "bacteria", group: "Gram (+)", subGroup: "Branching", desc: "토양에서 흔히 발견되는 호기성의 약한 항산성 판정(acid-fast) 실 모양 막대균입니다. 면역저하자에게 주로 흡입 감염되어 공동 형성 폐렴을 일으킵니다. 폐 병변 후 혈행 파종을 통하여 뇌로 전이, 특이적으로 반지 형태 조영 증강 소견을 보이는 다발성 뇌농양을 유발하는 병력이 있습니다. 장기간의 TMP-SMX 항균제 요법으로 치료합니다." },

    // --- Gram (-) Cocci / Coccobacilli ---
    { id: "n_meningitidis", name: "N. meningitidis", type: "bacteria", group: "Gram (-)", subGroup: "Cocci", desc: "강낭콩 모양의 그람음성 쌍구균입니다. 외막 지질올리고당(LOS)과 다당류 피막을 가집니다. 화농성 뇌수막염 및 전격성 패혈증(수막구균혈증)의 주요 원인균으로, 급격히 퍼지는 점상/자반성 발진과 양측성 부신 출혈(워터하우스-프리데릭센 증후군)을 동반한 파종성 혈관내 응고(DIC) 상태를 유발할 수 있습니다." },
    { id: "n_gonorrhoeae", name: "N. gonorrhoeae", type: "bacteria", group: "Gram (-)", subGroup: "Cocci", desc: "호중구 내에 흔히 관찰되는 통성 세포내 기생 그람음성 쌍구균입니다. 피막 대신 유착성 섬모(Pili)를 가지며 극심한 항원 변이로 면역 감시를 회피합니다. 남성의 화농성 요도염, 여성의 자궁경부염 및 골반염(PID)을 유발하며 전신 파종 시 비대칭 단일관절염을 특징으로 하는 임균성 패혈성 관절염의 원인이 됩니다." },
    { id: "m_catarrhalis", name: "M. catarrhalis", type: "bacteria", group: "Gram (-)", subGroup: "Cocci", desc: "호기성 그람음성 쌍구균으로 인간 호흡기계의 흔한 점막 병원체입니다. 대다수가 베타락탐 분해효소를 분비하며, 소아의 급성 중이염 및 부비동염, 성인 만성 폐쇄성 폐질환(COPD)의 급성 악화를 초래하는 주요 3대 원인 중 하나입니다. 주로 Amoxicillin-Clavulanate나 세팔로스포린계로 치료합니다." },
    { id: "h_influenzae", name: "H. influenzae", type: "bacteria", group: "Gram (-)", subGroup: "Coccobacilli", desc: "다형성 그람음성 짧은 막대균(Coccobacillus)입니다. 초콜릿 한천 배지에서 성장하기 위해 V 인자(NAD+)와 X 인자(Hematin)를 필요로 합니다. 피막이 없는(non-typeable) 주종이 중이염, 부비동염 등 국소 점막염을 유발하며, b형 피막균(Hib)의 경우 예방접종을 받지 않은 소아에서 치명적인 급성 후두개염과 수막염을 유발할 수 있습니다." },
    { id: "b_pertussis", name: "Bordetella pertussis", type: "bacteria", group: "Gram (-)", subGroup: "Coccobacilli", desc: "절대 호기성 그람음성 짧은 막대균으로 전염성 높은 백일해의 병원체입니다. 백일해 독소(Pertussis toxin)가 Gi 단백질을 억제하여 세포 내 cAMP를 농축, 호흡기 점막 섬모 운동을 마비시킵니다. 카타르기를 거쳐 흡기 시 특유의 소리('Whoop')를 동반하는 발작성 기침기(Paroxysmal phase)로 진행되며 면역학적 림프구 증다증을 초래합니다." },
    { id: "brucella", name: "Brucella", type: "bacteria", group: "Gram (-)", subGroup: "Coccobacilli", desc: "대식세포 내에서 생존 증식하는 통성 세포내 기생 호기성 짧은 막대균입니다. 감염 동물의 축산 가공물 노출이나 살균되지 않은 유제품(치즈 등) 섭취로 전파되는 인수공통감염병(브루셀라증)의 주원인입니다. 만성적 육아종 염증을 유도하며, 전형적인 파상열(Undulating fever), 야간 발한, 관절통 및 간비종대를 동반합니다." },
    { id: "y_pestis", name: "Yersinia pestis", type: "bacteria", group: "Gram (-)", subGroup: "Coccobacilli", desc: "세포 양끝이 진하게 염색되어 안전핀 모양 소견을 보이는 그람음성 구간균입니다. 설치류 벼룩에 물려 전파되며 선페스트(Bubonic plague)의 원인균으로 림프절 부종인 가래톳과 치명적인 패혈증을 초래합니다. 이차 폐 감염 시 비말 전파를 통해 폐 페스트(Pneumonic plague)로 발전해 높은 치사율을 보이며 조기 아미노글리코시드 처방이 필요합니다." },

    // --- Gram (-) Rods ---
    { id: "e_coli", name: "E. coli", type: "bacteria", group: "Gram (-)", subGroup: "Rods", desc: "유당을 발효하는 대표적인 장내 정상 세균총 그람음성 막대균입니다. 보유한 특정 독성 인자에 따라 질환이 결정됩니다: 섬모(Fimbriae)는 방광염/신우신염 유발을 돕고, K 항원(Capsule)은 소아 수막염, 지질다당류(LPS) 내독소는 패혈성 쇼크를 촉발합니다. 특정 변종군(EHEC O157:H7)은 시가(Shiga-like) 독소를 통해 혈성 설사와 용혈성 요독 증후군(HUS) 조장의 원인이 됩니다." },
    { id: "k_pneumoniae", name: "K. pneumoniae", type: "bacteria", group: "Gram (-)", subGroup: "Rods", desc: "고점액성의 거대한 다당류 피막을 지녀 점조도가 매우 높은 집락을 이루는 유당 발효 그람음성 막대균입니다. 알코올 의존자, 당뇨 등 면역 및 영양상태가 저하된 환자군에서 폐엽이 파괴되는 괴사성 원내 폐렴을 유발하며, 적갈색을 띠는 특징적인 건포도 젤리형(currant jelly) 붉은 가래를 배출하게 합니다." },
    { id: "citrobacter", name: "Citrobacter / Serratia", type: "bacteria", group: "Gram (-)", subGroup: "Rods", desc: "장내세균과에 속하는 유당 지연형 발효 그람음성 막대균입니다. 기회 감염으로 작용해 원내 폐렴, 카테터 연관 요로 감염 등을 일으킵니다. Serratia marcescens의 경우 붉은색 색소를 생성하여 확인이 용이합니다. AmpC형 유도성 베타락탐 분해효소를 잠재적으로 가지고 있어 초기 투약 중에 갑작스런 다제 내성화를 띠는 임상적 우려가 큽니다." },
    { id: "proteus", name: "Proteus", type: "bacteria", group: "Gram (-)", subGroup: "Rods", desc: "유당 비발효성, 고운동성을 가지며 배양 접시 표면에서 물결무늬 번짐(swarming) 현상을 보이는 그람음성 막대균입니다. 침습성 요소분해효소(Urease)를 왕성하게 생성, 암모니아를 통해 소변을 알칼리화시켜 인두석(Struvite)을 응결시킵니다. 거대한 녹각석 결석 형성을 유도하며 구조적 폐쇄성 요로 감염 재발의 근본 원인이 됩니다." },
    { id: "salmonella", name: "Salmonella", type: "bacteria", group: "Gram (-)", subGroup: "Rods", desc: "운동성이 있고 황화수소(H2S)를 생성하는 유당 비발효 그람음성 간균입니다. 비장티푸스 계열 종은 주로 가금류/파충류 및 달걀 등을 매개로 자가 제한적 세균성 장점막 장염을 유도합니다. 오직 가계 사람 간 전염되는 장티푸스균(S. typhi)은 대식 세포를 이용해 세망내피계 임파로 이동 후, 장미진 발진 및 장 미세출혈 천공 등 서맥을 수반하는 장티푸스열(장간막 장티푸스)을 발현합니다." },
    { id: "shigella", name: "Shigella", type: "bacteria", group: "Gram (-)", subGroup: "Rods", desc: "비운동성, 유당 비발효 및 무황화수소 배양 성질을 지니는 강한 전염성 직장 침투 세균입니다. 소량 세포 접촉에도 M 세포에 조직 점막 침윤 이동하며 체내 아메바 유사 액틴을 통해 장 융모간 직행 확산됩니다. 장점막내 상피세포 괴사성 60S 리보솜 억제 시가(Shiga) 독성 발현에 따라 이급후증 수반에 치명적 점액 세포 탈락성 혈변 이질을 조장합니다." },
    { id: "v_cholerae", name: "Vibrio cholerae", type: "bacteria", group: "Gram (-)", subGroup: "Rods", desc: "산화효소 양성 판정된 단편모 단일 쉼표 모양 운동성 알칼리 호염 감염균 입니다. 장내 흡수 침습적 분쇄 없이 외부 점막관에 달라붙어 순수 거대 콜레라 역독소를 분비 촉진작용한 기전에 의해 표적세포의 Gs 활성화 G-A 분비 농도를 포화시킵니다, 다량 수분이 동반 탈출하는 비린내 쌀뜨물 모양 치명적 급성 콜레라형 폭포성 설사를 배출하며 주요 전해질 저하 탈진 병기를 낳습니다." },
    { id: "c_jejuni", name: "C. jejuni", type: "bacteria", group: "Gram (-)", subGroup: "Rods", desc: "갈매기 날개 모양(S자 모양)의 미호기성 그람음성 막대균으로, 고온(42°C)에서 잘 자랍니다. 주로 덜 조리된 가금류 섭취로 매개되며 소아 및 성인에서 흔한 살을 파듯이 아픈 혈성 위장 점막염의 최우선 병발주입니다. 특징적으로 감염 회복 후 교차 항체(분자 모방) 작용에 의해 사지 말단 대칭성 상행성 운동 마비를 유도하는 길랭-바레 증후군(GBS) 발병 선행인자 1위 균종입니다." },
    { id: "pseudomonas_a", name: "P. aeruginosa", type: "bacteria", group: "Gram (-)", subGroup: "Rods", desc: "포도향과 청록색(pyocyanin) 색소가 특징적인 절대 호기성 그람음성 막대균입니다. 수계 환경에 흔하며 외독소 A(Exotoxin A)가 체내 단백질 합성을 차단합니다. 극심한 면역 저하자, 화상 환자, 낭포성 섬유증(CF) 기도 환자 등에게 치명적인 병원 감염을 초래하는 주요 기회 감염균이며 광범위한 다제 내성 방벽 구조를 쉽게 획득하는 병원 임상 위협 세균입니다." },
    { id: "h_pylori", name: "H. pylori", type: "bacteria", group: "Gram (-)", subGroup: "Rods", desc: "미호기성 환경의 위점막 국소 환경에 적응 특화된 나선형 그람음성균입니다. 편모성 운동에 더해 대량의 강력 요소분해효소(Urease)를 상시 분비해 국소 위산을 알칼리로 중화시키면서 생존을 유지 영위, 위 점막 고유벽 만성적 자가 염증 상흔 반응 유발과 직결 연루되어 십이지장 궤양 뿐만 아니라, 장기적 위선암 말트림프종 조기 암유발 1군 확정 주요 위협균입니다." },
    { id: "b_fragilis", name: "Bacteroides fragilis", type: "bacteria", group: "Gram (-)", subGroup: "Anaerobes", desc: "인체 하부 결장 장관 정상 세균 무리 중 핵심 분포를 차지하는 편성 혐기성 그람음성 막대균. 변형된 체표성 지질다당류 무독성체계(LPS)를 가지고 있어 안전 상재하나 점막벽 탈거 침탈 혹은 게실 천공 직후 복막에 퍼지면서 대장균 집단과 복합 궤양성 군락을 생성. 병적인 고름과 썩은내의 악취 심부 내 다균 복막염 및 고농도 복강내 농양 형성을 일조하는 절대 위협 원인 혐기균입니다." },
    { id: "fusobacterium", name: "Fusobacterium", type: "bacteria", group: "Gram (-)", subGroup: "Anaerobes", desc: "현미경 시야상 지름이 얇고 끝이 매우 뾰족한 방추형 모양의 구강상재 혐기성 그람음성균. 흔히 치주 구강 혐기 고단위 염증에 근원하지만, 구강인두 미세 외상 시 체류 목 깊숙한 내경정맥 혈전염 합병(Lemierre 증후군) 이라는 무서운 전이혈행 파괴 감염을 확산시키며 또한 대량 구취 악성 흡인성 폐렴 속 혐기 사멸 주요 진단 원천입니다." },

    // --- Atypical / Others ---
    { id: "m_pneumoniae", name: "Mycoplasma pneumoniae", type: "bacteria", group: "Atypical", subGroup: "No cell wall", desc: "세균 구조 필수인 펩티도글리칸 세포벽이 자체가 결석되어 있어 그람 염색 불가 및 전 베타락탐계 약제에 무효한 초소형 비정형 병원 병원균입니다. 군부대 및 학교 청소년 밀집 집단 등에 널리 전염을 발현하는 지독한 간질성 마른 보행성 폐렴(Walking pneumonia)의 메인 원인이며, 이 기간 혈청 분석 시 한랭 응집소(Cold agglutinin) IgM 생성 확인 소견 진단율이 매우 두드러집니다." },
    { id: "c_trachomatis", name: "C. trachomatis", type: "bacteria", group: "Atypical", subGroup: "Intracellular", desc: "진균처럼 스스로 에너지 합성을 못하는 편성 에너지 기생 세균 체계 균주. 기본소체(EB) 상태 외피 감염 결합 진입 및 거대 세포망상소체(RB) 기동 무한 이원성 독자 생활기 보유 병원균. 점막 접촉의 맹점 감염 유발인 병증이 없는 비임균성 요도 염증, 추후 영구적 상행성 난폭 자궁협착 구조 변형 불임 난관수종 병발 및 모태 수직 감염에 기한 급성 영아 결막 및 폐렴을 전개합니다." },
    { id: "c_pneumoniae", name: "C. pneumoniae / psittaci", type: "bacteria", group: "Atypical", subGroup: "Intracellular", desc: "동일 속의 클라미디아 호흡 절대 기생 기회 비정형 세포 병원체군. C. pneumoniae 성인 청년에 잦고 경계 가벼운 비특이적 만성 기관 호흡 인두염 발현 폐렴 주. C. psittaci 변종은 특이 애완조 감염 및 가금 깃털 구아노 흡입 포식으로 비롯되는 소위 동물매개 인수공통병인 앵무병(Psittacosis)을 생성해 간비종대 동반 중증도 고열 전염을 가담 유발 배출하는 호흡 병원균." },
    { id: "r_rickettsii", name: "Rickettsia rickettsii", type: "bacteria", group: "Atypical", subGroup: "Intracellular", desc: "혈관내피 세포 절대적 침식을 발현하는 편성 세포내 그람음성 균 병원주. 교외 참진드기 자상 물림 교두보 이행 혈류 감염을 통하며 병리학적 전신모세 혈관염 점막 파열을 부르는 록키산 홍반열(RMSF) 의 제왕 발생인. 극심 폭발 두통에서, 사지 손목 관절 발바닥 기전서 구심성 체간 유도성으로 치고 번지는 파파야 점상 반점 출혈진을 촉발, Doxycycline 즉시 진압요법 차단이 필사적 처방군입니다." },
    { id: "c_burnetii", name: "Coxiella burnetii", type: "bacteria", group: "Atypical", subGroup: "Intracellular", desc: "전신 감염을 일으키는 편성 기생세포균이나 발진 현상 없이 가축(소, 양) 탯줄 잔유 및 분뇨 환경 포자 흡입만으로 공기 유입 확산 전이, 동물 매개 유행병 큐열(Q fever) 만성 비정형 간염 병리를 부르는 주범. 간 특이효소 폭등은 덤이며 지속 감염 전환시 배양배지 검출 마다 모두 탈락 음성 표기 판정으로 남는 악질 배양음성 육아종성 세균 심내막염 유발자 표본." },
    { id: "l_pneumophila", name: "Legionella pneumophila", type: "bacteria", group: "Atypical", subGroup: "Poor staining", desc: "정규 그람 염색 시각화가 부적합하며 특정 철 아연(L-cysteine) 버퍼 은염색 BCYE 배양 등 까탈조건 배양 육성 기전을 고집하는 수공간 비정형 세포기생 그람음성 세균류. 공조 시설 및 샤워 온수 순환 냉각탑 오염수 비산 에어로졸 유입을 경로 발생 집단 감염 창궐의 노인성 레조넬라균 폐렴 전파 주요 선봉이며 위장 병증 설사 및 CNS 이상 행동 유도 빈번 저나트륨혈증 급감을 흔히 내포 진단 소견에 남깁니다." },
    { id: "t_pallidum", name: "Treponema pallidum", type: "bacteria", group: "Atypical", subGroup: "Spirochetes", desc: "일반 현미경으론 식별 전무 박막투명 스피로헤타 나선구조 꼬임 세균강에 분류. 선천 후천적 점막 직접 비뇨기 파동 등 전면 성매개 유입. 초기 하감 단일 괴사를 필두로 방어계 간과 파손 허용 시 이차 수포 점막 반점구진, 궁극의 고무종 육아 병소와 신경 대혈관 매독 심장 치명성 결함을 남김에 이르기에, VDRL 추적 및 체내 가장 위독한 고차 다단위 신경 감염 전까지 1방 페니실린 주사 방어 효과가 만병의 핵심 보루 전능 처방 기준입니다." },
    { id: "b_burgdorferi", name: "Borrelia burgdorferi", type: "bacteria", group: "Atypical", subGroup: "Spirochetes", desc: "북미 타이가성 큰 몸집 스파이로헤타 소견 구조 관통 층 병원주. 야생 진드기 군락 흡혈 매개 기생성 발현 후 기원전 다단 병리기전 개방 돌출, 가장 조기 대표적 타겟 과녁 표식 피하지방 양상 만성 유주성 홍반 소견 발진으로 시작. 불수용 전위 지연 후기 돌파 시 방실 심장 블라킹, 치명 구안와사 안면 쌍마비 그리고 최후 난치 기형 말기 고정 대류 거대 파괴 이형 비대칭 전신 다발성관절염 라임병 창궐 유도 핵심체." },
    { id: "leptospira", name: "Leptospira", type: "bacteria", group: "Atypical", subGroup: "Spirochetes", desc: "나선균들 중 특이 갈고리 부속 물음표 형태 고정 족부 부속 나선 병원체. 폭우 해일 후 하수오염 설치 오줌 등 토양 침윤 생존물 접촉 파생 야외 활동 교상 발병, 일명 제초 랩토스피라 유독 혈행. 무섭도록 치솟는 근육 발작통 단기 병발과 진물 파편 궤양없는 건조 결막 미세충혈 발병 기전을 보이고, 종국 맹독 황달 간장 이중 신부전 발병 급성 사망 웨일 증후군(Weil Disease)의 심혈 전위 파경 종단을 부릅니다." },
    { id: "m_tuberculosis", name: "M. tuberculosis", type: "bacteria", group: "Atypical", subGroup: "Acid-Fast", desc: "전체 세포 외막 피개 대부분을 지질 미콜산 장벽 방염 캡슐 군장 착용에 절대 소화 억제 호흡 산소 폐 친화기 결핵균주. 장기간 포식 대식 세포의 핵상 리솔 폐기 과정을 미콜 피드로 단선 파괴 후 식균 방어진 중앙 교두보에서 안전 동면 거처. 전이 폐포 거대결절 괴사 건락 치즈 표본 육아종 병리기전을 축조 점령. 폐 조직 내 막대한 상엽 구멍 공동 궤멸 배출 공기를 창조, 가벼움 이상 전신 쇠약 객혈 만고 불변 인류의 만성 감염 살인 결핵균주." }

];

// Antibiotics Data (Rewritten to explicitly cover all families mentioned in instructions)
const antibioticNodes = [
    // Cell wall : Beta lactam -> Penicillin
    { id: "penicillin_g", name: "Penicillin G / V", type: "antibiotic", group: "Beta Lactam", subGroup: "Penicillin", desc: "살균성 베타락탐계 항생제의 시초입니다. 트랜스펩티다아제(PBP)에 결합하여 세균의 세포벽 합성을 억제합니다. S. pyogenes를 포함한 대부분의 연쇄상구균 감염과 모든 기수의 매독(T. pallidum)에 가장 우선적인 일차 선택 약제입니다. Penicillin G는 정맥주사용, Penicillin V는 경구 투여용입니다." },
    { id: "nafcillin", name: "Nafcillin / Methicillin", type: "antibiotic", group: "Beta Lactam", subGroup: "Penicillin", desc: "포도상구균이 생성하는 베타락탐 분해효소(penicillinase)의 작용을 입체적으로 방해하도록 설계된 항포도상구균 페니실린입니다. 메티실린 감수성 황색포도상구균(MSSA)에 의한 피부, 골관절 및 심장 내막 감염에 강력한 일차 치료제로 사용됩니다." },
    { id: "amoxicillin", name: "Amoxicillin / Ampicillin", type: "antibiotic", group: "Beta Lactam", subGroup: "Penicillin", desc: "기존 페니실린보다 향균 스펙트럼이 넓어진 아미노페니실린 계열입니다. 기본 그람양성균(장구균 리스테리아 포함)과 일부 주요 그람음성균(H. influenzae, E. coli, Proteus)까지 항균력을 보입니다. 소아의 중이염, 급성 부비동염 및 연쇄상구균 인두염에 가장 널리 처방되는 경구용(Amoxicillin) 및 주사용(Ampicillin) 항생제입니다." },
    { id: "piperacillin", name: "Piperacillin / Ticarcillin", type: "antibiotic", group: "Beta Lactam", subGroup: "Penicillin", desc: "주로 그람음성균, 특히 병원 내 기회감염의 주범인 녹농균(P. aeruginosa)을 표적으로 개발된 광범위 페니실린 계열(항녹농균 페니실린)입니다. 단독으로 사용 시 세균의 베타락탐 분해효소에 분해될 수 있어 보통 베타락탐 분해효소 억제제와 병행 투여됩니다." },
    { id: "augmentin", name: "Augmentin (Amox/Clav)", type: "antibiotic", group: "Beta Lactam", subGroup: "Penicillin + Blactamase", desc: "아목시실린에 클라불란산(베타락탐 분해효소 억제제)을 결합한 복합 항생제입니다. 세균이 뿜어내는 분해효소를 무력화시켜 아목시실린의 본래 항균력을 복원합니다. 내성 발현이 잦은 H. influenzae, M. catarrhalis 및 교상(동물 물림)으로 인한 혼합 감염 치료에 매우 유효합니다." },
    { id: "tazocin", name: "Tazocin (Pip/Taz)", type: "antibiotic", group: "Beta Lactam", subGroup: "Penicillin + Blactamase", desc: "피페라실린과 타조박탐(베타락탐 분해효소 억제제)의 강력한 복합 항생제입니다. 녹농균을 포함한 다제내성 그람음성균과 장내 혐기성균(B. fragilis)까지 폭넓게 방어하므로, 원내 패혈증, 복잡성 복강내 감염 및 호중구 감소성 발열에 있어 경험적 광범위 일차 치료제로 빈번하게 쓰입니다." },

    // Beta lactam -> Cephalosporin
    { id: "cefazolin", name: "Cefazolin (1st Gen)", type: "antibiotic", group: "Beta Lactam", subGroup: "Cephalosporin", desc: "1세대 세팔로스포린입니다. MSSA 등 그람양성 구균에 방어력이 뛰어나며, 일부 그람음성 막대균(E. coli, Proteus, Klebsiella)에도 효과적입니다. 임상에서 인공관절 및 정형외과적 수술 시 수술 부위 감염 방지를 위한 예방적 항생제로 가장 널리 투여됩니다." },
    { id: "cefuroxime", name: "Cefuroxime (2nd Gen)", type: "antibiotic", group: "Beta Lactam", subGroup: "Cephalosporin", desc: "2세대 세팔로스포린으로, 1세대의 그람양성균 커버력을 일정 부분 유지하면서 헤모필루스, 임균, 엔테로박터 등(HENS PEcK) 그람음성균에 대한 항균 범위가 더 확장되었습니다. 파생 약제성 분족(Cefotetan, Cefoxitin)은 우수한 혐기성균(B. fragilis) 살균 효과 또한 갖추었습니다." },
    { id: "ceftriaxone", name: "Ceftriaxone (3rd Gen)", type: "antibiotic", group: "Beta Lactam", subGroup: "Cephalosporin", desc: "혈뇌장벽(BBB) 투과력이 뛰어나고 반감기가 긴 3세대 세팔로스포린입니다. 경험적 세균성 수막염 치료의 핵심 약제이며, 중증 지역사회 획득 폐렴(CAP), 복잡성 신우신염, 파종성 임질 등 광범위한 임상 상황에서 신뢰받는 주요 항생제입니다." },
    { id: "ceftazidime", name: "Ceftazidime (3rd Gen)", type: "antibiotic", group: "Beta Lactam", subGroup: "Cephalosporin", desc: "동일 3세대 중에서도 녹농균(Pseudomonas aeruginosa) 커버력이 독보적으로 강화된 세팔로스포린 약제입니다. 항녹농균 활성에 집중하여 반대급부로 그람양성균에 대한 항균력은 타 3세대 약제보다 떨어집니다. 주로 병원 내 내성균 감염이 강력히 의심될 때 투여됩니다." },
    { id: "cefepime", name: "Cefepime (4th Gen)", type: "antibiotic", group: "Beta Lactam", subGroup: "Cephalosporin", desc: "그람음성균의 외막 포린 구조를 쉽게 통과하는 양쪽성 이온 화학 구조를 지닌 4세대 세팔로스포린입니다. 강력한 체액 침투성으로 녹농균을 위시한 다제내성 그람음성균과, MSSA를 포함한 훌륭한 그람양성 살균력을 고루 갖추었습니다. 화학요법 후 유발된 호중구 감소증 및 중증 원내 패혈증 등 치명적인 상황에서 예비제로 쓰입니다." },

    // Carbapenem & Monobactam
    { id: "meropenem", name: "Meropenem / Imipenem", type: "antibiotic", group: "Beta Lactam", subGroup: "Carbapenem", desc: "현존하는 베타락탐계 중 가장 광범위한 살균 스펙트럼과 살균력을 확보한 카바페넴 계열입니다. 대부분의 ESBL(광범위 베타락탐 분해효소) 생성 그람음성균, 극한의 다제내성 녹농균, 심부 혐기성균을 모두 효과적으로 궤멸시키기에 중환자실의 난치성 감염을 위한 '최후의 보루'로 기능합니다. Imipenem은 신세뇨관 대사 억제를 위해 Cilastatin 병합 투여가 요구됩니다." },
    { id: "aztreonam", name: "Aztreonam", type: "antibiotic", group: "Beta Lactam", subGroup: "Monobactam", desc: "독특한 단일 고리형 구조인 모노박탐(Monobactam)계 항생제입니다. 그람음성균의 PBP3에만 특이적으로 결합하므로 녹농균을 포함한 호기성 그람음성 막대균에만 매우 강력한 살균력을 띠며, 그람양성균이나 혐기성균에는 일절 효과가 없습니다. 무엇보다 타 베타락탐간의 교차 알레르기 반응이 희박해 심각한 아나필락시스성 페니실린 알레르기 환자에게 안전한 대안입니다." },

    // No lactam
    { id: "vancomycin", name: "Vancomycin", type: "antibiotic", group: "No Lactam", subGroup: "Glycopeptides", desc: "세포벽 펩티도글리칸 전구체의 D-alanyl-D-alanine 말단과 강하게 결합하여 세포벽 합성을 저해하는 거대 글라이코펩타이드(Glycopeptide) 항생제입니다. 난치성 메티실린 내성 황색포도상구균(MRSA), 다제 내성 응고효소 음성 포도상구균, 암피실린 내성 장구균 등 중증의 심각한 그람양성 전신 감염의 표준 1차 방어선입니다. C. difficile 대장염에는 경구(PO)로만 투여합니다." },
    { id: "fosfomycin", name: "Fosfomycin", type: "antibiotic", group: "No Lactam", subGroup: "Fosfomycin", desc: "세균 펩티도글리칸 생합성 초기의 세포내 효소인 MurA에 결합, 비가역적으로 억제하여 살균 효과를 나타냅니다. 고유의 기전으로 다제내성균에도 교차 내성이 잘 나타나지 않습니다. E. coli 기인의 복잡하고 악화된 하부 단순 요로감염 및 VRE 장구균 방광염 증세 단기 완화를 위해 주로 1회 경구 복용합니다." },

    // Protein S30
    { id: "gentamycin", name: "Aminoglycosides", type: "antibiotic", group: "Protein S30", subGroup: "Aminoglycosides", desc: "Gentamicin, Amikacin, Streptomycin 등이 속합니다. 세균의 30S 리보솜에 비가역적으로 결합하여 단백질 합성 시 mRNA 오독을 유발하는 살균성 항생제입니다. 약물의 세포 내 유입에 산소가 필수적이므로 통성/호기성 호기성 그람음성균에 강력한 효과를 보이나 절대 혐기성균에는 무효합니다. 비가역적 이독성(청력 소실) 및 가역적 신독성 위험이 있어 치료물질농도감시(TDM)가 요구됩니다." },
    { id: "doxycycline", name: "Tetracyclines", type: "antibiotic", group: "Protein S30", subGroup: "Tetracyclines", desc: "Doxycycline, Minocycline 등이 포함됩니다. 30S 리보솜에 결합하여 아미노아실-tRNA가 수용체(A 자리)에 결합하는 것을 차단하는 정균성 항생제입니다. Rickettsia, Chlamydia, Mycoplasma 등 세포 내 기생균 및 비정형 병원체 감염(큐열, 라임병, 발진티푸스)에 일차적으로 선택됩니다. 다량의 칼슘 등 다가 양이온과 결합하여 흡수가 저해되며 소아 치아 착색, 뼈 성장 억제 부작용이 있어 임산부와 8세 미만 소아에게 금기입니다." },

    // Protein S50
    { id: "azithromycin", name: "Macrolides", type: "antibiotic", group: "Protein S50", subGroup: "Macrolides", desc: "Azithromycin, Clarithromycin, Erythromycin 등이 속합니다. 세균 50S 리보솜에 결합하여 펩티딜 전이효소를 억제함으로써 단백질 사슬 연장(Translocation)을 차단하는 정균제로 작용합니다. 백일해(B. pertussis), 레지오넬라증 및 클라미디아, 마이코플라스마 등 비정형 폐렴 치료에 우선 처방됩니다. CYP450 효소 억제(Azithromycin 제외) 및 QT 연장 증후군을 유발할 수 있어 주의가 필요합니다." },
    { id: "clindamycin", name: "Clindamycin", type: "antibiotic", group: "Protein S50", subGroup: "Lincosamides", desc: "50S 리보솜에 결합하여 단백질 합성을 억제하는 린코사마이드(Lincosamide) 계열 정균성 항생제입니다. 횡격막 상부의 구강, 호흡기 혐기성 감염(B. fragilis 유발 복강 감염, 심부 흡인성 폐렴, 구강 농양) 및 침습성 A군 연쇄상구균 감염 시 독소 억제 목적으로 주로 쓰입니다. 장내 정상 세균총을 심하게 교란시켜 C. difficile 위막성 대장염을 유발하는 주된 원인 약제이기도 합니다." },
    { id: "linezolid", name: "Linezolid", type: "antibiotic", group: "Protein S50", subGroup: "Oxazolidinones", desc: "초기 50S 리보솜과 30S의 결합 복합체 형성을 차단하는(개시 억제) 옥사졸리디논(Oxazolidinones) 계열 합성 항생제입니다. 다른 계열 항생제와 교차 내성이 없어 다제내성 그람양성균 감염, 즉 반코마이신 내성 장구균(VRE) 및 다제내성 MRSA 등에 중점적으로 사용되는 예비 약제입니다. 장기 투여 시 가역적 골수 억제(특히 혈소판 감소증) 및 말초 신경병증의 위험이 있습니다." },

    // DNA
    { id: "ciprofloxacin", name: "Quinolones", type: "antibiotic", group: "DNA", subGroup: "Fluoroquinolones", desc: "Ciprofloxacin, Levofloxacin 등이 속합니다. 세균의 DNA 자이레이즈(Gyrase, 위상이성화효소 II) 및 위상이성화효소 IV를 억제하여 DNA 복제와 전사를 방해하는 강력한 살균제입니다. 그람음성균성 위장관 감염, 요로 감염증 치료에 우수하며, 레보플록사신 등 호흡기 퀴놀론은 폐렴 치료에 많이 쓰입니다. 부작용으로 건 파열(특히 아킬레스건염)과 QT 간격 연장이 있으며 연골 발달 장애 위험으로 임산부, 소아에게는 상대적 금기입니다." },
    { id: "metronidazole", name: "Metronidazole", type: "antibiotic", group: "DNA", subGroup: "Others", desc: "세포 내 환원 효소에 의해 반응성 독성 대사 물질을 형성, 세균과 원충의 DNA 가닥을 무작위로 절단하여 사멸시키는 약제입니다. 절대 혐기성균(Bacteroides, C. difficile 패러독스) 및 프로토조아(Trichomonas, Giardia 등 원충) 감염 치료에 특화된 광범위 살균제입니다. 투약 중 알코올 섭취 시 디설피람 유사 반응(격렬한 구토, 두통 등)을 일으키므로 절대 금주가 필요합니다." },

    // RNA / Folic acid
    { id: "rifampin", name: "Rifampin", type: "antibiotic", group: "RNA", subGroup: "Synthesis", desc: "매우 드물며 고도로 치밀한 세균 단백 정보 전달용 본원 소스 DNA-의존성 RNA 중합효소 기기자체를 치명 파괴 타격함. 여러가지 악랄 중첩 내성 지옥을 밟는 난치 결핵(TB) 치유 장벽 타파 절대불변 처방 기본 원천 블록을 결의 수호. 또한 극히 치사율을 과시한 속도 침투형 N. meningitidis 발병 병원체 접촉후 대량 감염 공포 단기 살포 발병 억제의 중추 예방적 단독 화학 전면 차단의 역할 수훈 부여 받음. 무섭도록 인근 숙주 간장 장기 효소(CYP450) 가속 유도 각인 부작용 및 환자 배출 인체 분비수 흐름 일체(땀, 소변, 눈물)를 매우 충격 호러 오렌지 혹은 불그스름 선혈빛 충격 염색 배출하는 독특 위상." },
    { id: "tmp_smx", name: "Sulfonamides & Trimethoprim", type: "antibiotic", group: "Folic Acid", subGroup: "Synthesis", desc: "설파메톡사졸(SMX, 디하이드로프테로산 합성 억제)과 트리메토프림(TMP, 디하이드로엽산 환원효소 억제)을 병합한 광범위 항균제입니다. 세균 고유의 엽산 대사 2원 경로를 동시에 차단하여 정균제 두 가지가 만나 강력한 살균(Bactericidal) 효과를 냅니다. 요로 감염증, 지역사회 획득 MRSA 감염 초기 뿐만 아니라, 면역저하자의 주폐포자충(P. jirovecii) 폐렴 등 기회감염증을 치료 및 예방하는 데 1차적으로 사용됩니다." }
];

const nodesData = [...diseaseNodes, ...bacteriaNodes, ...antibioticNodes];

const linksData = [
    // --- DISEASE to BACTERIA Connections --- //
    // Pneumonia
    { source: "d_pneumonia", target: "s_pneumoniae", type: "disease-bacteria" },
    { source: "d_pneumonia", target: "k_pneumoniae", type: "disease-bacteria" },
    { source: "d_pneumonia", target: "h_influenzae", type: "disease-bacteria" },
    { source: "d_pneumonia", target: "m_pneumoniae", type: "disease-bacteria" },
    { source: "d_pneumonia", target: "c_pneumoniae", type: "disease-bacteria" },
    { source: "d_pneumonia", target: "l_pneumophila", type: "disease-bacteria" },
    { source: "d_pneumonia", target: "pseudomonas_a", type: "disease-bacteria" },
    { source: "d_pneumonia", target: "s_aureus_mssa", type: "disease-bacteria" },
    { source: "d_pneumonia", target: "s_aureus_mrsa", type: "disease-bacteria" },

    // Meningitis
    { source: "d_meningitis", target: "s_pneumoniae", type: "disease-bacteria" },
    { source: "d_meningitis", target: "n_meningitidis", type: "disease-bacteria" },
    { source: "d_meningitis", target: "s_agalactiae", type: "disease-bacteria" },
    { source: "d_meningitis", target: "l_monocytogenes", type: "disease-bacteria" },
    { source: "d_meningitis", target: "h_influenzae", type: "disease-bacteria" },

    // Endocarditis
    { source: "d_endocarditis", target: "viridans_strep", type: "disease-bacteria" },
    { source: "d_endocarditis", target: "s_aureus_mssa", type: "disease-bacteria" },
    { source: "d_endocarditis", target: "enterococcus", type: "disease-bacteria" },
    { source: "d_endocarditis", target: "s_epidermidis", type: "disease-bacteria" },

    // UTI
    { source: "d_uti", target: "e_coli", type: "disease-bacteria" },
    { source: "d_uti", target: "enterococcus", type: "disease-bacteria" },
    { source: "d_uti", target: "proteus", type: "disease-bacteria" },
    { source: "d_uti", target: "k_pneumoniae", type: "disease-bacteria" },
    { source: "d_uti", target: "pseudomonas_a", type: "disease-bacteria" },

    // Skin & Soft Tissue
    { source: "d_skin", target: "s_aureus_mssa", type: "disease-bacteria" },
    { source: "d_skin", target: "s_aureus_mrsa", type: "disease-bacteria" },
    { source: "d_skin", target: "s_pyogenes", type: "disease-bacteria" },
    { source: "d_skin", target: "c_perfringens", type: "disease-bacteria" },
    { source: "d_skin", target: "b_anthracis", type: "disease-bacteria" },

    // STDs
    { source: "d_std", target: "c_trachomatis", type: "disease-bacteria" },
    { source: "d_std", target: "n_gonorrhoeae", type: "disease-bacteria" },

    // Syphilis
    { source: "d_syphilis", target: "t_pallidum", type: "disease-bacteria" },

    // TB
    { source: "d_tb", target: "m_tuberculosis", type: "disease-bacteria" },

    // PUD
    { source: "d_pud", target: "h_pylori", type: "disease-bacteria" },

    // C diff
    { source: "d_cdiff", target: "c_difficile", type: "disease-bacteria" },

    // Intra-abdominal
    { source: "d_intraabd", target: "b_fragilis", type: "disease-bacteria" },
    { source: "d_intraabd", target: "e_coli", type: "disease-bacteria" },
    { source: "d_intraabd", target: "enterococcus", type: "disease-bacteria" },

    // Zoonotic
    { source: "d_zoonotic", target: "brucella", type: "disease-bacteria" },
    { source: "d_zoonotic", target: "y_pestis", type: "disease-bacteria" },
    { source: "d_zoonotic", target: "b_burgdorferi", type: "disease-bacteria" },
    { source: "d_zoonotic", target: "r_rickettsii", type: "disease-bacteria" },
    { source: "d_zoonotic", target: "c_burnetii", type: "disease-bacteria" },
    { source: "d_zoonotic", target: "leptospira", type: "disease-bacteria" },

    // Foodborne / Enteric
    { source: "d_food", target: "salmonella", type: "disease-bacteria" },
    { source: "d_food", target: "shigella", type: "disease-bacteria" },
    { source: "d_food", target: "c_jejuni", type: "disease-bacteria" },
    { source: "d_food", target: "v_cholerae", type: "disease-bacteria" },
    { source: "d_food", target: "b_cereus", type: "disease-bacteria" },
    { source: "d_food", target: "l_monocytogenes", type: "disease-bacteria" },

    // Toxin mediated specifics
    { source: "d_tetanus", target: "c_tetani", type: "disease-bacteria" },
    { source: "d_botulism", target: "c_botulinum", type: "disease-bacteria" },

    // Pertussis
    { source: "d_pertussis", target: "b_pertussis", type: "disease-bacteria" },


    // --- BACTERIA to ANTIBIOTIC Connections --- //
    // Penicillin G/V
    { source: "s_pyogenes", target: "penicillin_g", type: "bacteria-antibiotic" },
    { source: "t_pallidum", target: "penicillin_g", type: "bacteria-antibiotic" },
    { source: "actinomyces", target: "penicillin_g", type: "bacteria-antibiotic" },

    // Nafcillin
    { source: "s_aureus_mssa", target: "nafcillin", type: "bacteria-antibiotic" },
    { source: "s_epidermidis", target: "nafcillin", type: "bacteria-antibiotic" },

    // Amoxicillin / Ampicillin
    { source: "s_pneumoniae", target: "amoxicillin", type: "bacteria-antibiotic" },
    { source: "enterococcus", target: "amoxicillin", type: "bacteria-antibiotic" },
    { source: "l_monocytogenes", target: "amoxicillin", type: "bacteria-antibiotic" },
    { source: "h_influenzae", target: "amoxicillin", type: "bacteria-antibiotic" },
    { source: "proteus", target: "amoxicillin", type: "bacteria-antibiotic" },

    // Piperacillin / Ticarcillin
    { source: "pseudomonas_a", target: "piperacillin", type: "bacteria-antibiotic" },

    // Augmentin
    { source: "m_catarrhalis", target: "augmentin", type: "bacteria-antibiotic" },
    { source: "h_influenzae", target: "augmentin", type: "bacteria-antibiotic" },

    // Tazocin
    { source: "pseudomonas_a", target: "tazocin", type: "bacteria-antibiotic" },
    { source: "b_fragilis", target: "tazocin", type: "bacteria-antibiotic" },
    { source: "e_coli", target: "tazocin", type: "bacteria-antibiotic" },
    { source: "k_pneumoniae", target: "tazocin", type: "bacteria-antibiotic" },

    // Cefazolin (1st Gen)
    { source: "s_aureus_mssa", target: "cefazolin", type: "bacteria-antibiotic" },
    { source: "e_coli", target: "cefazolin", type: "bacteria-antibiotic" },
    { source: "proteus", target: "cefazolin", type: "bacteria-antibiotic" },

    // Cefuroxime (2nd gen)
    { source: "h_influenzae", target: "cefuroxime", type: "bacteria-antibiotic" },

    // Ceftriaxone
    { source: "n_gonorrhoeae", target: "ceftriaxone", type: "bacteria-antibiotic" },
    { source: "n_meningitidis", target: "ceftriaxone", type: "bacteria-antibiotic" },
    { source: "s_pneumoniae", target: "ceftriaxone", type: "bacteria-antibiotic" },
    { source: "b_burgdorferi", target: "ceftriaxone", type: "bacteria-antibiotic" }, // for late severe

    // Ceftazidime / Cefepime -> Pseudomonas
    { source: "pseudomonas_a", target: "ceftazidime", type: "bacteria-antibiotic" },
    { source: "pseudomonas_a", target: "cefepime", type: "bacteria-antibiotic" },
    { source: "citrobacter", target: "cefepime", type: "bacteria-antibiotic" },

    // Meropenem
    { source: "e_coli", target: "meropenem", type: "bacteria-antibiotic" },
    { source: "k_pneumoniae", target: "meropenem", type: "bacteria-antibiotic" },
    { source: "pseudomonas_a", target: "meropenem", type: "bacteria-antibiotic" },
    { source: "b_fragilis", target: "meropenem", type: "bacteria-antibiotic" },
    { source: "citrobacter", target: "meropenem", type: "bacteria-antibiotic" },

    // Aztreonam
    { source: "pseudomonas_a", target: "aztreonam", type: "bacteria-antibiotic" },

    // Vancomycin
    { source: "s_aureus_mrsa", target: "vancomycin", type: "bacteria-antibiotic" },
    { source: "s_epidermidis", target: "vancomycin", type: "bacteria-antibiotic" },
    { source: "c_difficile", target: "vancomycin", type: "bacteria-antibiotic" },
    { source: "s_pneumoniae", target: "vancomycin", type: "bacteria-antibiotic" }, // for meningitis empiric

    // Fosfomycin
    { source: "e_coli", target: "fosfomycin", type: "bacteria-antibiotic" },

    // Aminoglycosides
    { source: "pseudomonas_a", target: "gentamycin", type: "bacteria-antibiotic" },
    { source: "y_pestis", target: "gentamycin", type: "bacteria-antibiotic" },

    // Doxycycline
    { source: "m_pneumoniae", target: "doxycycline", type: "bacteria-antibiotic" },
    { source: "c_trachomatis", target: "doxycycline", type: "bacteria-antibiotic" },
    { source: "b_anthracis", target: "doxycycline", type: "bacteria-antibiotic" },
    { source: "b_burgdorferi", target: "doxycycline", type: "bacteria-antibiotic" },
    { source: "r_rickettsii", target: "doxycycline", type: "bacteria-antibiotic" },
    { source: "brucella", target: "doxycycline", type: "bacteria-antibiotic" },

    // Macrolides
    { source: "m_pneumoniae", target: "azithromycin", type: "bacteria-antibiotic" },
    { source: "c_trachomatis", target: "azithromycin", type: "bacteria-antibiotic" },
    { source: "b_pertussis", target: "azithromycin", type: "bacteria-antibiotic" },
    { source: "l_pneumophila", target: "azithromycin", type: "bacteria-antibiotic" },

    // Clindamycin
    { source: "s_pyogenes", target: "clindamycin", type: "bacteria-antibiotic" },
    { source: "fusobacterium", target: "clindamycin", type: "bacteria-antibiotic" },

    // Linezolid
    { source: "s_aureus_mrsa", target: "linezolid", type: "bacteria-antibiotic" },
    { source: "enterococcus", target: "linezolid", type: "bacteria-antibiotic" },

    // Quinolones
    { source: "pseudomonas_a", target: "ciprofloxacin", type: "bacteria-antibiotic" },
    { source: "salmonella", target: "ciprofloxacin", type: "bacteria-antibiotic" },
    { source: "shigella", target: "ciprofloxacin", type: "bacteria-antibiotic" },
    { source: "c_jejuni", target: "ciprofloxacin", type: "bacteria-antibiotic" },

    // Metronidazole
    { source: "b_fragilis", target: "metronidazole", type: "bacteria-antibiotic" },
    { source: "c_difficile", target: "metronidazole", type: "bacteria-antibiotic" },
    { source: "h_pylori", target: "metronidazole", type: "bacteria-antibiotic" },
    { source: "c_tetani", target: "metronidazole", type: "bacteria-antibiotic" },

    // TMP-SMX
    { source: "s_aureus_mrsa", target: "tmp_smx", type: "bacteria-antibiotic" },
    { source: "e_coli", target: "tmp_smx", type: "bacteria-antibiotic" },
    { source: "nocardia", target: "tmp_smx", type: "bacteria-antibiotic" },

    // Rifampin
    { source: "m_tuberculosis", target: "rifampin", type: "bacteria-antibiotic" },
    { source: "n_meningitidis", target: "rifampin", type: "bacteria-antibiotic" }

];
