import ClassicPadding from "@site/src/components/layouts/ClassicPadding";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { SVGAvatarBG } from './svg/SVGAvatarBG'

const STARTER_TEAM_TITLE = '团队成员';
const STARTER_TEAM_TEXT_1 = '我们的开发者团队';
const STARTER_TEAM_TEXT_2 = 'LearnPrompt was completed with the cooperation of many AI technology enthusiasts. Thanks to every <a className="underline" href="https://github.com/LearnPrompt/LearnPrompt/graphs/contributors">contributor.</a>';

const STARTER_TEAM_ITEMS =  [
    {
    STARTER_TEAM_ITEM_AVATAR:'/img/friend/carl.png',
    STARTER_TEAM_ITEM_NICKNAME: 'Carl',
    STARTER_TEAM_ITEM_DESCRIPTION: 'Developer, Author'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/img/friend/ATang.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Tang',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Creative Designer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/img/friend/whoiskoala.png',
      STARTER_TEAM_ITEM_NICKNAME: 'whoiskoala',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Prompt Engineer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/img/friend/ting.png',
      STARTER_TEAM_ITEM_NICKNAME: 'ditto',
      STARTER_TEAM_ITEM_DESCRIPTION: 'web designer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/img/friend/Andyyang.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Andy yang',
      STARTER_TEAM_ITEM_DESCRIPTION: 'web designer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/img/friend/KC.png',
      STARTER_TEAM_ITEM_NICKNAME: 'KC',
      STARTER_TEAM_ITEM_DESCRIPTION: 'NLP Developer'
    }
];

function Team() {
  return (
    <ClassicPadding className="flex flex-col md:flex-row gap-4 justify-between items-center pt-2 md:pt-3 pb-2 md:pb-3">
      <section
        id='team'
        className='overflow-hidden bg-gray-1 pb-6 pt-10 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px] mt-[-20px] mb-[-20px]'>
        <div className='container mx-auto'>
          <div className='-mx-4 flex flex-wrap'>
            <div className='w-full px-4'>
              <div className='mx-auto mb-[60px] max-w-[485px] text-center'>
                <span className='mb-2 block text-lg font-semibold text-primary'>
                Team Members
                </span>
                <h2 className='mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]'>
                Our Development Team
                </h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: STARTER_TEAM_TEXT_2
                  }}
                  className='text-base text-body-color dark:text-dark-6'></p>
              </div>
            </div>
          </div>

          {/* 团队成员排列矩阵 */}
          <div className='-mx-4 flex flex-wrap justify-center'>
            {STARTER_TEAM_ITEMS.map((item, index) => {
              return (
                <div
                  key={index}
                  className='w-full px-4 sm:w-1/2 lg:w-1/6 xl:w-1/6 flex items-center flex-col'>
                  <div className='group mb-8 rounded-xl bg-white px-5 pb-10 pt-12 shadow-testimonial dark:bg-dark dark:shadow-none'>
                    {/* 头像 */}
                    <div className='relative z-10 mx-auto mb-5 h-[120px] w-[120px]'>
                      <img
                        src={item.STARTER_TEAM_ITEM_AVATAR}
                        alt='team image'
                        className='h-[120px] w-[120px] rounded-full'
                      />
                      <span className='absolute bottom-0 left-0 -z-10 h-10 w-10 rounded-full bg-secondary opacity-0 transition-all group-hover:opacity-100'></span>
                      <span className='absolute right-0 top-0 -z-10 opacity-0 transition-all group-hover:opacity-100'>
                        <SVGAvatarBG />
                      </span>
                    </div>

                    {/* 文字介绍 */}
                    <div className='text-center'>
                      <h4 className='mb-1 text-lg font-semibold text-dark dark:text-white'>
                        {item.STARTER_TEAM_ITEM_NICKNAME}
                      </h4>

                      <p className='mb-5 text-sm text-body-color dark:text-dark-6'>
                        {item.STARTER_TEAM_ITEM_DESCRIPTION}
                      </p>

                      {/* 社交链接 */}
                      {/* <div className='flex items-center justify-center gap-5'>
                        <a className='text-dark-6 hover:text-primary'>
                          <SVGFacebook className='fill-current' />
                        </a>
                        <a className='text-dark-6 hover:text-primary'>
                          <SVGTwitter className='fill-current' />
                        </a>
                        <a className='text-dark-6 hover:text-primary'>
                          <SVGInstagram className='fill-current' />
                        </a>
                      </div> */}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      {/* <!-- ====== Team Section End --> */}
    </ClassicPadding>
  );
}

export default Team;