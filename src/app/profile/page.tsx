import { HighlightCard, QuestionCard, TrendingPlaces } from '@/components'
import { great_vibes } from '@/utils'
import React from 'react'

export default function Profile() {
    return (
        <div className='flex flex-col items-center py-4'>
            <div className='w-2/3 flex flex-col gap-4'>
                {/* Profile */}
                <div className='flex items-center justify-center gap-3'>
                    <div className='flex  flex-col leading-8 gap-2 '>
                        <h1 className='text-3xl text-primary font-bold'>Kamala Harris</h1>
                        <p className='text-sm text-gray-500'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ut? Doloremque, quod. Rem nulla porro possimus maiores laborum vitae, ex, similique magni sapiente aliquid nesciunt aspernatur quod ad facere pariatur!
                        </p>
                    </div>
                    <div>
                        <div className='h-28 w-28 rounded-full p-1 border-2 border-primary'>
                            <img
                                src="https://t3.ftcdn.net/jpg/06/46/00/00/360_F_646000029_JTtTlIY4MgOhl6U36hjDFsRjzMkRw9d1.jpg" alt="profile"
                                className='h-full w-full object-cover rounded-full object-top'
                            />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-2 items-start overflow-hidden' >
                    <h1 className={`text-2xl font-light  py-2 text-primary`}>Highlights</h1>
                    <div className='flex gap-4'>
                        <HighlightCard image="https://t3.ftcdn.net/jpg/06/46/00/00/360_F_646000029_JTtTlIY4MgOhl6U36hjDFsRjzMkRw9d1.jpg">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, consequatur voluptate vero natus hic fugiat non praesentium quis esse numquam.
                        </HighlightCard>
                        <HighlightCard image="https://images.pexels.com/photos/914929/pexels-photo-914929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </HighlightCard>
                        <HighlightCard image="https://images.pexels.com/photos/2889495/pexels-photo-2889495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                            Sitting on Outside
                        </HighlightCard>
                        <HighlightCard image="https://images.pexels.com/photos/1006077/pexels-photo-1006077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                            Wearing Brown Off-shoulder Dress Near Ocean Water
                        </HighlightCard>
                    </div>
                </div>
                <div className='flex flex-col gap-2 items-start justify-center overflow-hidden' >
                    <h1 className={`text-2xl font-light py-2 text-primary`}>Questions</h1>
                    <div className='flex flex-col gap-4'>
                        <QuestionCard >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio culpa suscipit quisquam, minus accusantium est placeat labore, tenetur explicabo ad eveniet ipsam illo autem velit. Ab enim laborum sequi vitae?
                        </QuestionCard>
                        <QuestionCard >
                            Which seems to confirm the idea that in the context of essence the user interface.
                        </QuestionCard>
                        <QuestionCard >
                            So far so good, but the assumption, that the operations research is a base for developing the growth of the final draft, leads us to a clear understanding of The Probability of Detached Paradigm.
                        </QuestionCard>
                        <QuestionCard >
                            We must bear in mind that with the exception of the skills is recognized by The Comprehension of Transparent Effort
                        </QuestionCard>
                    </div>

                </div>
            </div>
        </div >
    )
}
