// meta
const metaData = {
 default: {
    title:'GRASS FIELD',
    description: 'GRASSFIELDへようこそ！エコツアーを通じて自然の美しさを体験し、持続可能な環境保護を促進します。私たちのツアーで新しい冒険を見つけましょう！',
    type: 'website',
    ogUrl: 'https://grassfield-website.netlify.app/',
    ogImage: 'https://grassfield-website.netlify.app/img/OGP.png',
 },
 business: {
   title:'GRASS FIELD 事業内容ページ',
    description: 'GRASSFIELDのエコツアーサービスをご紹介します。自然観察、ハイキング、ワークショップなど、多彩なプログラムを通じて、環境への理解を深める体験を提供します。',
    type: 'website',
    ogUrl: 'https://grassfield-website.netlify.app/',
    ogImage: 'https://grassfield-website.netlify.app/img/OGP.png',
 } ,
 contact:{
   title:'GRASS FIELD お問い合わせページ',
    description: 'GRASSFIELDへのお問い合わせはこちらから。エコツアーに関する質問やご予約についてお気軽にご連絡ください。私たちがサポートいたします',
    type: 'website',
    ogUrl: 'https://grassfield-website.netlify.app/',
    ogImage: 'https://grassfield-website.netlify.app/img/OGP.png',
 }
}
// nav
const navData = [
    {
     title: 'HOME',
     link: 'index.html',
    },
    {
     title: '事業内容',
     link: 'business.html',
    },
    {
     title: '商品紹介',
     link: '',
    },
    {
     title: '会社概要',
     link: '',
    },
    {
     title: '採用情報',
     link: '',
    },
    {
     title: 'お問い合わせ',
     link: 'contact.html',
    },
]

const footerData = [
   {
      title: 'サイトポリシー',
      link: '',
   },
   {
      title: 'プライバシーポリシー',
      link: '',
   },
   {
      title: 'サイトマップ',
      link: '',
   },
]

module.exports = { metaData, navData, footerData };
