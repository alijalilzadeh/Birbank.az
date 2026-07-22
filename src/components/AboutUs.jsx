import React from 'react'
import Navbar from './Navbar'
import SecondaryNavbar from './SecondaryNavbar'
import FAQContent from './FAQContent'
import Footer from './Footer'
import { Link } from 'react-router-dom'
const aboutUs = () => {
  return (
    <>
      <Navbar />
      <SecondaryNavbar />
      <>
        <div className="flex flex-col items-center justify-center w-full selection:bg-[#B3D4FC] mb-20">
          <div className="flex flex-col w-[75%]">
            <div className="flex flex-col w-full">
              <h2 className='text-[24px] font-bold text-[#25282b] my-4'>Haqqımızda</h2>
              <div className="flex gap-2 my-3">
                <Link className='text-[14px] p-3.75 text-[#6D7478]' to="/" reloadDocument>Ana Səhifə</Link>
                <Link className=' text-[#25282b] text-[14px] p-3.75 pl-0' to="/ninja">Haqqımızda</Link>
              </div>
            </div>
            <div className="flex flex-col w-full gap-3">
              <p className='text-[16px] font-light text-[#222222]'>Bankımız Azərbaycan Əmanət Bankının varisi kimi uzun illər Kapital Bank adı
                altında uğurla fəaliyyət göstərib. 2025-ci ildən etibarən isə Birbank brendi adı altında xidmət göstərir. Yəni Kapital Bank maliyyə
                institutu və korporativ brend kimi, Birbank isə müştərilərimizə göstərdiyimiz xidmətin əsas simvolu kimi öz fəaliyyətini davam etdirməkdədir.
                Bu əhəmiyyətli yeniliklə ən müasir trendlərə Birbank sürəti ilə uyğunlaşmaq və müştəri mərkəzli xidmətlərimizi daha da irəliyə daşımaq əsas hədəfimizdir.
              </p>
              <h2 className='text-[18px] font-bold text-[#222222]'>Dəyərlərimiz</h2>
              <p className='text-[16px] font-light text-[#222222]'>
                <span className='text-[18px] font-bold text-[#222222]'>Dürüstlük - </span>
                Biznesimizin təməlində dürüstlüyə tam sadiqlik dayanır. Bizim üçün bu, həmişə və hər zaman, hətta heç kəsin müşahidə etmədiyi
                halda belə yalnız düzgün olan addımı atmaq deməkdir. Ən bəsit səviyyədə bu, fəaliyyət göstərdiyimiz ölkənin qanunlarına və qaydalarına
                hörmətlə yanaşmaqdır. Dürüstlük hətta çətinliklərlə üz-üzə qaldıqda belə şirkətin davranış qaydalarına sadiq qalmaq deməkdir.
                Bu, heç vaxt şirkətin maraqlarını şəxsi mənfəət naminə qurban verməmək deməkdir. Dürüstlük özümüz, həmkarlarımız, müştərilərimiz və tərəfdaşlarımız
                qarşısında vicdanlı olmaq və onların etimadını qazanmaq deməkdir. Məqsədimiz - müştərilərimiz üçün dürüst, açıq və anlaşılan olmaqdır.
                Bankımız bütün fəaliyyətlərimizdə daim olduğu kimi, məhsul və xidmətini təqdim edən zaman da müştəriyə müvafiq faydaları və ya riskləri səmimi
                olaraq göstərir.
              </p>

              <p className='text-[16px] font-light text-[#222222]'>
                <span className='text-[18px] font-bold text-[#222222]'>Keyfiyyət - </span>
                Kənardakılar həmişə verdiyimiz məhsulun və ya göstərdiyimiz xidmətin keyfiyyətinə əsasən bizə qiymət verəcək.
                İşimizin keyfiyyəti heyətimizin fədakarlığı və peşəkarlığı ilə düz mütənasibdir. Bundan yan keçmək mümkün deyil.
                Biz həmişə qoyduğumuz standartlara riayət edirik, gecə və gündüz vədimizə əməl edirik - optimal nəticələr əldə etmək üçün diqqətli şəkildə keyfiyyəti
                səmərəliliklə tarazlaşdırırıq. Buna görə də, biz həm fərdi surətdə, həm də təşkilat kimi yeni səylərə can atırıq və daima öyrənməyə və təkmilləşməyə çalışırıq.
                Uğurumuzun əsasını gəlirli biznesimizi idarə etməyə şərait yaradan məmnun müştərilər təşkil edir. Məhz buna görə də əsas məqsədimiz ekosistemin bütün səviyyələrində
                müştərilərimizlə münasibətlərin keyfiyyətini artırmaqdır. Biz əmin olmaq istəyirik ki, mövcud və potensial müştərilərimiz ən yaxşı təklifə,
                keyfiyyətə və uzunmüddətli tərəfdaşlığa səmimi olaraq inandıqlarına görə hər gün bizi seçməyə davam edirlər.
              </p>

              <p className='text-[16px] font-light text-[#222222]'>
                <span className='text-[18px] font-bold text-[#222222]'>Əməkdaşlıq  - </span>
                Biz departamentlər, biznes bölmələri və ölkələr boyunca vahid komanda şəklində işləyərkən fenomenal nəticələrə nail oluruq. Müştərilərimiz,
                tərəfdaşlarımız və təchizatçılarımızla əməkdaşlıq edərkən bazardakı gözləntiləri artıqlaması ilə üstələyirik. Bu sinerjilərin təsiri fərdi
                surətdə qoyulan istənilən töhfədən dəfələrlə böyükdür. Əməkdaşlıq sağlam iş mühiti yaradır və daha yüksək səmərəliliyə gətirib çıxarır.
                O, problemlərin həllini sürətləndirir və innovasiyaya yol açır. Etimad və hörmət əməkdaşlıqla bəslənir. Müştərilərin və maraqlı tərəflərin
                xeyrinə ekosistemdə vahid komanda kimi fəaliyyət göstərmək Qrup səviyyəsində əməkdaşlığın ən yaxşı nümunəsidir. Qarşılıqlı olaraq qabaqcıl
                təcrübələri öyrənir, bir-birimizə öyrədir, ekosistemə və Qrupa daxil olan bütün şirkətlərin maraqlarını nəzərə alaraq, tərəfdaşlarla qarşılıqlı
                münasibəti dəstəkləyirik. Ölkə iqtisadiyyatına, şirkətlərin inkişafına və bu əməkdaşlıq
                çərçivəsində bütün tərəflər arasında etimadın artmasına töhfə vermək istiqamətində çalışırıq.
              </p>

              <p className='text-[16px] font-light text-[#222222]'>
                <span className='text-[18px] font-bold text-[#222222]'>Sahibkarlıq Ruhu  - </span>
                Ətrafımızdakı dünya daima dəyişməkdədir və buna görə də, biz çox vaxt qeyri-müəyyənliklə işləməli oluruq.
                Biz yeni imkanlar axtarırıq və iri addımlar atmağa - digərlərinin cəsarət etmədiklərini etməyə və gedə
                bilmədikləri yerlərə getməyə hazırıq. Komandamız çətinliklərdən qorxmur, əksinə, onları artım üçün fürsət kimi
                dəyərləndirir. Biz əlavə yol qət etmək və ya yeni səylər gerçəkləşdirmək üçün üzərimizə məsuliyyət götürməkdən qorxmuruq.
                Heyətimiz şirkətə öz şəxsi biznesləri üçün edə biləcəkləri qədər qayğı, istək və diqqətlə yanaşır. Biz müştərilərimizin istəklərini
                nəzərə alaraq, məhsullarımızın keyfiyyətini və müştəri təcrübəsini təkmilləşdirmək üçün daim üzərimizə məsuliyyət götürürük və yeni imkanlar axtarırıq.
                Biz müştərilərimizin, tərəfdaşlarımızın və həmkarlarımızın problemlərini anlayır, onlara şəxsi
                məsələmiz kimi yanaşır və əsaslı həll yolunun tapılması üçün çalışırıq.
              </p>

              <p className='text-[16px] font-light text-[#222222]'>
                <span className='text-[18px] font-bold text-[#222222]'>Gəlirlilik   - </span>
                Biz öz səhmdarlarımızın və yekun etibarilə cəmiyyətin xeyrinə mənfəət və fayda yaradırıq.
                Əslində, bu gün qazanılan mənfəət gələcəkdə biznesin dayanıqlı və rəqabətədavamlı olmasına təminat verir.
                Heyətimiz başa düşür ki, qazanılan hər bir manatla yanaşı qənaət edilən hər bir manat dəyər gətirir. Eyni zamanda,
                qısamüddətli biznes məqsədlərini izləyərkən biz heç vaxt uzunmüddətli hədəfimizi (dayanıqlı qlobal biznes yaratmaq və
                onu qoruyub saxlamaq) nəzərimizdən qaçırmırıq. Bu isə öz növbəsində hədəf verdiyimiz hər bir strateji qərara stimul verir
                Bizim üçün gəlirlilik həm də, müştərinin ümumi dövriyyəsini və gəlirliliyini anlamaq və onlara bu gəlirliliyi effektiv idarə
                etməkdə kömək etməkdir. Eyni zamanda, gəlirlilik bizim üçün müştərilərə onların davranışlarına və bütövlükdə ekosistemin strateji
                məqsədlərinə uyğun həll yollarını və üstünlükləri təqdim etməkdir. Biz gəlirliliyə müştərilərimizin uzunmüddətli loyallığı ilə
                nail olmaq üçün onlarla qarşılıqlı münasibətlərə investisiya etməyə hazırıq.
              </p>

              <span className='text-[#82848a] text-[14px] font-light'>Şirkət adı:</span>
              <span className='text-[18px] font-bold text-[#222222]'>“Kapital Bank” ASC </span>

              <span className='text-[#82848a] text-[14px] font-light'>Hüquqi ünvan:</span>
              <div className="flex flex-col gap">

                <span className='text-[18px] font-bold text-[#222222]'>Azərbaycan Respublikası, AZ1010  </span>
                <span className='text-[18px] font-bold text-[#222222]'>Bakı şəh., Nəsimi r-nu, Neftçilər pr. 153 </span>
              </div>

            </div>
          </div>
        </div>
      </>
      <Footer />
    </>
  )
}

export default aboutUs
