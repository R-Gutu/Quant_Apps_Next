import Form from 'next/form';

export default function ProjectForm() {
    return(
        <Form action="/">
            <div className='flex flex-col gap-[20px] border-[1px] border-solid border-[#6A65FF] rounded-[8px] py-[24px] px-[40px]'>
                <label htmlFor="name" className='text-[22px] text-white'>Full Name</label>
                <input id="name" type="text" placeholder='Type here' className='appearance-none bg-transparent placeholder:text-[#656567] placeholder:text-[18px] border-b-[1px] '/>
            </div>
        </Form>
    )
}