'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  ReactNode,
} from 'react';

export type Lang = 'en' | 'ar';

export const translations = {
  en: {
    nav: {
      features: 'Features',
      aiMoments: 'AI moments',
      howItWorks: 'How it works',
      about: 'About',
      joinWaitlist: 'Join waitlist',
    },
    langToggle: 'العربية',
    hero: {
      chipPlatform: 'iOS · 2026',
      chipAndroid: 'Android, eventually',
      titleLine1: 'Your time,',
      titleLine2: 'money, and',
      titleLine3: 'tasks —',
      titleLine4: 'in one quiet place.',
      paragraph:
        'Buddy is a calm personal AI that plans your week, watches your spending, and answers in plain English. No streaks. No ads. No noise.',
      emailPlaceholder: 'you@elsewhere.com',
      joinBtn: 'Join waitlist →',
      waitlistSuffix: 'people on the waitlist',
      note: ['buddy', ' moved 1 event, freed 2.5h Friday morning.'],
    },
    preview: {
      date: 'Thursday · May 22',
      greeting1: 'Good morning,',
      greeting2: 'Amelia.',
      briefLabel: "Buddy's brief",
      brief1: 'Light day ahead. ',
      brief2: 'One class, two essays due Friday, and',
      brief3: ' budget is on track at ',
      brief4: '$34 of $80',
      ev1Title: 'Statistics 201',
      ev1Sub: 'Hall B · Prof. Larsen',
      ev2Title: 'Coffee with Maya',
      ev2Sub: "Toby's, Storgata",
      ev3Title: 'Essay block — History',
      ev3Sub: 'AI-suggested · flexible',
      aiBar: 'Move my essay block to Friday morning',
    },
    chips: { locked: 'locked', flex: 'flex', finance: 'finance' },
    manifesto: [
      ['Plans your week', "so you don't have to."],
      ['Tracks your money', 'without scolding.'],
      ['Talks like a person', 'not a chatbot.'],
      ['Stays out of the way', 'until you need it.'],
    ],
    features: {
      eyebrow: 'What it does',
      h2a: 'Six pieces, designed to feel like ',
      h2b: 'one app.',
      items: [
        {
          tag: 'Time',
          title: 'Locked vs flexible.',
          body: 'Class at 10? Locked. Essay block? Flexible. Buddy treats them differently — and moves only the things that can move.',
        },
        {
          tag: 'AI',
          title: 'Inline, not a chatbot.',
          body: 'The input bar sits at the bottom of every screen. Type, tap, or speak — answers appear right where the data lives.',
        },
        {
          tag: 'Money',
          title: 'Spending it watches.',
          body: 'Link accounts or text receipts. Buddy categorises, sums, and warns gently before you blow the month.',
        },
        {
          tag: 'Glance',
          title: 'Widgets that earn their square.',
          body: "Next event and today's spend on the lock screen. Tiny timeline and budget bar on home. No fluff.",
        },
        {
          tag: 'Booking',
          title: "A meeting link that's yours.",
          body: 'Pick three slots, share a link. The other side sees their timezone — Buddy keeps yours straight.',
        },
        {
          tag: 'Pledge',
          title: 'No streaks. No ads.',
          body: 'No habit traps, no engagement metrics, no third-party SDKs. Your data lives on your device.',
        },
      ],
    },
    ai: {
      eyebrow: 'AI moments',
      h2a: 'Four conversations that happen',
      h2b: 'every week.',
      intro:
        "The AI doesn't live behind a button. It lives at the bottom of every screen, in the data it already has, with all the context you've ever given it.",
      scenes: [
        {
          tag: '01 · Conflict',
          title: 'Asks before it overwrites.',
          body: 'When you ask for time that\'s already taken, Buddy offers three real options — no buried "are you sure" dialogs.',
        },
        {
          tag: '02 · Voice → ledger',
          title: 'Speak a receipt into existence.',
          body: 'Say it in any phrasing. Buddy parses the amount, picks a category, shows your daily total, asks if it got it right.',
        },
        {
          tag: '03 · Focus blocks',
          title: 'Knows when you actually think.',
          body: 'Buddy learns your high-focus window from the times you mark "energy: peak" and only suggests deep work there.',
        },
        {
          tag: '04 · Meeting link',
          title: 'Booking, in one sentence.',
          body: 'No separate scheduling app. Three slots, your timezone, their timezone, sent. Buddy holds the slots until they pick one.',
        },
      ],
    },
    sceneConflict: {
      aiBar: '"Add a dentist appointment Thursday at 2pm"',
      label: 'Conflict',
      textA: 'You already have ',
      textBold: 'Statistics 201',
      textB: ' at 2pm Thursday. Want me to:',
      opts: [
        ['Move dentist to Friday 2pm', 'You have free time'],
        ['Schedule it Thursday 4pm', 'Right after class'],
        ["Just add it — I'll resolve later", 'Marked as conflict'],
      ],
    },
    sceneFinance: {
      aiBar: '"I just spent 14 bucks on dinner with Sam"',
      label: 'New transaction',
      title: 'Dinner with Sam',
      chipCat: 'Food & drink',
      chipToday: 'Today',
      ofToday: ' of $80 today',
      left: '$32 left',
      ok: 'Looks right',
      edit: 'Edit',
    },
    sceneMove: {
      aiBar: '"I need 90 min for the lab report this week"',
      label: 'Found a slot',
      textA: 'Wednesday afternoon is open and matches your',
      textHi: 'high-focus window',
      ev1: ['BIO 240', 'Lab · Hall C'],
      ev2: ['Lab report — focused block', 'AI-suggested · matches energy'],
      ev3: ['Run · Storgata loop', 'Personal'],
    },
    sceneBooking: {
      aiBar: '"Send Maya 3 slots for coffee next week"',
      label: 'Sharable link',
      slots: [
        ['Tue · May 27', '14:00 – 14:30'],
        ['Wed · May 28', '10:00 – 10:30'],
        ['Thu · May 29', '15:30 – 16:00'],
      ],
      copied: 'Copied',
      footA: 'Maya sees the times in ',
      footHi: 'her timezone',
      footB: ' — Buddy keeps yours straight.',
    },
    how: {
      eyebrow: 'How it works',
      h2a: 'Three steps. ',
      h2b: "That's it.",
      steps: [
        ['Tell Buddy your week.', 'Connect your calendar. Mark a few things as locked. Buddy reads the rest.'],
        ['Ask. In any phrasing.', '"Move my essay to Friday." "I spent twenty bucks on lunch." It gets it. Asks when it doesn\'t.'],
        ['Open the app less.', "Widgets, notifications, and a calm morning brief mean you stop checking. That's the goal."],
      ],
    },
    founders: {
      eyebrow: 'From the founders',
      h2a: 'We were tired of apps that ',
      h2b: 'shout for attention.',
      p1: "Calendars expect you to plan. Budget apps expect you to log. To-do apps expect you to remember to open them. Each one is fine on its own. Together, they're a tax on attention.",
      p2: 'Buddy is the small, calm assistant we wanted for ourselves — one that knows your meetings, your money and your tasks all at once, and only speaks up when it has something useful to say. It looks like an app, but it behaves like a person you trust with the boring parts of your life.',
      p3: "We're building it slowly, on iOS first, with a few hundred friends. If you'd like an early invite, drop your email below. We'll be quiet until we have something worth showing you.",
      names: 'Fady & Omar',
      role: 'Co-founders · Cairo',
    },
    finalCta: {
      platform: 'iOS · 2026',
      h2a: 'One quiet place,',
      h2b: 'finally.',
      paragraph:
        "Get on the waitlist. We'll send one email when Buddy is ready — nothing else.",
      button: 'Join the waitlist',
      counterSuffix: 'people waiting · iOS first, Android later',
    },
    footer: {
      tagline: 'A calm personal AI for your time, money, and tasks. Made in Cairo.',
      productTitle: 'Product',
      product: ['Features', 'AI moments', 'How it works', 'Widgets'],
      followTitle: 'Follow',
      follow: ['Instagram', 'Email us'],
      copyright: '© 2026 Buddy Labs',
      coming: 'iOS · Coming summer 2026',
    },
  },

  ar: {
    nav: {
      features: 'المزايا',
      aiMoments: 'لحظات الذكاء',
      howItWorks: 'كيف يعمل',
      about: 'عن التطبيق',
      joinWaitlist: 'انضم لقائمة الانتظار',
    },
    langToggle: 'English',
    hero: {
      chipPlatform: 'iOS · 2026',
      chipAndroid: 'أندرويد لاحقًا',
      titleLine1: 'وقتُك،',
      titleLine2: 'ومالُك،',
      titleLine3: 'ومهامُّك —',
      titleLine4: 'في مكانٍ واحدٍ هادئ.',
      paragraph:
        'بادي مساعد ذكاء اصطناعي شخصي وهادئ يخطّط أسبوعك، ويراقب إنفاقك، ويجيبك بلغةٍ بسيطة. بلا سلاسل عادات، بلا إعلانات، بلا ضجيج.',
      emailPlaceholder: 'بريدك الإلكتروني',
      joinBtn: 'انضم للقائمة ←',
      waitlistSuffix: 'شخصٍ على قائمة الانتظار',
      note: ['بادي', ' حرّك موعدًا واحدًا، ووفّر ساعتين ونصف صباح الجمعة.'],
    },
    preview: {
      date: 'الخميس · 22 مايو',
      greeting1: 'صباح الخير،',
      greeting2: 'أميليا.',
      briefLabel: 'موجز بادي',
      brief1: 'يومٌ خفيف بانتظارك. ',
      brief2: 'محاضرة واحدة، وبحثان مستحقّان الجمعة، و',
      brief3: 'ميزانيتك على المسار عند ',
      brief4: '34$ من 80$',
      ev1Title: 'إحصاء 201',
      ev1Sub: 'قاعة B · أ. لارسن',
      ev2Title: 'قهوة مع مايا',
      ev2Sub: 'مقهى توبي، ستورغاتا',
      ev3Title: 'وقت بحث — تاريخ',
      ev3Sub: 'مقترح بالذكاء · مرن',
      aiBar: 'انقل وقت بحثي إلى صباح الجمعة',
    },
    chips: { locked: 'مثبّت', flex: 'مرن', finance: 'مالية' },
    manifesto: [
      ['يخطّط أسبوعك', 'حتى لا تفعل أنت.'],
      ['يتابع أموالك', 'دون توبيخ.'],
      ['يتحدّث كإنسان', 'لا كروبوت دردشة.'],
      ['يبقى بعيدًا عن الطريق', 'حتى تحتاجه.'],
    ],
    features: {
      eyebrow: 'ماذا يفعل',
      h2a: 'ستُّ قطعٍ، مصمّمة لتبدو ',
      h2b: 'كتطبيقٍ واحد.',
      items: [
        {
          tag: 'الوقت',
          title: 'مثبّت أم مرن.',
          body: 'محاضرة العاشرة؟ مثبّتة. وقت البحث؟ مرن. يتعامل بادي معهما بشكلٍ مختلف — ولا يحرّك إلا ما يمكن تحريكه.',
        },
        {
          tag: 'الذكاء',
          title: 'في صلب الشاشة، لا روبوت دردشة.',
          body: 'يقع شريط الإدخال أسفل كل شاشة. اكتب أو انقر أو تحدّث — وتظهر الإجابات حيث توجد بياناتك.',
        },
        {
          tag: 'المال',
          title: 'إنفاقٌ يراقبه.',
          body: 'اربط حساباتك أو أرسل الإيصالات. يصنّف بادي ويجمع وينبّهك بلطفٍ قبل أن تتجاوز ميزانية الشهر.',
        },
        {
          tag: 'لمحة',
          title: 'عناصر تستحقّ مكانها.',
          body: 'موعدك التالي وإنفاق اليوم على شاشة القفل. خطٌّ زمنيٌّ صغير وشريط ميزانية على الشاشة الرئيسية. بلا حشو.',
        },
        {
          tag: 'الحجز',
          title: 'رابط اجتماعٍ يخصُّك.',
          body: 'اختر ثلاثة مواعيد، وشارك رابطًا. يرى الطرف الآخر توقيته المحلي — ويحافظ بادي على توقيتك أنت.',
        },
        {
          tag: 'العهد',
          title: 'بلا سلاسل. بلا إعلانات.',
          body: 'بلا فخاخ عادات، بلا مقاييس تفاعل، بلا أدوات تتبّع خارجية. بياناتك تبقى على جهازك.',
        },
      ],
    },
    ai: {
      eyebrow: 'لحظات الذكاء',
      h2a: 'أربع محادثاتٍ تتكرّر',
      h2b: 'كل أسبوع.',
      intro:
        'لا يختبئ الذكاء خلف زر. إنه أسفل كل شاشة، داخل البيانات التي يملكها، ومع كل السياق الذي منحته إيّاه.',
      scenes: [
        {
          tag: '01 · تعارض',
          title: 'يسأل قبل أن يستبدل.',
          body: 'حين تطلب وقتًا محجوزًا مسبقًا، يقدّم بادي ثلاثة خيارات حقيقية — دون نوافذ «هل أنت متأكد» مدفونة.',
        },
        {
          tag: '02 · صوت ← سجل',
          title: 'انطق إيصالًا فيتحقّق.',
          body: 'قُلها بأي صياغة. يستخرج بادي المبلغ، ويختار فئة، ويعرض إجمالي يومك، ويسأل إن كان قد فهم بشكلٍ صحيح.',
        },
        {
          tag: '03 · فترات التركيز',
          title: 'يعرف متى تفكّر فعلًا.',
          body: 'يتعلّم بادي فترة تركيزك العالي من الأوقات التي تحدّدها كـ«طاقة: ذروة»، ويقترح العمل العميق فيها فقط.',
        },
        {
          tag: '04 · رابط اجتماع',
          title: 'حجزٌ بجملةٍ واحدة.',
          body: 'لا تطبيق جدولة منفصل. ثلاثة مواعيد، بتوقيتك وتوقيتهم، تُرسَل. ويحجز بادي المواعيد حتى يختاروا واحدًا.',
        },
      ],
    },
    sceneConflict: {
      aiBar: '«أضف موعد طبيب أسنان الخميس الساعة 2 ظهرًا»',
      label: 'تعارض',
      textA: 'لديك بالفعل ',
      textBold: 'إحصاء 201',
      textB: ' الساعة 2 ظهر الخميس. هل تريد أن:',
      opts: [
        ['انقل طبيب الأسنان إلى الجمعة 2 ظهرًا', 'لديك وقت فارغ'],
        ['حدّده الخميس 4 عصرًا', 'بعد المحاضرة مباشرة'],
        ['أضِفه فقط — سأحلّه لاحقًا', 'مُعلَّم كتعارض'],
      ],
    },
    sceneFinance: {
      aiBar: '«صرفت للتو 14 دولارًا على العشاء مع سام»',
      label: 'معاملة جديدة',
      title: 'عشاء مع سام',
      chipCat: 'طعام وشراب',
      chipToday: 'اليوم',
      ofToday: ' من 80$ اليوم',
      left: 'تبقّى 32$',
      ok: 'يبدو صحيحًا',
      edit: 'تعديل',
    },
    sceneMove: {
      aiBar: '«أحتاج 90 دقيقة لتقرير المختبر هذا الأسبوع»',
      label: 'وجدتُ وقتًا',
      textA: 'بعد ظهر الأربعاء متاح ويطابق',
      textHi: 'فترة تركيزك العالي',
      ev1: ['BIO 240', 'مختبر · قاعة C'],
      ev2: ['تقرير المختبر — فترة تركيز', 'مقترح بالذكاء · يطابق طاقتك'],
      ev3: ['جري · حلقة ستورغاتا', 'شخصي'],
    },
    sceneBooking: {
      aiBar: '«أرسل لمايا 3 مواعيد لقهوة الأسبوع القادم»',
      label: 'رابط قابل للمشاركة',
      slots: [
        ['الثلاثاء · 27 مايو', '14:00 – 14:30'],
        ['الأربعاء · 28 مايو', '10:00 – 10:30'],
        ['الخميس · 29 مايو', '15:30 – 16:00'],
      ],
      copied: 'تم النسخ',
      footA: 'ترى مايا الأوقات بـ',
      footHi: 'توقيتها المحلي',
      footB: ' — ويحافظ بادي على توقيتك.',
    },
    how: {
      eyebrow: 'كيف يعمل',
      h2a: 'ثلاث خطوات. ',
      h2b: 'هذا كل شيء.',
      steps: [
        ['أخبر بادي بأسبوعك.', 'اربط تقويمك. ثبّت بعض المواعيد. ويقرأ بادي الباقي.'],
        ['اسأل. بأي صياغة.', '«انقل بحثي إلى الجمعة.» «صرفت عشرين دولارًا على الغداء.» يفهمها. ويسأل حين لا يفهم.'],
        ['افتح التطبيق أقل.', 'العناصر والإشعارات وموجزٌ صباحيٌّ هادئ تجعلك تتوقّف عن التفقّد. هذا هو الهدف.'],
      ],
    },
    founders: {
      eyebrow: 'من المؤسّسَين',
      h2a: 'سئمنا التطبيقات التي ',
      h2b: 'تصرخ طلبًا للانتباه.',
      p1: 'التقاويم تتوقّع منك أن تخطّط. وتطبيقات الميزانية تتوقّع منك أن تسجّل. وتطبيقات المهام تتوقّع منك أن تتذكّر فتحها. كلٌّ منها جيّدٌ بمفرده. لكنها مجتمعةً ضريبةٌ على الانتباه.',
      p2: 'بادي هو المساعد الصغير الهادئ الذي أردناه لأنفسنا — يعرف اجتماعاتك وأموالك ومهامك دفعةً واحدة، ولا يتحدّث إلا حين يملك ما يستحق قوله. يبدو كتطبيق، لكنه يتصرّف كشخصٍ تأتمنه على تفاصيل حياتك المملّة.',
      p3: 'نبنيه ببطء، على iOS أولًا، مع بضع مئات من الأصدقاء. إن أردت دعوةً مبكرة، اترك بريدك أدناه. وسنبقى صامتين حتى يكون لدينا ما يستحق أن نُريك إياه.',
      names: 'فادي وعمر',
      role: 'المؤسّسان · القاهرة',
    },
    finalCta: {
      platform: 'iOS · 2026',
      h2a: 'مكانٌ هادئٌ واحد،',
      h2b: 'أخيرًا.',
      paragraph:
        'انضم لقائمة الانتظار. سنرسل رسالةً واحدة حين يصبح بادي جاهزًا — لا شيء غير ذلك.',
      button: 'انضم لقائمة الانتظار',
      counterSuffix: 'شخصٍ بالانتظار · iOS أولًا، أندرويد لاحقًا',
    },
    footer: {
      tagline: 'مساعد ذكاء اصطناعي شخصي وهادئ لوقتك ومالك ومهامك. صُنع في القاهرة.',
      productTitle: 'المنتج',
      product: ['المزايا', 'لحظات الذكاء', 'كيف يعمل', 'العناصر'],
      followTitle: 'تابِعنا',
      follow: ['إنستغرام', 'راسلنا'],
      copyright: '© 2026 Buddy Labs',
      coming: 'iOS · قريبًا صيف 2026',
    },
  },
};

type Translation = (typeof translations)['en'];

interface LangCtx {
  lang: Lang;
  dir: 'ltr' | 'rtl';
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: Translation;
}

const LanguageContext = createContext<LangCtx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    const stored = (typeof window !== 'undefined' &&
      window.localStorage.getItem('buddy-lang')) as Lang | null;
    if (stored === 'ar' || stored === 'en') setLangState(stored);
  }, []);

  useEffect(() => {
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    try {
      window.localStorage.setItem('buddy-lang', lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggle = useCallback(
    () => setLangState((p) => (p === 'en' ? 'ar' : 'en')),
    []
  );

  const value: LangCtx = {
    lang,
    dir: lang === 'ar' ? 'rtl' : 'ltr',
    setLang,
    toggle,
    t: translations[lang],
  };

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLang(): LangCtx {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}
