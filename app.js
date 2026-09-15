/**
 * Kırmızı Çark VIP - Profesyonel +18 & Sanal Bar Oyunu Engine
 * 220 Soru & Görev, 30 Ceza Kadehi, Oyuncu Modu, Sürükle-Çevir Fizik Motoru,
 * Web Audio Synthesizer, 30sn Geri Sayım ve Konfeti Motoru
 */

// 1. 220 SORULUK DEV VERİTABANI (4 Kategori x 55 Soru/Görev)
const QUESTIONS_DB = [
  // 💋 1. AŞK & FLÖRT (55 Soru)
  { id: 1, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Şu an bu grupta/yayında ilk bakışta aurasından ve sesinden en çok etkilendiğin kişi kim?" },
  { id: 2, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Sence hayatındaki en unutulmaz, nefesini kesen ilk öpüşme anın nasıldı ve kiminleydi?" },
  { id: 3, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Birinde seni ilk 10 saniyede baştan çıkaran fiziksel veya karakteristik detay nedir?" },
  { id: 4, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Hiç arkadaşının sevgilisine veya flörtüne karşı anlık da olsa gizli bir çekim hissettin mi?" },
  { id: 5, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Flört ederken uyguladığın ve 'bu taktik asla şaşmaz' dediğin en etkili hareketin ne?" },
  { id: 6, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Aşırı beğendiğin ama asla birlikte olamayacağını bildiğin ünlü veya ulaşılmaz kişi kim?" },
  { id: 7, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Bir randevuda partnerinin seni tek bir cümleyle etkilemesi gerekseydi ne söylemeliydi?" },
  { id: 8, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Hiç sadece fiziksel çekim yüzünden hiç uyuşmadığın biriyle aylarca flört ettiğin oldu mu?" },
  { id: 9, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Sence aşkta kontrol sende mi olmalı, yoksa karşı tarafın ipleri eline alması mı seni daha çok heyecanlandırır?" },
  { id: 10, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Şimdiye kadar birine yaptığın veya sana yapılan en cüretkâr, cesur iltifat neydi?" },
  { id: 11, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Göz teması kurarak birini etkileme konusunda 10 üzerinden kendine kaç puan verirsin? Neden?" },
  { id: 12, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Eski sevgililerinden biri bu gece sana 'Hadi her şeyi unutalım, bu gece benimle gel' dese, kabul edeceğin biri var mı?" },
  { id: 13, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Bu odada/grupta şu an gözlerini üzerinden alamadığın ya da bakışlarıyla seni etkileyen kimse var mı?" },
  { id: 14, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Görüntülü aramada birinin sana doğrudan cesur bir iltifat etmesi mi daha baştan çıkarıcı, yoksa gözlerini dikip sessizce bakması mı?" },
  { id: 15, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Gece geç saatlerde mi daha flörtöz ve cüretkâr olursun, yoksa gündüzleri mi daha tehlikelisin?" },
  { id: 16, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Gruptakilerden birini bu gece 'sahte sevgilin' yapmak zorunda kalsan kimi seçerdin ve neden?" },
  { id: 17, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Biriyle flört ederken ilk öpüşmeyi başlatmak için kullandığın imalı beden dili sinyalin nedir?" },
  { id: 18, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Görüntülü konuşurken çok etkilendiğin biri 'Hemen şimdi konum at, yanına geliyorum' dese kapıyı açar mısın?" },
  { id: 19, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Gece 03:00'te gelen 'Uyanık mısın?' mesajına anında evet diyeceğin tek kişi kim olurdu?" },
  { id: 20, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Sence tensel çekimde koku mu daha belirleyicidir yoksa fısıltılı bir ses tonu mu? Masadakilerin parfüm aurasını nasıl buluyorsun?" },
  { id: 21, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Gruptaki kişilerin arasından 'kesinlikle çok tutkulu öpüşüyordur' dediğin kişi kim?" },
  { id: 22, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Seni baştan çıkarmak için gruptan birinin yapabileceği en küçük ama en can alıcı hareket ne olurdu?" },
  { id: 23, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Aşırı havalı ve gizemli tipler mi, yoksa doğrudan gözlerinin içine bakan özgüvenli tipler mi seni daha çabuk eritir?" },
  { id: 24, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Hiç sosyal medyada veya yayında 'Bu kişi kesinlikle benim olmalı' deyip peşinden gittiğin oldu mu?" },
  { id: 25, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Sence bu grupta ekranda en seksi ve baştan çıkarıcı auraya sahip kişi kim?" },
  { id: 26, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Biriyle mesajlaşırken kalbini en hızlı çarptıran kelime ya da emoji hangisi?" },
  { id: 27, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Hiç sadece dudaklarını veya gülüşünü aşırı çekici bulduğun için biriyle bir geceliğine flört ettin mi?" },
  { id: 28, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Sosyal medyada gördüğün an anında düştüğün fotoğraf tarzı nedir (ayna pozu, loş ışık, bakışlar)?" },
  { id: 29, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Karşındaki insanı saniyeler içinde baştan çıkarmak istesen mikrofona hangi cümleyi fısıldardın?" },
  { id: 30, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Şu an gruptan birine bir gecelik kaçamak teklif etme hakkın olsa, bu cesareti gösterir miydin ve kime yönelirdin?" },
  { id: 31, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Gece yarısı gelen flörtöz bir ses kaydında duymak isteyeceğin en baştan çıkarıcı cümle ne olurdu?" },
  { id: 32, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Gruptaki kişilerden biriyle ıssız bir adada baş başa kalsan, ilk geceden yakınlaşacağın kişi kim olurdu?" },
  { id: 33, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Hiç sadece sesi çok seksi olduğu için saatlerce telefonda konuştuğun biri oldu mu?" },
  { id: 34, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Flörtte ilk adımı karşı tarafın atmasını mı beklersin, yoksa avcı rolünü oynamayı mı seversin?" },
  { id: 35, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Partnerinde seni anında tahrik eden o küçük mimik (dudak ısırma, göz kısma, saç düzeltme) nedir?" },
  { id: 36, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Şu an ortamdaki kişilerin ses tonlarına 10 üzerinden puan versen, en seksi ses kimin?" },
  { id: 37, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Sence aşkta biraz toksik ve heyecanlı çekim mi daha tatlıdır, yoksa yüzde yüz sakin bir uyum mu?" },
  { id: 38, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Görüntülü konuşurken biriyle aranda 'anlık tensel elektrik ve çekim' oluştuğunu nasıl hissedersin?" },
  { id: 39, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Hiç sadece kıskandırmak için story'ne gizemli bir flört ipucu veya alevli fotoğraf attın mı?" },
  { id: 40, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Bu gece bittiğinde gruptan biri sana 'Özelden konuşalım mı?' yazsa, en çok kimden gelmesi seni heyecanlandırır?" },
  { id: 41, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Birini etkilemek için kullandığın en pahalı parfüm ya da en özel kıyafet kombinasyonun hangisi?" },
  { id: 42, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Romantik bir mum ışığı ortamı mı, yoksa gece 02:00'de loş ışıkta baş başa yakınlaşma mı seni daha çok büyüler?" },
  { id: 43, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Daha önce hiç birine aşırı flörtöz bir selfie atıp 'yanlışlıkla oldu' numarası yaptın mı?" },
  { id: 44, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Sence bu oyundaki kişilerden hangisi karşı tarafı 'tek bakışıyla yatağa atabilecek' auraya sahip?" },
  { id: 45, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Gözlerinin içine bakılarak söylenen iltifat mı daha etkilidir, yoksa ensene fısıldanan bir arzu cümlesi mi?" },
  { id: 46, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Bir randevuda ilk öpüşme gecikirse hevesin kaçar mı, yoksa tansiyonun yükselmesi hoşuna mı gider?" },
  { id: 47, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Hiç tanımadığın biriyle gece yarısı saatlerce süren çok sıcak bir görüntülü arama deneyimin oldu mu?" },
  { id: 48, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Kendi çekiciliğinde en çok güvendiğin silahın: Dudakların mı, bakışların mı, zekan mı, vücudun mu?" },
  { id: 49, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Sence bir kadında / erkekte en karşı konulamaz gece kıyafeti detayı nedir?" },
  { id: 50, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Gruptaki kişilerden birinin zihnini 1 dakikalığına okuyabilseydin, kimin senin hakkında ne düşündüğünü öğrenmek isterdin?" },
  { id: 51, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Sence aşk oyununda 'kolay lokma' mısın, yoksa elde edilmesi sabır ve cesaret isteyen bir kale mi?" },
  { id: 52, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Hiç gece yarısı aniden gelen cesaretle birine 'Çok güzelsin/yakışıklısın, dayanamıyorum' yazdın mı?" },
  { id: 53, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Flörtünün sana kışkırtıcı bir ses kaydı atması mı yoksa doğrudan görüntülü arayıp gözlerine bakması mı seni daha çok heyecanlandırır?" },
  { id: 54, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Daha önce hiç birine 'bu gece benimle kalmazsan uyuyamam' minvalinde cesur bir mesaj attın mı?" },
  { id: 55, category: 'flirt', catTitle: 'Aşk & Flört', catIcon: '💋', color: '#ec4899', text: "Bu gece için tek bir dilek hakkın olsa, bu gruptan biriyle nasıl bir son isterdin?" },

  // 🔥 2. SICAK İTİRAF (+18) (55 Soru)
  { id: 56, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Şimdiye kadar aklından geçen ama kimseye itiraf edemediğin en gizli ve sıcak fantezin ne?" },
  { id: 57, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Partnerinde seni anında en tepe noktaya çıkaran, dokunuş veya fısıltı gibi küçük hareket nedir?" },
  { id: 58, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Hayatında yaşadığın en sıra dışı, beklenmedik veya tehlikeli mekândaki yakınlaşma nerede gerçekleşti?" },
  { id: 59, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Telefonundaki en gizli mesaj veya fotoğraf klasöründe kimsenin görmemesi gereken ne var?" },
  { id: 60, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Hiç rüyanda tanıdığın ve olmaması gereken biriyle çok sıcak ve tutkulu bir an yaşadın mı? Kimdi o?" },
  { id: 61, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Yatakta yumuşak ve romantik anlar mı, yoksa daha vahşi, tutkulu ve dominant tavırlar mı seni cezbeder?" },
  { id: 62, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Vücudunda dokunulduğunda en hassas olduğun ve tüylerini diken diken eden gizli bölge neresi?" },
  { id: 63, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Partnerinin üzerinde görmeyi en çok arzuladığın kıyafet/iç çamaşırı tarzı ve rengi nedir?" },
  { id: 64, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Hiç 'bunu bir daha asla yapmam' deyip sonra tekrar baştan çıktığın çılgınca bir tecrüben oldu mu?" },
  { id: 65, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Daha önce hiç birine sıcak ve kışkırtıcı bir ses kaydı ya da fotoğraf gönderdin mi? Pişman mısın?" },
  { id: 66, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Gruptaki kişilerden birini sadece bu gece için seçmek zorunda kalsaydın, kimi seçerdin?" },
  { id: 67, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Sence aşk ve tutku dolu bir gecenin süresi mi yoksa yoğunluğu ve kimyası mı daha önemlidir? En unutulmaz rekorun neydi?" },
  { id: 68, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Beklenmedik bir mekânın loş bir köşesinde veya yangın merdiveninde hiç hızlı ve ateşli bir yakınlaşma yaşadın mı?" },
  { id: 69, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Normalde asla cesaret edemeyeceğini düşündüğün hangi çılgın yatak odası fantezisini denedin?" },
  { id: 70, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Hiç aynı anda iki kişiyi arzuladığın ve bu yüzden kendini suçlu ama heyecanlı hissettiğin oldu mu?" },
  { id: 71, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Tensel uyumun mükemmel olduğu ama karakter olarak anlaşamadığın biriyle sadece tutku için görüşmeye devam ettin mi?" },
  { id: 72, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Gözlerin bağlanması veya hafif kısıtlayıcı fanteziler sence ne kadar heyecan verici? Denemek ister miydin?" },
  { id: 73, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Partnerinin teninde en çok hangi hissi seversin? (Buz parçası, sıcak nefes, hafif bir ısırık vb.)" },
  { id: 74, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Gecenin sabahında uyanıp partnerine baktığında 'vay canına, neler yaşadık' dediğin en çılgın yatak odası tecrüben neydi?" },
  { id: 75, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Hiç halka açık veya yakalanma riski olan bir yerde (plaj, araba, teras, yangın merdiveni) sıcak anlar yaşadın mı?" },
  { id: 76, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Bir gecelik ilişkide veya yakınlaşmada 'asla yapmam' dediğin kırmızı çizgin nerede başlar ve nerede biter?" },
  { id: 77, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Sence bir gecelik kaçamaklar tamamen özgürleştirici bir tutku mu, yoksa ertesi gün boşluk hissi mi bırakır?" },
  { id: 78, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Gruptaki kişilerden hangisinin yatakta en dominant ve vahşi olduğunu tahmin ediyorsun?" },
  { id: 79, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Hiç eski sevgilinle ayrıldıktan sonra sadece tensel çekim yüzünden gizlice buluşup tutkulu bir gece geçirdin mi?" },
  { id: 80, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "En son ne zaman biri seni nefessiz bırakacak kadar tutkuyla öptü ve o anda aklından tam olarak ne geçiyordu?" },
  { id: 81, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Vücudunun en çok övülen veya dokunulmasından en çok zevk aldığın kısmı neresi?" },
  { id: 82, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Sıcak bir gecede müzik ve loş ışık mı şarttır, yoksa anın çılgınlığı ve ani kıvılcımı mı?" },
  { id: 83, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Hiç tanımadığın biriyle sadece birkaç saat içinde aynı yatağı paylaştığın oldu mu? O anın en sıcak detayı neydi?" },
  { id: 84, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Hayatının 'en iyi gecesi' olarak nitelendirdiğin o anı tek bir cümleyle özetlemen gerekse ne söylerdin?" },
  { id: 85, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Şu an bu odada/grupta ortam aniden kararsa ve herkes serbest kalsa, ilk kime sarılmak ya da kimi öpmek isterdin?" },
  { id: 86, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Yatakta kirli ve kışkırtıcı konuşmalar (dirty talk) seni tahrik eder mi, yoksa sessizlik ve nefes sesleri mi?" },
  { id: 87, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Şimdiye kadar bir partnerinden duyduğun en ateşli ve aklından çıkmayan söz neydi?" },
  { id: 88, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Hiç sanal ortamda (video call, DM) karşılıklı sıcak ve cüretkâr bir seans yaşadın mı?" },
  { id: 89, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Vücudunda dövme veya piercing olan bir partner seni normalden 10 kat daha fazla cezbeder mi?" },
  { id: 90, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Partnerinin üzerinde kontrol sahibi olmak mı, yoksa tamamen onun ellerine teslim olmak mı fantezilerine daha uygun?" },
  { id: 91, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Duşta veya jakuzide sıcak bir yakınlaşma sence filmlerdeki gibi mükemmel mi, yoksa zorlayıcı mı?" },
  { id: 92, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Hayatında en çok arzuladığın ama 'bu asla gerçekleşemez' dediğin tabu kişi kim?" },
  { id: 93, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Hiç bir gecede 3 veya daha fazla kez doruk noktasına ulaştığın ateşli bir maratonun oldu mu?" },
  { id: 94, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Sence aşk olmadan yaşanan saf fiziksel tutku bir ihtiyaç mıdır yoksa tehlikeli bir bağımlılık mı?" },
  { id: 95, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Partnerin bu gece sana 'Beni tamamen yönlendir, ne istersen yapacağım' dese ilk komutun ne olurdu?" },
  { id: 96, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Aynanın karşısında yakınlaşmak sence nasıl bir deneyim? Daha önce denedin mi?" },
  { id: 97, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Hiç kıyafetlerin yırtıldığı veya aşırı aceleyle çıkarıldığı bir tutku patlaması yaşadın mı?" },
  { id: 98, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Vücudunun hangi bölgesine kondurulacak bir öpücük seni tamamen savunmasız bırakır?" },
  { id: 99, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Rol yapma (roleplay) oyunları (hemşire, patron, gizli ajan vb.) denemek ister miydin?" },
  { id: 100, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Gecenin ilerleyen saatlerinde cinsel arzuların kaç katına çıkıyor? Yatakta normalde utanacağın neleri serbest bırakırsın?" },
  { id: 101, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Hiç bir ortamdan veya partiden sırf sevişmek ve baş başa kalmak için biriyle aniden kaçtın mı?" },
  { id: 102, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Sabah uyanıp partnerine sarıldığında güne sıcak bir başlangıç yapmak mı, gece yarısı uyanıp devam etmek mi?" },
  { id: 103, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Gruptakilerden birinin sadece dudaklarına 30 saniye boyunca odaklanmak zorunda kalsan, kiminkini seçerdin?" },
  { id: 104, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Hiç partnerinin vücuduna krem, çikolata veya buz gezdirip tattığın bir fantezi denedin mi?" },
  { id: 105, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Şimdiye kadar aldığın en çılgın yatak odası hediyesi veya aldığın en cesur şey neydi?" },
  { id: 106, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Partnerinin teninde morluk veya ısırık izi bırakmak mı, sende bırakılması mı hoşuna gider?" },
  { id: 107, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Hiç odada başka birileri varken gizlice ve sessizce sevişmek zorunda kaldın mı?" },
  { id: 108, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Sence mükemmel bir yakınlaşmanın ön sevişmesi en az kaç dakika sürmelidir?" },
  { id: 109, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Partnerinin iç çamaşırını çıkarırken dişlerini kullanması sence seksi mi yoksa abartı mı?" },
  { id: 110, category: 'hot', catTitle: 'Sıcak İtiraf (+18)', catIcon: '🔥', color: '#ff2a5f', text: "Bu geceden sonra aklından çıkmayacak tek bir sıcak fantezini bu gruba fısılda!" },

  // ⚡ 3. SANAL CESARET & GÖREVLER (55 Görev - Tamamı Sanalda / Ekranda Uygulanabilir)
  { id: 111, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Kameraya en baştan çıkarıcı bakışını at ve 15 saniye boyunca gözlerini kırpmadan ekrana kilitlen!" },
  { id: 112, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Mikrofona çok yaklaş ve gruptan seçtiğin birinin ismini en seksi fısıltınla söyle!" },
  { id: 113, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Seçtiğin kişiye şu an WhatsApp veya DM'den sadece onun dinleyebileceği 10 saniyelik çok çekici bir ses kaydı at!" },
  { id: 114, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Ekranını (veya telefonunu) 10 saniyeliğine kameraya göster ve WhatsApp/Instagram arama geçmişindeki ilk 3 kişiyi oku!" },
  { id: 115, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Flaşlı ve filtresiz anlık bir selfie çek, oyun grubuna/sohbete gönder!" },
  { id: 116, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Rehberinden rastgele seçilecek bir kişiye 'Bu gece aklımdan çıkmıyorsun...' yaz ve ekran görüntüsünü gruba at!" },
  { id: 117, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Kamerayı aç ve 15 saniye boyunca arkada çalan şarkıya uygun olarak omuz ve boyun figürleriyle ritmik seksi bir dans yap!" },
  { id: 118, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Bir küp buz al, kameranın önünde boynunda ve köprücük kemiğinde 10 saniye gezdir!" },
  { id: 119, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: WhatsApp veya Instagram durumuna 5 dakikalığına 'Gece yeni başlıyor... 🔥' yaz ve silme!" },
  { id: 120, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Seçtiğin birine 'Bu gece yanımda sen olsaydın...' ile başlayan kışkırtıcı tek bir cümlelik mesaj gönder!" },
  { id: 121, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Kamerada gözünü kırpmadan ve gülmeden ekrandaki bir kişiyle 30 saniye derin göz teması kur!" },
  { id: 122, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Çarktan kaçış yok! Ya şu an kameraya en cilveli pozunu ver ya da en karanlık sırrını açıkla!" },
  { id: 123, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Instagram DM kutunu aç ve en son konuştuğun karşı cinsten kişinin profil fotoğrafını kameraya göster!" },
  { id: 124, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Gruptaki herkes için birer sıfat belirle ve kameraya bakarak hepsini sırayla açıkla!" },
  { id: 125, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Üzerindeki ceket, hırka veya üst katman kıyafetini kameranın önünde yavaşça çıkar ve kenara koy!" },
  { id: 126, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Telefonundaki galeriye gir, gruptakilerin söyleyeceği rastgele bir sayıyı bul ve o fotoğrafı kameraya göster!" },
  { id: 127, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Mikrofona yaklaşıp derin nefes alarak 5 saniye boyunca sadece nefes sesi ver!" },
  { id: 128, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Seçtiğin birinin son Instagram gönderisine en flörtöz/ateşli emojiyi yorum olarak bırak!" },
  { id: 129, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Dudaklarını kameraya yaklaştırıp ekrana 3 saniyelik öpücük at!" },
  { id: 130, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Gruptan seçtiğin birine 'Seninle bir gece geçirmek nasıl bir histir?' sorusunu doğrudan sor ve gözünün içine bak!" },
  { id: 131, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Telefonundaki en son dinlediğin şarkıyı aç ve mikrofona en seksi kısmını mırıldan!" },
  { id: 132, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Parmak uçlarını dudaklarına değdirip ardından kameraya doğru üfle!" },
  { id: 133, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Gruptaki birinin ekran görüntüsünü al, üzerine 'Bu geceki favorim 🔥' yazıp sohbete gönder!" },
  { id: 134, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: 1 tur boyunca mikrofondan sadece fısıltıyla konuşmak zorundasın!" },
  { id: 135, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Kameranın açısını 10 saniyeliğine boyun ve köprücük kemiğine odakla ve elinle hafifçe saçını geriye at!" },
  { id: 136, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Seçtiğin birine 'Bana bu gece giydiğin şeyi tarif eder misin?' de!" },
  { id: 137, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Ekranındaki son kullanılan emojiler listesini kameraya göster veya ekran paylaş!" },
  { id: 138, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Saçlarını kameranın önünde iki elinle geriye doğru tara ve kameraya en cüretkâr bakışını at!" },
  { id: 139, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Mikrofona çok yaklaşıp 10 saniye boyunca nefes alıp vererek fısıltıyla kışkırtıcı bir ASMR yap!" },
  { id: 140, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Rehberinden rastgele bir arkadaşını ara, açarsa 'Sence bu gece günaha girmeli miyim?' diye sorup hemen kapat!" },
  { id: 141, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Seçtiğin birinin kamerasına elini uzatıp ekrandan dokunur gibi yap ve 'Bu gece çok tehlikelisin...' de!" },
  { id: 142, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Parmaklarından birini hafifçe ısırarak kameraya 5 saniye bak!" },
  { id: 143, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Gruptakilerin seçeceği bir şarkıda ayağa kalk ve 15 saniye boyunca arkadan ritim tutarak dans et!" },
  { id: 144, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Sohbete şu an aklından geçen en cüretkâr kelimeyi yaz!" },
  { id: 145, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Seçtiğin birine özel mesajdan bu gece için puan ver (1-10) ve nedenini tek cümleyle yaz!" },
  { id: 146, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Kameranın ışığını kapatıp sadece telefon flaşıyla yüzünü aydınlatarak 1 tur oyna!" },
  { id: 147, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Gruptan seçtiğin birinin göz rengine ve dudaklarına 30 saniyelik bir övgü tiradı çek!" },
  { id: 148, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Kendi el bileğini kokla ve 'Şu an nasıl bir tutku kokuyorum biliyor musun?' de!" },
  { id: 149, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Bir meyveyi veya çikolatayı kameranın önünde yavaşça ve baştan çıkarıcı şekilde ye!" },
  { id: 150, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Seçtiğin bir kişiyle sanal olarak 'sessiz bakışma savaşı' yap; ilk gülen kışkırtıcı bir ses çıkarsın!" },
  { id: 151, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: WhatsApp bio'na 10 dakikalığına 'Kırmızı alarm 🚨' yaz!" },
  { id: 152, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Kameranın önünde iki elini havaya kaldırıp 'Bu gece tüm tabuları ve kuralları yıkıyoruz!' de!" },
  { id: 153, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Gruptakilerin ses tonuyla rol yaparak bir aşk repliği canlandır!" },
  { id: 154, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Telefonundaki en son çektiğin fotoğrafı (ne olursa olsun) sohbete at!" },
  { id: 155, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Seçtiğin kişiye kameradan göz kırp ve dudak bükerek cilveli bir öpücük gönder!" },
  { id: 156, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Mikrofona en seksi kahkahanı at!" },
  { id: 157, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Bu tur boyunca sorulacak her soruya sadece 'Kesinlikle evet...' diyerek cevap ver!" },
  { id: 158, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Kamerada seçtiğin birinin kamerasını 'sabitle' (pinle) ve 1 tur sadece ona bakarak konuş!" },
  { id: 159, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Sohbete şu an aklından geçen en cüretkâr fantezi kelimesini ve bu grupta bunu kiminle bağdaştırdığını yaz!" },
  { id: 160, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Kendi boynuna hafifçe dokunarak kameraya 'Bu gece çok sıcak...' de!" },
  { id: 161, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Telefonundaki kilit ekranı fotoğrafını kameraya göster!" },
  { id: 162, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Gruptan birine sesli olarak 'Seni bu gece burada gördüğüme çok memnunum...' itirafı yap!" },
  { id: 163, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Kamerayı 5 saniye kapatıp 'Şu an ne yapıyorum sence?' diye sor, sonra kamerayı açıp gülümse!" },
  { id: 164, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Seçtiğin kişinin profil fotoğrafına 10 üzerinden puan ver ve ona en yakışan rengi söyle!" },
  { id: 165, category: 'dare', catTitle: 'Sanal Cesaret', catIcon: '⚡', color: '#f59e0b', text: "SANAL GÖREV: Kameraya elini uzatıp 'Benimle bu geceyi tamamlar mısın?' sorusunu en baştan çıkarıcı ses tonunla sor!" },

  // 🎭 4. GECE & TABU DENEYİMLER (55 Soru)
  { id: 166, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Romantik veya tutkulu bir anda başına gelen en komik, utanç verici ya da atmosferi bozan kaza neydi?" },
  { id: 167, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Hiç bir buluşmadan veya yakınlaşmadan kaçmak için uydurduğun en absürt yalan neydi?" },
  { id: 168, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Yakınlaşırken birine yakalandığın ya da birilerini en uygunsuz anda bastığın bir anın oldu mu?" },
  { id: 169, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Eski sevgilini ya da flörtünü sahte hesapla en son ne zaman stalkladın ve ne keşfettin?" },
  { id: 170, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Asla onaylanmayacağını bildiğin ama içinde ukde kalan yasak bir çekim ya da 'guilty pleasure' duygun var mı?" },
  { id: 171, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Hiç aynı anda birden fazla kişiyle flört edip durumu idare etmek zorunda kaldın mı? Nasıl sonuçlandı?" },
  { id: 172, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Sırf birini etkilemek ya da onunla yakınlaşmak için söylediğin en büyük yalan neydi?" },
  { id: 173, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Kendi sınırlarını ve kurallarını yıkarak yaptığın en plansız, spontane gece kaçamağı neydi?" },
  { id: 174, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "İlk buluşmada aşırı hızlı ilerleyip pişman olduğun ya da tam tersi 'iyi ki yapmışım' dediğin bir tecrüben var mı?" },
  { id: 175, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Toplumun 'tabu' veya 'ayıp' gördüğü ama senin tamamen doğal ve heyecan verici bulduğun bir fantezi söyler misin?" },
  { id: 176, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Hiç gece geç saatte birine kışkırtıcı bir mesaj atıp sabah uyandığında 'Ben ne yaptım!' diye dehşete düştüğün oldu mu? O mesaj neydi?" },
  { id: 177, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Şimdiye kadar hayatında en yakın arkadaşının bile bilmediği en büyük tabu sırrın nedir?" },
  { id: 178, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Sabah uyandığında 'neredeyim ben ve gece ne oldu?' dediğin en çılgın yatak odası veya gece macerası nasıldı?" },
  { id: 179, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Hiç arkadaşının eski sevgilisiyle gizlice buluşup flört ettin mi ya da aklından böyle bir düşünce geçti mi?" },
  { id: 180, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Bir mekanda güvenlik veya çalışanlar tarafından 'burada yapamazsınız' diye uyarıldığın bir olay oldu mu?" },
  { id: 181, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Sosyal medyada gece yarısı yanlışlıkla birinin 3 yıl önceki fotoğrafını beğenip paniklediğin o kişi kimdi?" },
  { id: 182, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Gecenin sabahında adını unuttuğun biri oldu mu? Durumu fark ettirmeden nasıl toparladın?" },
  { id: 183, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Hiç sevgilin varken başka biriyle masum gibi görünen ama sınırları zorlayan bir sanal flört yaşadın mı?" },
  { id: 184, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Ailenin veya çevrenin asla bilmemesi gereken en çılgın gece hayatı tecrüben neydi?" },
  { id: 185, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Bir randevuda hesabın çok yüksek gelmesi veya kartın reddedilmesi gibi rezil bir durum yaşadın mı?" },
  { id: 186, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Hiç birinin arabasında yakalanma tehlikesi atlatarak çok sıcak anlar yaşadın mı?" },
  { id: 187, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Arkadaş grubunda gizliden gizliye herkesin bilip de konuşmadığı en büyük yasak çekim sence kimler arasında?" },
  { id: 188, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Sırf birinden intikam almak ya da onu kıskandırmak için başka biriyle flört ettiğin oldu mu?" },
  { id: 189, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Hiç gece kulübünde kıyafetinde yırtılma, açılma gibi çok cüretkar bir frikik kazası yaşadın mı?" },
  { id: 190, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Sabah uyandığında telefonundaki fotoğrafları veya videoları görüp dehşete düştüğün bir gece oldu mu?" },
  { id: 191, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "En çok pişman olduğun ama 'dürüst olursam yine olsa yine yapardım' dediğin yasak çekim kiminleydi?" },
  { id: 192, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Hiç birine saf veya masum numarası yapıp onunla yakınlaşmak için fırsat kolladın mı?" },
  { id: 193, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Gruptakilerden birinin senin hakkında bilirse küçük dilini yutacağı tek bir cümlelik bir itiraf yap!" },
  { id: 194, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Sanal ortamda tanıştığın biriyle yaşadığın en garip, absürt ya da unutulmaz diyalog neydi?" },
  { id: 195, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Tüm etik ve ahlaki kuralların bu gece için askıya alındığını bilsen, bu ortamda şu an ilk yapacağın şey ne olurdu?" },
  { id: 196, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Hiç otelde, pansiyonda ya da tatilde yan odadaki seslerden dolayı aşırı heyecanlandığın oldu mu?" },
  { id: 197, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Bir ilişkide aldatma sınırın tam olarak nerede başlar? (Sanal mesajlaşma, bakışma, öpüşme?)" },
  { id: 198, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Hiç flörtün evindeyken ailesi veya ev arkadaşı aniden geldiğinde dolaba ya da balkona saklandın mı?" },
  { id: 199, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Karşı cinste 'herkes beğeniyor ama ben asla çekici bulmuyorum' dediğin en popüler özellik nedir?" },
  { id: 200, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Hiç sırf ilgi görmek veya VIP hissetmek için tanımadığın biriyle flört ediyormuş gibi yaptın mı?" },
  { id: 201, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Sence aşk acısının en iyi ilacı yeni bir tutkulu kaçamak mıdır yoksa zaman mı?" },
  { id: 202, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Daha önce hiç birine sahte bir isim ve meslek uydurarak bir gece geçirdin mi?" },
  { id: 203, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Eski sevgilinin yeni partnerini gördüğünde 'Benden sonra buna mı kaldın?' diye içinden geçirdiğin oldu mu?" },
  { id: 204, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Gece kulübünde veya partide başına gelen en tehlikeli ve adrenalin dolu olay neydi?" },
  { id: 205, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Hiç arkadaşının telefonunu kurcalarken görmemen gereken çok özel bir fotoğrafını veya yazışmasını gördün mü?" },
  { id: 206, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Sence bir gecelik kaçamakta en büyük kırmızı bayrak (red flag) nedir?" },
  { id: 207, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Hiç 'keşke onunla hiç tanışmasaydım ama tenini de asla unutamıyorum' dediğin biri oldu mu?" },
  { id: 208, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Gece hayatında harcadığın ve ertesi gün kart ekstresini görünce ağlamak istediğin en uçuk hesap ne kadardı?" },
  { id: 209, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Hiç birine gecenin büyüsüne kapılıp büyük aşk veya evlilik sözü verip sabah pişman oldun mu?" },
  { id: 210, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Karanlık ve yasak olan şeyler mi seni daha çok çeker, yoksa her şeyi açık ve kurallara uygun yaşamak mı?" },
  { id: 211, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Hiç bir partide iki kişinin senin için tartıştığı veya kavga ettiği oldu mu?" },
  { id: 212, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Biriyle buluşmaya gidip kapıdan geri döndüğün (ghosting) ve kaçtığın oldu mu? Sebep neydi?" },
  { id: 213, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Hiç sosyal medyada tanıştığın ve yüzünü hiç görmediğin biriyle çok derin ve sıcak hisler paylaştın mı?" },
  { id: 214, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Sence bu oyundaki kişilerden hangisinin geçmişinde en çok çılgın parti hikayesi gizlidir?" },
  { id: 215, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Aşkta ve tutkuda 'bu kadarı da olmaz' dediğin ama sonradan senin de içine düştüğün bir klişe var mı?" },
  { id: 216, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Hiç sabah uyandığında üstünde yabancı bir kıyafet veya ceket bulduğun oldu mu? Sahibi kimdi?" },
  { id: 217, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Sence sadakat sevgiyle mi ilgilidir, yoksa sadece fırsat bulamamakla mı? Masadakilerin düşüncesi ne?" },
  { id: 218, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Gece hayatında yaşadığın ve 'bunu mezara kadar benimle gidecek' dediğin o sırrın konusunu (isim vermeden) söyle!" },
  { id: 219, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Bu gece bittiğinde içinden geçen ama cesaret edemediğin son çılgın düşünce ne?" },
  { id: 220, category: 'taboo', catTitle: 'Gece & Tabu', catIcon: '🎭', color: '#a855f7', text: "Son itiraf: Masadaki veya ekrandaki insanlardan biriyle şu an baş başa kalsan gece nasıl biterdi?" }
];

// 2. 30 ADET SANAL GÖRÜNTÜLÜ & SESLİ ARAMA CEZASI (PAS GEÇİLDİĞİNDE ÇEKİLİR)
const PENALTIES_DB = [
  "📸 GALERİ CEZASI: Telefon galerindeki en cesur, sıcak ve iddialı fotoğrafını (filtresiz) hemen sohbete gönder!",
  "💃 TWERK / DANS CEZASI: Kamerayı aç ve 15 saniye boyunca müzik eşliğinde twerk veya en seksi dans figürünü sergile!",
  "💋 CİLVE CEZASI: Kameraya iyice yaklaş; partnerinin gözlerine bakarak 20 saniye boyunca en cilveli mimiklerini yap ve öpücük at!",
  "🎙️ FISILTI CEZASI: Mikrofona çok yaklaş ve partnerinin adını nefes nefese, en kışkırtıcı ses tonunla fısılda!",
  "🔥 ANLIK SICAK SELFİE: Şu an flaş açıkken dil çıkararak veya en baştan çıkarıcı pozunla anlık bir selfie çekip sohbete at!",
  "📱 DM İTİRAFI: Partnerine özelden 'Bu gece aklımdan çıkmıyorsun, yanımda olmalıydın...' ses kaydı at!",
  "🧊 BUZ / ISLAK TEN CEZASI: Bir parça buz al ve kameranın önünde köprücük kemiğinde veya boynunda eriterek gezdir!",
  "👙 KIYAFET CEZASI: Kameranın önünde üzerindeki bir üst katmanı (hırka, gömlek, ceket vb.) yavaşça çıkar ve kenara fırlat!",
  "💬 CÜRETKÂR BIO: WhatsApp veya Instagram biyografine 10 dakikalığına 'Bu gece günaha çağırıyorum 🔥' yaz!",
  "👅 DUDAK & DİL POZU: Kameraya odaklanıp 10 saniye boyunca dudaklarını ısırarak ve parmağını dudağına değdirerek poz ver!",
  "🔥 BAKIŞ KİLİDİ: Kameraya iyice yaklaş ve 20 saniye boyunca gözlerini kırpmadan partnerine en cüretkâr bakışını at!",
  "🔍 GİZLİ GALERİ CEZASI: Galerinde 'özel/favori' albümündeki son fotoğrafı kameraya göster!",
  "💃 KALÇA KIVIRMA: Kamerayı ayarla ve yatağın veya koltuğun önünde 15 saniye ritmik kalça kıvırma figürü yap!",
  "💋 BOYUN MASAJI: Kendi boynuna ve omuzlarına iki elinle dokunup mikrofona 'Çok sıcak oldu burası...' diye fısılda!",
  "📱 SON GELEN 3 DM: Instagram veya WhatsApp'ta karşı cinsten gelen son 3 mesajı isimleriyle birlikte sesli oku!",
  "🔥 ATEŞLİ BAKIŞ DÜELLOSU: Partnerinle kamerada 30 saniye boyunca hiç göz kırpmadan en ateşli bakışma düellosunu yap!",
  "🎙️ DIRTY TALK CEZASI: Mikrofona yaklaş ve sanki yanında partnerin varmış gibi 10 saniyelik kirli ve kışkırtıcı bir konuşma yap!",
  "📸 DEKOLTE / BEL POZU: Kameraya 5 saniyeliğine bel/karın bölgeni veya dekolteni gösterip hemen geri çekil!",
  "🍓 ÇİKOLATA / MEYVE TADIMI: Bir meyve veya çikolatayı kameranın önünde en cilveli ve baştan çıkarıcı şekilde ısırıp ye!",
  "😈 EN KARANLIK SIR: Bugüne kadar ailenden ve arkadaşlarından sakladığın en büyük kaçamak veya yatak odası sırrını açıkla!",
  "💃 SAÇ SAVURMA DANSI: Kameranın önünde ayağa kalk, saçlarını iki elinle geriye savurup 10 saniye kalçalarını salla!",
  "📱 KİLİT EKRANI & EMOJİLER: Telefonunun kilit ekranını ve son kullanılan emojilerini kameraya net şekilde göster!",
  "🎙️ CİLVELİ KAHKAHA: Mikrofona en baştan çıkarıcı cilveli kahkahanı at ve ardından derin bir iç çek!",
  "👑 İTAAT CEZASI: 1 tur boyunca partnerinin vereceği herhangi bir çılgın komutu (örneğin kameraya yaklaşma, dans etme) itirazsız yap!",
  "💋 DUDAK ISIRMA POZU: Kameraya odaklanıp 10 saniye boyunca dudaklarını hafifçe ısırarak en seksi pozunu ver!",
  "📸 AYNA POZU: Hemen ayağa kalk ve odadaki aynadan vücudunu gösteren boydan bir selfie çekip sohbete gönder!",
  "🔥 EN ÇEKİCİ DETAY: Partnerinin vücudunda veya yüzünde en çok tahrik olduğun detayı sansürsüz söyle!",
  "🧊 TIŞÖRT İÇİNE BUZ: Bir küp buzu tişörtünün içine at ve 10 saniye boyunca kameraya bakarak tepki vermemeye çalış!",
  "📱 STALK İTİRAFI: Sosyal medyada en son stalkladığın kişinin profilini kameraya göster ve ne hissettiğini açıkla!",
  "💋 KAMERAYA ÖPÜCÜK: Kameranın tam lensine 5 saniye boyunca dudaklarını yaklaştırıp sesli öpücük kondur!"
];

// 2.1. 5 SEKTÖRLÜ KOMPAKT ALEVLİ ÇARK AYARLARI VE 50 ULTRA HOT GÖREV HAVUZU
const ALEVLI_SECTOR_CONFIG = [
  { key: 'tisort', title: 'Tişört & Soyunma', icon: '🎽', color: '#ff0055', colorEnd: '#99002b' },
  { key: 'dekolte', title: 'Dekolte & Sütyen', icon: '💋', color: '#ff3366', colorEnd: '#cc0044' },
  { key: 'dudak', title: 'Dudak & Cilve', icon: '👅', color: '#ff5500', colorEnd: '#b33600' },
  { key: 'asmr', title: 'Fısıltı & ASMR', icon: '🎙️', color: '#e60073', colorEnd: '#800040' },
  { key: 'fantezi', title: 'Sansürsüz Fantezi', icon: '😈', color: '#7928ca', colorEnd: '#4c1185' }
];

const ALEVLI_SECTOR_TASKS = {
  tisort: [
    { id: 't1', category: 'alevli', text: "🔥 TİŞÖRT & SOYUNMA: (Erkek) Tişörtünü kameranın önünde yavaşça çıkar ve kenara fırlat! (Kadın) Üzerindeki üst katmanı veya hırkayı çıkarıp omuzlarını aç!" },
    { id: 't2', category: 'alevli', text: "🔥 DÜĞME ÇÖZME: Üzerindeki gömlek veya tişörtün üst kısmını partnerinin gözleri önünde yavaşça çöz ve göğsünü sergile!" },
    { id: 't3', category: 'alevli', text: "🔥 TİŞÖRTÜ ISIRMA: Tişörtünün alt ucunu dişlerinle tutup yukarı çek, karın kaslarını/belini 10 saniye boyunca kameraya göster!" },
    { id: 't4', category: 'alevli', text: "🔥 SIRT & OMUZ ŞOVU: Kameraya sırtını dön, üst kıyafetini omuzlarından aşağı kaydırıp sırtını ve omuz hatlarını göster!" },
    { id: 't5', category: 'alevli', text: "🔥 KIYAFET DEĞİŞİMİ: Kameradan ayrılmadan, 20 saniye içinde üzerindeki tişörtü çıkarıp en çekici veya en dar olanı giy!" },
    { id: 't6', category: 'alevli', text: "🔥 KAS & KIVRIM SERGİSİ: (Erkek) Üstünü çıkarıp kollarını ve göğsünü kameraya sık! (Kadın) Tişörtünü belinden bağlayıp göbek deliğini ve belini göster!" },
    { id: 't7', category: 'alevli', text: "🔥 AĞIR ÇEKİM SOYUNMA: Partnerinin seçeceği bir parçayı (çorap, hırka, kemer, kolye) kameraya bakarak son derece yavaşça çıkar!" },
    { id: 't8', category: 'alevli', text: "🔥 SADECE TİŞÖRT: Üstünde sadece tişört kalacak şekilde alt katmanını ayarla ve kameraya en rahat, en seksi ev halini göster!" },
    { id: 't9', category: 'alevli', text: "🔥 TİŞÖRT ÇEKME DÜELLOSU: Tişörtünü tek elinle hafifçe öne doğru gerdirip partnerine 'İçine bakmak ister miydin?' diye sor!" },
    { id: 't10', category: 'alevli', text: "🔥 YARI ÇIPLAK POZ: Kamerayı biraz geriye al, üst kıyafetin olmadan veya tamamen açık şekilde 15 saniye boyunca ekrana odaklan!" }
  ],
  dekolte: [
    { id: 'd1', category: 'alevli', text: "💋 DEKOLTE & SÜTYEN: (Kadın) En iddialı dekolte/sütyen pozunu ver! (Erkek) Tişörtünü göğsünün yarısına kadar sıyırıp kas çizgini göster!" },
    { id: 'd2', category: 'alevli', text: "💋 SÜTYEN ASKISI OYUNU: (Kadın) Sütyen askını veya omuz askını parmağınla hafifçe aşağı çekip bırak! (Erkek) Göğsüne ve köprücük kemiğine parmaklarınla dokun!" },
    { id: 'd3', category: 'alevli', text: "💋 YAKIN ÇEKİM DEKOLTE: Kamerayı 5 saniyeliğine köprücük kemiğine ve dekolte bölgende odakla, ardından gözlerinin içine bak!" },
    { id: 'd4', category: 'alevli', text: "💋 BUZ & TEN TEMASI: Bir küp buz al, kameranın önünde boynundan başlayarak dekolte/göğüs hattında eriterek gezdir!" },
    { id: 'd5', category: 'alevli', text: "💋 İÇ ÇAMAŞIRI İTİRAFI: Şu an üzerinde hangi renk ve tarzda iç çamaşırı olduğunu tüm detaylarıyla anlat veya rengini göster!" },
    { id: 'd6', category: 'alevli', text: "💋 EN CESUR AÇI: Yatağa veya kanepeye uzan, kamerayı yukarıdan tutarak en kışkırtıcı dekolte açını yakala!" },
    { id: 'd7', category: 'alevli', text: "💋 DANTEL & KUMAŞ DETAYI: Giydiğin en seksi iç çamaşırının veya sütyenin kumaşını, rengini ve üzerindeki hissini partnerine fısılda!" },
    { id: 'd8', category: 'alevli', text: "💋 PARMAK DOKUNUŞU: Parmak uçlarını yavaşça boynundan göğsünün ortasına doğru indir ve partnerine 'Sıra sende' bakışı at!" },
    { id: 'd9', category: 'alevli', text: "💋 GÖĞÜS & OMUZ KONTROLÜ: Omuzlarını dikleştir, derin bir nefes alarak göğsünü öne çıkar ve 10 saniye boyunca öylece kal!" },
    { id: 'd10', category: 'alevli', text: "💋 GİZLİ DÖVME/İZ: Vücudunda dekolteye veya iç çamaşırına en yakın bölgedeki beni, lekeyi veya çizgiyi kamerada göster!" }
  ],
  dudak: [
    { id: 'c1', category: 'alevli', text: "👅 DUDAK & CİLVE: Alt dudağını hafifçe ısırarak kameraya yaklaş ve 10 saniye boyunca gözlerini kırpmadan partnerine kilitlen!" },
    { id: 'c2', category: 'alevli', text: "👅 ISLAK EKRAN ÖPÜCÜĞÜ: Dudaklarını nemlendir, kameranın lensine kadar yaklaş ve ekrana sesli, ıslak ve tutkulu bir öpücük kondur!" },
    { id: 'c3', category: 'alevli', text: "👅 PARMAK & DUDAK OYUNU: İşaret parmağını yavaşça dudaklarının üzerinde gezdirip ardından hafifçe ısır!" },
    { id: 'c4', category: 'alevli', text: "👅 MEYVE/ÇİKOLATA ŞOVU: Bir parça meyve veya çikolatayı kameranın önünde son derece cilveli ve baştan çıkarıcı şekilde yala ve ye!" },
    { id: 'c5', category: 'alevli', text: "👅 ÖPÜŞME PROVASI: Gözlerini kapat, sanki partnerin tam karşındaymış ve dudaklarını öpüyormuş gibi 10 saniye boyunca mimiklerinle yaşa!" },
    { id: 'c6', category: 'alevli', text: "👅 DİL ÇIKARMA & BAKIŞ: Kameraya en seksi bakışını atarken dilinin ucunu hafifçe çıkarıp dudak kenarında gezdir!" },
    { id: 'c7', category: 'alevli', text: "👅 BOYUN VE ÇENE ÖPÜCÜĞÜ: Başını geriye at, boynunu aç ve kameraya 'Tam buradan öpmek isterdin...' de!" },
    { id: 'c8', category: 'alevli', text: "👅 HAVA ÖPÜCÜĞÜ KİLİDİ: Avucunun içine tutkulu bir öpücük bırak ve kameraya doğru üfleyerek partnerinin gözlerine bak!" },
    { id: 'c9', category: 'alevli', text: "👅 CİLVELİ GÜLÜŞ & GÖZ KIRPMA: Önce çok ciddi ve mesafeli dur, ardından aniden en baştan çıkarıcı gülüşünle göz kırp!" },
    { id: 'c10', category: 'alevli', text: "👅 DUDAK PARLATICISI SÜRME: Kamerayı ayna gibi kullanarak dudaklarına nemlendirici/ruj sür ve dudaklarını birbirine sürterek parlat!" }
  ],
  asmr: [
    { id: 's1', category: 'alevli', text: "🎙️ FISILTI & ASMR: Mikrofona 1-2 cm kadar yaklaş; partnerinin kulağındaymış gibi en kışkırtıcı ses tonunla onun ismini 3 kez fısılda!" },
    { id: 's2', category: 'alevli', text: "🎙️ NEFES SESİ: Mikrofona yaklaş ve 10 saniye boyunca sadece derin, baştan çıkarıcı ve sıcak nefes alıp ver!" },
    { id: 's3', category: 'alevli', text: "🎙️ DIRTY TALK FISILTISI: Partnerinin kulağına fısıldamak istediğin en kirli ve cüretkâr tek bir cümleyi mikrofona söyle!" },
    { id: 's4', category: 'alevli', text: "🎙️ SESLİ ARZU: 'Şu an yanımda olsaydın ellerimi...' cümlesini mikrofona en fısıltılı ve şehvetli tonunla tamamla!" },
    { id: 's5', category: 'alevli', text: "🎙️ KULAĞA FIRILTI: Mikrofona doğru sanki partnerinin ensesine üflüyormuş gibi hafifçe üfle ve ardından 'Hissediyor musun?' de!" },
    { id: 's6', category: 'alevli', text: "🎙️ DÜŞÜK SES TONU: Ses tonunu en kalın veya en buğulu seviyeye indirip partnerine 'Beni dinlerken ne hissediyorsun?' sorusunu sor!" },
    { id: 's7', category: 'alevli', text: "🎙️ TEN TEMASI SESİ: Mikrofonun önünde ellerini birbirine ve boynuna sürterek ten temasının sesini dinlet!" },
    { id: 's8', category: 'alevli', text: "🎙️ GECE İTİRAFI: Bu gece için kurduğun ve kimsenin duymaması gereken en özel düşünceni sadece fısıltıyla mikrofona aktar!" },
    { id: 's9', category: 'alevli', text: "🎙️ YAVAŞ VE EMREDİCİ: Mikrofona yaklaş ve partnerine son derece sakin, fısıltılı ve emredici bir ses tonuyla bir komut ver!" },
    { id: 's10', category: 'alevli', text: "🎙️ İÇ ÇEKİŞ: Mikrofona yaklaşıp partnerinin adını söyledikten sonra derin ve tutkulu bir iç çek!" }
  ],
  fantezi: [
    { id: 'f1', category: 'alevli', text: "😈 SANSÜRSÜZ FANTEZİ: Partnerinle ilgili aklından geçen ama söylemekten çekindiğin en sansürsüz, en çılgın fantezini anlat!" },
    { id: 'f2', category: 'alevli', text: "😈 LOŞ IŞIK VE POZ: Odadaki ışıkları kapat, sadece ekran ışığı kalsın; yatağın üzerine geçip partnerine en cüretkâr pozunu ver!" },
    { id: 'f3', category: 'alevli', text: "😈 EN HASSAS BÖLGE: Vücudunda dokunulduğu an kontrolünü kaybettiren ve seni deliye döndüren en hassas noktanı açıkla!" },
    { id: 'f4', category: 'alevli', text: "😈 DOKUNUŞ PROVASI: Parmaklarını vücudunda (boyun, karın veya bacak) partnerinin dokunmasını istediğin yerlerde gezdir!" },
    { id: 'f5', category: 'alevli', text: "😈 YASAK ARZU: Daha önce hiç kimseyle denemediğin ama partnerinle 'keşke yapsak' dediğin bir yatak odası fantezini söyle!" },
    { id: 'f6', category: 'alevli', text: "😈 DOMİNANTLIK TESTİ: Partnerine kameradan gözünü kırpmadan bak: 'Kontrol sende mi olsun istersin, yoksa tamamen benim ellerimde mi?'" },
    { id: 'f7', category: 'alevli', text: "😈 YATAK ODASI EMİR: Partnerine bu gece uygulayabileceğin tek bir komut ver ve onu yerine getirmesini izle!" },
    { id: 'f8', category: 'alevli', text: "😈 GECE MARATONU: Bir gecede yaşadığın en uzun ve en vahşi birlikteliğin detaylarını sansürsüz paylaş!" },
    { id: 'f9', category: 'alevli', text: "😈 BAĞLANMA / ROLEPLAY: Gözlerinin bağlanması veya bir rol yapma oyunu (öğretmen, patron, yabancı) hakkında ne düşünüyorsun?" },
    { id: 'f10', category: 'alevli', text: "😈 SON İTİRAF: Bu görüşme kapandığında partnerini düşünerek ne yapacağını dürüstçe itiraf et!" }
  ]
};

const ALEVLI_MOOD_DB = Object.values(ALEVLI_SECTOR_TASKS).flat();


// 3. UYGULAMA DURUMU (STATE)
const state = {
  isSpinning: false,
  soundEnabled: false, // Varsayılan olarak ses kapalı
  answeredQuestions: new Set(),
  answeredAlevli: new Set(),
  currentAngle: 0,
  history: [],
  activeCategories: new Set(['flirt', 'hot', 'dare', 'taboo']),
  players: [
    { id: 1, name: '1. Oyuncu', avatar: '🔥', score: 0, drinks: 0 },
    { id: 2, name: '2. Oyuncu', avatar: '💋', score: 0, drinks: 0 }
  ],
  currentPlayerIndex: 0,
  currentQuestion: null,
  timerInterval: null,
  timerSeconds: 30,
  alevliMood: false
};

// 4. GELİŞMİŞ WEB AUDIO SENTETİZÖRÜ
class SoundFX {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Çark tıkırtısı (Gerçekçi Casino Rulet Tıkırtısı)
  playTick() {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(520, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(110, this.ctx.currentTime + 0.035);

      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.035);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch (e) {}
  }

  // Fırlatma sesi (Bass Drop & Whoosh)
  playWhoosh() {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(180, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(45, this.ctx.currentTime + 0.5);

      gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.5);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.55);
    } catch (e) {}
  }

  // Sonuç Açıklanma Fanfarı (VIP Armoni)
  playFanfare() {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const chords = [
        [523.25, 659.25], // C5, E5
        [587.33, 698.46], // D5, F5
        [659.25, 783.99], // E5, G5
        [1046.50, 1318.51] // C6, E6
      ];

      chords.forEach((pair, idx) => {
        pair.forEach(freq => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.08);

          gain.gain.setValueAtTime(0, now + idx * 0.08);
          gain.gain.linearRampToValueAtTime(0.16, now + idx * 0.08 + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.45);

          osc.connect(gain);
          gain.connect(this.ctx.destination);

          osc.start(now + idx * 0.08);
          osc.stop(now + idx * 0.08 + 0.5);
        });
      });
    } catch (e) {}
  }

  // Buton & Sayaç Tıkırtısı
  playClick(pitch = 400) {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(pitch, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.06);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.06);
    } catch (e) {}
  }

  // Zamanlayıcı Bip Sesi
  playTimerBeep(urgent = false) {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = urgent ? 'sawtooth' : 'triangle';
      osc.frequency.setValueAtTime(urgent ? 880 : 550, this.ctx.currentTime);

      gain.gain.setValueAtTime(urgent ? 0.25 : 0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + (urgent ? 0.15 : 0.08));

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + (urgent ? 0.16 : 0.09));
    } catch (e) {}
  }
}

const sfx = new SoundFX();

// 5. ARKA PLAN AMBİYANS VE PARTİKÜL MOTORU (Canvas)
class AmbientBackground {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.resize();
    this.initParticles();
    window.addEventListener('resize', () => this.resize());
    this.render();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  initParticles() {
    this.particles = [];
    const count = Math.floor((window.innerWidth * window.innerHeight) / 18000);
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        radius: Math.random() * 2.5 + 0.8,
        color: ['#ff2a5f', '#ec4899', '#a855f7', '#ffd700'][Math.floor(Math.random() * 4)],
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4 - 0.2,
        alpha: Math.random() * 0.5 + 0.1
      });
    }
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let p of this.particles) {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = this.canvas.width;
      if (p.x > this.canvas.width) p.x = 0;
      if (p.y < 0) p.y = this.canvas.height;
      if (p.y > this.canvas.height) p.y = 0;

      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = p.alpha;
      this.ctx.shadowBlur = 8;
      this.ctx.shadowColor = p.color;
      this.ctx.fill();
      this.ctx.restore();
    }

    requestAnimationFrame(() => this.render());
  }
}

// 6. KONFETİ VE ZAFER PATLAMASI MOTORU (Canvas)
class ConfettiEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.pieces = [];
    this.active = false;
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  burst() {
    this.resize();
    this.active = true;
    const colors = ['#ff2a5f', '#ec4899', '#ffd700', '#a855f7', '#34d399', '#38bdf8'];
    const centerX = this.canvas.width / 2;
    const centerY = this.canvas.height / 2;

    for (let i = 0; i < 90; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 12 + 5;
      this.pieces.push({
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 4,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vr: (Math.random() - 0.5) * 15,
        alpha: 1,
        decay: Math.random() * 0.015 + 0.012
      });
    }

    this.render();
  }

  render() {
    if (!this.active) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.pieces.length - 1; i >= 0; i--) {
      const p = this.pieces[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.25; // gravity
      p.vx *= 0.98;
      p.rotation += p.vr;
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        this.pieces.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = p.alpha;
      this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      this.ctx.restore();
    }

    if (this.pieces.length > 0) {
      requestAnimationFrame(() => this.render());
    } else {
      this.active = false;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}

// 7. PROFESYONEL ÇARK MOTORU (Direct Drag & Swipe + Physics)
class Wheel {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.segments = [
      { key: 'flirt', title: 'Aşk & Flört', icon: '💋', color: '#ec4899', colorEnd: '#be185d' },
      { key: 'hot', title: 'Sıcak İtiraf', icon: '🔥', color: '#ff2a5f', colorEnd: '#9f1239' },
      { key: 'dare', title: 'Sanal Cesaret', icon: '⚡', color: '#f59e0b', colorEnd: '#ca8a04' },
      { key: 'taboo', title: 'Gece & Tabu', icon: '🎭', color: '#a855f7', colorEnd: '#7e22ce' },
      // 8 dilimli dengeli çark
      { key: 'flirt', title: 'Flört Sırrı', icon: '💋', color: '#db2777', colorEnd: '#9d174d' },
      { key: 'hot', title: '+18 Sınır', icon: '🔥', color: '#f43f5e', colorEnd: '#be123c' },
      { key: 'dare', title: 'Canlı Görev', icon: '⚡', color: '#eab308', colorEnd: '#b45309' },
      { key: 'taboo', title: 'Tabu İtiraf', icon: '🎭', color: '#9333ea', colorEnd: '#6b21a8' }
    ];
    this.numSegments = this.segments.length;
    this.segmentAngle = (2 * Math.PI) / this.numSegments;
    this.lastTickSegment = -1;

    // Sürükle ve Fırlat (Direct Drag Interaction)
    this.isDragging = false;
    this.lastDragAngle = 0;
    this.dragVelocity = 0;
    this.lastDragTime = 0;

    this.bindDragEvents();
    this.draw();
  }

  draw(angle = state.currentAngle) {
    const { width, height } = this.canvas;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = width / 2 - 12;

    this.ctx.clearRect(0, 0, width, height);

    // Dilimleri Çiz
    for (let i = 0; i < this.numSegments; i++) {
      const seg = this.segments[i];
      const isCatActive = state.activeCategories.has(seg.key);
      const startAngle = angle + i * this.segmentAngle;
      const endAngle = startAngle + this.segmentAngle;

      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.moveTo(centerX, centerY);
      this.ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      this.ctx.closePath();

      // Gradyan Dolgu
      const midAngle = startAngle + this.segmentAngle / 2;
      const gradX = centerX + Math.cos(midAngle) * radius;
      const gradY = centerY + Math.sin(midAngle) * radius;
      const gradient = this.ctx.createLinearGradient(centerX, centerY, gradX, gradY);

      if (isCatActive) {
        gradient.addColorStop(0, seg.color);
        gradient.addColorStop(1, seg.colorEnd);
      } else {
        gradient.addColorStop(0, '#2d2d3a');
        gradient.addColorStop(1, '#1e1e28');
      }

      this.ctx.fillStyle = gradient;
      this.ctx.fill();

      // Dilim Kenarlıkları
      this.ctx.lineWidth = 3;
      this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.28)';
      this.ctx.stroke();

      // Dilim İçi Metin ve İkon
      this.ctx.save();
      this.ctx.translate(centerX, centerY);
      this.ctx.rotate(midAngle);
      this.ctx.textAlign = 'right';
      this.ctx.textBaseline = 'middle';

      // İkon
      this.ctx.font = 'bold 26px sans-serif';
      this.ctx.fillText(seg.icon, radius - 26, 0);

      // Metin
      this.ctx.fillStyle = isCatActive ? '#ffffff' : '#64748b';
      this.ctx.font = 'bold 16px Outfit, sans-serif';
      this.ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
      this.ctx.shadowBlur = 6;
      this.ctx.fillText(seg.title, radius - 64, 0);

      this.ctx.restore();
      this.ctx.restore();
    }

    // Dış Lüks Halka
    this.ctx.beginPath();
    this.ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    this.ctx.lineWidth = 9;
    this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    this.ctx.stroke();

    // Dış Halka Altın Ampulleri
    const numPins = 24;
    for (let p = 0; p < numPins; p++) {
      const pinAngle = (2 * Math.PI / numPins) * p + angle;
      const px = centerX + Math.cos(pinAngle) * (radius - 4);
      const py = centerY + Math.sin(pinAngle) * (radius - 4);

      this.ctx.beginPath();
      this.ctx.arc(px, py, 3.8, 0, 2 * Math.PI);
      this.ctx.fillStyle = p % 2 === 0 ? '#ffd700' : '#ffffff';
      this.ctx.shadowColor = '#ffd700';
      this.ctx.shadowBlur = 10;
      this.ctx.fill();
    }
  }

  getPointerSector(currentAngle) {
    const pointerAngle = (3 * Math.PI) / 2;
    let normalized = (pointerAngle - (currentAngle % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
    const index = Math.floor(normalized / this.segmentAngle) % this.numSegments;
    return this.segments[index];
  }

  checkTick(currentAngle) {
    const pointerAngle = (3 * Math.PI) / 2;
    let normalized = (pointerAngle - (currentAngle % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
    const index = Math.floor(normalized / this.segmentAngle) % this.numSegments;

    if (index !== this.lastTickSegment) {
      this.lastTickSegment = index;
      sfx.playTick();
      const pointerEl = document.getElementById('wheel-pointer');
      if (pointerEl) {
        pointerEl.classList.remove('tick');
        void pointerEl.offsetWidth;
        pointerEl.classList.add('tick');
      }
    }
  }

  // Dokunarak / Sürükleyerek Çevirme Olayları
  bindDragEvents() {
    const getAngleFromEvent = (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      const clientY = e.clientY || (e.touches && e.touches[0].clientY);
      const x = clientX - (rect.left + rect.width / 2);
      const y = clientY - (rect.top + rect.height / 2);
      return Math.atan2(y, x);
    };

    const onStart = (e) => {
      if (state.isSpinning) return;
      sfx.init();
      this.isDragging = true;
      this.lastDragAngle = getAngleFromEvent(e);
      this.lastDragTime = performance.now();
      this.dragVelocity = 0;
    };

    const onMove = (e) => {
      if (!this.isDragging || state.isSpinning) return;
      const angle = getAngleFromEvent(e);
      let delta = angle - this.lastDragAngle;

      // Wrap around handling
      if (delta > Math.PI) delta -= 2 * Math.PI;
      if (delta < -Math.PI) delta += 2 * Math.PI;

      state.currentAngle += delta;
      this.draw(state.currentAngle);
      this.checkTick(state.currentAngle);

      const now = performance.now();
      const dt = now - this.lastDragTime;
      if (dt > 10) {
        this.dragVelocity = delta / (dt / 1000);
        this.lastDragTime = now;
      }
      this.lastDragAngle = angle;
    };

    const onEnd = () => {
      if (!this.isDragging) return;
      this.isDragging = false;

      // Yeterli hızla fırlatıldıysa çarkı döndür
      if (Math.abs(this.dragVelocity) > 2) {
        spinWheelWithVelocity(this.dragVelocity);
      }
    };

    this.canvas.addEventListener('mousedown', onStart);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onEnd);

    this.canvas.addEventListener('touchstart', onStart, { passive: true });
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('touchend', onEnd);
  }
}

// 7.1. KOMPAKT 5 SEKTÖRLÜ ALEVLİ ÇARK MOTORU (380px)
class AlevliWheel {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.segments = ALEVLI_SECTOR_CONFIG;
    this.numSegments = this.segments.length;
    this.segmentAngle = (2 * Math.PI) / this.numSegments;
    this.lastTickSegment = -1;
    this.currentAngle = 0;
    this.isSpinning = false;

    this.isDragging = false;
    this.lastDragAngle = 0;
    this.dragVelocity = 0;
    this.lastDragTime = 0;

    this.bindDragEvents();
    this.draw(0);
  }

  draw(angle = this.currentAngle) {
    if (!this.ctx) return;
    const { width, height } = this.canvas;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = width / 2 - 12;

    this.ctx.clearRect(0, 0, width, height);

    // 5 Dilimi Çiz
    for (let i = 0; i < this.numSegments; i++) {
      const seg = this.segments[i];
      const startAngle = angle + i * this.segmentAngle;
      const endAngle = startAngle + this.segmentAngle;

      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.moveTo(centerX, centerY);
      this.ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      this.ctx.closePath();

      const midAngle = startAngle + this.segmentAngle / 2;
      const gradX = centerX + Math.cos(midAngle) * radius;
      const gradY = centerY + Math.sin(midAngle) * radius;
      const gradient = this.ctx.createLinearGradient(centerX, centerY, gradX, gradY);
      gradient.addColorStop(0, seg.color);
      gradient.addColorStop(1, seg.colorEnd);

      this.ctx.fillStyle = gradient;
      this.ctx.fill();

      this.ctx.lineWidth = 2.5;
      this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      this.ctx.stroke();

      // Dilim Metni ve İkonu
      this.ctx.save();
      this.ctx.translate(centerX, centerY);
      this.ctx.rotate(midAngle);
      this.ctx.textAlign = 'right';
      this.ctx.textBaseline = 'middle';

      this.ctx.font = 'bold 22px sans-serif';
      this.ctx.fillText(seg.icon, radius - 18, 0);

      this.ctx.fillStyle = '#ffffff';
      this.ctx.font = 'bold 12px Outfit, sans-serif';
      this.ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
      this.ctx.shadowBlur = 6;
      this.ctx.fillText(seg.title, radius - 46, 0);

      this.ctx.restore();
      this.ctx.restore();
    }

    // Dış Lüks Altın Halka
    this.ctx.beginPath();
    this.ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    this.ctx.lineWidth = 8;
    this.ctx.strokeStyle = 'rgba(255, 215, 0, 0.8)';
    this.ctx.stroke();

    // Dış Halka Altın Ampulleri
    const numPins = 15;
    for (let p = 0; p < numPins; p++) {
      const pinAngle = (2 * Math.PI / numPins) * p + angle;
      const px = centerX + Math.cos(pinAngle) * (radius - 4);
      const py = centerY + Math.sin(pinAngle) * (radius - 4);

      this.ctx.beginPath();
      this.ctx.arc(px, py, 3.2, 0, 2 * Math.PI);
      this.ctx.fillStyle = p % 2 === 0 ? '#ffd700' : '#ffffff';
      this.ctx.shadowColor = '#ffd700';
      this.ctx.shadowBlur = 8;
      this.ctx.fill();
    }
  }

  getPointerSector(currentAngle = this.currentAngle) {
    const pointerAngle = (3 * Math.PI) / 2;
    let normalized = (pointerAngle - (currentAngle % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
    const index = Math.floor(normalized / this.segmentAngle) % this.numSegments;
    return this.segments[index];
  }

  checkTick(currentAngle = this.currentAngle) {
    const pointerAngle = (3 * Math.PI) / 2;
    let normalized = (pointerAngle - (currentAngle % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
    const index = Math.floor(normalized / this.segmentAngle) % this.numSegments;

    if (index !== this.lastTickSegment) {
      this.lastTickSegment = index;
      sfx.playTick();
      const pointerEl = document.getElementById('alevli-pointer');
      if (pointerEl) {
        pointerEl.classList.remove('tick');
        void pointerEl.offsetWidth;
        pointerEl.classList.add('tick');
      }
    }
  }

  bindDragEvents() {
    const getAngleFromEvent = (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      const clientY = e.clientY || (e.touches && e.touches[0].clientY);
      const x = clientX - (rect.left + rect.width / 2);
      const y = clientY - (rect.top + rect.height / 2);
      return Math.atan2(y, x);
    };

    const onStart = (e) => {
      if (this.isSpinning) return;
      sfx.init();
      this.isDragging = true;
      this.lastDragAngle = getAngleFromEvent(e);
      this.lastDragTime = performance.now();
      this.dragVelocity = 0;
    };

    const onMove = (e) => {
      if (!this.isDragging || this.isSpinning) return;
      const angle = getAngleFromEvent(e);
      let delta = angle - this.lastDragAngle;

      if (delta > Math.PI) delta -= 2 * Math.PI;
      if (delta < -Math.PI) delta += 2 * Math.PI;

      this.currentAngle += delta;
      this.draw(this.currentAngle);
      this.checkTick(this.currentAngle);

      const now = performance.now();
      const dt = now - this.lastDragTime;
      if (dt > 10) {
        this.dragVelocity = delta / (dt / 1000);
        this.lastDragTime = now;
      }
      this.lastDragAngle = angle;
    };

    const onEnd = () => {
      if (!this.isDragging) return;
      this.isDragging = false;
      if (Math.abs(this.dragVelocity) > 2) {
        spinAlevliWheelWithVelocity(this.dragVelocity);
      }
    };

    this.canvas.addEventListener('mousedown', onStart);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onEnd);

    this.canvas.addEventListener('touchstart', onStart, { passive: true });
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('touchend', onEnd);
  }
}

// 8. ELEMENTLER & REFERANSLAR
const elements = {
  // Görünüm Konteynerleri (Tek Sayfada JS ile Geçiş)
  normalWheelView: document.getElementById('normal-wheel-view'),
  alevliWheelView: document.getElementById('alevli-wheel-view'),
  backToNormalBtn: document.getElementById('back-to-normal-btn'),

  // Normal Çark
  wheelCanvas: document.getElementById('wheel-canvas'),
  mainSpinBtn: document.getElementById('main-spin-btn'),
  centerSpinBtn: document.getElementById('center-spin-btn'),

  // Kompakt Alevli Çark
  alevliWheelCanvas: document.getElementById('alevli-wheel-canvas'),
  alevliSpinBtn: document.getElementById('alevli-spin-btn'),
  alevliCenterSpinBtn: document.getElementById('alevli-center-spin-btn'),
  alevliPointer: document.getElementById('alevli-pointer'),

  completedCount: document.getElementById('completed-count'),
  totalCount: document.getElementById('total-count'),
  progressFill: document.getElementById('progress-fill'),
  soundToggleBtn: document.getElementById('sound-toggle-btn'),
  soundIcon: document.getElementById('sound-icon'),
  fullscreenBtn: document.getElementById('fullscreen-btn'),
  fsIcon: document.getElementById('fs-icon'),
  historyBtn: document.getElementById('history-btn'),
  resetBtn: document.getElementById('reset-btn'),

  // 2 Kişilik Arena Elementleri
  p1Card: document.getElementById('p1-card'),
  p2Card: document.getElementById('p2-card'),
  p1Name: document.getElementById('p1-name'),
  p2Name: document.getElementById('p2-name'),
  p1Score: document.getElementById('p1-score'),
  p2Score: document.getElementById('p2-score'),
  p1Drinks: document.getElementById('p1-drinks'),
  p2Drinks: document.getElementById('p2-drinks'),
  p1Indicator: document.getElementById('p1-indicator'),
  p2Indicator: document.getElementById('p2-indicator'),
  switchTurnBtn: document.getElementById('switch-turn-btn'),

  // Alevli Mood Elementleri
  alevliMoodBtn: document.getElementById('alevli-mood-btn'),

  // 2 Oyuncu Düzenleme Modalı
  playersToggleBtn: document.getElementById('players-toggle-btn'),
  playersModal: document.getElementById('players-modal'),
  closePlayersBtn: document.getElementById('close-players-btn'),
  editNamesForm: document.getElementById('edit-names-form'),
  p1Input: document.getElementById('p1-input'),
  p2Input: document.getElementById('p2-input'),
  resetScoresBtn: document.getElementById('reset-scores-btn'),

  // Kategori Butonları & Sayaçlar
  catButtons: document.querySelectorAll('.cat-pill'),
  countFlirt: document.getElementById('count-flirt'),
  countHot: document.getElementById('count-hot'),
  countDare: document.getElementById('count-dare'),
  countTaboo: document.getElementById('count-taboo'),

  // Sonuç Modalı
  resultModal: document.getElementById('result-modal'),
  closeModalBtn: document.getElementById('close-modal-btn'),
  modalCategory: document.getElementById('modal-category'),
  modalCatIcon: document.getElementById('modal-cat-icon'),
  modalCatTitle: document.getElementById('modal-cat-title'),
  modalPlayerTag: document.getElementById('modal-player-tag'),
  modalPlayerName: document.getElementById('modal-player-name'),
  modalQuestionText: document.getElementById('modal-question-text'),
  copyQuestionBtn: document.getElementById('copy-question-btn'),
  copyBtnText: document.getElementById('copy-btn-text'),
  modalNextBtn: document.getElementById('modal-next-btn'),
  modalCompleteBtn: document.getElementById('modal-complete-btn'),
  modalPenaltyBtn: document.getElementById('modal-penalty-btn'),

  // 30sn Sayaç
  dareTimerBox: document.getElementById('dare-timer-box'),
  timerNumber: document.getElementById('timer-number'),
  timerBarFill: document.getElementById('timer-bar-fill'),
  startTimerBtn: document.getElementById('start-timer-btn'),

  // Ceza Modalı
  penaltyModal: document.getElementById('penalty-modal'),
  closePenaltyBtn: document.getElementById('close-penalty-btn'),
  penaltyText: document.getElementById('penalty-text'),
  acceptPenaltyBtn: document.getElementById('accept-penalty-btn'),

  // Geçmiş Modalı
  historyModal: document.getElementById('history-modal'),
  closeHistoryBtn: document.getElementById('close-history-btn'),
  historyList: document.getElementById('history-list')
};

// Canvas ve Animasyon Örnekleri
const bg = new AmbientBackground('bg-canvas');
const confetti = new ConfettiEngine('confetti-canvas');
const wheel = new Wheel('wheel-canvas');
const alevliWheel = new AlevliWheel('alevli-wheel-canvas');


// 9. ÇARK DÖNDÜRME MANTIĞI
function spinWheel() {
  if (state.isSpinning) return;
  const randomPower = Math.random() * 8 + 18;
  spinWheelWithVelocity(randomPower);
}

function spinWheelWithVelocity(velocity) {
  if (state.isSpinning) return;
  if (state.soundEnabled) {
    sfx.init();
    sfx.playWhoosh();
  }

  state.isSpinning = true;
  elements.mainSpinBtn.disabled = true;

  // En az 5 tam tur + ekstra dönüş
  const direction = velocity >= 0 ? 1 : -1;
  const extraRotations = Math.min(Math.abs(velocity) * 0.4, 7) + 5;
  const totalRotation = direction * (extraRotations * 2 * Math.PI + Math.random() * 2 * Math.PI);

  const startAngle = state.currentAngle;
  const duration = 5000; // ms
  let startTime = null;

  function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
  }

  function animate(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutQuart(progress);

    state.currentAngle = startAngle + totalRotation * easedProgress;
    wheel.draw(state.currentAngle);
    if (state.soundEnabled) wheel.checkTick(state.currentAngle);

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      state.isSpinning = false;
      elements.mainSpinBtn.disabled = false;
      onSpinComplete();
    }
  }

  requestAnimationFrame(animate);
}

// Çark Durduğunda
function onSpinComplete() {
  const sector = wheel.getPointerSector(state.currentAngle);
  if (state.soundEnabled) sfx.playFanfare();

  // Normal kategorilerden seçim yap
  let chosenCategoryKey = sector.key;
  if (!state.activeCategories.has(chosenCategoryKey)) {
    const activeArr = Array.from(state.activeCategories);
    if (activeArr.length > 0) {
      chosenCategoryKey = activeArr[Math.floor(Math.random() * activeArr.length)];
    }
  }

  const availableQuestions = QUESTIONS_DB.filter(q => 
    q.category === chosenCategoryKey && !state.answeredQuestions.has(q.id)
  );

  let selectedQuestion;
  if (availableQuestions.length > 0) {
    selectedQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
  } else {
    const allInCat = QUESTIONS_DB.filter(q => q.category === chosenCategoryKey);
    selectedQuestion = allInCat[Math.floor(Math.random() * allInCat.length)];
  }

  state.answeredQuestions.add(selectedQuestion.id);
  updateCategoryCounters(); // Kategori sayacını anında 55'ten 54'e düşür!

  state.currentQuestion = selectedQuestion;
  state.history.unshift(selectedQuestion);
  updateStats();

  showModal(selectedQuestion);
}

// 10. MODAL VE ZAMANLAYICI GÖSTERİMİ
function showModal(question) {
  elements.modalCatIcon.textContent = question.catIcon;
  elements.modalCatTitle.textContent = question.catTitle;
  elements.modalQuestionText.textContent = question.text;

  // Rozet Tasarımı
  elements.modalCategory.style.backgroundColor = `${question.color}24`;
  elements.modalCategory.style.border = `1px solid ${question.color}`;
  elements.modalCategory.style.color = question.color;

  // Aktif Oyuncuyu Göster
  const activePlayer = state.players[state.currentPlayerIndex];
  if (activePlayer) {
    elements.modalPlayerName.textContent = `${activePlayer.avatar} ${activePlayer.name}`;
    elements.modalPlayerTag.classList.remove('hidden');
  }

  // Sanal Cesaret veya Alevli Görevlerde Sayacı Göster
  resetDareTimer();
  if (question.category === 'dare' || question.category === 'alevli') {
    elements.dareTimerBox.classList.remove('hidden');
  } else {
    elements.dareTimerBox.classList.add('hidden');
  }

  elements.copyBtnText.textContent = '📋 Kopyala';
  elements.resultModal.classList.remove('hidden');
}

function hideModal() {
  stopDareTimer();
  elements.resultModal.classList.add('hidden');
}

// 30sn Zamanlayıcı Yönetimi
function resetDareTimer() {
  stopDareTimer();
  state.timerSeconds = 30;
  elements.timerNumber.textContent = '30';
  elements.timerBarFill.style.width = '100%';
  elements.startTimerBtn.textContent = '▶ Zamanı Başlat';
}

function startDareTimer() {
  if (state.timerInterval) return;
  if (state.soundEnabled) sfx.playClick(600);
  elements.startTimerBtn.textContent = '⏸ Sayıyor...';

  state.timerInterval = setInterval(() => {
    state.timerSeconds--;
    elements.timerNumber.textContent = state.timerSeconds;
    const percent = (state.timerSeconds / 30) * 100;
    elements.timerBarFill.style.width = `${percent}%`;

    if (state.timerSeconds <= 5 && state.timerSeconds > 0) {
      if (state.soundEnabled) sfx.playTimerBeep(true);
    } else if (state.timerSeconds > 0) {
      if (state.soundEnabled) sfx.playTimerBeep(false);
    } else {
      stopDareTimer();
      elements.timerNumber.textContent = 'SÜRE BİTTİ!';
      if (state.soundEnabled) sfx.playClick(200);
    }
  }, 1000);
}

function stopDareTimer() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
}

// 11. GÖREV BAŞARISI & CEZA ÇEKME SİSTEMİ (2 OYUNCU GEÇİŞİ)
function completeQuestionTask() {
  confetti.burst();
  if (state.soundEnabled) sfx.playFanfare();

  const player = state.players[state.currentPlayerIndex];
  if (player) {
    player.score++;
    rotateNextPlayer();
  }

  hideModal();
}

function triggerPenaltyRoulette() {
  if (state.soundEnabled) sfx.playClick(220);
  const randomPenalty = PENALTIES_DB[Math.floor(Math.random() * PENALTIES_DB.length)];
  elements.penaltyText.textContent = randomPenalty;

  hideModal();
  elements.penaltyModal.classList.remove('hidden');
}

function acceptPenalty() {
  if (state.soundEnabled) sfx.playClick(440);
  const player = state.players[state.currentPlayerIndex];
  if (player) {
    player.drinks++;
    rotateNextPlayer();
  }

  elements.penaltyModal.classList.add('hidden');
}

// 12. 2 KİŞİLİK BAŞ BAŞA DÜELLO MANTIĞI & LOCALSTORAGE SENKRONİZASYONU
function savePlayersToStorage() {
  try {
    localStorage.setItem('kc_players', JSON.stringify(state.players));
    localStorage.setItem('kc_turn', state.currentPlayerIndex.toString());
  } catch (e) {}
}

function loadPlayersFromStorage() {
  try {
    const saved = localStorage.getItem('kc_players');
    const savedTurn = localStorage.getItem('kc_turn');
    if (saved) state.players = JSON.parse(saved);
    if (savedTurn !== null) state.currentPlayerIndex = parseInt(savedTurn, 10) || 0;
  } catch (e) {}
}

function rotateNextPlayer() {
  state.currentPlayerIndex = (state.currentPlayerIndex === 0) ? 1 : 0;
  updateTwoPlayerArena();
  savePlayersToStorage();
}

function updateTwoPlayerArena() {
  const p1 = state.players[0];
  const p2 = state.players[1];
  if (!p1 || !p2) return;

  if (elements.p1Name) elements.p1Name.textContent = p1.name;
  if (elements.p1Score) elements.p1Score.textContent = p1.score;
  if (elements.p1Drinks) elements.p1Drinks.textContent = p1.drinks;

  if (elements.p2Name) elements.p2Name.textContent = p2.name;
  if (elements.p2Score) elements.p2Score.textContent = p2.score;
  if (elements.p2Drinks) elements.p2Drinks.textContent = p2.drinks;

  if (state.currentPlayerIndex === 0) {
    elements.p1Card?.classList.add('active-turn');
    elements.p1Indicator?.classList.remove('hidden');
    elements.p2Card?.classList.remove('active-turn');
    elements.p2Indicator?.classList.add('hidden');
  } else {
    elements.p2Card?.classList.add('active-turn');
    elements.p2Indicator?.classList.remove('hidden');
    elements.p1Card?.classList.remove('active-turn');
    elements.p1Indicator?.classList.add('hidden');
  }
}

// 13. CANLI KATEGORİ SAYAÇLARI (55 -> 54 -> 53 DÜŞÜŞÜ)
function updateCategoryCounters() {
  const cats = ['flirt', 'hot', 'dare', 'taboo'];
  cats.forEach(cat => {
    const el = document.getElementById(`count-${cat}`);
    if (el) {
      const remaining = QUESTIONS_DB.filter(q => q.category === cat && !state.answeredQuestions.has(q.id)).length;
      el.textContent = remaining;
    }
  });
}

// 15. KATEGORİ FİLTRELEME
function toggleCategory(btn) {
  const catKey = btn.dataset.cat;
  if (state.activeCategories.has(catKey)) {
    if (state.activeCategories.size > 1) {
      state.activeCategories.delete(catKey);
      btn.classList.remove('active');
    }
  } else {
    state.activeCategories.add(catKey);
    btn.classList.add('active');
  }
  if (state.soundEnabled) sfx.playClick();
  wheel.draw(state.currentAngle);
}

// 16. İSTATİSTİKLER VE GEÇMİŞ
function updateStats() {
  const totalAnswered = state.answeredQuestions.size + state.answeredAlevli.size;
  elements.completedCount.textContent = totalAnswered;
  const percent = Math.min((totalAnswered / 220) * 100, 100);
  elements.progressFill.style.width = `${percent}%`;
  renderHistory();
}

function renderHistory() {
  if (state.history.length === 0) {
    elements.historyList.innerHTML = '<p class="empty-history">Henüz hiçbir soru çekilmedi. Çarkı çevir ve gecenin ateşini yak!</p>';
    return;
  }

  elements.historyList.innerHTML = state.history.map(item => `
    <div class="history-item">
      <span class="history-cat-badge" style="color: ${item.color}">${item.catIcon} ${item.catTitle}</span>
      <p class="history-text">${item.text}</p>
    </div>
  `).join('');
}

// 17. SES, TAM EKRAN VE OYUNU SIFIRLAMA
function toggleSound() {
  state.soundEnabled = !state.soundEnabled;
  elements.soundIcon.textContent = state.soundEnabled ? '🔊' : '🔇';
  elements.soundToggleBtn.title = state.soundEnabled ? 'Sesi Kapat' : 'Sesi Aç (Şu an Kapalı)';
  if (state.soundEnabled) sfx.playClick();
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
    elements.fsIcon.textContent = '✕';
  } else {
    document.exitFullscreen().catch(() => {});
    elements.fsIcon.textContent = '⛶';
  }
}

function resetGame() {
  if (confirm('Tüm sorular, cevap geçmişi ve skorlar sıfırlansın mı?')) {
    state.answeredQuestions.clear();
    state.answeredAlevli.clear();
    state.history = [];
    state.players.forEach(p => { p.score = 0; p.drinks = 0; });
    state.currentPlayerIndex = 0;
    updateStats();
    updateCategoryCounters();
    updateTwoPlayerArena();
    if (state.soundEnabled) sfx.playClick(250);
  }
}

function copyQuestion() {
  const text = elements.modalQuestionText.textContent;
  navigator.clipboard.writeText(text).then(() => {
    elements.copyBtnText.textContent = '✅ Kopyalandı!';
    if (state.soundEnabled) sfx.playClick();
    setTimeout(() => {
      elements.copyBtnText.textContent = '📋 Kopyala';
    }, 2000);
  });
}

// 17.1. TEK SAYFADA ALEVLİ MOOD GÖRÜNÜM GEÇİŞLERİ (JS İLE)
function showAlevliView() {
  state.alevliMood = true;
  elements.normalWheelView?.classList.add('hidden');
  elements.alevliWheelView?.classList.remove('hidden');
  elements.alevliMoodBtn?.classList.add('hidden');
  document.body.classList.add('alevli-active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  updateTwoPlayerArena();
  if (alevliWheel) alevliWheel.draw();
  if (state.soundEnabled) sfx.playClick(600);
}

function showNormalView() {
  state.alevliMood = false;
  elements.alevliWheelView?.classList.add('hidden');
  elements.normalWheelView?.classList.remove('hidden');
  elements.alevliMoodBtn?.classList.remove('hidden');
  document.body.classList.remove('alevli-active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  updateTwoPlayerArena();
  if (wheel) wheel.draw();
  if (state.soundEnabled) sfx.playClick(400);
}

// 17.2. KOMPAKT ALEVLİ ÇARK DÖNDÜRME MANTIĞI
function spinAlevliWheel() {
  if (alevliWheel.isSpinning) return;
  const randomPower = Math.random() * 8 + 18;
  spinAlevliWheelWithVelocity(randomPower);
}

function spinAlevliWheelWithVelocity(velocity) {
  if (alevliWheel.isSpinning) return;
  if (state.soundEnabled) {
    sfx.init();
    sfx.playWhoosh();
  }

  alevliWheel.isSpinning = true;
  if (elements.alevliSpinBtn) elements.alevliSpinBtn.disabled = true;

  const direction = velocity >= 0 ? 1 : -1;
  const extraRotations = Math.min(Math.abs(velocity) * 0.4, 7) + 5;
  const totalRotation = direction * (extraRotations * 2 * Math.PI + Math.random() * 2 * Math.PI);

  const startAngle = alevliWheel.currentAngle;
  const duration = 4500;
  let startTime = null;

  function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
  }

  function animate(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutQuart(progress);

    alevliWheel.currentAngle = startAngle + totalRotation * easedProgress;
    alevliWheel.draw(alevliWheel.currentAngle);
    if (state.soundEnabled) alevliWheel.checkTick(alevliWheel.currentAngle);

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      alevliWheel.isSpinning = false;
      if (elements.alevliSpinBtn) elements.alevliSpinBtn.disabled = false;
      onAlevliSpinComplete();
    }
  }

  requestAnimationFrame(animate);
}

function onAlevliSpinComplete() {
  const sector = alevliWheel.getPointerSector(alevliWheel.currentAngle);
  if (state.soundEnabled) sfx.playFanfare();

  const sectorList = ALEVLI_SECTOR_TASKS[sector.key] || ALEVLI_MOOD_DB;
  const available = sectorList.filter(t => !state.answeredAlevli.has(t.id));

  let chosen;
  if (available.length > 0) {
    chosen = available[Math.floor(Math.random() * available.length)];
  } else {
    chosen = sectorList[Math.floor(Math.random() * sectorList.length)];
  }

  state.answeredAlevli.add(chosen.id);

  const itemToDisplay = {
    id: chosen.id,
    category: 'alevli',
    catTitle: `${sector.title} (+18)`,
    catIcon: sector.icon,
    color: sector.color,
    text: chosen.text
  };

  state.currentQuestion = itemToDisplay;
  state.history.unshift(itemToDisplay);
  updateStats();

  showModal(itemToDisplay);
}

// 18. EVENT LISTENERS
elements.mainSpinBtn.addEventListener('click', spinWheel);
elements.centerSpinBtn.addEventListener('click', spinWheel);

// Kompakt Alevli Çark Tetikleyicileri
elements.alevliSpinBtn?.addEventListener('click', spinAlevliWheel);
elements.alevliCenterSpinBtn?.addEventListener('click', spinAlevliWheel);

// Tek Sayfa Görünüm Geçişleri
elements.alevliMoodBtn?.addEventListener('click', showAlevliView);
elements.backToNormalBtn?.addEventListener('click', showNormalView);

elements.catButtons.forEach(btn => {
  btn.addEventListener('click', () => toggleCategory(btn));
});

// 2 Kişilik Sıra Değiştir Butonu
elements.switchTurnBtn?.addEventListener('click', () => {
  rotateNextPlayer();
  if (state.soundEnabled) sfx.playClick(500);
});

// Kartlara Tıklayınca İsim Düzenleme Modalı Açılsın
elements.p1Card?.addEventListener('click', openPlayersModal);
elements.p2Card?.addEventListener('click', openPlayersModal);

elements.closeModalBtn.addEventListener('click', hideModal);
elements.modalNextBtn.addEventListener('click', () => {
  hideModal();
  rotateNextPlayer();
  setTimeout(() => {
    if (state.alevliMood) {
      spinAlevliWheel();
    } else {
      spinWheel();
    }
  }, 350);
});

elements.modalCompleteBtn.addEventListener('click', completeQuestionTask);
elements.modalPenaltyBtn.addEventListener('click', triggerPenaltyRoulette);
elements.acceptPenaltyBtn.addEventListener('click', acceptPenalty);
elements.closePenaltyBtn.addEventListener('click', () => elements.penaltyModal.classList.add('hidden'));

elements.copyQuestionBtn.addEventListener('click', copyQuestion);
elements.startTimerBtn.addEventListener('click', startDareTimer);

elements.soundToggleBtn.addEventListener('click', toggleSound);
elements.fullscreenBtn.addEventListener('click', toggleFullscreen);
elements.resetBtn.addEventListener('click', resetGame);

// 2 Oyuncu Modalı
function openPlayersModal() {
  if (state.soundEnabled) sfx.playClick();
  elements.p1Input.value = state.players[0].name;
  elements.p2Input.value = state.players[1].name;
  elements.playersModal.classList.remove('hidden');
}

elements.playersToggleBtn?.addEventListener('click', openPlayersModal);
elements.closePlayersBtn?.addEventListener('click', () => elements.playersModal.classList.add('hidden'));

elements.editNamesForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  state.players[0].name = elements.p1Input.value.trim() || '1. Oyuncu';
  state.players[1].name = elements.p2Input.value.trim() || '2. Oyuncu';
  updateTwoPlayerArena();
  savePlayersToStorage();
  elements.playersModal.classList.add('hidden');
});

elements.resetScoresBtn?.addEventListener('click', () => {
  state.players[0].score = 0;
  state.players[0].drinks = 0;
  state.players[1].score = 0;
  state.players[1].drinks = 0;
  updateTwoPlayerArena();
  savePlayersToStorage();
  elements.playersModal.classList.add('hidden');
});

// Geçmiş Modalı
elements.historyBtn.addEventListener('click', () => {
  if (state.soundEnabled) sfx.playClick();
  elements.historyModal.classList.remove('hidden');
});
elements.closeHistoryBtn.addEventListener('click', () => elements.historyModal.classList.add('hidden'));

// Dışarı tıklayınca kapatma
window.addEventListener('click', (e) => {
  if (e.target === elements.resultModal) hideModal();
  if (e.target === elements.penaltyModal) elements.penaltyModal.classList.add('hidden');
  if (e.target === elements.playersModal) elements.playersModal.classList.add('hidden');
  if (e.target === elements.historyModal) elements.historyModal.classList.add('hidden');
});

// ESC Tuşu
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    hideModal();
    elements.penaltyModal.classList.add('hidden');
    elements.playersModal.classList.add('hidden');
    elements.historyModal.classList.add('hidden');
  }
});

// Başlangıç Kurulumu
loadPlayersFromStorage();
updateStats();
updateCategoryCounters();
updateTwoPlayerArena();
console.log('Kırmızı Çark VIP: 2 Kişilik Baş Başa Motoru devrede.');

