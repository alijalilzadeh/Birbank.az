import React from 'react'
import newsData from '../NewsData/newsData.json'
import { Link } from 'react-router-dom'
import ninjaCardImg from '../assets/Ninja/ninjaCard.png'
const NinjaComponents = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full selection:bg-[#B3D4FC]">
        <div className="flex flex-col w-[75%]">
          <div className="flex flex-col w-full">
            <div className="flex gap-2 my-[12px]">
              <Link className='text-[14px] p-[15px] text-[#6D7478]' to="/">Ana Səhifə</Link>
              <Link className=' text-[#25282b] text-[14px] p-[15px] pl-0' to="/ninja">Ninja təklifi</Link>
            </div>
          </div>
          <div className="flex  justify-between  w-full bg-[linear-gradient(98.65deg,#7D0018_0%,#CA154A_100%)] rounded-[10px]">
            <div className="flex w-[60%] items-center py-[48px] px-[72px]">
              <h2 className='text-[32px] font-[600] text-white'>Ninja təklifi ilə xərcləri hissələrə bölüb, ödəyin!</h2>
            </div>
            <div className="flex items-center justify-center w-[50%] py-[48px] px-[10px] ">
              <img src={ninjaCardImg} className='w-[346px] object-cover flex' />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center w-full ">
          <div className="flex  justify-center w-[40%]">
            <h2 className='text-[30px] font-[600] text-[#222222] mt-[48px] mb-[30px]'>Bilmək lazımdır</h2>
          </div>
          <div className="flex flex-col items-center justify-center w-full bg-[#F9F9FA] py-[24px]" >
            <div className="flex items-center justify-center">
              <span className='inline-flex items-center justify-center  text-white font-[700] text-[16px] bg-[#52575c] rounded-[5px] py-[1px] px-[6px] w-[282px] h-[40px]'>Haqqında</span>
              <span className='inline-flex items-center justify-center cursor-pointer  text-black font-[700] text-[16px] bg-[#e7e8ea] rounded-[5px] py-[1px] px-[6px] w-[282px] h-[40px] transition duration-200 hover:bg-[#E7E8EA]'>FAQ</span>
            </div>
            <div className="flex flex-col gap-1">
              <p>Ninja təklifi nədir?</p>
              <p>Bu, Birbank taksit kartları ilə etdiyiniz birdəfəlik ödənişlərin (POS-terminal ilə və ya onlayn), eləcə də nağdlaşdırdığınız və köçürdüyünüz məbləğlərin müəyyən komissiya qarşılığında hissələrə bölünməsi üçün gələn təklifdir.</p>
              <p>Ninja təklifindən necə yararlanmaq olar?</p>
              <p>Birbank tətbiqi vasitəsilə:</p>
              <p>- Tətbiqin bildirişi ilə — taksit kartı ilə ən azı 20 AZN məbləğində birdəfəlik ödəniş, nağdlaşdırma və ya köçürmə etdikdən sonra sizə Birbank tətbiqindən Ninja təklifi ilə bağlı bildiriş göndərilir. Birbank tətbiqiniz varsa və ya son 60 gündə ən azı bir dəfə tətbiqə daxil olmusunuzsa, tətbiqdən Ninja təklifi ilə bağlı bildiriş alırsınız. Bildirişdəki linkə keçdikdə “Ninja” səhifəsi açılacaq və siz burada məbləği aylara bölə biləcəksiniz;</p>
              <p>- “Daha çox” bölməsində olan “Ninja” səhifəsində — bu səhifəyə daxil olaraq Ninja təklifindən yararlana biləcəyiniz əməliyyatların siyahısı, eləcə də daha öncə yararlandığınız Ninja təkliflərinin tarixçəsini görə bilərsiniz;</p>
              <p>- Tətbiqdəki əməliyyat qəbzlərindən — qəbzin aşağısında yerləşən "Məbləği Ninja ilə böl" düyməsi vasitəsilə həmin ödəniş üçün Ninja təklifindən yararlanmaq mümkündür.</p>
              <p>Hansı hallarda Ninja təklifi alacam?</p>
              <p>Birbank taksit kartı ilə birdəfəlik ödəniş, nağdlaşdırma və ya köçürmə etdikdə Ninja təklifi alacaqsınız.</p>
              <p>Ninja təklifi nə qədər müddət aktiv qalır?</p>
              <p>Ninja təklifi birdəfəlik ödəniş, nağdlaşdırma və ya köçürmə etdiyiniz andan etibarən 24 saat ərzində keçərli olur.</p>
              <p>Hansı hallarda Ninja təklifi göndərilmir?</p>
              <p>- Ödənişləriniz bu MCC kodları* üzrə olduqda: 6532, 6536, 6533</p>
              <p>- Ödənişləriniz bu MCC kodları* üzrə olduqda: 6532, 6536, 6533</p>
              <p> *  MCC kodu — ticarət nöqtəsinin fəaliyyət növünü göstərən koddur.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NinjaComponents
