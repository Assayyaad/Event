// @ts-expect-error
import FOOD from './assets/services/fluent--food-toast-16-filled.png'
// @ts-expect-error
import PEOPLE from './assets/services/eva--people-fill.png'
// @ts-expect-error
import ACS from './assets/sponsors/acs.jpg'
// @ts-expect-error
import CMC from './assets/sponsors/cmc.jpg'
// @ts-expect-error
import QMA from './assets/sponsors/qiyam.png'

export const main = {
  name: 'آفاق العلم'
}

export const nav = {
  home: 'الرئيسية',
  services: 'الخدمات',
  table: 'جدول الأسبوع',
  sponsors: 'شركاؤنا',
  contact: 'تواصل معنا'
}

export const desc = {
  title: 'ما هذا الحدث؟',
  text: [
    'مبادرة طلابية هدفها إتاحة الفرصة للطلاب لتقديم محاضرات تفاعلية ومفيدة في مختلف المجالات التي تهمهم. ستتنوع المواضيع المطروحة بين المهنية، والحياتية، والدينية، وغيرها من المجالات التي تساعد في تطوير الفكر، وتعزيز المهارات، وتوسيع الأفق المعرفي والثقافي',
    'يتيح هذا الحدث للمشاركين فرصة فريدة للتعلم من زملائهم، وتبادل الأفكار، والنقاش المفتوح في بيئة داعمة وبناءة. سواء كنت تسعى لاكتساب مهارات جديدة أو استكشاف أفكار جديدة، فستجد في هذا الحدث ما يلهمك ويفتح لك آفاقاً جديدة'
  ]
}

export const countDown = {
  title: 'سيبدأ الحدث خلال',
  date: '2022-10-26T19:30:00.000Z',
  msg: 'بدأ الحدث',
  location: ['قاعة 1026', 'كلية FOE الطابق الأول', 'جامعة MMU Cyberjaya'],
  maps: 'https://maps.app.goo.gl/W6cdnsGP9dYPGBQC9'
}

export const serv = {
  title: 'مزايا',
  arr: [
    {
      img: FOOD,
      title: 'مأكولات عربية',
      desc: 'سيوجد مأكولات عربية متنوعة وشهية مقدمة من عوائل عربية'
    },
    {
      img: PEOPLE,
      title: 'فرصة تعارف',
      desc: 'نقدم فرصة للتعارف بين الطلاب والمحاضرين والمشاركين'
    }
  ]
}

export const table = {
  title: 'جدول المحاضرات',
  start: 26,
  end: 31,
  weekDays: ['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس'],
  arr: [
    [
      {
        name: 'معاذ',
        title: 'أمن الWi-Fi',
        desc: 'نظرة سريعة على كيفية تأمين الشبكات اللاسلكية وحماية البيانات من الاختراقات والتهديدات الإلكترونية'
      },
      {
        name: 'سجى السعداوي',
        title: 'Power BI لتحليل البيانات',
        desc: 'مقدمة في أداة Power BI لتحليل البيانات، وكيفية استخدامها لتحويل البيانات إلى تقارير ورسوم بيانية تفاعلية',
        femaleOnly: true
      }
    ],
    [
      {
        name: 'نبيل الصياد',
        title: 'مقدمة في اليابانية',
        desc: 'تعرف على أساسيات اللسان اليابانية، بما في ذلك الأحرف والنطق وبعض المفردات والقواعد الأساسية'
      },
      {
        name: 'ياسر الحبشي',
        title: 'فضل أهل العلم',
        desc: 'تسليط الضوء على أهمية العلماء ودورهم في حفظ العلم والأخلاق ونقلها للأجيال من بعدهم وأهمية التأدب معهم'
      }
    ],
    [
      {
        name: 'ضياء الدين المرستاني',
        title: 'القيادة المعاصرة',
        desc: 'استكشاف وفهم أساليب القيادة في المؤسسات الحديثة وكيفية استخدامها أو التعامل معها'
      },
      {
        name: 'صالح العواضي',
        title: 'حجية السنة',
        desc: 'عرض مكانة السنة النبوية في التشريع الإسلامي وأهميتها كمصدر موثوق للتوجيه في الحياة وبعض صور محاربتها'
      }
    ],
    [
      {
        name: 'نبيل الصياد',
        title: 'مزايا دسكورد',
        desc: 'اكتشاف الخصائص والمزايا التي يقدمها Discord كمنصة للتواصل الفعّال وإدارة المجتمعات الافتراضية واستخداماته في مجالات مختلفة'
      },
      {
        name: 'عبدالله بخش',
        title: 'أساسيات تصميم الألعاب',
        desc: 'الخطوات الأساسية لتصميم الألعاب من الفكرة إلى التنفيذ، مع التركيز على الجانب الإبداعي والتحديات التي تواجه المبتدئين'
      }
    ]
  ]
}

export const spon = {
  title: 'شركاؤنا',
  desc: 'جزى الله شركائنا خيراً على مساهمتهم في إنجاح هذا الحدث',
  arr: [
    {
      img: ACS
    },
    {
      img: CMC
    },
    {
      img: QMA
    }
  ]
}

export const contact = {
  title: 'تواصل معنا',
  desc: 'تأكدوا من البريد الإلكتروني المُدخل حتى نتمكن من الرد عليكم',
  whatsapp: 'https://wa.me/+966536700116',
  telegram: 'https://t.me/assayyaad'
}

export default { main, nav, desc, countDown, serv, table, spon, contact }
