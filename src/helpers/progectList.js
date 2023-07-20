import servicelux1 from './../img/portfolio/12-1_service-lux.png';
import servicelux2 from './../img/portfolio/12-2_service-lux.png';
import servicelux3 from './../img/portfolio/12-3_service-lux.png';
import cyfra1 from './../img/portfolio/11-1_cyfra.png';
import cyfra2 from './../img/portfolio/11-2_cyfra.png';
import cyfra3 from './../img/portfolio/11-3_cyfra.png';
import cyfra4 from './../img/portfolio/11-4_cyfra.png';
import disystems1 from './../img/portfolio/10-1_disystems.png';
import disystems2 from './../img/portfolio/10-2_disystems.png';
import disystems3 from './../img/portfolio/10-3_disystems.png';
import ancoraShop1 from './../img/portfolio/9-1_ancora-shop.png';
import ancoraShop2 from './../img/portfolio/9-2_ancora-shop.png';
import ancoraShop3 from './../img/portfolio/9-3_ancora-shop.png';
import ancoraPromo1 from './../img/portfolio/8-1_ancora-promo.png';
import ancoraPromo2 from './../img/portfolio/8-2_ancora-promo.png';
import ancoraPromo3 from './../img/portfolio/8-3_ancora-promo.png';
import fansy1 from './../img/portfolio/7-1_fansy.png';
import fansy2 from './../img/portfolio/7-2_fansy.png';
import fansy3 from './../img/portfolio/7-3_fansy.png';
import osafilm1 from './../img/portfolio/6-1_osafilm.png';
import osafilm2 from './../img/portfolio/6-2_osafilm.png';
import osafilm3 from './../img/portfolio/6-3_osafilm.png';
import tennisEx1 from './../img/portfolio/5-1_tennisEX.png';
import tennisEx2 from './../img/portfolio/5-2_tennisEX.png';
import tennisEx3 from './../img/portfolio/5-3_tennisEX.png';
import koloHadu1 from './../img/portfolio/4-1_kolo-hadu.png';
import koloHadu2 from './../img/portfolio/4-2_kolo-hadu.png';
import koloHadu3 from './../img/portfolio/4-3_kolo-hadu.png';
import clubDobrodiiv1 from './../img/portfolio/3-1_club_dobrodiiv.png';
import clubDobrodiiv2 from './../img/portfolio/3-2_club_dobrodiiv.png';
import clubDobrodiiv3 from './../img/portfolio/3-3_club_dobrodiiv.png';
import fla1 from './../img/portfolio/2-1_fla.png';
import fla2 from './../img/portfolio/2-2_fla.png';
import fla3 from './../img/portfolio/2-3_fla.png';
import volunteer1 from './../img/portfolio/1-1_volunteer.png';
import volunteer2 from './../img/portfolio/1-2_volunteer.png';
import volunteer3 from './../img/portfolio/1-3_volunteer.png';

const projects = [
  {
    title: 'Service-lux Details',
    img1: servicelux1,
    img2: servicelux2,
    img3: servicelux3,
    category: 'Web development',
    client: 'Transportation company',
    goTo: 'https://cyfra.org.ua',
    urlToShow: 'cyfra.org.ua',
    className: 'col-lg-4 col-md-6 portfolio-item filter-lp',
    href: 'service-lux',
    alt: 'picture about serviceLux',
  },
  {
    title: 'Cyfra Details',
    img1: cyfra1,
    img2: cyfra2,
    img3: cyfra3,
    img4: cyfra4,
    category: 'Web development',
    client: 'Cyfra service',
    goTo: 'https://cyfra.org.ua',
    urlToShow: 'cyfra.org.ua',
    className: 'col-lg-4 col-md-6 portfolio-item filter-web filter-wp',
    href: 'cyfra',
    alt: 'picture about cyfra',
  },
  {
    title: 'Disystems Details',
    img1: disystems1,
    img2: disystems2,
    img3: disystems3,
    category: 'Web development',
    client: 'Disystems',
    goTo: 'https://disystems.com.ua',
    urlToShow: 'disystems.com.ua',
    className: 'col-lg-4 col-md-6 portfolio-item filter-web',
    href: 'disystems',
    alt: 'picture about disystems',
  },
  {
    title: 'Ancora Shop Details',
    img1: ancoraShop1,
    img2: ancoraShop2,
    img3: ancoraShop3,
    category: 'Web development',
    client: 'Construction company',
    goTo: 'https://skaliuzhnyi.github.io/ancora__shop',
    urlToShow: 'skaliuzhnyi.github.io/ancora__shop',
    className: 'col-lg-4 col-md-6 portfolio-item filter-shop',
    href: 'ancora-shop',
    alt: 'picture about ancoraShop',
  },
  {
    title: 'Ancora Promo Details',
    img1: ancoraPromo1,
    img2: ancoraPromo2,
    img3: ancoraPromo3,
    category: 'Web development',
    client: 'Construction company',
    goTo: 'https://skaliuzhnyi.github.io/ancora__promo',
    urlToShow: 'skaliuzhnyi.github.io/ancora__promo',
    className: 'col-lg-4 col-md-6 portfolio-item filter-web',
    href: 'ancora-promo',
    alt: 'picture about ancoraPromo',
  },
  {
    title: 'Fansy Details',
    img1: fansy1,
    img2: fansy2,
    img3: fansy3,
    category: 'Web development',
    client: 'Dans scool',
    goTo: 'https://skaliuzhnyi.github.io/fansy',
    urlToShow: 'skaliuzhnyi.github.io/fansy',
    className: 'col-lg-4 col-md-6 portfolio-item filter-web',
    href: 'fansy',
    alt: 'picture about fansy',
  },
  {
    title: 'Osafilm Details',
    img1: osafilm1,
    img2: osafilm2,
    img3: osafilm3,
    category: 'Web development',
    client: 'Dans scool',
    goTo: 'https://skaliuzhnyi.github.io/maksim_osa',
    urlToShow: 'skaliuzhnyi.github.io/maksim_osa',
    className: 'col-lg-4 col-md-6 portfolio-item filter-lp',
    href: 'osafilm',
    alt: 'picture about osafilm',
  },
  {
    title: 'TennisEX Details',
    img1: tennisEx1,
    img2: tennisEx2,
    img3: tennisEx3,
    category: 'Web development',
    client: 'Startup',
    goTo: 'https://skaliuzhnyi.github.io/tennisEX',
    urlToShow: 'skaliuzhnyi.github.io/tennisEX',
    className: 'col-lg-4 col-md-6 portfolio-item filter-lp',
    href: 'tennisEX',
    alt: 'picture about tennisEx',
  },
  {
    title: 'Kolo Hadu Details',
    img1: koloHadu1,
    img2: koloHadu2,
    img3: koloHadu3,
    category: 'Web development',
    client: 'Fitness Club',
    goTo: 'https://kolo-hadu.com',
    urlToShow: 'kolo-hadu.com',
    className: 'col-lg-4 col-md-6 portfolio-item filter-lp',
    href: 'kolo-hadu',
    alt: 'picture about koloHadu',
  },
  {
    title: 'Club Dobrodiiv Details',
    img1: clubDobrodiiv1,
    img2: clubDobrodiiv2,
    img3: clubDobrodiiv3,
    category: 'Web development',
    client: 'Club Dobrodiiv Volonteer organization',
    goTo: 'https://skaliuzhnyi.github.io/club__dobrodiiv__form',
    urlToShow: 'skaliuzhnyi.github.io/club__dobrodiiv__form',
    className: 'col-lg-4 col-md-6 portfolio-item filter-lp',
    href: 'club-dobrodiiv',
    alt: 'picture about clubDobrodiiv',
  },
  {
    title: 'FLA Details',
    img1: fla1,
    img2: fla2,
    img3: fla3,
    category: 'Web development',
    client: 'Femida Legal Association',
    goTo: 'https://skaliuzhnyi.github.io/fla',
    urlToShow: 'skaliuzhnyi.github.io/fla',
    className: 'col-lg-4 col-md-6 portfolio-item filter-web',
    href: 'fla',
    alt: 'picture about fla',
  },
  {
    title: 'Volunteer Details',
    img1: volunteer1,
    img2: volunteer2,
    img3: volunteer3,
    category: 'Web development',
    client: 'Volunteer organization',
    goTo: 'https://skaliuzhnyi.github.io/volunteer',
    urlToShow: 'skaliuzhnyi.github.io/volunteer',
    className: 'col-lg-4 col-md-6 portfolio-item filter-web',
    href: 'volunteer',
    alt: 'picture about volunteer',
  },
];

export { projects };
