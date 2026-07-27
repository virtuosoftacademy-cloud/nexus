
import { Separator } from '@/components/ui/separator'
import { Dot } from 'lucide-react'

type InfoTypes = {
    title?: string
    subTitle?: string
    intro?: string
    listTitle?: string
    listItems: string[]
    outro?: string
}
type InfoProps = {
    data: InfoTypes
}

function Info({ data }: InfoProps) {

    const { title, subTitle, intro, listItems, listTitle, outro } = data;

    return (
        <div className='max-w-6xl mx-auto px-8 space-y-3 md:space-y-6 py-5 md:py-10'>
            <div className='flex items-center justify-between pb-6'>
                <Separator className='min-w-4 max-w-12 sm:max-w-24 md:max-w-3xs! hidden lg:block' />
                <h4 className='text-2xl md:text-4xl font-semibold text-center shrink-0 max-w-[80vw] sm:max-w-none'>{title}</h4>
                <Separator className='min-w-4 max-w-12 sm:max-w-24 md:max-w-3xs! hidden lg:block' />
            </div>
            <div className='text-lg md:text-[1.75rem] space-y-3 md:space-y-6 font-heading text-foreground'>
                <h3 className='font-bold'>{subTitle}</h3>
                <p>{intro}</p>
                <p>{listTitle}</p>
                <ul className='-mt-4 md:-mt-8'>
                    {listItems.map((item) =>
                        <li className='flex items-start md:items-center md:gap-2'>
                            <Dot />{" "}
                            {item}
                        </li>
                    )}
                </ul>
                <p className='whitespace-pre-line'>
                    {outro}
                </p>
            </div>
        </div>
    )
}

export default Info