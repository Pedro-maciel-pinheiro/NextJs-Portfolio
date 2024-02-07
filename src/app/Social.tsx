import React from 'react'
import './css/social.css'
import Image from 'next/image'
import GitIcon from '@/utils/github.png'
import LinkedinIcon from '@/utils/linkedin.png'
import MailIcon from '@/utils/mensagem.png'
import WhatsIcon from '@/utils/whatsapp.png'



const Social = () => {
    return (

        <div className='footer'>

            <div className='footer-colum'>
                <ul className='ul-footer'>

                    <li className='link-footer'  ><a href="https://www.linkedin.com/in/jpmp1998/" target='blank'>
                        <Image className='icons'  src={LinkedinIcon} alt='linkedin' /></a></li>

                    <li className='link-footer'  ><a href="https://github.com/Pedro-maciel-pinheiro" target='blank'>
                        <Image className='icons'  src={GitIcon} alt='github' /></a></li>

                    <li className='link-footer'  ><a href="mailto:shionlk98@gmail.com" target='blank'>
                        <Image className='icons'  src={MailIcon} alt='mail' />   </a></li>

                    <li className='link-footer'  > <a href="https://web.whatsapp.com/send?phone=5561998516239" target="_blank">
                        <Image className='icons'  src={WhatsIcon} alt='whatsapp' />   </a></li>

                </ul>
            </div>
        </div>

    )
}

export default Social